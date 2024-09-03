import Link from "next/link";

import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <>
      <div className={styles.bar}>
        <div className={styles.bar_inter}>
          <Link className={styles.name} href="/#">
            Rodolpho Straub
          </Link>
          <div className={styles.bar_right}>
            <Link className={styles.menu} href="#projetos">
              Projetos
            </Link>
            <Link className={styles.menu} href="#habilidades">
              Habilidades
            </Link>
            <Link className={styles.menu} href="#contato">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
