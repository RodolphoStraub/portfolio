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
            <Link
              target="blank"
              href={"https://www.linkedin.com/in/rodolpho-straub-8728b0206/"}
            >
              <img
                className={styles.logo}
                src="linkedin.png"
                alt="likedin logo"
              />
            </Link>
            <Link href={"https://github.com/RodolphoStraub"} target="blank">
              <img className={styles.logo} src="github.png" alt="github logo" />
            </Link>
            <Link
              target="blank"
              href={`https://wa.me/55024992559010?text=Olá, vi o seu portfólio e gostaria de falar com você!`}
            >
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
