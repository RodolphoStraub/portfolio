import Link from "next/link";
import styles from "./Projetos.module.css";

export default function Projetos() {
  return (
    <>
      <div id="projetos" className={styles.all}>
        <div className={styles.headline}>
          <h1 className={styles.title}>Projetos</h1>
        </div>
        <div className={styles.container}>
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
              <Link
                href={"https://github.com/RodolphoStraub/Graph-it"}
                target="blank"
              >
                <button className={styles.btn}>{"</>"}</button>
              </Link>
            </div>
            <div className={styles.right_side}>
              <Link href={"/graph-it"} target="blank">
                <img
                  className={styles.picture}
                  src="graph-it cover.png"
                  alt="Foto do projeto"
                />
              </Link>
            </div>
          </div>
          <div className={styles.sub_all}>
            <div className={styles.left_side}>
              <Link href={"/dragonball"} target="blank">
                <img
                  className={styles.picture}
                  src="dbz cover.png"
                  alt="Foto do projeto"
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
              <Link
                href={"https://github.com/RodolphoStraub/Dragonball-API"}
                target="blank"
              >
                <button className={styles.btn}>{"</>"}</button>
              </Link>
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
              <Link
                href={"https://github.com/RodolphoStraub/interiorbrnext"}
                target="blank"
              >
                <button className={styles.btn}>{"</>"}</button>
              </Link>
            </div>
            <div className={styles.right_side}>
              <Link href={"/interiorbr"} target="blank">
                <img
                  className={styles.picture}
                  src="interior cover.png"
                  alt="Foto do projeto"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
