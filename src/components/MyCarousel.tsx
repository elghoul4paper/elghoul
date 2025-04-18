import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";
import Slider from "react-slick";

import LandingSec_1 from "./LandingSec_1";
import LandingSec_2 from "./LandingSec_2";
import LandingSec_3 from "./LandingSec_3";

function MyCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };
  return (
    <div className="dark:bg-[#0A0908] bg-[#efefef]  pt-6  ">
      <div >
        <Slider
          
          {...settings}
        >
          <div>
            <LandingSec_3 />
          </div>
          <div>
            <LandingSec_1 />
          </div>
          <div>
            <LandingSec_2 />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default MyCarousel;
