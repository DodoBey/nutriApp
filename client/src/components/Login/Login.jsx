import { useCallback, useState } from "react";
import styles from "./Login.module.scss";
import { emailValidation } from "../../utils/validators";
import { passwordValidation } from "../../utils/validators";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const [isEmailValid, setIsEmailValid] = useState();

  const checkIsMailValid = useCallback(() => {
    if (emailValidation(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  }, [email]);

  const [isPasswordValid, setIsPasswordValid] = useState();

  const checkIspasswordValid = useCallback(() => {
    if (passwordValidation(password)) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  }, [password]);

  const handleLogin = () => {
    console.log(email);
    console.log(password);
    console.log(isEmailValid);
    console.log(isPasswordValid);
  };

  return (
    <div className={styles.loginItems}>
      <h5>Please Login</h5>
      <div className={styles.loginInputs}>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={handleEmail}
          onBlur={checkIsMailValid}
        />
        {isEmailValid === false && <span>Please enter a valid email</span>}
      </div>
      <div className={styles.loginInputs}>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
          onBlur={checkIspasswordValid}
        />
        {isPasswordValid === false && (
          <span>Please enter a valid password</span>
        )}
      </div>
      <button
        onClick={handleLogin}
        disabled={!isEmailValid || !isPasswordValid}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
