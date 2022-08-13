import React from "react";

const Header = () => {
  return (
    <div className="relative">
      <div>
        <div className="flex flex-col md:flex-row text-[48px] font-[600] text-white">
          <span className="md:pr-3">Octavian</span>
          <span className="hidden md:block">David</span>
        </div>
        <div className="absolute w-[220px] md:w-[350px] left-[0px] top-[80px] md:top-[65px]">
          <video
            src="https://framerusercontent.com/modules/assets/7ZVaFGyCfw2wm0QF0DbDyCukTV8~GAvSmwo4Tnc1GOUxHxt4qGM23A_pwF1sQyrpCvTvD2w.mp4"
            loop={true}
            autoPlay={true}
            muted={true}
            playsInline={true}
            className="w-full rounded-[40px] block h-[1.75px] outline-4 shadow-inherit object-cover bg-[black]"
          ></video>
        </div>
      </div>
      <div className="flex flex-start flex-col mb-[30px] whitespace-pre-wrap break-words max-w-[600px]">
        <p className="text-[30px]"> 
          <span className="text-[#999999]">Web Developer from Birmingham, currently working at </span>
          <span className="text-white">Castle Fine Art</span> 
          <span className="text-[#999999]"> on multiple projects.</span>
        </p>
      </div>
    </div>
  );
};

export default Header;
