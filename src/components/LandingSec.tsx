const LandingSec = () => {
  return (
    <div className="dark:bg-[#0A0908] sm:pt-7 sm:pb-7">
      <div
        className="sm:max-w-[80%] bg-[#efefef] dark:bg-[#0A0908] dark:shadow-none sm:shadow-2xl flex flex-col
       sm:flex-row-reverse justify-center mx-auto p-10 sm:rounded-2xl gap-6 sm:mb-20"
      >
        <div className="sm:w-1/2">
          <img className="  rounded-2xl" src="i.jpg" alt="" />
        </div>
        <div className="px-3 sm:w-1/2 m-auto text-center    ">
          <h1 className="dark:text-white font-[rakkas]  leading-snug  text-4xl  md:text-5xl xl:text-7xl ">
            الغول لتجارة الورق و الكرتون
          </h1>
        </div>
      </div>
    </div>
  );
};

export default LandingSec;

{
  /* <h1
            className=" text-4xl  md:text-5xl xl:text-7xl 
          dark:text-white text-center mt-7 font-bold sm:font-extrabold sm:text-right font-serif  "
          >
            اهلا<span className="text-amber-700">!</span>
            <br />
            elghoul
            <span className="text-amber-700">.</span>
          </h1> */
}
