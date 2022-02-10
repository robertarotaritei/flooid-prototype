import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useHistory } from "react-router-dom";

function NavigationBar(props) {
    let history = useHistory();

    function renderInformation() {
        history.push("/information");
    }
    
    function renderDashboard() {
        history.push("/home");
        history.go(0);
    }

    function renderAboutUs() {
        history.push("/about");
    }

    function renderLogin() {
        history.push("/login");
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar className='navbar' position="static" style={{ background: '#282c34' }}>
                <Toolbar>
                    <Typography variant="h5" component="div" align="left">
                        Flooid
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    <Button color="inherit" onClick={() => renderDashboard()}>Dashboard</Button>
                    <Button color="inherit" onClick={() => renderInformation()}>Information</Button>
                    <Button color="inherit" onClick={() => renderAboutUs()}>About us</Button>
                    </Box>
                    <Box sx={{ flexGrow: 0}}>
                    <Button color="inherit" onClick={() => renderLogin()}>Login</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavigationBar