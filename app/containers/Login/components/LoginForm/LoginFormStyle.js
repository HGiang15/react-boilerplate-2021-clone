import styled from 'styled-components';

const LoginFormStyle = styled.div`
  width: 100%;
  background: #5a5c69;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 15px;
  min-height: calc(100vh - 80px);
  .loginForm {
    background: #ffffff;
    width: 100%;
    max-width: 534px;
    padding: 3rem;
    border-radius: 0.35rem;
    form {
      width: 100%;
      max-width: 500px;
      margin: 0 auto;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  .logoBox {
    margin: 0 0 1.5rem;
    img {
      width: 360px;
    }
  }
  .btnBox {
    padding: 7px 0 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    button {
      color: #ffffff;
      width: 100%;
      font-size: 0.8rem;
      border-radius: 10rem;
      padding: 0.75rem 1rem;
      background: #858796;
      border-color: #858796;
    }
  }
`;

export default LoginFormStyle;
