 

const XboxCard = () => {
  return (
    <div style={{ pointerEvents: "none" }} className="flex items-center p-8  ">
      <div className="flex flex-col w-[45%] ">
        <div className="text-[#2484C2] flex items-center">
          <div className="flex-grow border-t  w-6 "></div>
          <p className="text-sm font-semibold w-[95%] ml-1">
              THE BEST PLACE TO PLAY
          </p>
        </div>
        <p className="font-semibold text-5xl leading-14 text-[#191C1F]">
          Xbox Consoles
        </p>
        <p className="text-[#475156] mb-5">
          Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for
          $2 USD.
        </p>
         
      </div>
      <div>
        <img style={{ pointerEvents: "none" }} src="ps.png" alt="" />
      </div>
    </div>
  );
};
export default XboxCard;
