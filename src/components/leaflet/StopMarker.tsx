import { divIcon } from "leaflet"
import { Marker, MarkerProps } from "react-leaflet"
import '../../style/leaflet/StopMarker.scss';

type StopMarkerProps = MarkerProps & {
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
    <Marker {...props} icon={icon} />
  )
}
