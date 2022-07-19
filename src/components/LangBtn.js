import React from "react";
import "./../Navbar.css";

export default function LangBtn(props) {
  return (
    <>
      <select name="selectLang" id="selectLang">
        <option selected defaultValue={"/eng/"}>
          English
        </option>
        <option value="/hi-in">Hindi</option>
      </select>
    </>
  );
}
