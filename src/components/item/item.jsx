"use client";
import styles from "@/components/item/item.module.scss";
import { IoIosClose } from "react-icons/io";
import { TbSquareRounded } from "react-icons/tb";
import { RxDragHandleDots2 } from "react-icons/rx";
import { useState } from "react";

const Item = ({ cssClass }) => {
  const [changeStatus, setChangeStatus] = useState(false);
  function changeTaskStatus() {
    setChangeStatus((prev) => !prev);
  }
  return (
    <div className={`${styles["item-container"]} ${cssClass}`}>
      <div className={styles.button}>
        <RxDragHandleDots2 />
        <TbSquareRounded
          className={`${styles.round} ${changeStatus ? styles.done : ""}`}
          onClick={changeTaskStatus}
        />
      </div>
      <p className={`${changeStatus ? styles.strike : ""}`}>
        Building Application
      </p>
      <IoIosClose className={styles.closeSvg} />
    </div>
  );
};

export default Item;
