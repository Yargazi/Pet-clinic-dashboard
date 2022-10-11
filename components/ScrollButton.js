import React, { useState } from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import IconButton from "@mui/material/IconButton";
const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div className="flex justify-center pt-2">
      <IconButton
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        <FaArrowCircleUp color="#4D4DFE" />
      </IconButton>
    </div>
  );
};

export default ScrollButton;
