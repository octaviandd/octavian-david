import React, { useEffect, useState } from "react";
import {
  motion,
  useViewportScroll,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import Dropdown from "./Dropdown";

function Timeline() {
  const { scrollY, scrollYProgress } = useViewportScroll();
  const [hidden, setHidden] = useState(false);
  const [hiddenTwo, setHiddenTwo] = useState(false);
  const [hiddenThree, setHiddenThree] = useState(false);
  const [hiddenFour, setHiddenFour] = useState(false);
  const [hiddenFive, setHiddenFive] = useState(false);
  const [hiddenSix, setHiddenSix] = useState(false);
  const [hiddenSeven, setHiddenSeven] = useState(false);
  const [hiddenEight, setHiddenEight] = useState(false);

  function update() {
    scrollY?.current > 1 && scrollY?.current > scrollY?.prev
      ? setHidden(true)
      : setHidden(false);

    scrollY?.current > 100 && scrollY?.current > scrollY?.prev
      ? setHiddenTwo(true)
      : setHiddenTwo(false);

    scrollY?.current > 250 && scrollY?.current > scrollY?.prev
      ? setHiddenThree(true)
      : setHiddenThree(false);

    scrollY?.current > 450 && scrollY?.current > scrollY?.prev
      ? setHiddenFour(true)
      : setHiddenFour(false);

    scrollY?.current > 600 && scrollY?.current > scrollY?.prev
      ? setHiddenFive(true)
      : setHiddenFive(false);

    scrollY?.current > 700 && scrollY?.current > scrollY?.prev
      ? setHiddenSix(true)
      : setHiddenSix(false);

    scrollY?.current > 800 && scrollY?.current > scrollY?.prev
      ? setHiddenSeven(true)
      : setHiddenSeven(false);

    scrollY?.current > 900 && scrollY?.current > scrollY?.prev
      ? setHiddenEight(true)
      : setHiddenEight(false);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    return scrollY.onChange(() => update());
  }, []);

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 400,
    damping: 90,
  });

  return (
    <div>
      <AnimatePresence>
        {!hidden && (
          <motion.div
            className="absolute left-[20px] top-[10px]"
            transition={{ duration: 0.5 }}
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
          >
            <Dropdown
              title="Coventry University"
              subtitle="09/2016 - 09/2019"
              description="Bachelor's of Science - Psychology"
            ></Dropdown>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!hiddenTwo && (
          <motion.div
            className="absolute right-[20px] top-[200px]"
            transition={{ duration: 0.5 }}
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
          >
            <Dropdown
              title="HERD.io"
              subtitle="06/2020 - 09/2020"
              description="Worked on multiple projects with different customers.
                          Designed websites.
                          Solved reported problems related to customer online shops. 
                          Provided new ways to maximize revenue for various businesses."
            ></Dropdown>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!hiddenThree && (
          <motion.div
            className="absolute left-[20px] top-[275px]"
            transition={{ duration: 0.5 }}
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            style={{ zIndex: 5 }}
          >
            <Dropdown
              title="LaterGRAM"
              subtitle="latergram"
              description="Full-stack project inspired from Instagram's display. 
              The back-end is build with Apollo Server and Express, this is connected to a MongoDB via Mongoose.
               The relationship between the front-end data back-end data is supported by Apollo Client and GraphQL.
                The front-end is build using React components and Hooks, the styling is done with Styled Components.
                 The authentication is done with a JWT token which is stored as a cookie, everything that connects to the back end is done via GraphQL. 
                 The list of functionality includes creating accounts, adding pictures, likes and comments. Images are stored via AWS S3."
            ></Dropdown>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!hiddenFour && (
          <motion.div
            className="absolute right-[20px] top-[500px]"
            transition={{ duration: 0.5 }}
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
          >
            <Dropdown
              title="Windows-Plus"
              subtitle="09/2020 - 06/2021"
              description="Built a back-end system for the business.
                          Designed the website of the business.
                          Restructured old systems to increase efficiency.
                          Provided new ways to market the products of the business.
                          "
            ></Dropdown>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!hiddenFive && (
          <motion.div
            className="absolute left-[20px] top-[750px]"
            transition={{ duration: 0.5 }}
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            style={{ zIndex: 4 }}
          >
            <Dropdown
              title="Spotifier"
              subtitle="spotifier"
              description="Spotifier is a React single page web application that gathers data from the Spotify API 
              and gives the user details about his usual playlists and his preferences in terms of music.
               The functionality of the application includes displaying statistics about the user's favorite artists, 
               information about his Spotify profile and his music playlists, details about what kind of music he
              listens to and recommendations of new music based on his preference."
            ></Dropdown>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!hiddenSix && (
          <motion.div
            className="absolute right-[20px] top-[850px]"
            transition={{ duration: 0.5 }}
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
          >
            <Dropdown
              title="Birmingham City University"
              subtitle="01/2021 - 01/2022"
              description="Master's of Science - Psychology"
            ></Dropdown>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!hiddenSeven && (
          <motion.div
            className="absolute left-[20px] top-[1050px]"
            transition={{ duration: 0.5 }}
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
          >
            <Dropdown
              title="Chess Game"
              subtitle="chess"
              description="Chess game build with object-oriented programming. 
              On a 8x8 board, the functionality includes taking turns for movement, capturing adversary pieces, 
              checking the king of the adversary, pinning pieces in front of the direction of
               the king depending on the attacking piece, adequate movement for all pieces, 
               conditional movement of pieces depending on the situation on the board."
            ></Dropdown>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {!hiddenEight && (
          <motion.div
            className="absolute right-[20px] top-[1100px]"
            transition={{ duration: 0.5 }}
            initial={{ y: -300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
          >
            <Dropdown
              title="Castle Fine Art"
              subtitle="02/2022 - Current Position"
              description="Increase e-commerce revenues.
                          Develop a Content Management System.
                          Solve ad-hoc organizational problems.
                          Solve emerging infrastructure-related problems.
                          Build new means to increase business efficiency.
                          "
            ></Dropdown>
          </motion.div>
        )}
      </AnimatePresence>
      <svg
        width="30"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute h-[200vh]"
      >
        <path fill="white" stroke="#666666" strokeWidth={10} d="M 0 0 V 2000" />
      </svg>
      <svg
        width="30"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute h-[200vh]"
      >
        <motion.path
          fill="white"
          stroke="#fff"
          strokeWidth={10}
          d="M 0 0 V 2000"
          style={{
            pathLength,
          }}
        />
      </svg>
    </div>
  );
}

export default Timeline;
