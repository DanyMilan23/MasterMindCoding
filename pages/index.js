import React, { useState } from "react";
import Head from 'next/head'
import Layout from '../src/components/layout/layout';
import Carousel from '../src/components/secciones/banner/carousel'
import Tipo1 from '../src/components/secciones/subMenus/tipo1'
import Tipo2 from '../src/components/secciones/subMenus/tipo2'

export default function Home() {
  const [menu,setMenu]=useState({
    home:true,
    solutions:false,
    industry:false,
    tech:false,
    careers:false,
    about:false,
    contact:false,
  })
  const f1 =()=>{
    setMenu({
      home:true,
      solutions:false,
      industry:false,
      tech:false,
      careers:false,
      about:false,
      contact:false,
    })
  }
  const f2 =()=>{
    setMenu({
      home:false,
      solutions:true,
      industry:false,
      tech:false,
      careers:false,
      about:false,
      contact:false,
    })
  }
  const f3 =()=>{
    setMenu({
      home:false,
      solutions:false,
      industry:true,
      tech:false,
      careers:false,
      about:false,
      contact:false,
    })
  }
  const title='INDUSTRY'
  const titleDescription='Telecom'
  const text1='The telecom industry involves communications companies and providers of mobile devices, mobile applications as well as Internet and video streaming services.'
  const text2='Our team of software developers has taken on a range of telecommunication software projects with great success. We are an expert team ready for any telecom software project. '
  //2da parte
  const title2='SOLUTIONS'
  const titleDescription2='Custom Software Development'
  const text12=(<b>
                  We provide full cycle product development, including design,
                  implementation, QA and production deployment.
                  <br />
                  Our partners trust us to build custom Tech solutions for:{" "}
                </b>)
  const text22=( <div>• Architectural Design. <br />
                • Software Product Development. <br />
                • Product Design Sprint. <br />
                • Quality assurance on development. <br />
                • Test automation during and post development phase. <br />
                • Software support and maintenance.
                <br /></div>)
  return (
    <>
      <Layout f1={f1} f2={f2} f3={f3}>
        {menu.home?(<Carousel/>):null}
        {menu.industry?(<Tipo1
          title={title}
          titleDescription={titleDescription}
          text1={text1}
          text2={text2}
          />):null}
        {menu.solutions?(<Tipo2
          title={title2}
          titleDescription={titleDescription2}
          text1={text12}
          text2={text22}
          />):null}
      </Layout>
     
    </>
  )
}
