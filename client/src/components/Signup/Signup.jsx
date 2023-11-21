import { useCallback, useReducer } from "react";
import styles from "./Signup.module.scss";
import { initialstate, signupHandler } from "./signUpReducer";

const Signup = () => {
  const [state, dispatch] = useReducer(signupHandler, initialstate);

  const signupFormHandler = useCallback((actionType, data) => {
    console.log(data);
    dispatch({ type: actionType, payload: data });
  }, []);

  const submitHandler = () => {
    console.log(state);
  };

  return (
    <div className={styles.signupItems}>
      <h5>Please Signup</h5>
      <div className={styles.signupInputs}>
        <input
          type="email"
          id="email"
          placeholder="Email"
          onChange={(event) =>
            signupFormHandler("EMAIL_HANDLER", event.target.value)
          }
        />
      </div>
      <div className={styles.signupInputs}>
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={(event) =>
            signupFormHandler("PASSWORD_HANDLER", event.target.value)
          }
        />
      </div>
      <div className={styles.genderPick}>
        <div>
          <input
            type="radio"
            className="gender"
            name="gender"
            value="male"
            onChange={(event) =>
              signupFormHandler("GENDER_HANDLER", event.target.value)
            }
          />
          <span>Male</span>
        </div>
        <div>
          <input
            type="radio"
            className="gender"
            name="gender"
            value="female"
            onChange={(event) =>
              signupFormHandler("GENDER_HANDLER", event.target.value)
            }
          />
          <span>Female</span>
        </div>
      </div>
      <div className={styles.userVariables}>
        <input
          type="number"
          id="age"
          placeholder="Age"
          onChange={(event) =>
            signupFormHandler("AGE_HANDLER", event.target.value)
          }
        />
        <input
          type="number"
          id="height"
          placeholder="Height (cm)"
          onChange={(event) =>
            signupFormHandler("HEIGHT_HANDLER", event.target.value)
          }
        />
        <input
          type="number"
          id="weight"
          placeholder="Weight (kg)"
          onChange={(event) =>
            signupFormHandler("WEIGHT_HANDLER", event.target.value)
          }
        />
      </div>
      <button onClick={submitHandler}>Signup</button>
    </div>
  );
};

export default Signup;
