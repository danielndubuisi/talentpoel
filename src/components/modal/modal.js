import React from 'react'
import successIcon from '../asset/icons/modal/success_mark.png'

import './modal.css'

export const SuccessModal = ({ closeModal, isOpen }) => {
  console.log("is open two-- ", isOpen);
  return (
    <section
      className={isOpen ? "modal_wrapper" : "modal_wrapper active"}
      onClick={closeModal}
    >
      <div className="modal_wrapper-contents">
        <div className="success_wrapper">
          <img
            src={successIcon}
            alt="success icon"
            width="100%"
            height="100%"
          />
        </div>
        <div className="content_wrapper">
          <div className="content_title-heading">
            <h2>Woohoo...!</h2>
            <p>Thank you for submitting your details</p>
          </div>
          <button className="content_btn" onClick={closeModal}>
            Got it, close
          </button>
        </div>
      </div>
    </section>
  );
};
