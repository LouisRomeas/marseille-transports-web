import { Route } from "../types"
import '../style/RouteChoice.scss';
import { CSSProperties } from "react";

type RouteChoiceProps = {
  routes: Array<Route>,
  color: string,
  onRouteChoose: (route: Route) => void;
}

export default function RouteChoice(props: RouteChoiceProps) {

  return (
    <div className="route-choice-wrapper">
      <div className="route-choice-label">Choisissez votre direction</div>
      <div className='route-choice' style={{ '--line-color': props.color } as CSSProperties}>
        {
          props.routes.map((route, index) => <div key={index} className='route' onClick={() => props.onRouteChoose(route)}>{route.DirectionStations}</div>)
        }
      </div>
    </div>
  )
}
