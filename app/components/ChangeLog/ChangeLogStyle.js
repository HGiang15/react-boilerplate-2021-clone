import styled from 'styled-components';

const ChangeLogStyle = styled.section`
  padding: 60px 0;
  background: #f2f5fa;

  /* Ghi đè container default Bootstrap */
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
      padding: 0;
    }

    ul {
      padding: 0;
      list-style: none;
    }

    li + li {
      margin-top: 15px;
    }

    .changelog-item {
      padding: 20px;
    }

    li {
      position: relative;
      color: #585a61;
      background: #fff;
      border-radius: 4px;
      font-family: 'Roboto', sans-serif;
    }

    a {
      display: block;
      position: relative;
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      line-height: 24px;
      font-weight: 500;
      padding: 0 30px;
      outline: none;
      color: inherit;
      text-decoration: none;

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

    a.collapsed .icon-show {
      display: inline-block;
    }

    a:not(.collapsed) .icon-show {
      display: inline-block;
    }
  }
`;

export default ChangeLogStyle;
