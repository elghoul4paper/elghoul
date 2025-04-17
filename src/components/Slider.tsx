import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const SimpleSlider = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full md:w-[80%] lg:w-[60%]  bg-amber-500 container m-auto">
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000}
        keyBoardControl={true}
        customTransition="all 1s"
        transitionDuration={1000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        arrows={false}
        dotListClass="bg-white z-10"
        itemClass="carousel-item-padding-40-px"
        minimumTouchDrag={10}
      >
        <div>
          <img
            style={{ pointerEvents: "none" }}
            className="w-full object-cover"
            src="tee.jpg"
            alt="Slide 1"
          />
        </div>
        <div>
          <img
            style={{ pointerEvents: "none" }}
            className="w-full object-cover"
            src="cartoon.jpg"
            alt="Slide 2"
          />
        </div>
        <div>
          <img
            style={{ pointerEvents: "none" }}
            className="w-full object-cover"
            src="cartoon-1.jpg"
            alt="Slide 3"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default SimpleSlider;
