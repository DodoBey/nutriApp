import IntakeRecords from "./IntakeRecords/IntakeRecords";
import styles from "./Profile.module.scss";

const Profile = () => {
  return (
    <div className={styles.profile}>
      <img
        src=""
        alt="Profile picture of the user"
        className={styles.profilePic}
      />
      <div>
        <span>Name</span>
        <span>Age</span>
        <span>Height</span>
        <span>Weight</span>
        <button>Update</button>
      </div>
      {<IntakeRecords />}
    </div>
  );
};

export default Profile;
