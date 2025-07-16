import styles from "@/components/Filter/filter.module.scss";
import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Filter = ({ taskLists, activeButton, setActiveButton, statusCount }) => {
  const [expand, setExpand] = useState(true);

  function expandTab() {
    setExpand((prev) => !prev);
  }

  function activateButton(value) {
    setActiveButton(value);
  }

  return (
    <div className={styles["filter-container"]}>
      <div className={`${styles.header} ${expand ? "" : styles.marginDown}`}>
        <p>Filter Tasks</p>
        {expand ? (
          <IoMdArrowDropdown onClick={expandTab} />
        ) : (
          <IoMdArrowDropup onClick={expandTab} />
        )}
      </div>
      <div className={`${styles.buttons} ${expand ? styles.hidden : ""}`}>
        <button
          onClick={(e) => activateButton(0)}
          className={activeButton === 0 ? styles.active : ""}
        >
          All ({taskLists.length})
        </button>
        <button
          onClick={(e) => activateButton(1)}
          className={activeButton === 1 ? styles.active : ""}
        >
          Active ({statusCount.active})
        </button>
        <button
          onClick={(e) => activateButton(2)}
          className={activeButton === 2 ? styles.active : ""}
        >
          Completed ({statusCount.completed})
        </button>
      </div>
    </div>
  );
};

export default Filter;
