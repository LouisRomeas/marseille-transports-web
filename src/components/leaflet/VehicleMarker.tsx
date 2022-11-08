import { divIcon } from "leaflet"
import { Marker } from "react-leaflet"
import '../../style/leaflet/VehicleMarker.scss';
import { Vehicle } from "../../types";

type VehicleMarkerProps = {
  vehicle: Vehicle
  color: string
}

export default function VehicleMarker(props: VehicleMarkerProps) {

  const iconElement = document.createElement('div');
  iconElement.style.setProperty('--line-color', props.color);
  iconElement.classList.add('vehicle-marker');

  const icon = divIcon({
    className: 'vehicle-marker-wrapper',
    html: iconElement
  });

  return (
    <Marker {...props} position={ [props.vehicle.Latitude, props.vehicle.Longitude] } icon={icon} />
  )
}
