import styled from 'styled-components';

const AndroidStyle = styled.section`
  padding: 60px 0;

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

  .content + .content {
    margin-top: 100px;
  }

  .content {
    h4 {
      font-weight: 500;
      font-size: 1.5rem;
      color: #47536e;
    }

    .content-link {
      color: #008446;
      text-decoration: none;

      &:hover {
        color: #49b96f;
      }
    }
  }
`;

export default AndroidStyle;
