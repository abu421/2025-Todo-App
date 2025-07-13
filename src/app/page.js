import styles from "app/page.module.scss";
import Main from "@/components/main/main";

export default function Home() {
  return (
    <div className={styles["main-container"]}>
      <Main />
    </div>
  );
}
