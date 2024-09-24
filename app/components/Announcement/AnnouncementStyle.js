import styled from 'styled-components';

const AnnouncementStyle = styled.section`
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
  }

  .accordion-list {
    padding: 0 100px;

    ul {
      padding: 0;
    }

    li {
      position: relative;
      text-align: justify !important;
      padding: 20px;
      background: #fff;
      color: #585a61;
      border-radius: 4px;
      font-family: 'Roboto', sans-serif;

      br {
        margin: 10px 0;
      }
    }
  }

  @media (max-width: 1200px) {
    .accordion-list {
      padding: 0;
    }
  }
`;

export default AnnouncementStyle;
