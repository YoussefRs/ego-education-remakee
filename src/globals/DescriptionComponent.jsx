import React from "react";
import "quill/dist/quill.snow.css"; // For the snow theme (default)
import "quill/dist/quill.bubble.css"; // For the bubble theme (optional)

const DescriptionComponent = ({ description }) => {
  return <div dangerouslySetInnerHTML={{ __html: description }} />;
};

export default DescriptionComponent;
