import React from "react";

const PreviewPicture = (props) => {
  const { picture, pictureUrl } = props;

  if (!pictureUrl) {
    return (
      <div
        style={{
          margin: "0 auto",
          height: "204px",
          weidth: "204px",
          borderWidth: ".1rem",
          borderStyle: "solid",
          borderColor: "grey",
        }}
        className="text-center mb-1"
      >
        {picture}
      </div>
    );
  } else {
    return <img className="img-fluid w-64 mb-2 mt-2" src={pictureUrl} />;
  }
};

export default PreviewPicture;
