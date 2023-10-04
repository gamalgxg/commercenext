import Link from "next/link";
import styles from "./styles.module.scss";
const Ad = () => {
  return (
    <Link href={"/"}>
      <div className={styles.ad}>add</div>
    </Link>
  );
};

export default Ad;
