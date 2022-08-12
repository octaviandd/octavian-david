/** @format */

import React, { useRef } from "react";
import styled from "styled-components";
import emailjs from "@emailjs/browser"

const ContactForm = () => {
  const form = useRef();


  const sendForm = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_kmmc325', 'contact_form', form.current, 'Ju_I_KKjBVEW4uK6I')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }


  return (
    <div className="w-full sm:w-[60%]">
      <div style={{ display: "contents" }}>
        <div style={{ height: "100%", opacity: "1" }}>
          <Container>
            <div style={{ opacity: "1" }}>
              <FormParentContainer>
                <Form onSubmit={sendForm} ref={form}>
                  <FormGrid>
                    <Input type="email" name="email" placeholder="Email" />
                  </FormGrid>
                  <TextArea
                    name="description"
                    placeholder="Message"
                    rows={10}
                  ></TextArea>
                  <div>
                    <InputTwo type="submit" />
                  </div>
                </Form>
              </FormParentContainer>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

const Container = styled.div`
  background-color: rgb(255, 255, 255);
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.004) 0px 0.637473px 0.637473px 0px,
    rgba(0, 0, 0, 0.01) 0px 1.93094px 1.93094px 0px,
    rgba(0, 0, 0, 0.03) 0px 5.10423px 5.10423px 0px,
    rgba(0, 0, 0, 0.1) 0px 16px 16px 0px;
  opacity: 1;
  padding: 10px;
`;

const FormParentContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Form = styled.form`
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  gap: 9px;
  width: 100%;
  height: 100%;
`;

const FormGrid = styled.div`
  width: 100%;
  display: grid;
  grid-auto-flow: column;
  gap: 9px;
`;

const Input = styled.input`
  appearance: none;
  display: inline-block;
  width: 100%;
  line-height: 1.4em;
  outline: currentcolor none medium;
  border: medium none;
  padding: 12px;
  border-radius: 8px;
  font-family: "Inter Regular", "Inter", "Inter", system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  font-size: 14px;
  background: rgb(247, 247, 247) none repeat scroll 0% 0%;
  color: rgb(0, 0, 0);
  box-shadow: transparent 0px 0px 0px 1px inset;
`;

const InputTwo = styled.input`
  appearance: none;
  display: inline-block;
  width: 100%;
  line-height: 1.4em;
  outline: currentcolor none medium;
  border: medium none;
  border-radius: 8px;
  padding: 12px;
  font-family: "Inter Regular", "Inter", "Inter", system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 600;
  font-size: 14px;
  background: rgb(0, 153, 255) none repeat scroll 0% 0%;
  cursor: pointer;
  color: rgb(255, 255, 255);
  z-index: 1;
`;

const TextArea = styled.textarea`
  appearance: none;
  display: inline-block;
  width: 100%;
  line-height: 1.4em;
  outline: currentcolor none medium;
  border: medium none;
  min-height: 0px;
  padding: 12px;
  resize: vertical;
  border-radius: 8px;
  background: rgb(247, 247, 247) none repeat scroll 0% 0%;
  font-family: "Inter Regular", "Inter", "Inter", system-ui, -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif,
    "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-weight: 400;
  font-size: 14px;
  color: rgb(0, 0, 0);
  box-shadow: transparent 0px 0px 0px 1px inset;
`;

export default ContactForm;
