import { FC } from 'react';
import { useGetAcademics } from '../../API/academic/getAcademics';
import { Box, Button } from '@mui/material';
import { AcademicsCard } from '../../components/Card/AcademicsCard';
import { CardContainer } from '../../styled/academics.styled';
import Typography from '@mui/material/Typography';
import { AcademicDialog } from '../../components/Dialog/AcademicDialog';

interface Props {
  onOpen: () => void;
  isOpen: boolean;
  handleSubmit: () => void;
  handleClose: () => void;
}
const Academic: FC<Props> = ({ onOpen, isOpen, handleSubmit, handleClose }) => {
  const { data } = useGetAcademics();
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          padding: '50px',
          margin: '50px',
        }}
      >
        <Typography variant="h1" color="text.secondary">
          this is the first title
        </Typography>
        <Typography variant="h3" color="text.secondary">
          this is the second title
        </Typography>
        <Typography variant="subtitle1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel dolor
          sit amet nibh euismod lobortis. Nullam consequat odio non est aliquet,
          ac consectetur lorem maximus. Nunc vel turpis in ex hendrerit
          fringilla. Duis vel orci ac elit consequat bibendum. Suspendisse
          porttitor malesuada elit, at malesuada nibh lacinia vitae. Etiam nec
          faucibus nisl, nec scelerisque metus. Nullam sit amet ligula id velit
          luctus vestib
        </Typography>

        <Button sx={{ margin: '50px' }} variant="outlined">
          Open form dialog
        </Button>
        {isOpen && (
          <AcademicDialog
            isOpen={isOpen}
            handleSubmit={handleSubmit}
            handleClose={handleClose}
          />
        )}
      </Box>
      <CardContainer>
        {data?.map((item, id) => (
          <AcademicsCard
            key={id}
            firstName={item.firstName}
            lastName={item.lastName}
            email={item.email}
            imageUrl={item.imageUrl}
            degree={item.degree}
            subject={item.subject}
            career={item.career}
            city={item.city}
          />
        ))}
      </CardContainer>
    </Box>
  );
};
export default Academic;
