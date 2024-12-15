import React from "react";
import "./Campus.css";
import gallery_1 from "../../asset/gallery-1.png";
import gallery_2 from "../../asset/gallery-2.png";
import gallery_3 from "../../asset/gallery-3.png";
import gallery_4 from "../../asset/gallery-4.png";
import white_arrow from "../../asset/white-arrow.png"

const Campus = () => {
  return (
    <div className="campus">
      <div className="gallery">
        <img src={gallery_1} alt="gallery1" />
        <img src={gallery_2} alt="gallery2" />
        <img src={gallery_3} alt="gallery3" />
        <img src={gallery_4} alt="gallery4" />
      </div>
      <button className="btn dark-btn">See more here <img src={white_arrow} alt="" /></button>
    </div>
  );
};

export default Campus;
