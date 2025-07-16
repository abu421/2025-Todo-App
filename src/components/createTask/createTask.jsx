import styles from "@/components/createTask/createTask.module.scss";
import { CiCirclePlus } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useState } from "react";

const CreateTask = ({ setTaskLists }) => {
  const [expand, setExpand] = useState(true);

  function getInputObj() {
    return document.getElementById("inputField");
  }

  function clearInput() {
    getInputObj().value = "";
  }

  function expandTab() {
    setExpand((prev) => !prev);
    clearInput();
  }

  function addTask() {
    const inputTask = getInputObj().value;
    if (getInputObj().value.trim().length === 0) {
      alert("Please enter some values");
      return;
    }
    setTaskLists((prev) => [...prev, { value: inputTask, status: "active" }]);
    clearInput();
  }

  function handleClearTaskList() {
    setTaskLists([]);
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
        <button className={styles.clear} onClick={handleClearTaskList}>
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
        <button id="cancel" className={styles.cancel} onClick={expandTab}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default CreateTask;
