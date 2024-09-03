import Link from "next/link";
import styles from "./Contato.module.css";

export default function Contato() {
  return (
    <>
      <div id="contato" className={styles.all}>
        <div className={styles.sub_all}>
          <div className={styles.headline}>
            <h1>Contatos</h1>
          </div>
          <div className={styles.links}>
            <Link href={""}>
              <img
                className={styles.logo}
                src="whatasapp.png"
                alt="whatsapp logo"
              />
            </Link>
            <Link href={""}>
              <img
                className={styles.logo}
                src="whatasapp.png"
                alt="whatsapp logo"
              />
            </Link>
            <Link href={""}>
              <img
                className={styles.logo}
                src="whatasapp.png"
                alt="whatsapp logo"
              />
            </Link>
            <Link href={""}>
              <img
                className={styles.logo}
                src="whatasapp.png"
                alt="whatsapp logo"
              />
            </Link>
          </div>
          <div className={styles.bot}>
            <h2 className={styles.bottom}>
              Copyright &copy;2024 Desenvolvido por Rodolpho Straub
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}
