import styles from "./student.module.css";
import PropTypes from "prop-types";
function Student({ name, age, isStudent }) {
  return (
    <div className={styles.student}>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Student: {isStudent ? "Yes" : "No"}</p>
    </div>
  );
}

Student.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  isStudent: PropTypes.bool,
};

Student.defaultProps = {
  name: "Vincent",
  age: 20,
  isStudent: true,
};

export default Student;
