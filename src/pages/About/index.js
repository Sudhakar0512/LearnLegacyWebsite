import React from "react";
import TypeAnimation from "react-type-animation";
import { motion } from "framer-motion";
import "./About.css";
import group from "../../assets/logoBlack.png";
import "../../components/atoms/PrimaryBtn/PrimaryBtn.css";
import "../shared/Shared.css";
import { BottomLine, MySkill, Education } from "../../components";
import { FaDownload } from "react-icons/fa";

const About = () => {
  return (
    <div className="parent pt-16 my-16">
      <div className="">
        <motion.div
          className="mb-10"
          initial={{ y: -200, opacity: 0 }}
          animate={{
            y: 0,
            opacity: 1,
            transition: { duration: 1, type: "spring" },
          }}
        >
          <h1 className="text-4xl font-semibold drop-shadow-md text-center">
            About <span className="text-primary">Learn Legacy</span>
          </h1>
          <h3 className="text-neutral text-center py-2">
            {" "}
            Learning doesn't require Legacy , Start learning and
            Make your legacy
          </h3>
          <BottomLine />
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <img
              src={group}
              alt="Learn Legacy"
              className="p-4 md:p-12 w-70 h-70 transform translate-y-[-12%] md:translate-y-0 scale-75 md:scale-60 md:-mt-28"
              title="Gilbert Hutapea"
            />
          </motion.div>

          <motion.div
            className={`text-neutral font-medium text-center sm:text-left md:mt-0`}
            initial={{ x: 200, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: { duration: 1, delay: 1.25 },
            }}
          >
            <h1 className="text-4xl font-semibold text-center translate-y-[-280%] sm:translate-y-[-0%] sm:text-3xl sm:mb-2 md:text-left">
              Learn Legacy
            </h1>
            <p className={`mb-4 ${window.innerWidth > 600 ? "" : "-mt-20 "} `}>
              At Learn Legacy, we guide students towards a future they'll love.
              Our team is dedicated to helping you find your perfect domain
              among 9 exciting choices, including UI/UX Design, Networking, Full
              Stack Development, AI, Cybersecurity, Blockchain, Java Spring
              Boot, Business, and Mindset.
            </p>
            <p className="mb-4">
              Empower yourself by attending our interactive sessions where
              experts will delve into the intricacies of each domain. Seize the
              opportunity to shape your career path with confidence!
            </p>
            <p className="mb-4">
              Craft Your Legacy: Free Domain Choice Workshop (Feb 26 - Mar 05)
              Stop the career confusion. Ignite your passion. Build your future.
            </p>
            <div className="flex justify-center md:justify-start">
              <a href="" target="blank">
                <button className="primary-button">
                  <span>Broucher</span>
                  <span>
                    <FaDownload />
                  </span>
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
      {/* My Skill
      <MySkill />

      {/* Education */}
      {/* <Education /> */}
    </div>
  );
};

export default About;
