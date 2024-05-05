import "./style.css";
import { CalendarMonth } from "../../classes/CalendarMonth";

type TFullDateProps = {
  month: CalendarMonth;
  nextMonth: () => void;
  prevMonth: () => void;
};

export const FullDate = ({ month, nextMonth, prevMonth }: TFullDateProps) => {
  return (
    <div className="full-date-container">
      <button className="controls" onClick={() => prevMonth()}>
        {"<"}
      </button>
      <h1 className="full-date">{`${month.monthString}, ${month.year}`}</h1>
      <button className="controls" onClick={() => nextMonth()}>
        {">"}
      </button>
    </div>
  );
};
