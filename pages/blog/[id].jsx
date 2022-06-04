const EntradaBlog = ({ entrada }) => {
  return <div>EntradaBlog</div>;
};

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
// obtiene las rutas estaticas
// construye las paginas y los enlaces
export const getStaticPaths = async () => {
  const url = `${process.env.API_URL}/blogs`;
  const respuesta = await fetch(url);
  const entradas = await respuesta.json();
  const paths = entradas.map((entrada) => ({
    params: { id: entrada.id.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.
export const getStaticProps = async ({ params: { id } }) => {
  const url = `${process.env.API_URL}/blogs/${id}`;
  const respuesta = await fetch(url);
  const entrada = await respuesta.json();
  return {
    props: { entrada },
  };
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
// export const getServerSideProps = async ({ query: { id } }) => {
// const url = `${process.env.API_URL}/blogs/${id}`;
//   const respuesta = await fetch(url);
//   const entrada = await respuesta.json();
//   // el query es accesible solo si se esta en routing dinamico
//   return {
//     props: { entrada },
//   };
// };

export default EntradaBlog;
