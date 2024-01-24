import React from "react";
import classes from "./TodoBody.module.css";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegSquare } from "react-icons/fa";
import { FaRegSquareCheck } from "react-icons/fa6";

export default function TodoBody() {
  return (
    <div className={classes.body}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <div className={classes.todo}>
            <button className={classes.checkbox}>
              {false ? <FaRegSquare /> : <FaRegSquareCheck color="gold" />}
            </button>
            <span className={false ? classes.todotxt : classes.donetxt}>
              공부
            </span>
          </div>
          <button className={classes.trash}>
            <FaRegTrashAlt />
          </button>
        </li>
        <li className={classes.item}>
          <div className={classes.todo}>
            <button className={classes.checkbox}>
              {false ? <FaRegSquare /> : <FaRegSquareCheck color="gold" />}
            </button>
            <span className={false ? classes.todotxt : classes.donetxt}>
              공부
            </span>
          </div>
          <button className={classes.trash}>
            <FaRegTrashAlt />
          </button>
        </li>
        <li className={classes.item}>
          <div className={classes.todo}>
            <button className={classes.checkbox}>
              {false ? <FaRegSquare /> : <FaRegSquareCheck color="gold" />}
            </button>
            <span className={false ? classes.todotxt : classes.donetxt}>
              공부
            </span>
          </div>
          <button className={classes.trash}>
            <FaRegTrashAlt />
          </button>
        </li>
        <li className={classes.item}>
          <div className={classes.todo}>
            <button className={classes.checkbox}>
              {false ? <FaRegSquare /> : <FaRegSquareCheck color="gold" />}
            </button>
            <span className={false ? classes.todotxt : classes.donetxt}>
              공부
            </span>
          </div>
          <button className={classes.trash}>
            <FaRegTrashAlt />
          </button>
        </li>
        <li className={classes.item}>
          <div className={classes.todo}>
            <button className={classes.checkbox}>
              {false ? <FaRegSquare /> : <FaRegSquareCheck color="gold" />}
            </button>
            <span className={false ? classes.todotxt : classes.donetxt}>
              공부
            </span>
          </div>
          <button className={classes.trash}>
            <FaRegTrashAlt />
          </button>
        </li>
        <li className={classes.item}>
          <div className={classes.todo}>
            <button className={classes.checkbox}>
              {false ? <FaRegSquare /> : <FaRegSquareCheck color="gold" />}
            </button>
            <span className={false ? classes.todotxt : classes.donetxt}>
              공부
            </span>
          </div>
          <button className={classes.trash}>
            <FaRegTrashAlt />
          </button>
        </li>
        <li className={classes.item}>
          <div className={classes.todo}>
            <button className={classes.checkbox}>
              {false ? <FaRegSquare /> : <FaRegSquareCheck color="gold" />}
            </button>
            <span className={false ? classes.todotxt : classes.donetxt}>
              공부
            </span>
          </div>
          <button className={classes.trash}>
            <FaRegTrashAlt />
          </button>
        </li>
        <li className={classes.item}>
          <div className={classes.todo}>
            <button className={classes.checkbox}>
              {false ? <FaRegSquare /> : <FaRegSquareCheck color="gold" />}
            </button>
            <span className={false ? classes.todotxt : classes.donetxt}>
              공부
            </span>
          </div>
          <button className={classes.trash}>
            <FaRegTrashAlt />
          </button>
        </li>
      </ul>
    </div>
  );
}
