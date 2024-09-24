import styled from 'styled-components';

const FaqStyle = styled.section`
  padding: 60px 0;
  background: #f2f5fa;

  .container {
    max-width: 1140px;

    @media (min-width: 576px) {
      max-width: 540px; /* xs */
    }

    @media (min-width: 768px) {
      max-width: 720px; /* sm */
    }

    @media (min-width: 992px) {
      max-width: 960px; /* md */
    }

    @media (min-width: 1200px) {
      max-width: 1140px; /* lg */
    }
  }

  .section-title {
    text-align: center;
    padding-bottom: 30px;

    h2 {
      font-size: 32px;
      font-weight: 400;
      margin-bottom: 20px;
      padding-bottom: 0;
      color: #008446;
      font-family: 'Poppins', sans-serif;
    }

    p {
      margin-bottom: 0;
    }
  }

  .accordion-list {
    padding: 0 100px;

    @media (max-width: 1200px) {
      .accordion-list {
        padding: 0;
      }
    }

    @media (max-width: 1200px) {
      padding: 0;
    }

    ul {
      padding: 0;
      list-style: none;
    }

    li + li {
      margin-top: 15px;
    }

    li {
      position: relative;
      padding: 20px;
      background: #fff;
      border-radius: 4px;
      color: #585a61;
      font-family: 'Roboto', sans-serif;
    }

    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      position: relative;
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      padding: 0 30px;
      outline: none;
      color: inherit;
      text-decoration: none;
      cursor: pointer;
      transition: color 0.3s ease;

      &:hover {
        color: #059451;
      }

      &.collapsed {
        color: #343a40;
      }

      &.collapsed:hover {
        color: #008446;
      }
    }

    .icon-help {
      position: absolute;
      font-size: 24px;
      right: 0;
      left: 20px;
      color: #008446;
    }

    .icon-show {
      font-size: 24px;
      position: absolute;
      right: 0;
      top: 0;
      display: inline-block;
    }

    .icon-show,
    .icon-close {
      font-size: 24px;
      transition: transform 0.3s ease;
    }

    .icon-show {
      display: inline-block;
    }

    .collapsed .icon-show {
      display: inline-block;
    }

    .collapsed .icon-close {
      display: none;
    }

    p {
      margin-bottom: 0;
      padding: 10px 0 0 0;
    }
  }
`;

export default FaqStyle;
