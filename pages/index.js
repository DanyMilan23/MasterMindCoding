import Head from 'next/head'
import Layout from '../src/components/layout/layout';
import Carousel from '../src/components/carousel'


export default function Home() {
  return (
    <>
      <Layout>
          <Carousel/>
      </Layout>
     
    </>
  )
}
