import styled from 'styled-components';
import { TextField, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const StyledInput = styled(TextField)`
  && {
    ${(props) =>
      props.login ? `margin-bottom: 20px; width: 80%;` : `width: 80%; padding-bottom: 20px; padding-top: 10px;`
    }
  }
`;

const LoginTextField = ({
  login,
  email,
  changeEmail,
  password,
  changePassword,
  showPassword,
  changeShowPassword,
}) => {
  return (
    <>
      <StyledInput
        login={login}
        required
        id={login ? 'standard-basic' : 'outlined-basic'}
        label="Email"
        variant={login ? 'standard' : 'outlined'}
        value={email}
        onChange={changeEmail}
      />
      <StyledInput
        login={login}
        required
        id={login ? 'standard-basic' : 'outlined-basic'}
        label="Password"
        variant={login ? 'standard' : 'outlined'}
        value={password}
        onChange={changePassword}
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={changeShowPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </>
  );
};

export default LoginTextField;
