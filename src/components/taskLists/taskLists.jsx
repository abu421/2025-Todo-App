import styles from "@/components/taskLists/taskLists.module.scss";
import TaskItem from "../taskItem/taskItem";
import { TbMoodEmpty } from "react-icons/tb";

const TaskLists = ({ taskLists, setTaskLists, activeButton, statusCount }) => {
  const filteredList = taskLists.filter((task) => {
    if (activeButton === 0) return true;
    if (activeButton === 1) return task.status === "active";
    if (activeButton === 2) return task.status === "completed";
    return false;
  });
  return (
    <div className={styles["lists-container"]}>
      {taskLists.length > 0 &&
        filteredList.map((task, i) => (
          <TaskItem
            key={i}
            cssClass={styles["item-wrapper"]}
            task={task}
            tasklists={taskLists}
            setTaskLists={setTaskLists}
          />
        ))}
      {taskLists.length <= 0 && (
        <div className={styles.emptyList}>
          <TbMoodEmpty />
          <h3>
            No{" "}
            {activeButton === 1
              ? "active"
              : activeButton === 2
              ? "completed"
              : ""}{" "}
            tasks yet
          </h3>
          <p>Add your first task to get started!</p>
        </div>
      )}
      {activeButton === 1 &&
        taskLists.length > 0 &&
        statusCount.active === 0 && (
          <p className={styles.none}>No active task</p>
        )}
      {activeButton === 2 &&
        taskLists.length > 0 &&
        statusCount.completed === 0 && (
          <p className={styles.none}>No completed task</p>
        )}
    </div>
  );
};

export default TaskLists;
