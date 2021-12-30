import {Button, Card, CardContent, Grid, TextField, Typography} from '@mui/material';

import {useState, useEffect} from 'react';

export default function TaskForm() {

    const [task, setTask] = useState({
        title: '',
        description: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log(task);
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

                            <Button variant='contained' color='primary' type='submit'>
                                Save
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
