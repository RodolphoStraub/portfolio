import Image from "next/image";

import styles from "./Sobre.module.css";

export default function Sobre() {
  return (
    <>
      <div id="/#" className={styles.all}>
        <div className={styles.left_side}>
          <h1 className={styles.title}>
            Desenvolvedor
            <br /> Front End.
          </h1>
          <p className={styles.text}>
            Sempre gostei de coisas que instigassem minha curiosidade e
            criatividade, me fazendo exercitar processos criativos de diversas
            formas, junto com diferentes tecnologias. Estou em busca de
            oportunidade para continuar aprendendo e crescer profissionalmente,
            contribuindo com a comunidade e com colegas de trabalho. Curso
            Análise e Desenvolvimento de Sistemas pela Estácio.
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
