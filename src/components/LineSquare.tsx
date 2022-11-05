import { Component, CSSProperties } from 'react'
import { Line } from '../types'

type LineSquareProps = {
  line: Line
}

type LineSquareState = {
}

export default class LineSquare extends Component<LineSquareProps, LineSquareState> {
  render() {
    return (
      <div className="line-square" style={{ '--line-color': this.props.line.color } as CSSProperties}>
        <div className="line-name">{this.props.line.PublicCode}</div>
      </div>
    )
  }
}
