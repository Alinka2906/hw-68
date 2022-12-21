import React, {useEffect, useState} from 'react';
import {fetchTasks} from './tasksThunks';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import Spinner from '../../components/Spinner/Spinner';
import TaskItem from './TaskItem';
import axiosApi from '../../axiosApi';
import TasksNew from '../TaskForm/TaskNew';
import {ApiTask, ApiTasksList, Task, TaskMutation} from '../../types';
import {useNavigate, useParams} from 'react-router-dom';

interface Props {
  newTasks?: Task[];
}


const Tasks: React.FC<Props> = ({newTasks}) => {
  const navigate = useNavigate();
  const [task, setTask] = useState<ApiTask | null>(null);
  const [updating, setUpdating] = useState(false);

  const dispatch = useAppDispatch();
  const tasks = useAppSelector(state => state.tasks.items);
  const loadingState = useAppSelector(state => state.tasks.fetchLoading);

  const deleteTask = async (id: string) => {
    if (window.confirm('Do you really want to delete this task?')) {
      await axiosApi.delete('/tasks/' + id + '.json');
      await dispatch(fetchTasks());
    }
  };

  const updateTask = async (id: string) => {
    try {
      setUpdating(true);
      await axiosApi.put('/task/' + id + '.json', task);
      navigate('/');
    } finally {
      setUpdating(false);
    }
  };

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  return (
    <div>
      <div>
        <TasksNew/>
      </div>
      <div className='d-flex flex-wrap justify-content-around'>
      {loadingState === 'pending' ? <Spinner/> : tasks.map(task => (
              <TaskItem
                newTasks={task}
                key={task.id}
                task={task}
                onClick={() => updateTask(task.id)}
                onDelete={() => deleteTask(task.id)}
              />
            ))}
              </div>
          </div>
  );
};

export default Tasks;