import {useEffect, useState} from 'react';
import {Button, Card, CardContent, Typography} from '@mui/material';

export default function TaskList() {

    const loadTasks = async () => {
        const res = await fetch('http://localhost:4000/tasks');
        const data = await res.json();
        setTasks(data);
    }

    const [tasks, setTasks] = useState([])
    
    useEffect(() => {
        loadTasks();
    }, [])

    return (
        <>
            <h1>Task List</h1>
            {
                tasks.map((task) => (
                    <Card style={{ marginBottom: '.7rem', backgroundColor: '#1e272e'}}>
                        <CardContent>
                            <Typography>{task.title}</Typography>
                            <Typography>{task.description}</Typography>

                            <Button 
                                variant='contained' 
                                color='inherit' 
                                onClick={() => console.log('editing')}
                            >
                                Edit
                            </Button>
                            <Button
                                variant='contained'
                                color='warning'
                                onClick={() => console.log('deleting')}
                            >
                                Delete
                            </Button>
                        </CardContent>
                    </Card>
                ))
            }
        </>
    )
}
