import Head from 'next/head'
import Layout from '../src/components/layout/layout';
import Tipo1 from '../src/components/secciones/subMenus/tipo1';

export default function Home() {
  const title='INDUSTRY'
  const titleDescription='Telecom'
  const text1='The telecom industry involves communications companies and providers of mobile devices, mobile applications as well as Internet and video streaming services.'
  const text2='Our team of software developers has taken on a range of telecommunication software projects with great success. We are an expert team ready for any telecom software project. '
  return (
    <>
      <Layout>
          <Tipo1
          title={title}
          titleDescription={titleDescription}
          text1={text1}
          text2={text2}
          />
      </Layout>
     
    </>
  )
}
