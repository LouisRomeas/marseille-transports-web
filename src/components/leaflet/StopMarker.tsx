import { divIcon } from "leaflet"
import { Marker } from "react-leaflet"
import '../../style/leaflet/StopMarker.scss';
import { Stop } from "../../types";

type StopMarkerProps = {
  stop: Stop
  color: string
}

export default function StopMarker(props: StopMarkerProps) {

  const iconElement = document.createElement('div');
  iconElement.style.setProperty('--line-color', props.color);
  iconElement.classList.add('stop-marker');

  const icon = divIcon({
    className: 'stop-marker-wrapper',
    html: iconElement
  });

  return (
    <Marker {...props} position={ [parseFloat(props.stop.Latitude), parseFloat(props.stop.Longitude)] } icon={icon} />
  )
}
