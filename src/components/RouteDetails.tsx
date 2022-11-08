import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Component, CSSProperties } from 'react'
import { Line, Route, Stop, Vehicle } from '../types'
import '../style/RouteDetails.scss';
import MapWrapper from './leaflet/MapWrapper';
import StopInfo from './StopInfo';
import 'leaflet/dist/leaflet.css';

type RouteDetailsProps = {
  route: Route,
  line: Line,
  color: string
}

type RouteDetailsState = {
  stops: Array<Stop>,
  vehicles: Array<Vehicle>
}

export default class RouteDetails extends Component<RouteDetailsProps, RouteDetailsState> {

  private readonly vehiclesRefreshDelay = 1e3;

  private interval?: ReturnType<typeof setInterval>;

  constructor(props: RouteDetailsProps) {
    super(props);

    this.updateVehicles = this.updateVehicles.bind(this);

    this.state = {
      stops: [],
      vehicles: []
    }
  }

  componentDidMount(): void {
    const stopsUrl = `${process.env.REACT_APP_RTM_API_URL}/getStations/${this.props.route.refNEtex}`;

    fetch(stopsUrl)
      .then(res => res.json())
      .then(json => {
        this.setState(prevState => ({
          ...prevState,
          stops: json.data
        }));
      }
    );
    
    this.updateVehicles();
    this.interval = setInterval(
      this.updateVehicles,
      this.vehiclesRefreshDelay
    )
  }

  componentWillUnmount(): void {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className='route-details' style={{ '--line-color': this.props.color } as CSSProperties}>
        <div className="content">
          <div className="stops-wrapper">
            <div className="title">Direction : <span className="route-direction">{this.props.route.DirectionStations}</span></div>
            <ul className="stops">
              {
                this.state.stops.length ?
                  this.state.stops.map((stop: Stop, index) => (
                    <StopInfo key={index} stop={stop} line={this.props.line} color={this.props.color} />
                  )) :
                  (
                    <FontAwesomeIcon icon={faSpinner} fontSize='2em' className='spinner' />
                  )
              }
            </ul>
          </div>
          <div className="map">
            <MapWrapper stops={this.state.stops} vehicles={this.state.vehicles} color={this.props.color} />
          </div>
        </div>
      </div>
    )
  }

  private async updateVehicles(): Promise<void> {
    
    const vehiclesUrl = `${process.env.REACT_APP_RTM_API_URL}/liveVehiclesPosition?lines=${this.props.line.id}`;

    fetch(vehiclesUrl)
      .then(res => res.json())
      .then((json: Array<Vehicle>) => {
        const filteredVehicles: Array<Vehicle> = [];

        json.forEach(vehicle => {
          if (vehicle.Direction === this.props.route.DirectionRef) filteredVehicles.push(vehicle);
        });

        this.setState(prevState => ({
          ...prevState,
          vehicles: filteredVehicles
        }));
      })
  }
}
