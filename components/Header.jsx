import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className='contenedor'>
        <div></div>

        <nav>
          <Link href={"/"}>home</Link>
          <Link href={"/nosotros"}>nosotros</Link>
          <Link href={"/blog"}>blog</Link>
          <Link href={"/tienda"}>tienda</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
