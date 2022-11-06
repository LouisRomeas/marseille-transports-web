import { Route } from "../types"

type RouteChoiceProps = {
  routes: Array<Route>
}

export default function RouteChoice(props: RouteChoiceProps) {

  return (
    <div className='route-choice'>
      {
        props.routes.map((route, index) => <div key={index} className='route'>{route.DirectionStations}</div>)
      }
    </div>
  )
}
