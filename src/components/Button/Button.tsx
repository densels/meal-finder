import { click } from "@testing-library/user-event/dist/click";
import React from "react";

import styled from "styled-components";

interface ButtonProps {
  text: string;
  clickHandler: (props?: any) => any;
  isDisabled?: boolean;
}

const Button = ({ text, clickHandler, isDisabled }: ButtonProps) => {
  return (
    <button
      id="submit"
      type="button"
      disabled={isDisabled}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

export default Button;
