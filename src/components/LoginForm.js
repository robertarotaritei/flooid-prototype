import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";

function LoginForm(props) {
    let history = useHistory();

    function renderRegister() {
        history.push("/register");
    }

    return (
        <div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
             <Grid padding={20}>
        <div className='loginForm'>
            <Typography>Login</Typography>
            <TextField label="Username"/>
            <TextField label="Password" type="password"/>
            <Button>Log in</Button>
            <div style={{ display: 'flex', marginBottom: '30px', marginTop: '30px' }}>
              <p> Don't have an account?</p>
              <button className='button' onClick={() => renderRegister()} >
                Register
              </button>
            </div>
        </div>
        </Grid>
        </div>
    );
}

export default LoginForm