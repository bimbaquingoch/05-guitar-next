import Link from "next/link";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        <nav className={styles.navegacion}>
          <Link href={"/"}>home</Link>
          <Link href={"/nosotros"}>nosotros</Link>
          <Link href={"/blog"}>blog</Link>
          <Link href={"/tienda"}>tienda</Link>
        </nav>
        <p>Derechos reservados</p>
      </div>
    </footer>
  );
};

export default Footer;
