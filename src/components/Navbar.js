import {AppBar, Box, Button, Container, Toolbar, Typography} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import Favicon from '../logo.svg';

export default function Navbar() {

    const navigate = useNavigate()

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position='static' color='transparent'>
                <Container>
                    <Toolbar>
                        <Typography variant='h6' sx={{flexGrow: 1}}>
                            <Link to='/' style={{textDecoration: 'none', color: '#eee'}}><img src={Favicon} style={{width: '75px', marginTop: '5px'}} /></Link>
                        </Typography>

                        <Button variant='outlined' onClick={() => navigate('/task/new')}>
                            <RocketLaunchIcon sx={{marginRight: '.3rem'}} />
                            New Task
                        </Button>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    )
}
