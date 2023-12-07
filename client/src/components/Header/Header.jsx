import styles from "./Header.module.scss";
import MainLogo from "../../assets/dailyLogo.png";
import { Link } from "react-router-dom";

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
      <Link
        className={styles.headerRight}
        to={"/login"}
      >
        Login
      </Link>
    </header>
  );
};

export default Header;
