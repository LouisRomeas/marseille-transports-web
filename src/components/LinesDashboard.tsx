import { Component } from 'react'
import { TransportMode, LinesList, Line } from '../types';
import ModeLinesGrid from './ModeLinesGrid';
import '../style/LinesDashboard.scss';

type LinesDashboardState = {
  lines: LinesList
};

export default class LinesDashboard extends Component<{}, LinesDashboardState> {

  public readonly transportModes: Array<TransportMode> = [ 'metro', 'tram', 'bus' ];

  constructor(props: {}) {
    super(props);
    
    this.state = {
      lines: {
        'bus': [],
        'metro': [],
        'tram': []
      }
    }
  }

  componentDidMount(): void {
    this.transportModes.forEach(async (transportMode) => {
      const linesUrl = `${process.env.REACT_APP_RTM_API_URL}/getLines/${transportMode}`;

      const response = await fetch(linesUrl);
      const json = await response.json();
      const modeLines: Array<Line> = [];

      for (const key in json.data) {
        if (Object.prototype.hasOwnProperty.call(json.data, key)) {
          const line: Line = json.data[key];
          line.routes = [];
          modeLines.push(line);
        }
      }

      const tempLines = this.state.lines;

      tempLines[transportMode] = modeLines;
      
      this.setState(prevState => ({
        ...prevState,
        lines: tempLines
      }));

    });
  }

  render() {
    return (
      <div className='lines-dashboard'>
        {
          this.transportModes.map((mode, index) => <ModeLinesGrid key={index} mode={mode} lines={this.state.lines[mode]}/>)
        }
      </div>
    )
  }
}
