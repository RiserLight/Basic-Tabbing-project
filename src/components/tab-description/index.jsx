import styles from "./styles.module.css";

const TabDescription = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>{children}</div>
    </div>
  );
};

export default TabDescription;
