import React, { FC } from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from 'react-google-maps'

type Props = {
  location: {
    lat: number;
    lng: number;
  };
}
const Map: FC<Props> = props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={props.location}
    {...props}
  >
    <Marker position={props.location} />
  </GoogleMap>

export default withScriptjs(withGoogleMap(Map))
