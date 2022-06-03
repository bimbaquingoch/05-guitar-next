import Entrada from "../components/Entrada";
import Layout from "../components/Layout";

const Blog = ({ entradas }) => {
  return (
    <Layout page={"blog"}>
      <main className='contenedor'>
        <h2 className='heading'>Blog</h2>
        <div>
          {entradas.map((entrada) => (
            <Entrada key={entrada.id} entrada={entrada} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

// para contenido estatico
export const getStaticProps = async () => {
  const url = "http://localhost:1337/blogs";
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();

  return {
    props: { entradas },
  };
};

// serverside props
// construye la pagina en cada request
// para contenido dinamico
// export const getServerSideProps = async () => {
//   const url = "http://localhost:1337/blogs";
//   const respuesta = await fetch(url);
//   const entradas = await respuesta.json();
//   return {
//     props: { entradas },
//   };
// };

export default Blog;
