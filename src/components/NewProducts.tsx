import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const NewProducts = () => {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className="  my-10 container   ">
      <p className="text-2xl font-bold mb-6 text-right">شغلنا الجديد🔥</p>

      <div className="flex flex-col lg:flex-row-reverse gap-4   ">
        {/* العمود الأيمن (الصورة الطويلة) */}
        <div className="lg:w-1/2 w-full">
          <img
            className="w-full h-full object-cover rounded-lg"
            src="vertical-img.jpeg"
            alt="Vertical Product"
          />
        </div>

        {/* العمود الأيسر */}
        <div className="lg:w-1/2 w-full flex flex-col gap-4">
          {/* صف فيه صورتين */}
          <div className="flex gap-4">
            <div className="w-1/2">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="main-img-1.jpeg"
                alt="Product 1"
              />
            </div>
            <div className="w-1/2">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="main-img-2.jpeg"
                alt="Product 2"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-1/2">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="main-img-3.jpeg"
                alt="Product 1"
              />
            </div>
            <div className="w-1/2">
              <img
                className="w-full h-full object-cover rounded-lg"
                src="main-img-4.jpeg"
                alt="Product 2"
              />
            </div>
          </div>

          {/* صورة أفقية تحتهم */}
          <div>
            <img
              className="w-full  object-cover rounded-lg"
              src="horizontal.jpeg"
              alt="Horizontal Product"
            />
          </div>
        </div>
      </div>

      {/* <Slider className="mt-5" {...settings}>
       
       <div>
          <img className="px-2"   src="paperColors(1).jpeg" alt="" />
        </div>
        
       <div>
          <img className="px-2"   src="paperColors(1).jpeg" alt="" />
        </div>
        
       <div>
          <img className="px-2"   src="paperColors(1).jpeg" alt="" />
        </div>
        
       <div>
          <img className="px-2"   src="paperColors(1).jpeg" alt="" />
        </div>
        
       <div>
          <img className="px-2"   src="paperColors(1).jpeg" alt="" />
        </div>
        
       <div>
          <img className="px-2"   src="paperColors(1).jpeg" alt="" />
        </div>
        
       <div>
          <img className="px-2"   src="paperColors(1).jpeg" alt="" />
        </div>
        
      
      </Slider> */}
    </div>
  );
};

export default NewProducts;