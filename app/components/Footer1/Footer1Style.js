import styled from 'styled-components';

const Footer1Style = styled.footer`
  background: #eff2f8;
  padding: 0 0 30px 0;
  color: #47536e;
  font-size: 14px;

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

  .copyright {
    text-align: center;
    float: left;
    color: #47536e;
  }

  .credits {
    float: right;
    text-align: center;
    font-size: 13px;
    color: #47536e;

    a {
      text-decoration: none;
      color: #008446;
    }
  }

  @media (max-width: 768px) {
    .copyright,
    .credits {
      float: none;
      text-align: center;
      padding: 5px 0;
    }
  }
`;

export default Footer1Style;
