import Head from 'next/head'
import Layout from '../src/components/layout/layout';
import Carousel from '../src/components/secciones/banner/carousel'
import Tipo1 from '../src/components/secciones/subMenus/tipo2';

export default function Home() {
  return (
    <>
      <Layout>
          <Tipo1/>
        
      </Layout>
     
    </>
  )
}
