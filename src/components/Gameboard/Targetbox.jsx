const TargetBox = ({ posX, posY }) => {
  console.log(posX, posY);
  return <div className="targeting-box" style={{ left: posX-50, top: posY-50 }}></div>;
};

export default TargetBox;
