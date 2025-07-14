import styles from "@/components/lists/lists.module.scss";
import Item from "../item/item";
import { TbMoodEmpty } from "react-icons/tb";

const Lists = () => {
  return (
    <div className={styles["lists-container"]}>
      {[...Array(5)].map((_, i) => (
        <Item key={i} cssClass={styles["item-wrapper"]} />
      ))}
      <div className={styles.emptyList}>
        <TbMoodEmpty />
        <h3>No tasks yet</h3>
        <p>Add your first task to get started!</p>
      </div>
    </div>
  );
};

export default Lists;
