import {Button, Card, CardContent, CircularProgress, Grid, TextField, Typography} from '@mui/material';

import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

export default function TaskForm(props) {

    const {id} = useParams();

    const navigate = useNavigate();

    const [task, setTask] = useState({
        title: '',
        description: ''
    });

    useEffect(() => {
        console.log(id);
    }, [])

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true)
        
        const res = await fetch("http://localhost:4000/tasks", {
            method: "POST",
            body: JSON.stringify(task),
            headers: {
                "Content-Type": "application/json"
            }
        });
        
        setLoading(false)
        navigate('/');
    }

    const handleChange = (e) => {
        setTask({...task, [e.target.name]: e.target.value})
    }

    return (
        <Grid container direction="column" alignItems="center" justifyContent="center">
            <Grid item xs={3}>
                <Card
                    sx={{mt: 5}}
                    style={{backgroundColor: '#1e272e', padding: '1rem'}}
                >
                    <Typography variant='5' textAlign="center" color='white'>
                        Create Task
                    </Typography>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <TextField 
                                variant='filled' 
                                label='Write your title'
                                sx={{display: 'block', margin: '.5rem 0'}}
                                inputProps={{style: {color: 'white'}}}
                                name="title"
                                InputLabelProps={{style: {color: 'white'}}}
                                onChange={handleChange}
                            />

                            <TextField 
                                variant='filled' 
                                label='Write your description'
                                multiline
                                name="description"
                                rows={4}
                                sx={{display: 'block', margin: '.5rem 0'}}
                                inputProps={{style: {color: 'white'}}}
                                InputLabelProps={{style: {color: 'white'}}}
                                onChange={handleChange}
                            />

                            <Button variant='contained' color='primary' type='submit' disabled={!task.title || !task.description}>
                                {loading ? <CircularProgress 
                                                color="inherit"
                                                size={24}
                                /> : 'Create'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
