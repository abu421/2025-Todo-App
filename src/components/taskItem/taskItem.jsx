import styles from "@/components/taskItem/taskItem.module.scss";
import { IoIosClose } from "react-icons/io";
import { TbSquareRounded } from "react-icons/tb";
import { RxDragHandleDots2 } from "react-icons/rx";

const TaskItem = ({ cssClass, task, tasklists, setTaskLists }) => {
  function handleTaskStatus() {
    setTaskLists((prev) => {
      const copy = [...prev];
      const index = copy.indexOf(task);
      copy[index] = {
        ...copy[index],
        status: task.status === "active" ? "completed" : "active",
      };
      return copy;
    });
  }

  function handleDeletion() {
    const copy = [...tasklists];
    const index = copy.indexOf(task);
    if (index > -1) {
      copy.splice(index, 1);
      setTaskLists(copy);
    }
  }

  return (
    <div className={`${styles["item-container"]} ${cssClass}`}>
      <div className={styles.button}>
        <RxDragHandleDots2 className={styles.dot} />
        <TbSquareRounded
          className={`${styles.round} ${
            task.status === "completed" ? styles.done : ""
          }`}
          onClick={handleTaskStatus}
        />
      </div>
      <p className={`${task.status === "completed" ? styles.strike : ""}`}>
        {task.value}
      </p>
      <IoIosClose className={styles.closeSvg} onClick={handleDeletion} />
    </div>
  );
};

export default TaskItem;
