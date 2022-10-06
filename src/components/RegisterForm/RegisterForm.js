import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Button from '@mui/material/Button';
import { Wrapper, StyledCheck } from './RegisterForm.styled';
import Checkbox from '@mui/material/Checkbox';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [checked, setChecked] = useState(true);

  const handleChangeCheck = event => {
    setChecked(event.target.checked);
  };
  const handleClickShowPassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off">
      <Wrapper>
        <TextField
          sx={{ m: 1, width: '100%' }}
          id="filled-basic"
          label="Name"
          variant="filled"
          required
          value={name}
          name="name"
          type="text"
          onChange={handleChange}
        />

        <TextField
          sx={{ m: 1, width: '100%' }}
          id="filled-basic"
          label="Email"
          variant="filled"
          required
          name="email"
          value={email}
          type="email"
          onChange={handleChange}
        />

        <FormControl sx={{ m: 1, width: '100%' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            required
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            name="password"
            onChange={handleChange}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>

        <StyledCheck>
          <Checkbox
            sx={{ color: '#333741' }}
            checked={checked}
            onChange={handleChangeCheck}
            inputProps={{ 'aria-label': 'controlled' }}
          />
          <p>I accept the Privacy Policy</p>
        </StyledCheck>

        <Button
          type="submit"
          variant="contained"
          disabled={!checked}
          sx={{
            backgroundColor: '#333741',
            opacity: 1,
            '&:hover': {
              opacity: 0.8,
              backgroundColor: '#333741',
            },
          }}
        >
          Register
        </Button>
      </Wrapper>
    </form>
  );
};

export default RegisterForm;
