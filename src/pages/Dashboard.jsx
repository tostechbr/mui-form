import { Container, Typography, Box } from '@mui/material';
import PropTypes from 'prop-types';

const Dashboard = ({ userData }) => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Box>
        <Typography><strong>Nome:</strong> {userData.nome}</Typography>
        <Typography><strong>Sobrenome:</strong> {userData.sobrenome}</Typography>
        <Typography><strong>Email:</strong> {userData.email}</Typography>
        <Typography><strong>Telefone:</strong> {userData.telefone}</Typography>
        <Typography><strong>Mensagem:</strong> {userData.mensagem}</Typography>
      </Box>
    </Container>
  );
};

Dashboard.propTypes = {
  userData: PropTypes.shape({
    nome: PropTypes.string,
    sobrenome: PropTypes.string,
    email: PropTypes.string,
    telefone: PropTypes.string,
    mensagem: PropTypes.string,
  }).isRequired,
};

export default Dashboard;
