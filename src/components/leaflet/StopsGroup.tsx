import { LatLngBoundsExpression } from "leaflet";
import { useMap } from "react-leaflet";
import { Stop } from "../../types"
import StopMarker from "./StopMarker"

type StopsGroupProps = {
  stops: Array<Stop>,
  color: string
}

export default function StopGroup(props: StopsGroupProps) {
  
  const map = useMap();

  const stopsDependentBounds: LatLngBoundsExpression = [
    [-90, -90],
    [90, 90]
  ];

  props.stops.forEach(stop => {

    const [latitude, longitude] = [stop.Latitude, stop.Longitude].map(coordinate => parseFloat(coordinate));

    if (latitude > stopsDependentBounds[0][0]) stopsDependentBounds[0][0] = latitude;
    if (longitude > stopsDependentBounds[0][1]) stopsDependentBounds[0][1] = longitude;

    if (latitude < stopsDependentBounds[1][0]) stopsDependentBounds[1][0] = latitude;
    if (longitude < stopsDependentBounds[1][1]) stopsDependentBounds[1][1] = longitude;
    
  });

  map.fitBounds(stopsDependentBounds);

  return (
    <div>
        {
          props.stops.map((stop, index) => {
            return (
              <StopMarker key={index} stop={stop} color={props.color} />
            )
          })
        }
    </div>
  )
}
