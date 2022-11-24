import React from "react";
import styled from "styled-components";

const LoadingSpinner = () => {
  return (
    <LoadingWrapper>
      <Loading />
    </LoadingWrapper>
  );
};

export default LoadingSpinner;

const LoadingWrapper = styled.div`
  width: 150px;
  height: 150px;
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  &:after {
    content: "";
    width: 50px;
    height: 50px;
    border: 10px solid #dddddd;
    border-top-color: #be9d1a;
    border-radius: 50%;
    animation: loading 1s ease infinite;
  }

  @keyframes loading {
    to {
      transform: rotate(1turn);
    }
  }
`;
