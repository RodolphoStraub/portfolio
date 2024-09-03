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
              <h1 className={styles.sub_title}>Graph-it</h1>
              <p className={styles.descrition}>
                Site de um curso de artes visuais, tendo como base o site já
                existente do curso de mesmo nome. Aprendizado em navegação de
                páginas, acesso de links externos, e design.
                <br />O projeto foi feito como um estudo, tanto de layout quanto
                das tecnologias usadas.
              </p>
              <p className={styles.tech}>Next.js - CSS - JavaScript </p>
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
              <h1 className={styles.sub_title}>Dragonball - API</h1>
              <p className={styles.descrition}>
                Primeiro projeto com API.
                <br /> Noções de como chamar e usar dados, formatação e criação
                do layout, como a aplicação de TypeScript.
              </p>
              <p className={styles.tech}>Next.js - CSS - TypeScript</p>
            </div>
          </div>
          <div className={styles.sub_all}>
            <div className={styles.left_side}>
              <h1 className={styles.sub_title}>Interior BR</h1>
              <p className={styles.descrition}>
                Site fictício para estudo de design e navegação de páginas.
                <br />
                Uma junção dos conhecimentos arquitetônicos com os de
                desenvolvedor Front End, criando um site que seja limpo e que dá
                atenção aos projetos arquitetônicos.
              </p>
              <p className={styles.tech}>ReactJS - CSS</p>
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
