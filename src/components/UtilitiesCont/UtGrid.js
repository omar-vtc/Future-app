import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/index.css";
import UtBox from "./UtBox";
function UtGrid() {
  return (
    <div className="ut-grid">
      <UtBox />
      <UtBox />
      <UtBox />
      <UtBox />
    </div>
  );
}

export default UtGrid;
