import { LatLngBoundsExpression } from 'leaflet'
import { MapContainer, TileLayer } from 'react-leaflet'
import { Stop } from '../../types'
import StopsGroup from './StopsGroup'

type MapWrapperProps = {
  stops: Array<Stop>,
  color: string
}

const defaultBounds: LatLngBoundsExpression = [
  [43.23930735525451, 5.534778861531846],
  [43.37721176525424, 5.318142216969162]
]

export default function MapWrapper(props: MapWrapperProps) {

  return (
    <MapContainer className='route-map' bounds={defaultBounds} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <StopsGroup stops={props.stops} color={props.color} />
    </MapContainer>
  )
}

