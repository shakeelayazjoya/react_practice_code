// import styles from "../components/Display.module.css"; // Correctly import the CSS module

const Display = ({ displaValue }) => {
  return <input className="display" type="text" value={displaValue} readOnly />;
};

export default Display;
