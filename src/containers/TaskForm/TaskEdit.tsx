import React, {useCallback, useEffect, useState} from 'react';
import {useNavigate, useParams} from "react-router-dom";
import {ApiTask} from '../../types';
import axiosApi from '../../axiosApi';
import TaskForm from './TaskForm';

const TasksEdit = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState<ApiTask | null>(null);
  const [updating, setUpdating] = useState(false);

  const fetchOneTask = useCallback(async () => {
    const taskResponse = await axiosApi.get<ApiTask>('/tasks/' + id + '.json');
    setTask(taskResponse.data);
  }, [id]);

  useEffect(() => {
    void fetchOneTask();
  }, [fetchOneTask]);

  const updateTask = async (task: ApiTask) => {
    try {
      setUpdating(true);
      await axiosApi.put('/task/' + id + '.json', task);
      navigate('/');
    } finally {
      setUpdating(false);
    }
  };

  const existingTask = task && {
    ...task,
  };

  return (
    <div className="row mt-2">
      <div className="col">
        {existingTask && (
          <TaskForm
            onSubmit={updateTask}
            existingTask={existingTask}
            isEdit
            isLoading={updating}
          />
        )}
      </div>
    </div>
  );
};

export default TasksEdit;