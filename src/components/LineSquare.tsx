import { Component, CSSProperties, KeyboardEvent } from 'react'
import { Line, Route } from '../types'
import '../style/LineSquare.scss';
import LineDetails from './LineDetails';

type LineSquareProps = {
  line: Line
}

type LineSquareState = {
  isShowingLineDetails: boolean;
}

export default class LineSquare extends Component<LineSquareProps, LineSquareState> {

  constructor(props: LineSquareProps) {
    super(props);

    this.showLineDetails = this.showLineDetails.bind(this);
    this.hideLineDetails = this.hideLineDetails.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);

    this.state = {
      isShowingLineDetails: false
    }
  }

  render() {
    return (
      <div className={`line-square-wrapper ${this.props.line.PublicCode.toLowerCase()}`} onKeyDown={this.handleKeyDown} tabIndex={-1}>
        <div className="line-square" onClick={this.showLineDetails} style={{ '--line-color': this.props.line.color } as CSSProperties}>
          <div className="line-circle"></div>
          <div className="line-name">{this.props.line.PublicCode}</div>
        </div>

        {this.state.isShowingLineDetails ? (
          <LineDetails line={this.props.line} onClose={this.hideLineDetails} />
        ) : null}
      </div>
    )
  }

  showLineDetails() {

    const routesUrl = `${process.env.REACT_APP_RTM_API_URL}/getRoutes/${this.props.line.id}`;

    fetch(routesUrl)
      .then(res => res.json())
      .then(json => {
        const routes: Array<Route> = [];
        for (const key in json.data) {
          if (Object.prototype.hasOwnProperty.call(json.data, key)) {
            routes.push(json.data[key]);
          }
        }

        this.props.line.routes = routes;
        this.setState(prevState => ({
          ...prevState,
          isShowingLineDetails: true
        }));
      })
  }

  hideLineDetails() {
    this.setState(prevState => ({
      ...prevState,
      isShowingLineDetails: false
    }));
  }

  handleKeyDown(event: KeyboardEvent) {
    switch (event.key) {
      case 'Escape':
        this.hideLineDetails();
        break;
    }
  }
}
