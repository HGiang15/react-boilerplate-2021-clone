import styled from 'styled-components';

const MainNavStyle = styled.div`
  background: #3a3b45;
  min-height: 100%;
  .sideMenuWrapper {
    width: 224px;
    @media screen and (max-width: 769px) {
      width: 104px;
    }
    &.showLessMenu {
      width: 104px;
      .mainNavText {
        flex-wrap: wrap;
        justify-content: center;
        i {
          margin: 0 0 3px;
        }
        span {
          width: 100%;
          font-size: 0.65rem;
          text-align: center;
        }
      }
    }
    &.hideMenu {
      @media screen and (max-width: 769px) {
        display: none;
      }
    }
  }
  .mainNavBranch {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    padding: 17px 1rem 21px;
    i {
      font-size: 2rem;
    }
    span {
      font-weight: 800;
      margin: 0 1rem;
      @media screen and (max-width: 769px) {
        display: none;
      }
    }
  }

  .wrapLinks {
    .mainNavText {
      @media screen and (max-width: 769px) {
        flex-wrap: wrap;
        justify-content: center;
        i {
          margin: 0 0 3px;
        }
        span {
          width: 100%;
          font-size: 0.65rem;
          text-align: center;
        }
      }
    }
    a {
      color: rgba(255, 255, 255, 0.8);
      width: 100%;
      padding: 1.1rem;
      display: flex;
      align-items: center;
      font-size: 0.85rem;
      &.active,
      &:hover {
        color: #ffffff;
        i {
          color: #ffffff;
        }
      }
      i {
        color: rgba(255, 255, 255, 0.3);
        font-size: 0.85rem;
        margin-right: 0.6rem;
      }
    }
  }

  .toggleMenuBox {
    display: flex;
    justify-content: center;
    @media screen and (max-width: 769px) {
      display: none;
    }
    button {
      border: 0;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 0.35rem;
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      padding: 10px;
      color: rgba(255, 255, 255, 0.5);
      padding: 5px;
      justify-content: center;
      font-size: 0.9rem;
      transtion: all 0.3s ease 0s;
      &:hover {
        background: rgba(255, 255, 255, 0.25);
      }
    }
    i {
      position: relative;
      left: -1px;
    }
  }

  .sidebar-divider {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    margin: 0 1rem 1rem;
  }
`;

export default MainNavStyle;
