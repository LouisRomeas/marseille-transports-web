import { Component, MouseEventHandler } from 'react'
import { Line, Route } from '../types';
import '../style/LineDetails.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons';
import RouteChoice from './RouteChoice';

type LineDetailsProps = {
  line: Line,
  onClose: MouseEventHandler<HTMLDivElement>
}

type LineDetailsState = {
  route?: Route
}

export default class LineDetails extends Component<LineDetailsProps, LineDetailsState> {
  constructor(props: LineDetailsProps) {
    super(props);
    this.state = {
      route: undefined
    }
  }

  render() {
    return (
      <div className='line-details'>
        {
          this.state.route ? (
            <div></div>
          ) : (
            <RouteChoice routes={this.props.line.routes} />
          )
        }
        <div className="close-button" onClick={this.props.onClose}>
          <FontAwesomeIcon icon={faXmarkCircle} fontSize={'2em'} />
        </div>
      </div>
    )
  }
}
