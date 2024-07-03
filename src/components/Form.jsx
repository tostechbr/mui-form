import { useState } from 'react';
import { Button, TextField, Box, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserForm = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    nome: '',
    sobrenome: '',
    email: '',
    telefone: '',
    senha: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const validate = () => {
    let tempErrors = {};
    tempErrors.nome = formData.nome ? "" : "Nome é obrigatório";
    tempErrors.sobrenome = formData.sobrenome ? "" : "Sobrenome é obrigatório";
    tempErrors.email = (/$^|.+@.+..+/).test(formData.email) ? "" : "Email inválido";
    tempErrors.telefone = formData.telefone.length > 9 ? "" : "Telefone inválido";
    tempErrors.senha = formData.senha.length > 5 ? "" : "Senha deve ter pelo menos 6 caracteres";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      setLoading(true);
      await onRegister(formData);
      setLoading(false);
      navigate('/dashboard');
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: 2, 
        maxWidth: '400px', 
        margin: 'auto', 
        padding: '2rem', 
        backgroundColor: 'white', 
        borderRadius: '8px', 
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' 
      }}
    >
      <TextField 
        label="Nome" 
        name="nome" 
        value={formData.nome} 
        onChange={handleChange} 
        error={!!errors.nome} 
        helperText={errors.nome} 
        required 
      />
      <TextField 
        label="Sobrenome" 
        name="sobrenome" 
        value={formData.sobrenome} 
        onChange={handleChange} 
        error={!!errors.sobrenome} 
        helperText={errors.sobrenome} 
        required 
      />
      <TextField 
        label="Email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        error={!!errors.email} 
        helperText={errors.email} 
        required 
      />
      <TextField 
        label="Telefone" 
        name="telefone" 
        value={formData.telefone} 
        onChange={handleChange} 
        error={!!errors.telefone} 
        helperText={errors.telefone} 
        required 
      />
      <TextField 
        label="Senha" 
        name="senha" 
        type="password" 
        value={formData.senha} 
        onChange={handleChange} 
        error={!!errors.senha} 
        helperText={errors.senha} 
        required 
      />
      <Box sx={{ position: 'relative' }}>
        <Button 
          type="submit" 
          variant="contained" 
          disabled={loading}
          sx={{ width: '100%' }}
        >
          {loading ? 'Enviando...' : 'Enviar'}
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>
    </Box>
  );
};

UserForm.propTypes = {
  onRegister: PropTypes.func.isRequired,
};

export default UserForm;
