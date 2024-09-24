import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const LoadingStyle = styled.div`
  .loadingWrapper {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgb(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    &.forMobile {
      justify-content: flex-start;
      align-items: flex-start;
      .loadingIcon {
        width: 30px;
        height: 30px;
        margin: 10px;
        border-width: 2px;
      }
    }
  }
  .loadingIcon {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 6px solid #ffffff;
    border-color: #fff transparent #ffffff transparent;
    animation: ${rotate} 2s linear infinite;
  }
`;

export default LoadingStyle;
