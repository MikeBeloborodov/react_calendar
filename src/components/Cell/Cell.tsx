import * as styles from "./style.module.css";
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
    <div className={styles.cellContainer}>
      <div className={styles.dateNumber}>{day?.date}</div>
      <div className={styles.cellContainerNotes}>
        <ol className={styles.dayNotes}>
          {relatedNote?.dayNotes.map((note) => <li>{note}</li>)}
        </ol>
        <ol className={styles.nightNotes}>
          {relatedNote?.nightNotes.map((note) => <li>{note}</li>)}
        </ol>
      </div>
    </div>
  );
};
