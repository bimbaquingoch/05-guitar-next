import Image from "next/image";
import Link from "next/link";

import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className='contenedor'>
        <div className={styles.barra}>
          <Link href={"/"}>
            <a>
              <Image
                width={300}
                height={100}
                src={"/img/logo.svg"}
                alt='imagen logo'
              />
            </a>
          </Link>

          <nav className={styles.navegacion}>
            <Link href={"/"}>home</Link>
            <Link href={"/nosotros"}>nosotros</Link>
            <Link href={"/blog"}>blog</Link>
            <Link href={"/tienda"}>tienda</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
