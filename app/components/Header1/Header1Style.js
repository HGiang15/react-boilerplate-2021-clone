import styled from 'styled-components';

const Header1Style = styled.header`
  width: 100%;
  padding: 15px 0;
  transition: all 0.5s;
  z-index: 997;

  &.header-transparent {
    background: transparent;
  }

  &.header-scrolled {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
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

  .logo {
    h1 {
      margin: 0;
      padding: 6px 0;
      font-size: 30px;
      line-height: 1;
      letter-spacing: 2px;

      a {
        color: #008446;
      }

      .img-fluid {
        padding: 6px 0;
        max-height: 47px;
      }
    }
  }

  .nav-menu {
    .nav__list {
      margin: 0;
      padding: 0;
      display: flex;

      .nav__item {
        position: relative;

        .nav__link {
          display: block;
          font-size: 14px;
          padding: 12px 15px;
          color: #000;
          text-decoration: none;
          font-family: 'Roboto', sans-serif;

          &:hover {
            color: #008446;
          }
        }

        &.active .nav__link {
          color: #008446;
        }
      }
    }
  }

  /* Responsive for Mobile */
  @media (max-width: 992px) {
    .nav-menu {
      display: none;

      &.mobile-active {
        display: block;
        position: fixed;
        top: 60px;
        left: 50%;
        width: 96%;
        transform: translateX(-50%);
        background: rgba(255, 255, 255, 0.95);
        box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        z-index: 999;

        .nav__list {
          flex-direction: column;

          .nav__link {
            font-weight: 600;
            padding: 12px 20px;
            color: #47536e;
          }
        }
      }
    }

    /* toggle menu (icon bars and times) */
    .mobile-nav-toggle {
      position: absolute;
      top: 15px;
      right: 22px;
      display: block;
      cursor: pointer;
      color: #008446;
      font-size: 24px;
      z-index: 1000;

      &.menu-open {
        color: #fff;
      }
    }

    /* overlay */
    .overlay {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      z-index: 998;
    }
  }

  /* hide icon bar */
  @media (min-width: 992px) {
    .mobile-nav-toggle {
      display: none;
    }
  }
`;

export default Header1Style;
