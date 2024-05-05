import { CalendarDay } from "../../classes/CalendarDay";

type TCellProps = {
  day: CalendarDay | undefined;
};

export const Cell = ({ day }: TCellProps) => {
  return (
    <>
      <div>{day?.date}</div>
      <div>{day?.dayOfWeekString}</div>
    </>
  );
};
