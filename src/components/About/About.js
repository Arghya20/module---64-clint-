import React from "react";
import useTitle from "../../hook/useTitle";

const About = () => {
  useTitle("About Us");
  return (
    <div>
      <h2>This is About Page!</h2>
    </div>
  );
};

export default About;
