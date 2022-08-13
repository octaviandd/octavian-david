/** @format */

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

const ContactForm = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [submitted, hasSubmitted] = useState(false);

  const sendForm = (e) => {
    e.preventDefault();
    setLoading(true);
    hasSubmitted(true);
    emailjs
      .sendForm(
        "service_kmmc325",
        "contact_form",
        form.current,
        "Ju_I_KKjBVEW4uK6I"
      )
      .then(
        (result) => {
          setLoading(false);
          setTimeout(() => {
            hasSubmitted(false);
          }, 5000);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
          setTimeout(() => {
            hasSubmitted(false);
          }, 5000);
        }
      );
  };

  return (
    <div className="w-full sm:w-[60%]">
      <div className="contents">
        <div className="h-full">
          <div className="rounded-[16px] bg-white p-[10px]">
            <div className="w-full h-full relative flex justify-center items-center flex-col">
              <form
                onSubmit={sendForm}
                ref={form}
                className="w-full"
                animate={{ height: submitted ? 0 : "auto" }}
              >
                <div className="w-full grid grid-flow-col gap-[9px]">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="bg-repeat outline-none inline-block w-full p-[12px] rounded-[8px] text-[14px] bg-[#f7f7f7] "
                  />
                </div>
                <textarea
                  name="description"
                  placeholder="Message"
                  rows={10}
                  className="bg-repeat outline-none inline-block w-full p-[12px] rounded-[8px] text-[14px] bg-[#f7f7f7] "
                ></textarea>
                <div className="relative min-h-[55px]">
                  {loading && submitted ? (
                    <motion.div
                      className="w-[20px] h-[20px] bg-[#0099ff] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      animate={{
                        scale: [1, 2, 2, 1, 1],
                        rotate: [0, 0, 180, 180, 0],
                        borderRadius: ["0%", "0%", "50%", "50%", "0%"],
                      }}
                      transition={{
                        duration: 1,
                        ease: "easeInOut",
                        times: [0, 0.2, 0.5, 0.8, 1],
                        repeat: Infinity,
                        repeatDelay: 0.5,
                      }}
                    />
                  ) : submitted ? (
                    <span className="bg-[#0099ff] text-center w-full text-white cursor-pointer font-[600] z-10 bg-repeat outline-none inline-block w-full p-[12px] rounded-[8px] text-[14px]">
                      Thanks! I'll be in touch soon.
                    </span>
                  ) : (
                    <input
                      type="submit"
                      className="bg-[#0099ff] w-full text-white cursor-pointer font-[600] z-10 bg-repeat outline-none inline-block w-full p-[12px] rounded-[8px] text-[14px]"
                    />
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
