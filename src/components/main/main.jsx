import styles from "@/components/main/main.module.scss";
import Task from "@/components/task/task";
import Filter from "@/components/filter/filter";
import Lists from "@/components/lists/lists";

const Main = () => {
  return (
    <div className={styles["main-container"]}>
      <div className={styles.header}>
        <h1>Today's Tasks</h1>
        <p>1 of 5 tasks completed</p>
      </div>
      <Task />
      <Filter />
      <Lists />
    </div>
  );
};

export default Main;
