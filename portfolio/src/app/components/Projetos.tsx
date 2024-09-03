import Link from "next/link";
import styles from "./Projetos.module.css";

export default function Projetos() {
  return (
    <>
      <div id="projetos" className={styles.all}>
        <div className={styles.headline}>
          <h1 className={styles.title}>Projetos</h1>
        </div>
        <div className={styles}>
          <div className={styles.sub_all}>
            <div className={styles.left_side}>
              <h1 className={styles.sub_title}>projeto nome</h1>
              <p className={styles.descrition}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                dolor libero veritatis dolorum aliquam. Natus ex maxime
                assumenda architecto dignissimos dolor delectus pariatur
                asperiores provident. Exercitationem illum expedita quas ad.
              </p>
              <p className={styles.tech}>react etc etc </p>
            </div>
            <div className={styles.right_side}>
              <Link href={"https://www.google.com/"} target="blank">
                <img
                  className={styles.picture}
                  src="linkedin.png"
                  alt="Linkedin logo"
                />
              </Link>
            </div>
          </div>
          <div className={styles.sub_all}>
          <div className={styles.left_side}>
              <Link href={"https://www.google.com/"} target="blank">
                <img
                  className={styles.picture}
                  src="linkedin.png"
                  alt="Linkedin logo"
                />
              </Link>
            </div>
            <div className={styles.right_side}>
              <h1 className={styles.sub_title}>projeto nome</h1>
              <p className={styles.descrition}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                dolor libero veritatis dolorum aliquam. Natus ex maxime
                assumenda architecto dignissimos dolor delectus pariatur
                asperiores provident. Exercitationem illum expedita quas ad.
              </p>
              <p className={styles.tech}>react etc etc </p>
            </div>
           
          </div>
          <div className={styles.sub_all}>
            <div className={styles.left_side}>
              <h1 className={styles.sub_title}>projeto nome</h1>
              <p className={styles.descrition}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
                dolor libero veritatis dolorum aliquam. Natus ex maxime
                assumenda architecto dignissimos dolor delectus pariatur
                asperiores provident. Exercitationem illum expedita quas ad.
              </p>
              <p className={styles.tech}>react etc etc </p>
            </div>
            <div className={styles.right_side}>
              <Link href={"https://www.google.com/"} target="blank">
                <img
                  className={styles.picture}
                  src="linkedin.png"
                  alt="Linkedin logo"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
