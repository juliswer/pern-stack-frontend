import {useEffect, useState} from 'react';
import {Button, Card, CardContent, Typography} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AutoFixOffIcon from '@mui/icons-material/AutoFixOff';

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
            { /*{ tasks.length === 0 ? (
                <Typography>
                    <AssignmentIcon />
                    {` ${tasks.length} Tasks`}
                </Typography>
            ) : (
                <Typography>
                    <AutoFixOffIcon />
                    {` ${tasks.length} Tasks`}
                </Typography>
            )} */}
            <div style={{display: 'flex'}}>
                {tasks.length === 0 ? (
                    <h2 style={{marginRight: '.3rem'}}><AssignmentIcon /></h2>
                ) : (
                    <h2 style={{marginRight: '.3rem'}}><AutoFixOffIcon /></h2>
                )}<h2>{tasks.length === 0 ? (
                    'There are not tasks yet'
                ) : `Task List (${tasks.length})`}</h2>
            </div>
            {
                tasks.map((task) => (
                    <Card style={{ marginBottom: '.7rem', backgroundColor: '#000d7cef'}} key={task.id}>
                        <CardContent style={{display: 'flex', justifyContent: 'space-between'}}>
                            <div style={{color: 'white'}}>
                                <Typography>{task.title}</Typography>
                                <Typography>{task.description}</Typography>
                            </div>

                            <div>
                                <Button 
                                    variant='outlined' 
                                    color='success' 
                                    onClick={() => handleUpdate(task.id)}
                                >
                                    <EditIcon sx={{marginRight: '.3rem'}} />
                                    Edit
                                </Button>
                                <Button
                                    variant='outlined'
                                    color='error'
                                    style={{marginLeft: '.5rem'}}
                                    onClick={() => handleDelete(task.id)}
                                >
                                    <DeleteIcon sx={{marginRight: '.3rem'}} />
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
