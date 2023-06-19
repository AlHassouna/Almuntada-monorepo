import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  success: string;
  error: string;
  status: number;
  email?: string;
}

export const Alerts: React.FC<Props> = ({success, error, status, email}) => {
  const [open, setOpen] = useState(true);


  return (
    <Box sx={{width: '100%'}}>
      <Collapse in={open}>
        {status === 201 ? (
          <Alert
            severity="success"
            action={
              <IconButton
                aria-label="close"
                sx={{
                  position: 'fixed',
                  left: '0',
                }}
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit"/>
              </IconButton>
            }
          >
            {success}
          </Alert>
        ) : status === 400 ? (
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit"/>
              </IconButton>
            }
          >
            {error}
          </Alert>
        ) : status === 409 ? (
          <Alert
            severity="error"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  setOpen(false);
                }}
              >
                <CloseIcon fontSize="inherit"/>
              </IconButton>
            }
          >
            {email}
          </Alert>
        ) : null}
      </Collapse>
    </Box>
  );
};
