import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from '@mui/material';
import { FC } from 'react';

interface Props {
  handleClose: () => void;
  onSubmit: () => void;
  isOpen: boolean;
  onChange: (filed: string, data: string) => void;
}
export const AcademicDialog: FC<Props> = ({
  handleClose,
  onSubmit,
  isOpen,
  onChange,
}) => {
  return (
    <Dialog open={isOpen} onClose={handleClose}>
      <DialogTitle>Subscribe</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To subscribe to this website, please enter your email address here. We
          will send updates occasionally.
        </DialogContentText>
        <TextField
          autoFocus
          id="firstName"
          label="first Name"
          type="text"
          fullWidth
          variant="standard"
          onChange={(r) => onChange(r.currentTarget.id, r.target.value)}
        />
        <TextField
          autoFocus
          id="lastName"
          label="last Name"
          type="text"
          fullWidth
          variant="standard"
          onChange={(r) => onChange(r.currentTarget.id, r.target.value)}
        />
        <TextField
          autoFocus
          id="age"
          label="age"
          type="number"
          fullWidth
          variant="standard"
          onChange={(r) => onChange(r.currentTarget.id, r.target.value)}
        />
        <TextField
          autoFocus
          id="imageUrl"
          label="image Url"
          type="text"
          fullWidth
          variant="standard"
          onChange={(r) => onChange(r.currentTarget.id, r.target.value)}
        />
        <TextField
          autoFocus
          id="email"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
          onChange={(r) => onChange(r.currentTarget.id, r.target.value)}
        />
        <TextField
          autoFocus
          id="city"
          label="city"
          type="text"
          fullWidth
          variant="standard"
          onChange={(r) => onChange(r.currentTarget.id, r.target.value)}
        />
        <TextField
          autoFocus
          id="degree"
          label="degree"
          type="text"
          fullWidth
          variant="standard"
          onChange={(r) => onChange(r.currentTarget.id, r.target.value)}
        />
        <TextField
          autoFocus
          id="subject"
          label="subject"
          type="text"
          fullWidth
          variant="standard"
          onChange={(r) => onChange(r.currentTarget.id, r.target.value)}
        />
        <TextField
          autoFocus
          id="career"
          label="career"
          type="text"
          fullWidth
          variant="standard"
          onChange={(r) => onChange(r.currentTarget.id, r.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={onSubmit}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};
