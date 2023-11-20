import styles from "./Login.module.scss";

const Login = () => {
  return (
    <div className={styles.loginItems}>
      <h5>Please Login</h5>
      <div className={styles.loginInputs}>
        <input
          type="email"
          id="email"
          placeholder="Email"
        />
      </div>
      <div className={styles.loginInputs}>
        <input
          type="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <button>Login</button>
    </div>
  );
};

export default Login;
