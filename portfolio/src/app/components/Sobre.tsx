import Image from "next/image";

import styles from "./Sobre.module.css";
import Link from "next/link";

export default function Sobre() {
  return (
    <>
      <div className={styles.all}>
        <div className={styles.left_side}>
          <h1 className={styles.title}>Desenvolvedor<br/> Front End</h1>
          <p className={styles.text}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            totam deserunt explicabo expedita aspernatur dolorem vitae. Libero
            obcaecati error aut doloremque dolore harum, modi distinctio tenetur
            iste id quaerat aperiam.
          </p>
          <div className={styles.links}>
            <Link
              href={"https://www.linkedin.com/in/rodolpho-straub-8728b0206/"}
              target="blank"
            >
              <img
                className={styles.logo}
                src="linkedin.png"
                alt="Linkedin logo"
              />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/rodolpho-straub-8728b0206/"}
              target="blank"
            >
              <img className={styles.logo} src="github.png" alt="Github logo" />
            </Link>
            <Link
              href={"https://www.linkedin.com/in/rodolpho-straub-8728b0206/"}
              target="blank"
            >
              <img
                className={styles.logo}
                src="whatasapp.png"
                alt="Whatsapp logo"
              />
            </Link>
          </div>
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
