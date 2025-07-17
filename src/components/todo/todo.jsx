"use client";
import styles from "@/components/todo/todo.module.scss";
import CreateTask from "@/components/createTask/createTask";
import Filter from "@/components/filter/filter";
import TaskLists from "@/components/taskLists/taskLists";
import { useEffect, useState } from "react";

const Todo = ({ header }) => {
  const [taskLists, setTaskLists] = useState([]);
  const [activeButton, setActiveButton] = useState(0);
  const [statusCount, setStatusCount] = useState({ active: 0, completed: 0 });

  useEffect(() => {
    const retrievedListLocalStorage = localStorage.getItem("todoList");
    console.log(retrievedListLocalStorage);
    if (retrievedListLocalStorage) {
      setTaskLists(JSON.parse(retrievedListLocalStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(taskLists));

    const statusDetails = taskLists.reduce(
      (acc, task) => {
        if (task.status === "active") acc.active += 1;
        else if (task.status === "completed") acc.completed += 1;
        return acc;
      },
      { active: 0, completed: 0 }
    );
    setStatusCount(statusDetails);
  }, [taskLists]);

  return (
    <div className={styles["main-container"]}>
      <div className={styles.header}>
        <h1>{header}</h1>
        {taskLists.length > 0 && (
          <p className={styles.summary}>
            {statusCount.completed} of {taskLists.length} tasks completed
          </p>
        )}
      </div>
      <CreateTask setTaskLists={setTaskLists} />
      <Filter
        taskLists={taskLists}
        activeButton={activeButton}
        setActiveButton={setActiveButton}
        statusCount={statusCount}
      />
      <TaskLists
        taskLists={taskLists}
        setTaskLists={setTaskLists}
        activeButton={activeButton}
        statusCount={statusCount}
      />
    </div>
  );
};

export default Todo;
