export const signupHandler = (state, action) => {
  switch (action.type) {
    case "EMAIL_HANDLER":
      return { ...state, email: action.payload };
    case "USERNAME_HANDLER":
      return { ...state, username: action.payload };
    case "PASSWORD_HANDLER":
      return { ...state, password: action.payload };
    case "GENDER_HANDLER":
      return { ...state, gender: action.payload };
    case "AGE_HANDLER":
      return { ...state, age: action.payload };
    case "HEIGHT_HANDLER":
      return { ...state, height: action.payload };
    case "WEIGHT_HANDLER":
      return { ...state, weight: action.payload };
    default:
      return state;
  }
};

export const initialstate = {
  email: "",
  username: "",
  password: "",
  gender: "",
  age: null,
  height: null,
  weight: null,
};
