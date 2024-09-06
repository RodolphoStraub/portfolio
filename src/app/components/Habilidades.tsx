import styles from "./Habilidades.module.css";

export default function Habilidades() {
  return (
    <>
      <div id="habilidades" className={styles.all}>
        <h1 className={styles.headline}>Habilidades</h1>
        <div className={styles.sub_all}>
          <div className={styles.title}>
            <h1 className={styles.sub_title}><span>|</span> Hard Skills</h1>
            <ul>
              <li>React.js</li>
              <li>Next.js</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
            </ul>
          </div>
          <div className={styles.title}>
            <h1 className={styles.sub_title}><span>|</span> Soft Skills</h1>
            <ul>
              <li>Criatividade</li>
              <li>Trabalho em equipe</li>
              <li>Comunicativo</li>
              <li>Pontual</li>
              <li>Pró-Ativo</li>
              <li>Paciente</li>
            </ul>
          </div>
          <div className={styles.title}>
            <h1 className={styles.sub_title}><span>|</span> Idiomas</h1>
            <ul>
              <li>Inglês - Avançado</li>
              <li>Espanhol - Básico</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
