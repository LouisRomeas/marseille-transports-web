import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Component, CSSProperties } from 'react'
import { Line, Route, Stop } from '../types'
import '../style/RouteDetails.scss';
import StopInfo from './StopInfo';

type RouteDetailsProps = {
  route: Route,
  line: Line,
  color: string
}

type RouteDetailsState = {
  stops: Array<Stop>
}

export default class RouteDetails extends Component<RouteDetailsProps, RouteDetailsState> {

  constructor(props: RouteDetailsProps) {
    super(props);

    this.state = {
      stops: []
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
      })
  }

  render() {
    return (
      <div className='route-details' style={{ '--line-color': this.props.color } as CSSProperties}>
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
    )
  }
}
