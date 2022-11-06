import { Component } from 'react'
import { Line, Route } from '../types';
import '../style/LineDetails.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import RouteChoice from './RouteChoice';
import RouteDetails from './RouteDetails';

type LineDetailsProps = {
  line: Line,
  onClose: () => void
}

type LineDetailsState = {
  route?: Route
}

export default class LineDetails extends Component<LineDetailsProps, LineDetailsState> {
  constructor(props: LineDetailsProps) {
    super(props);

    this.handleRouteChoose = this.handleRouteChoose.bind(this);

    this.state = {
      route: undefined
    }
  }

  render() {
    return (
      <div className='line-details'>
        {
          this.state.route ? (
            <RouteDetails route={this.state.route} />
          ) : (
            <RouteChoice routes={this.props.line.routes} color={this.props.line.color} onRouteChoose={this.handleRouteChoose} />
          )
        }
        <div className="close-button" onClick={this.props.onClose}>
          <FontAwesomeIcon icon={faXmarkCircle} fontSize={'2em'} />
        </div>
      </div>
    )
  }

  handleRouteChoose(route: Route): void {
    this.setState((prevState) => ({ ...prevState, route: route }));
  }
}
