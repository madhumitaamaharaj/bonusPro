import React, { useState } from 'react';
import styles from './Task.module.css';
import Navbar from './Navbar';

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const updateTask = (index, updatedTask) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = updatedTask;
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.container}>
    <div className={styles.navbar}>
    <Navbar />
  </div>
      <h1>Task Page</h1>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button className={styles.addTaskButton} onClick={addTask}>
        Add Task
      </button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={styles.taskItem}>
            <span>{task}</span>
            <div>
              <button onClick={() => deleteTask(index)}>Delete</button>
              <button
                onClick={() => {
                  const updatedTask = prompt('Update the task:', task);
                  if (updatedTask) {
                    updateTask(index, updatedTask);
                  }
                }}
              >
                Update
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskPage;
