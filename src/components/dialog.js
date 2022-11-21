import React from "react";
import Dialog from "@material-ui/core/Dialog";
import styled from "styled-components";
import { RiPhoneFill, RiLinkedinBoxFill, RiMailFill } from "react-icons/ri";

const ContactContainer = styled.div`
  grid-column: span 1;
  text-align: right;

  @media (max-width: 768px) {
    grid-column: span 2;
    text-align: left;
  }
`;

const ContactButton = styled.button`
  all: unset;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  font-size: 2rem;
  letter-spacing: 0.4rem;
`;

const ContactTitle = styled.h2`
  padding: 16px 0;
  margin: 0 24px;
  font-size: 2rem;
  font-family: "Inter", sans-serif;
  font-weight: unset;
  letter-spacing: 0.4rem;
  border-bottom: solid 1px rgba(0, 0, 0, 0.87);
`;

const ContactDetailContainer = styled.a`
  display: grid;
  grid-template-columns: 50px 1fr;
  transition: 0.3s;

  &:hover {
    background-color: aliceblue;
  }
`;

const ContactDetailIcon = styled.span`
  padding: 10px;
  & > svg {
    height: 100%;
    width: 100%;
  }
`;

const ContactDetailLabel = styled.p`
  display: inline-block;
  font-family: "Inter", sans-serif;
  font-size: 1.5rem;
  margin: 16px 24px 16px 0;
`;

export default function ContactDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <ContactContainer>
        <ContactButton onClick={handleClickOpen}>contact</ContactButton>
      </ContactContainer>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="contact-dialog-title"
      >
        <ContactTitle id="contact-dialog-title">{"contact"}</ContactTitle>

        <ContactDetailContainer href="https://www.linkedin.com/in/stephenjhwang/">
          <ContactDetailIcon>
            <RiLinkedinBoxFill />
          </ContactDetailIcon>
          <ContactDetailLabel>LinkedIn</ContactDetailLabel>
        </ContactDetailContainer>
        <ContactDetailContainer href="mailto:stephenhwang156@outlook.com">
          <ContactDetailIcon>
            <RiMailFill />
          </ContactDetailIcon>
          <ContactDetailLabel>stephenhwang156@outlook.com</ContactDetailLabel>
        </ContactDetailContainer>
        <ContactDetailContainer>
          <ContactDetailIcon>
            <RiPhoneFill />
          </ContactDetailIcon>
          <ContactDetailLabel>+1 (650) 861-7852</ContactDetailLabel>
        </ContactDetailContainer>
      </Dialog>
    </>
  );
}
