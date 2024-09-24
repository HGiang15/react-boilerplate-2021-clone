/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import loginLogo from 'images/customIcons/login-logo.png';

import history from 'utils/history';
import { ROUTER_INDEX } from 'utils/constants';
import { login } from '../../actions';

import { validate } from './validate';
import LoginFormStyle from './LoginFormStyle';

export default function LoginForm() {
  const dispatch = useDispatch();
  const { errorText = '' } = useSelector(state => state.login || {});

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      custom_id: null,
      password: null,
    },
    validate,
    onSubmit: values => {
      dispatch(login(values));
    },
  });

  useEffect(() => {
    if (errorText) {
      formik.setFieldError('custom_id', errorText);
    }
  }, [errorText]);

  return (
    <LoginFormStyle>
      <div className="loginForm">
        <form onSubmit={formik.handleSubmit}>
          <div className="logoBox">
            <img src={loginLogo} alt="" />
          </div>
          <TextField
            fullWidth
            hiddenLabel
            placeholder="Enter User ID"
            name="custom_id"
            variant="outlined"
            margin="dense"
            onChange={formik.handleChange}
            value={formik.values.custom_id}
            error={formik.touched.custom_id && !!formik.errors.custom_id}
            helperText={formik.touched.custom_id && formik.errors.custom_id}
          />
          <TextField
            fullWidth
            hiddenLabel
            placeholder="Password"
            name="password"
            type="password"
            variant="outlined"
            margin="dense"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={formik.touched.password && !!formik.errors.password}
            helperText={formik.touched.password && formik.errors.password}
          />

          <div className="btnBox">
            <Button variant="contained" size="large" type="submit">
              LOGIN
            </Button>
          </div>
        </form>
      </div>
    </LoginFormStyle>
  );
}

LoginForm.propTypes = {};
