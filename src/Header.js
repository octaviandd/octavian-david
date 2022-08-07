import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <div className="relative">
      <TitleParentContainer>
        <TitleSpan className="flex flex-col md:flex-row">
          <span className="md:pr-3">Octavian</span>
          <span className="hidden md:block">David</span>
        </TitleSpan>
        <div className="absolute w-[220px] md:w-[350px] left-[0px] top-[80px] md:top-[65px]">
          <video
            src="https://framerusercontent.com/modules/assets/7ZVaFGyCfw2wm0QF0DbDyCukTV8~GAvSmwo4Tnc1GOUxHxt4qGM23A_pwF1sQyrpCvTvD2w.mp4"
            loop={true}
            autoPlay={true}
            muted={true}
            playsInline={true}
            className="w-full rounded-[40px] block h-[1.75px] outline-4 shadow-inherit object-cover bg-[black]"
            style={{ objectPosition: "50% 50%" }}
          ></video>
        </div>
      </TitleParentContainer>
      <SubTitleParentContainer>
        <p>
          <span>Web Developer from Birmingham, currently working at </span>
          <span>Castle Fine Art</span> <span>on multiple projects. </span>
        </p>
      </SubTitleParentContainer>
    </div>
  );
};

const TitleParentContainer = styled.div`
  outline: currentcolor none medium;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: flex-start;
  margin-bottom: 30px;
  opacity: 1;
  flex-shrink: 0;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: break-word;
  word-spacing: 0px;
`;

const TitleSpan = styled.span`
  font-family: "Inter-SemiBold", "Inter", sans-serif;
  font-style: normal;
  font-weight: 600;
  color: rgb(251, 249, 249);
  font-size: 48px;
`;

const SubTitleParentContainer = styled.div`
  max-width: 600px;
  outline: currentcolor none medium;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  opacity: 1;
  margin-bottom: 30px;
  flex-shrink: 0;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  word-break: break-word;
  word-spacing: 0px;
  transform: perspective(1200px) translateX(0px) translateY(0px) scale(1)
    rotate(0deg) rotateX(0deg) rotateY(0deg) translateZ(0px);

  & span:nth-child(1) {
    color: rgb(153, 153, 153);
    font-size: 30px;
  }

  & span:nth-child(2) {
    color: rgb(255, 255, 255);
    font-size: 30px;
  }

  & span:nth-child(3) {
    color: rgb(153, 153, 153);
    font-size: 30px;
  }
`;

export default Header;
