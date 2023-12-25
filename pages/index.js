import Layout from 'components/Layout';
import Navbar from 'components/Navbar'
import ResourceHighlight from 'components/ResourceHighlight'
import Newsletter from 'components/Newsletter';
import ResourceList from 'components/ResourceList';
import Footer from 'components/Footer';
import { useEffect } from 'react';

// CORS

function Home({ resources }) {

  // useEffect(() => {
  //   fetch("http://localhost:3001/api/resources");
  // }, [])

  return (
    <Layout>
      <ResourceHighlight
        resources={resources.slice(0, 2)}
      />
      <Newsletter />
      <ResourceList
        resources={resources.slice(2)}
      />

      <Footer />
    </Layout>
  )
}

// is called every time you will visit the page
// function is executed on the server
// data are always fresh
export async function getServerSideProps() {

  const resData = await fetch(`${process.env.API_URL}/resources`);
  const data = await resData.json();

  // console.log(data);

  return {
    props: {
      resources: data
    }
  }
}

// is called at the build time, and it's called only once
// export async function getStaticProps() {

//   console.log("getStaticProps is called in build time")

//   // const resData = await fetch("http://localhost:3000/api/resources");
//   // const data = await resData.json();

//   return {
//     props: {
//       resources: data
//     }
//   }
// }


export default Home;