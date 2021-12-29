import {BrowserRouter, Routes, Route} from 'react-router-dom'
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import Navbar from './components/Navbar';
import {Container} from '@mui/material';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Container>
        <Routes>
          <Route path="/" element={<TaskList/>} />
          <Route path="/task/new" element={<TaskForm/>} />
          {/* <Route path="/task/:id" element={<TaskForm/>} /> */}
        </Routes>
      </Container>
    </BrowserRouter>
  )
}