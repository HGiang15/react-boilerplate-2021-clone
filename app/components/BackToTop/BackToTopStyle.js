// components/BackToTopStyle.js
import styled from 'styled-components';

export const BackToTopStyle = styled.a`
  position: fixed;
  display: ${({ isVisible }) => (isVisible ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  right: 15px;
  bottom: 15px;
  background: #008446;
  color: #fff;
  transition: opacity 0.5s ease-in-out, background 0.2s ease-in-out;
  z-index: 99999;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background: #49b96f;
  }
  .icon-back {
    font-size: 14px;
  }

  @media (max-width: 768px) {
    right: 10px;
    bottom: 10px;
  }
`;

export default BackToTopStyle;
