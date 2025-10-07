import "./MarkerList.css";

const MarkerList = ({ marker }) => {
  return (
    <>
      {marker.marker ? (
        <div
          className="marker marker-right"
          style={{ left: marker.position_x - 25, top: marker.position_y - 25 }}
        ></div>
      ) : (
        <div
          className="marker marker-wrong"
          style={{ left: marker.position_x - 25, top: marker.position_y - 25 }}
        ></div>
      )}
    </>
  );
};

export default MarkerList;
