import styles from "./Header.module.scss";
import MainLogo from "../../assets/dailyLogo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerLeft}>
        <img
          src={MainLogo}
          alt=""
        />
        <span>Daily Intake</span>
      </div>
      <span className={styles.headerRight}>Login</span>
    </header>
  );
};

export default Header;
