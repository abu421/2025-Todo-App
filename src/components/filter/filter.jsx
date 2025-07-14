"use client";
import styles from "@/components/Filter/filter.module.scss";
import { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

const Filter = () => {
  const [expand, setExpand] = useState(true);
  const [activeButton, setActiveButton] = useState(0);

  function expandTab(bool) {
    setExpand((prev) => !prev);
  }
  function activateButton(value, e) {
    e.preventDefault();
    setActiveButton(value);
    console.log(e.target.innerText, "tasks are displayed"); //TODO -- Add Logic
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
          onClick={(e) => activateButton(0, e)}
          className={activeButton === 0 ? styles.active : ""}
        >
          All (5)
        </button>
        <button
          onClick={(e) => activateButton(1, e)}
          className={activeButton === 1 ? styles.active : ""}
        >
          Active (4)
        </button>
        <button
          onClick={(e) => activateButton(2, e)}
          className={activeButton === 2 ? styles.active : ""}
        >
          Completed (1)
        </button>
      </div>
    </div>
  );
};

export default Filter;
