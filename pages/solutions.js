import Head from 'next/head'
import Layout from '../src/components/layout/layout';
import Tipo2 from '../src/components/secciones/subMenus/tipo2';

export default function Home() {
  const title='SOLUTIONS'
  const titleDescription='Custom Software Development'
  const text1=(<b>
                  We provide full cycle product development, including design,
                  implementation, QA and production deployment.
                  <br />
                  Our partners trust us to build custom Tech solutions for:{" "}
                </b>)
  const text2=( <div>• Architectural Design. <br />
                • Software Product Development. <br />
                • Product Design Sprint. <br />
                • Quality assurance on development. <br />
                • Test automation during and post development phase. <br />
                • Software support and maintenance.
                <br /></div>)
  return (
    <>
      <Layout>
          <Tipo2
          title={title}
          titleDescription={titleDescription}
          text1={text1}
          text2={text2}
          />
      </Layout>
     
    </>
  )
}
