import styles from "@/styles/404.module.scss";
import Image from 'next/image';
const Custom404 = () => {
  return (
    <div className={styles.error}>
        <Image src="/image/not_found.png" alt="404" className={styles.error__image} width={500} height={300}/>
      <div>Halaman Tidak Ditemukan</div>
    </div>
  );
};

export default Custom404;
