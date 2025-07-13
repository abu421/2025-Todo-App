"use client";
import styles from "@/components/Task/task.module.scss";
import { CiCirclePlus } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";

const Task = () => {
  const [expand, setExpand] = useState(true);
  // const inputEle = document.getElementById("inputField");
  function expandTab() {
    setExpand((prev) => !prev);
    getInputObj().value = "";
  }
  function getInputObj() {
    return document.getElementById("inputField");
  }
  function clearInput() {
    getInputObj().value = "";
  }
  function addTask() {
    //TODO -- Add logic
    console.log(getInputObj().value, "added in list");
    getInputObj().value = "";
  }
  return (
    <div className={styles["task-container"]}>
      <div className={styles.controls}>
        {expand ? (
          <CiCirclePlus onClick={expandTab} className={styles.plus} />
        ) : (
          <IoIosCloseCircleOutline
            onClick={expandTab}
            className={styles.close}
          />
        )}
        <button className={styles.clear}>
          <span>
            <RiDeleteBin6Line />
          </span>
          Clear All
        </button>
      </div>
      <div className={`${styles.inputTab} ${expand ? styles.hidden : ""}`}>
        <input
          id="inputField"
          type="text"
          placeholder="Add a new task..."
        ></input>
        <button id="add" className={styles.add} onClick={addTask}>
          Add
        </button>
        <button id="cancel" className={styles.cancel} onClick={clearInput}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Task;
