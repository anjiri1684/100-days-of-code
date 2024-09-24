/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import styles from "./UserGreeting.module.css";
function UserGreeting(props) {
  const welcomeMessage = (
    <h2 className={styles["welcome-message"]}>Welcome {props.username}</h2>
  );
  const loginPrompt = (
    <h2 className={styles["login-prompt"]}>Please login to continue</h2>
  );
  return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.proptypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  username: PropTypes.string,
};

UserGreeting.defaultProps = {
  isLoggedIn: false,
  username: "Guest",
};

export default UserGreeting;
