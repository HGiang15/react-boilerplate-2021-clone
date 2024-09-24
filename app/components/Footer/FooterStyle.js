import styled from 'styled-components';

const FooterStyle = styled.div`
  width: 100%;
  align-self: end;
  display: flex;
  padding: 2rem 0;
  .footerWrap {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    .copyright {
      text-align: center;
      line-height: 1;
      font-size: 0.8rem;
      color: #858796;
    }
  }
`;

export default FooterStyle;
