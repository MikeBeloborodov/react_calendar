import * as styles from "./style.module.css";
import { CalendarMonth } from "../../classes/CalendarMonth";

type TFullDateProps = {
  month: CalendarMonth;
  nextMonth: () => void;
  prevMonth: () => void;
};

export const FullDate = ({ month, nextMonth, prevMonth }: TFullDateProps) => {
  return (
    <div className={styles.fullDateContainer}>
      <button className={styles.controls} onClick={() => prevMonth()}>
        {"<"}
      </button>
      <h1
        className={styles.fullDate}
      >{`${month.monthString}, ${month.year}`}</h1>
      <button className={styles.controls} onClick={() => nextMonth()}>
        {">"}
      </button>
    </div>
  );
};
