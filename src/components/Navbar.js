import {AppBar, Box, Button, Container, Toolbar, Typography} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

export default function Navbar() {

    const navigate = useNavigate()

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position='static' color='transparent'>
                <Container>
                    <Toolbar>
                        <Typography variant='h6' sx={{flexGrow: 1}}>
                            <Link to='/' style={{textDecoration: 'none', color: '#eee'}}>PERN Stack</Link>
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
