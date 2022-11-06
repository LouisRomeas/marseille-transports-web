import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Component } from 'react'
import { Route, Stop } from '../types'

type RouteDetailsProps = {
  route: Route
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
      <div className='route-details'>
        <div className="title">{this.props.route.DirectionStations}</div>
        <ul className="stops">
          {
            this.state.stops.length ?
              this.state.stops.map((stop: Stop, index) => (
                <li key={index} className="stop">{stop.Name}</li>
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
