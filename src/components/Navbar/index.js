import styles from "./navbar.module.scss";
import { Link, useHistory } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  const logout = () => {
    localStorage.clear();
    history.push("/login");
  };
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Link to="/">
          <h1 className={styles.pageTitle}>Superhero team</h1>
        </Link>
      </div>
      <div className={styles.right}>
        <i className="bi bi-box-arrow-right" onClick={logout}></i>
      </div>
    </div>
  );
};

export default Navbar;
