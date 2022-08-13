/** @format */

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const form = useRef();

  const sendForm = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_kmmc325",
        "contact_form",
        form.current,
        "Ju_I_KKjBVEW4uK6I"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
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
                className="grid grid-row-1 gap-[9px] w-full h-full"
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
                <div>
                  <input
                    type="submit"
                    className="bg-[#0099ff] w-full text-white cursor-pointer font-[600] z-10 bg-repeat outline-none inline-block w-full p-[12px] rounded-[8px] text-[14px]"
                  />
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
