import { Component } from 'react'
import { TransportMode, LinesList, Line } from '../types';

type LineGridState = {
  lines: LinesList
};

export default class LineGrid extends Component<{}, LineGridState> {

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
    const transportModes: Array<TransportMode> = [ 'bus', 'metro', 'tram' ];
  
    transportModes.forEach(async (transportMode) => {
      const linesUrl = `${process.env.REACT_APP_RTM_API_URL}/getLines/${transportMode}`;

      const response = await fetch(linesUrl);
      const json = await response.json();
      const modeLines: Array<Line> = [];

      for (const key in json.data) {
        if (Object.prototype.hasOwnProperty.call(json.data, key)) {
          modeLines.push(json.data[key]);
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
      <div>
        <p>{this.state.lines.metro.length} metro lines</p>
        {this.state.lines.bus.length} bus lines
        <ul>
          {this.state.lines.bus.map((line, index) => {
            return (
              <li key={index}>{line.PublicCode}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}
