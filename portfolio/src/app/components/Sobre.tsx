import Image from "next/image";

import styles from "./Sobre.module.css";
import Link from "next/link";

export default function Sobre() {
  return (
    <>
      <div id="/#" className={styles.all}>
        <div className={styles.left_side}>
          <h1 className={styles.title}>Desenvolvedor<br/> Front End</h1>
          <p className={styles.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            totam deserunt explicabo expedita aspernatur dolorem vitae. Libero
            obcaecati error aut doloremque dolore harum, modi distinctio tenetur
            iste id quaerat aperiam.
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            totam deserunt explicabo expedita aspernatur dolorem vitae. Libero
            obcaecati error aut doloremque dolore harum, modi distinctio tenetur
            iste id quaerat aperiam.
          </p>
        </div>
        <div className={styles.right_side}>
          <Image
            className={styles.picture}
            src="/DSC_4059.JPG"
            width={350}
            height={350}
            alt="picture"
          ></Image>
        </div>
      </div>
    </>
  );
}
