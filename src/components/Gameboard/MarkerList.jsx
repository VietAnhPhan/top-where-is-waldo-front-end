import "./MarkerList.css";

const MarkerList = ({ markers }) => {
  // console.log(markers);
  // return;
  return (
    <>
      {markers.length > 0 && (
        <>
          {markers.map((marker) => {
            if (marker.marker) {
              return (
                <div
                  key={marker.id}
                  className="marker marker-right translate-x-[-50%] translate-y-[-50%]"
                  style={{
                    left: marker.position_x,
                    top: marker.position_y,
                  }}
                ></div>
              );
            } else
              return (
                <div
                  key={marker.id}
                  className="marker marker-wrong translate-x-[-50%] translate-y-[-50%]"
                  style={{
                    left: marker.position_x,
                    top: marker.position_y,
                  }}
                ></div>
              );
          })}
        </>
      )}
      {/* {marker.marker ? (
        <div
          className="marker marker-right"
          style={{ left: marker.position_x - 25, top: marker.position_y - 25 }}
        ></div>
      ) : (
        <div
          className="marker marker-wrong"
          style={{ left: marker.position_x - 25, top: marker.position_y - 25 }}
        ></div>
      )} */}
    </>
  );
};

export default MarkerList;
