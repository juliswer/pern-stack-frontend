import {Button, Card, CardContent, CircularProgress, Grid, TextField, Typography} from '@mui/material';

import {useState, useEffect} from 'react';
import {useNavigate, useParams} from 'react-router-dom';

export default function TaskForm(props) {

    const {id} = useParams();

    
    const loadTask = async (id) => {
        const res = await fetch('http://localhost:4000/tasks/' + id);
        const data = await res.json();
        setTask({ title: data.title, description: data.description })
        setEditing(true)
    }
    
    useEffect(() => {
        if (id) {
          loadTask(id);
        }
      }, [id]);

    const navigate = useNavigate();

    const [task, setTask] = useState({
        title: '',
        description: ''
    });

    const [editing, setEditing] = useState(false)

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        
        try {
            if (editing) {
              const response = await fetch(
                "http://localhost:4000/tasks/" + id,
                {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(task),
                }
              );
              await response.json();
            } else {
              const response = await fetch("http://localhost:4000/tasks", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(task),
              });
              await response.json();
            }
      
            setLoading(false);
            navigate("/");
          } catch (error) {
            console.error(error);
          }
    }

    const handleChange = (e) => {
        setTask({...task, [e.target.name]: e.target.value})
    }

    return (
        <Grid container direction="column" alignItems="center" justifyContent="center">
            <Grid item xs={3} >
                <Card
                    sx={{mt: 5}}
                    style={{backgroundColor: '#000d7cef', padding: '1rem'}}
                >
                    <Typography variant='5' textAlign="center" color='white'>
                        {id ? 'Edit Task' : 'New Task'}
                    </Typography>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <TextField 
                                variant='filled' 
                                label={id ? 'Update your title' : 'Write your title'}
                                sx={{display: 'block', margin: '.5rem 0'}}
                                inputProps={{style: {color: 'white'}}}
                                name="title"
                                value={task.title}
                                InputLabelProps={{style: {color: 'white'}}}
                                onChange={handleChange}
                            />

                            <TextField 
                                variant='filled' 
                                label={id ? 'Update your description' : 'Write your description'}
                                multiline
                                name="description"
                                rows={4}
                                value={task.description}
                                sx={{display: 'block', margin: '.5rem 0'}}
                                inputProps={{style: {color: 'white'}}}
                                InputLabelProps={{style: {color: 'white'}}}
                                onChange={handleChange}
                            />

                            <Button variant='contained' color='primary' type='submit' disabled={!task.title || !task.description}>
                                {loading ? <CircularProgress 
                                                color="inherit"
                                                size={24}
                                            /> 
                                        : void(0)
                                }
                                {id ? 'Update' : 'Create'}
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
    )
}
