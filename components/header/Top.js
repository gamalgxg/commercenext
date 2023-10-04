import styles from "./styles.module.scss";
import { AiFillAccountBook } from "react-icons/ai";
const Top = () => {
  return (
    <div className={styles.Top}>
      <div className={styles.top_container}>
        <div></div>
        <ul>
          <li>
            {/* <img src="" alt="" /> */}
            <span> saudi araiby</span>
          </li>
          <li>
            <AiFillAccountBook />
          </li>
          <li>wishlist</li>
          <li>help</li>
          <li>contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Top;
