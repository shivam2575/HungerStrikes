import React from "react";
const Contact = () => {
  return (
    <div>
      <div className="m-2 p-2">
        <h1 className="m-2 p-2">Contact Us</h1>
        <p className="m-2 p-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for 'lorem ipsum' will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose (injected humour and the like).
        </p>
      </div>
      <div className="m-2 p-2">
        <input
          className="m-2 p-2 border rounded-2xl"
          placeholder="First name"
        ></input>
        <input
          className="m-2 p-2 border rounded-2xl"
          placeholder="Last name"
        ></input>
        <button
          className="m-2 p-2 border rounded-2xl cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Contact;
