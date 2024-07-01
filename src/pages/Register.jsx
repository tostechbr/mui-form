import { Typography, Box } from '@mui/material';
import UserForm from '../components/Form';
import PropTypes from 'prop-types';

const Register = ({ onRegister }) => {
  return (
    <Box sx={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
      <Box sx={{ width: '100%', maxWidth: 400, p: 3 }}>
        <Typography variant="h4" gutterBottom align="center">Register</Typography>
        <UserForm onRegister={onRegister} />
      </Box>
    </Box>
  );
};

Register.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default Register;
