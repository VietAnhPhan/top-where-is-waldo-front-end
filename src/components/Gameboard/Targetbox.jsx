const TargetBox = ({ posX, posY }) => {
  console.log(posX, posY);
  return (
    <div
      className="targeting-box translate-x-[-50%] translate-y-[-50%]"
      style={{ left: posX, top: posY }}
    ></div>
  );
};

export default TargetBox;
