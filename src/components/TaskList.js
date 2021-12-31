import {useEffect, useState} from 'react';
import {Button, Card, CardContent, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';

export default function TaskList() {

    const navigate = useNavigate();

    const loadTasks = async () => {
        const res = await fetch('http://localhost:4000/tasks');
        const data = await res.json();
        setTasks(data);
    }

    const [tasks, setTasks] = useState([])

    const handleDelete = async (id) => {
        await fetch(`http://localhost:4000/tasks/${id}`, {
            method: 'DELETE'
        });
        loadTasks();
    }

    const handleUpdate = async (id) => {
        navigate(`/task/${id}/edit`);
        
        loadTasks();
    }
    
    useEffect(() => {
        loadTasks();
    }, [])

    return (
        <>
            <h1>{tasks.length === 0 ? 'There are not tasks yet' : `Task List (${tasks.length})`}</h1>
            {
                tasks.map((task) => (
                    <Card style={{ marginBottom: '.7rem', backgroundColor: '#1e272e'}} key={task.id}>
                        <CardContent style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div style={{color: 'white'}}>
                                <Typography>{task.title}</Typography>
                                <Typography>{task.description}</Typography>
                            </div>

                            <div>
                                <Button 
                                    variant='contained' 
                                    color='inherit' 
                                    onClick={() => handleUpdate(task.id)}
                                >
                                    Edit
                                </Button>
                                <Button
                                    variant='contained'
                                    color='warning'
                                    style={{marginLeft: '.5rem'}}
                                    onClick={() => handleDelete(task.id)}
                                >
                                    Delete
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                ))
            }
        </>
    )
}
