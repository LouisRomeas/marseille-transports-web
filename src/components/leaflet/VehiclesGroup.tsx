import { Vehicle } from "../../types"
import VehicleMarker from "./VehicleMarker"

type VehiclesGroupProps = {
  vehicles: Array<Vehicle>,
  color: string
}

export default function VehiclesGroup(props: VehiclesGroupProps) {

  return (
    <div>
        {
          props.vehicles.map((vehicle, index) => {
            return (
              <VehicleMarker key={index} vehicle={vehicle} color={props.color} />
            )
          })
        }
    </div>
  )
}
