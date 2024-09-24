import styled from 'styled-components';

const AdminLayoutStyle = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  .mainPage {
    width: calc(100% - 224px);
    @media screen and (max-width: 769px) {
      width: calc(100% - 104px);
    }
    &.showLessMenu {
      width: calc(100% - 104px);
    }
    &.hideMenu {
      @media screen and (max-width: 769px) {
        width: 100% !important;
      }
    }
  }

  .pageContent {
    padding: 1.5rem;
    min-height: calc(100vh - 146px);
  }
`;

export default AdminLayoutStyle;
