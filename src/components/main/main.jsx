import styles from "@/components/main/main.module.scss";
import Task from "@/components/task/task";
import Filter from "@/components/filter/filter";
import Lists from "@/components/lists/lists";

const Main = () => {
  return (
    <div className="main-container">
      <Task />
      <Filter />
      <Lists />
    </div>
  );
};

export default Main;
