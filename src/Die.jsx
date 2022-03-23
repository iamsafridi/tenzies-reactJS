import React from "react";

function die(props) {
  const styles = {
    backgroundColor: props.isHeld ? "#59E391" : "white",
  };

  return (
    <div className="die-face" style={styles} onClick={props.holdDice}>
      <h1 className="die-num">{props.value}</h1>
    </div>
  );
}

export default die;
