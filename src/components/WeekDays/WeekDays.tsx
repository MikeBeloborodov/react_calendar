import * as styles from "./style.module.css";

export const WeekDays = () => {
  return (
    <ul className={styles.weekDays}>
      <li className={styles.day}>Mon</li>
      <li className={styles.day}>Tue</li>
      <li className={styles.day}>Wed</li>
      <li className={styles.day}>Thu</li>
      <li className={styles.day}>Fri</li>
      <li className={styles.day}>Sat</li>
      <li className={styles.day}>Sun</li>
    </ul>
  );
};
