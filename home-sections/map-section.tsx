import {
  GoogleMap,
  withGoogleMap,
  withScriptjs,
  Marker,
} from "react-google-maps";

const MapSection: React.FC<{ isMarkerShown: boolean }> = (props) => {
  return (
    <GoogleMap defaultZoom={8} defaultCenter={{ lat: -34.397, lng: 150.644 }}>
      {props.isMarkerShown && (
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      )}
    </GoogleMap>
  );
};

export default withScriptjs(withGoogleMap(MapSection));
