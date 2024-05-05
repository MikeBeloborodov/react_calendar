import "./style.css";
import classNames from "classnames";
import { v4 as uuidv4 } from "uuid";
import { Cell } from "../Cell";
import { CalendarMonth } from "../../classes/CalendarMonth";

type TMonthProps = {
  month: CalendarMonth;
};

export const Month = ({ month }: TMonthProps) => {
  const weeks = month.weeks;
  return (
    <div className="month-container">
      {weeks.map((week, indx) => (
        <ul
          key={uuidv4()}
          className={classNames("week-container", {
            "week-container_first-week": indx === 0,
          })}
        >
          {week.map((day) => (
            <li
              key={uuidv4()}
              className={classNames("cell", {
                cell_saturday: day && day.dayOfWeekString === "Saturday",
                cell_sunday: day && day.dayOfWeekString === "Sunday",
                "cell_current-day": day?.isCurrentDay,
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
