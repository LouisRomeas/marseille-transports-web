import { Component } from 'react'
import { Line, TransportMode } from '../types'
import LineSquare from './LineSquare'
import '../style/ModeLinesGrid.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

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
          this.props.lines.map((line, index) => (
            this.props.lines.length ?
              <LineSquare key={index} line={line} /> :
              <FontAwesomeIcon icon={faSpinner} fontSize='2em' className='spinner' />
            )
          )
        }
      </div>
    )
  }
}
