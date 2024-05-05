import "./style.css";
import { CalendarDay } from "../../classes/CalendarDay";

type TCellProps = {
  day: CalendarDay | undefined;
};

export const Cell = ({ day }: TCellProps) => {
  return (
    <div className="cell-container">
      <div className="cell-container_date-number">{day?.date}</div>
    </div>
  );
};
