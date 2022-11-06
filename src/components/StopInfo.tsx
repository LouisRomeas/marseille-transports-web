import { Component } from 'react'
import { Line, Stop, XmlParsedRealTimeHours } from '../types'
import '../style/StopInfo.scss';
import { xml2js } from 'xml-js';

type StopInfoProps = {
  stop: Stop,
  line: Line,
  color: string
}

type StopInfoState = {
  nextTimes: Array<Date>
}

export default class StopInfo extends Component<StopInfoProps, StopInfoState> {

  constructor(props: StopInfoProps) {
    super(props);

    this.state = {
      nextTimes: []
    }
  }

  componentDidMount(): void {
    const realTimeHoursUrl = `${process.env.REACT_APP_RTM_API_URL}/spoti/getStationDetails?nomPtReseau=${ this.props.stop.sqlistationId.padStart(5, '0') }`;

    fetch(realTimeHoursUrl)
      .then(res => res.text())
      .then(xml => {
        const parsedRealTimeHours = xml2js(xml) as XmlParsedRealTimeHours;
        
        const nextTimes: Array<Date> = [];

        parsedRealTimeHours.elements[0].elements.forEach(element => {
          if (
            element.name !== 'ns1:passage' ||
            element.elements[0].elements[0].text !== this.props.line.PublicCode
          ) return;

          const timeAsString = element.elements[1].elements[0].text;
          const timeAsArray = timeAsString.split(':').map((value, index) => parseInt(value));

          const nextTime = new Date();
          nextTime.setHours(timeAsArray[0], timeAsArray[1]);
          if (nextTime < (new Date())) nextTime.setDate( nextTime.getDate() + 1 );
          
          nextTimes.push(nextTime);
        });

        this.setState(prevState => ({ ...prevState, nextTimes: nextTimes }));

      })
  }

  render() {
    return (
      <li className="stop">
        <div className="stop-top">
          <div className="stop-name">{this.props.stop.Name}</div>
          <div className="next-times">
            {
              this.state.nextTimes.map((time, index) => {
                
                const eta = Math.max(
                  Math.floor( ( time.getTime() - Date.now() ) / 60e3),
                  0
                )

                return (
                  <div key={index} className="time">{ eta }min</div>
                )
              })
            }
          </div>
        </div>
      </li>
    )
  }
}
