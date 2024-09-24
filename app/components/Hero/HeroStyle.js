import styled from 'styled-components';

const HeroStyle = styled.section`
  position: relative;
  width: 100%;
  padding: 140px 0 100px 0;
  margin-bottom: -75px;

  &::before {
    // content: '';
    position: absolute;
    right: -100%;
    top: 20%;
    width: 250%;
    height: 200%;
    z-index: -1;
    background-color: #e8ecf5;
    transform: skewY(135deg);
  }

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

  h1 {
    margin: 0 0 10px 0;
    font-size: 48px;
    font-weight: 500;
    line-height: 56px;
    color: #008446;
    font-family: 'Poppins', sans-serif;

    @media (max-width: 768px) {
      font-size: 28px;
    }
  }

  .hero-img {
    img {
      width: 100%;
      max-width: 100%;
      height: auto;
    }
  }

  @media (max-width: 991px) {
    text-align: center;

    .hero-img {
      text-align: center;

      img {
        width: 60%;
      }
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 28px;
      line-height: 36px;
    }

    .hero-img img {
      width: 70%;
    }
  }

  @media (max-width: 575px) {
    .hero-img img {
      width: 80%;
    }
  }
`;

export default HeroStyle;
