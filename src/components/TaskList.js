import {useEffect} from 'react';

export default function TaskList() {

    const loadTasks = async () => {
        const res = await fetch('http://localhost:4000/tasks');
        const data = await res.json();
        console.log(data);
    }
    
    useEffect(() => {
        loadTasks();
    }, [])

    return (
        <>
            <h1>Task List</h1>
        </>
    )
}
