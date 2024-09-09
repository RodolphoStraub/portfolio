import Image from "next/image";

import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <>
      <div id="/#" className={styles.all}>
        <div className={styles.left_side}>
          <div className={styles.headline}>
          <h1 className={styles.title}>
            Desenvolvedor Front End.
          </h1>
          </div>
          <p className={styles.text}>
            Sempre gostei de coisas que instigassem minha{" "}
            <span className={styles.bold}>curiosidade</span> e{" "}
            <span className={styles.bold}>criatividade</span>, me fazendo
            exercitar processos criativos de diversas formas, junto com
            diferentes tecnologias. Estou em busca de oportunidade para
            continuar aprendendo e crescer profissionalmente, contribuindo com a
            comunidade e com colegas de trabalho.
            <br /> <br />
            Sou formado em{" "}
            <span className={styles.bold}>Arquitetura e Urbanismo</span> pela
            UCP, e hoje curso
            <span className={styles.bold}>
              {" "}
              Análise e Desenvolvimento de Sistemas pela Estácio.
            </span>
            <br /> <br />
            Quando não estou programando, gosto de ler, desenhar/pintar, e
            jogar.
          </p>
        </div>
        <div className={styles.right_side}>
          <Image
            className={styles.picture}
            src="/LEO_5430.jpg"
            width={350}
            height={350}
            alt="picture"
          ></Image>
        </div>
      </div>
    </>
  );
}
