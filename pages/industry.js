import Head from 'next/head'
import Layout from '../src/components/layout/layout';
import Tipo1 from '../src/components/secciones/subMenus/tipo1';

export default function Home() {
  return (
    <>
      <Layout>
          <Tipo1/>
      </Layout>
     
    </>
  )
}
