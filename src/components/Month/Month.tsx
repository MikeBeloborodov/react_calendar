import * as styles from "./style.module.css";
import classNames from "classnames/bind";
import { v4 as uuidv4 } from "uuid";
import { Cell } from "../Cell";
import { CalendarMonth } from "../../classes/CalendarMonth";

type TMonthProps = {
  month: CalendarMonth;
};

export const Month = ({ month }: TMonthProps) => {
  const weeks = month.weeks;
  const cx = classNames.bind(styles);
  return (
    <div className={styles.monthContainer}>
      {weeks.map((week) => (
        <ul key={uuidv4()} className={`${styles.weekContainer}`}>
          {week.map((day) => (
            <li
              key={uuidv4()}
              className={cx({
                cell: true,
                cellSaturday: day && day.dayOfWeekString === "Saturday",
                cellSunday: day && day.dayOfWeekString === "Sunday",
                cellCurrentDay: day?.isCurrentDay,
              })}
            >
              <Cell day={day} />
            </li>
          ))}
        </ul>
      ))}
    </div>
  );
};
