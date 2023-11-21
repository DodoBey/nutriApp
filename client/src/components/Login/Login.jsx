import { useEffect, useState } from "react";
import styles from "./Login.module.scss";
import { emailValidation } from "../../utils/emailValidator";
import { passwordValidation } from "../../utils/passwordValidator";

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

  useEffect(() => {
    if (emailValidation(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  }, [email]);

  const [isPasswordValid, setIsPasswordValid] = useState();

  useEffect(() => {
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
        />
      </div>
      <div className={styles.loginInputs}>
        <input
          type="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={handlePassword}
        />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
