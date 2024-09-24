import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';

import { logout } from 'containers/App/actions';

import LogoutDialogStyle from './LogoutDialogStyle';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

const BootstrapDialogTitle = props => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

export default function LogoutDialog({
  changeLogoutDialogOpen,
  setLogoutDialogOpen,
}) {
  const dispatch = useDispatch();
  return (
    <>
      <BootstrapDialog
        className="customBootstrapDialog logoutDialog"
        onClose={() => {
          setLogoutDialogOpen(false);
        }}
        aria-labelledby="customized-dialog-title"
        open={changeLogoutDialogOpen}
      >
        <LogoutDialogStyle>
          <BootstrapDialogTitle
            id="customized-dialog-title"
            onClose={() => {
              setLogoutDialogOpen(false);
            }}
          >
            ログアウトしますか？
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography variant="subtitle1" component="div">
              現在のセッションを終了する準備ができている場合は、
              下の[ログアウト]を選択してください。
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                setLogoutDialogOpen(false);
              }}
              className="btn btnCancel"
            >
              キャンセル
            </Button>
            <Button
              type="submit"
              onClick={() => {
                setLogoutDialogOpen(false);
                dispatch(logout());
              }}
              className="btn btnSubmit"
            >
              ログアウト
            </Button>
          </DialogActions>
        </LogoutDialogStyle>
      </BootstrapDialog>
    </>
  );
}
