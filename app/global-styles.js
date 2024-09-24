import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: 'Roboto', 'M PLUS 1p', 'Nunito', Arial, sans-serif;
    font-size: 1rem;
    height: 100%;
    width: 100%;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #858796;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  .non-touch {
    pointer-events: none;
  }

  a {
    text-decoration: none;
    &:hover {
      text-decoration: none;
    }
  }

  a, button {
    &:focus, &:active {
      outline: 0;
    }
  }

  .textUnderline {
    text-decoration: underline;
  }

  img {
    max-width: 100%;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .errorText {
    color: red;
    font-size: 11px;
  }

  .whiteBox {
    padding: 1.25rem;
    box-shadow: 0 0.15rem 1.75rem 0 rgb(58 59 69 / 15%);
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid #e3e6f0;
    border-radius: 0.35rem;
    min-height: 400px;
  }

  .pageTitle {
    color: #111827;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    font-size: 1.75rem;
    font-weight: 300;
    line-height: 1.2;
    color: #5a5c69;
    margin: 0 0 1.5rem;
    > span {
      display: flex;
      align-items: center;
      padding: 0 5px 0 0;
    }
    i {
      margin: 0 5px 0 0;
    }

    .btnCreateNew {
      padding: 0;
      border: 0;
      box-shadow: 0 0.125rem 0.25rem 0 rgb(58 59 69 / 20%);
      padding: 0.25rem 0.5rem;
      font-size: 0.875rem;
      line-height: 1.5;
      border-radius: 0.2rem;
      color: #ffffff;
      background-color: #4e73df;
      border-color: #4e73df;
      text-align: center;
      &:hover {
        background-color: #2e59d9;
        border-color: #2653d4;
      }
    }
  }

  // table
  .MuiTableCell-root {
    border: 1px solid rgba(224, 224, 224, 1);
  }

  // pagination
  .customPagination {
    padding: 10px 0;
    display: flex;
    justify-content: flex-end;
    .MuiPagination-ul {
      li {
        &:first-child {
          button {
            border-top-left-radius: 0.35rem;
            border-bottom-left-radius: 0.35rem;
          }
        }
        &:last-child {
          button {
            border-top-right-radius: 0.35rem;
            border-bottom-right-radius: 0.35rem;
          }
        }
      }
      button {
        border-radius: 0;
        border: 1px solid #dddfeb;
        margin: 0;
        margin-left: -1px;
        color: #4e73df;
        background: #fff;
        min-width: 36px;
        height: 38px;
        font-size: 1rem;
        font-weight: 300;
        &:hover {
          background: #eaecf4;
        }
        &.Mui-selected {
          pointer-events: none;
          color: #fff;
          background: #4e73df;
        }
      }
    }
  }

  .MuiPaper-root.MuiPaper-rounded {
    box-shadow: none;
  }

  // form
  .searchListForm {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 0 0 10px;
    > span {
      font-weight: 300;
      padding: 0 10px 0 0;
    }
    .fieldWrapper {
      width: 189px;
      input {
        height: 31px;
        box-sizing: border-box;
        padding: 0.25rem 0.5rem;
        font-size: 0.875rem;
        color: #6e707e;
        border: 1px solid #d1d3e2;
        border-radius: 4px;
      }
    }
  }

  button {
    cursor: pointer;
  }

  .MuiFormControl-root {
    .MuiFormHelperText-root {
      margin-left: 0;
      color: #d32f2f!important;
    }
  }
  .loginForm {
    form {
      .MuiFormControl-root {
        margin: 0 0 1rem;
        .MuiFormHelperText-root {
          margin: 5px 0 0;
        }
        .MuiOutlinedInput-root {
          border-radius: 10rem;
          fieldset {
            border-color: #d1d3e2;
          }
          input {
            height: calc(1.5em + .75rem + 2px);
            padding: 1.5rem 1rem;
            box-sizing: border-box;
            font-size: .8rem;
            color: #6e707e;
            &::-webkit-input-placeholder {
              color: #6e707e;
            }
          }
        }
      }
    }
  }

  // customBootstrapDialog
  .confirmationDialog {
    .dialogContent {
      width: 300px;
      text-align: center;
      padding: 40px;
      .dialogTitle {
        margin: 0 0 30px;
        font-weight: normal;
      }
    }
  }

  .customBootstrapDialog.MuiDialog-root {
    &.logoutDialog {
      .MuiPaper-root {
        width: 100%;
        max-width: 500px;
      }
    }

    .MuiTypography-root {
      font-weight: 400;
      line-height: 1.5;
      color: #858796;
    }

    .MuiPaper-root {
      width: 100%;
      max-width: 800px;
    }

    .MuiDialogTitle-root {
      font-weight: 400;
      line-height: 1.5;
      color: #858796;
      .MuiButtonBase-root {
        top: 12px;
      }
    }

    .MuiDialogActions-root {
      padding: 1rem;
    }

    .btn {
      margin-left: 0.5rem;
      color: #fff;
      font-weight: 400;
      border: 1px solid transparent;
      padding: 0.375rem 0.75rem;
      font-size: 1rem;
      line-height: 1.5;
      border-radius: 0.35rem;
    }

    .btnSubmit {
      background-color: #4e73df;
      border-color: #4e73df;
      &:hover {
        background-color: #2e59d9;
        border-color: #2653d4;
      }
    }

    .btnCancel {
      background-color: #858796;
      border-color: #858796;
      &:hover {
        background-color: #717384;
        border-color: #6b6d7d;
      }
    }
  }

  // header
  .wrapHeaderMenu {
    margin-top: 22px;
    .divider {
      height: 0;
      margin: 0.5rem 0;
      overflow: hidden;
      border-top: 1px solid #eaecf4;
    }
    li {
      padding: 0 1.5rem 0 1rem;
      color: #3a3b45;
      font-size: 0.85rem;
      font-weight: 300;
      &:hover {
        color: #2e2f37;
        background-color: #f8f9fc;
      }
      i {
        color: #d1d3e2;
        margin: 0.5rem;
      }
    }
  }

  // alert
  .alert {
    font-size: 1rem;
    color: green;
    &.emergency {
      color: red;
    }
    &.communication {
      color: orange;
    }
  }
`;

export default GlobalStyle;
