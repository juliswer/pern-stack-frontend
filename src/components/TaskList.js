import {useEffect, useState} from 'react';
import {Card, CardContent, Typography} from '@mui/material';

export default function TaskList() {

    const loadTasks = async () => {
        const res = await fetch('http://localhost:4000/tasks');
        const data = await res.json();
        setTasks(data);
    }

    const [tasks, setTasks] = useState({})
    
    useEffect(() => {
        loadTasks();
    }, [])

    return (
        <>
            <h1>Task List</h1>
            {
                tasks.map(task => (
                    <Card style={{ marginBottom: '.7rem' }}>
                        <CardContent>
                            <Typography>{task.title}</Typography>
                            <Typography>{task.description}</Typography>
                        </CardContent>
                    </Card>
                ))
            }
        </>
    )
}
