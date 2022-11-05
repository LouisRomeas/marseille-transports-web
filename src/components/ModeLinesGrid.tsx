import { Component } from 'react'
import { Line, TransportMode } from '../types'
import LineSquare from './LineSquare'
import '../style/ModeLinesGrid.scss';

type ModeLinesGridProps = {
  mode: TransportMode,
  lines: Array<Line>
}

type ModeLinesGridState = {
}

export default class ModeLinesGrid extends Component<ModeLinesGridProps, ModeLinesGridState> {

  render() {
    return (
      <div className={`mode-lines-grid ${this.props.mode}`}>
        {
          this.props.lines.map((line, index) => {
            return (
              <LineSquare key={index} line={line} />
            )
          })
        }
      </div>
    )
  }
}
