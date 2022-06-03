import Image from "next/image";
import Layout from "../components/Layout";
import styles from "../styles/Nosotros.module.css";

const Nosotros = () => {
  return (
    <Layout page={"nosotros"}>
      <main className='contenedor'>
        <h2 className='heading'>Nosotros</h2>
        <div className={styles.contenido}>
          <Image
            layout='responsive'
            src={"/img/nosotros.jpg"}
            width={600}
            height={450}
            alt='nosotros'
          />
          <div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
              temporibus corrupti. Sunt quam similique qui, illo non soluta
              sapiente, voluptatibus temporibus dolorum fugiat repellat,
              pariatur dolorem nobis vitae laboriosam quod.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quis
              ea illo perspiciatis consectetur laborum perferendis qui a maxime
              odit neque, voluptates animi quas quaerat blanditiis et atque vel.
              Ea.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;
