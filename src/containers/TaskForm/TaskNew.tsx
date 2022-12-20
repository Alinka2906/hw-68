import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {ApiTask, Task} from '../../types';
import axiosApi from '../../axiosApi';
import TaskForm from './TaskForm';


const TasksNew = () => {
  const navigate = useNavigate();
  const [creating, setCreating] = useState(false)

  const createTask = async (task: ApiTask) => {
    try {
      setCreating(true);
      await axiosApi.post('/tasks.json', task);
      navigate('/');
    } finally {
      setCreating(false)
    }
  };
  return (
    <div className="row mt-2 col-12">
      <div className="col-md-8 offset-md-2">
        <TaskForm onSubmit={createTask} isLoading={creating}/>
      </div>
    </div>
  );
};

export default TasksNew;