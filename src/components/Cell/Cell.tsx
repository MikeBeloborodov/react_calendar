import "./style.css";
import { CalendarDay } from "../../classes/CalendarDay";
import { useSelector } from "../../store/store";
import { selectors } from "../../store/slices";

type TCellProps = {
  day: CalendarDay | undefined;
};

export const Cell = ({ day }: TCellProps) => {
  const notes = useSelector(selectors.selectNotes);
  const relatedNote = notes.find((item) => item.date === day?.fullDate);

  return (
    <div className="cell-container">
      <div className="cell-container_date-number">{day?.date}</div>
      <div className="cell-container_notes">
        <ol className="cell-container_day-notes">
          {relatedNote?.dayNotes.map((note) => <li>{note}</li>)}
        </ol>
        <ol className="cell-container_night-notes">
          {relatedNote?.nightNotes.map((note) => <li>{note}</li>)}
        </ol>
      </div>
    </div>
  );
};
