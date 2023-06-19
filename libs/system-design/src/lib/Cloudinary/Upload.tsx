import {Box, Button, Typography} from "@mui/material";
import * as React from "react";
import CircularProgress, {
  CircularProgressProps,
} from '@mui/material/CircularProgress';

interface Props {
  setFiledValue: (name: string, newValue: string) => void;
  label: string;
  name: string;
  desc?: string;
}

export const FileUpload: React.FC<Props> = ({setFiledValue, label, name, desc}) => {
  const [progress, setProgress] = React.useState(10);
  const [inProgress, setInProgress] = React.useState(false);
  const [isUploaded, setIsUploaded] = React.useState('');
  const uploadImage = (file: File) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "almuntad_preset_h1s2a3");
    return new Promise<string>((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.upload.onprogress = (event) => {
        const percentCompleted = Math.round((event.loaded * 100) / event.total);
        setProgress(percentCompleted);
      };

      xhr.onload = () => {
        const response = JSON.parse(xhr.responseText);
        if (response.secure_url) {
          resolve(response.secure_url);
        } else {
          reject(new Error("Failed to upload file."));
        }
      };

      xhr.onerror = () => {
        reject(new Error("Failed to upload file."));
      };

      xhr.open("POST", "https://api.cloudinary.com/v1_1/dieieuuby/image/upload");
      xhr.send(formData);
    });
  };
  return (
    <>
      <div className='flex w-full items-center'>
        <Button variant="contained" component="label" sx={{
          minHeight: '5vh',
        }}>
          {label}
          <input hidden name={name} type="file" id='file' onChange={async (e) => {
            setInProgress(true);
            const target = e.target as HTMLInputElement;
            const file: File = (target.files as FileList)[0];
            const fileUrl = await uploadImage(file);
            setInProgress(false);
            setIsUploaded(fileUrl)
            setFiledValue(name, fileUrl)
          }
          }/>
        </Button>
        <div className='flex item-center justify-center gap-3'>
          <p style={{
            marginLeft: '1rem',
            fontSize: '.8rem',
            color: 'gray'
          }}>
            {desc}
          </p>
        </div>
      </div>
      {
        inProgress ? <div className='flex items-center gap-5'>
            <CircularProgressWithLabel value={progress}/>
            <p style={{
              fontSize: '.8rem',
              color: 'gray'
            }}>
              Uploading...
            </p>
          </div>
          : isUploaded ? <p style={{
              fontSize: '.8rem',
              color: 'gray'
            }}>
              Uploaded Successfully
            </p>
            : null
      }
    </>

  )
}


function CircularProgressWithLabel(
  props: CircularProgressProps & { value: number },
) {
  return (
    <Box sx={{position: 'relative', display: 'inline-flex'}}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}
