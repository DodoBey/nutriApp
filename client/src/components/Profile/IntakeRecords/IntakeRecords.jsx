import styles from "./IntakeRecords.module.scss";

const DUMMYDATA = [
  {
    date: "27.11.2023",
    cal: "1234",
    carb: "20",
    protein: "44",
    fat: "55",
  },
  {
    date: "28.11.2023",
    cal: "3214",
    carb: "10",
    protein: "55",
    fat: "76",
  },
];

const IntakeRecords = (props) => {
  const accordion = DUMMYDATA.map((intake) => (
    <div
      key={intake.date}
      className={styles.accordion}
    >
      <h3 className={styles.accordionTitle}>{intake.date}</h3>
      <div className={styles.accordionContent}>
        <span>{intake.cal}</span>
        <span>{intake.carb}</span>
        <span>{intake.protein}</span>
        <span>{intake.fat}</span>
      </div>
    </div>
  ));

  return <>{accordion}</>;
};

export default IntakeRecords;
