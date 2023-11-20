import styles from "./Signup.module.scss";

const Signup = () => {
  return (
    <div className={styles.signupItems}>
      <h5>Please Signup</h5>
      <div className={styles.signupInputs}>
        <input
          type="email"
          id="email"
          placeholder="Email"
        />
      </div>
      <div className={styles.signupInputs}>
        <input
          type="password"
          id="password"
          placeholder="Password"
        />
      </div>
      <div id="genderPick">
        <input
          type="radio"
          className="gender"
          name="gender"
          value="male"
        />
        Male
        <input
          type="radio"
          className="gender"
          name="gender"
          value="female"
        />
        Female
      </div>
      <div className={styles.userVariables}>
        <input
          type="number"
          id="age"
          placeholder="Age"
        />
        <input
          type="number"
          id="height"
          placeholder="Height (cm)"
        />
        <input
          type="number"
          id="weight"
          placeholder="Weight (kg)"
        />
      </div>
      <button>Signup</button>
    </div>
  );
};

export default Signup;
