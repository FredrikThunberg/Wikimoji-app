import React from "react";

function Footer() {
  const thisYear = new Date().getFullYear();
  return (
    <footer className="thisFooter">
      <p className="paraFooter"> Copyright © {thisYear} Fredrik Thunberg </p>
    </footer>
  );
}

export default Footer;
