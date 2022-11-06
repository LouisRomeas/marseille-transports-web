import { Component } from 'react'
import { Stop } from '../types'
import '../style/StopInfo.scss';

type StopInfoProps = {
  stop: Stop,
  color: string
}

type StopInfoState = {
}

export default class StopInfo extends Component<StopInfoProps, StopInfoState> {
  render() {
    return (
      <li className="stop">
        <div className="stop-top">
          <div className="stop-name">{this.props.stop.Name}</div>
        </div>
      </li>
    )
  }
}
