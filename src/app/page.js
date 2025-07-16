import styles from "app/page.module.scss";
import Todo from "@/components/todo/todo";

export default function Home() {
  const title = "Today's Tasks";
  return (
    <div className={styles["main-container"]}>
      <Todo header={title} />
    </div>
  );
}
