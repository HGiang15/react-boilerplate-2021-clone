import styled from 'styled-components';

export const GallerySection = styled.section`
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

  .slick-dots {
    bottom: -30px;
  }

  .slick-dots li button {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background-color: #eff2f8;
    opacity: 1;
    transition: background-color 0.3s, transform 0.3s;
  }

  .slick-dots li.slick-active button {
    background-color: #005f3c;
    transform: scale(1.2);
  }

  /* Hide dot default */
  .slick-dots li button:before {
    display: none;
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

    .gallery-carousel {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 15px;
      padding-top: 30px;
    }

    .gallery-carousel .owl-stage-outer {
      overflow: visible;
    }

    @media (min-width: 992px) {
      .gallery-carousel .center {
        overflow: hidden;
        border: 6px solid #008446;
        padding: 4px;
        background: #fff;
        z-index: 1;
        transform: scale(1.2);
        margin-top: 10px;
        border-radius: 25px;
      }
    }
  }
`;

export const ImageLink = styled.a`
  img {
    border-radius: 15px;
    transition: transform 0.3s ease-in-out;
    max-width: 100%;
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
    padding: 0 10px;

    &:hover {
      transform: scale(1.01);
    }
  }
`;
