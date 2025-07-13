import styles from "app/page.module.scss";
import Main from "@/components/main/main";

export default function Home() {
  const title = "Today's Tasks";
  return (
    <div className={styles["main-container"]}>
      <Main header={title} />
    </div>
  );
}
