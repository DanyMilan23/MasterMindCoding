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
  const f4 =()=>{
    setMenu({
      home:false,
      solutions:false,
      industry:false,
      tech:true,
      careers:false,
      about:false,
      contact:false,
    })
  }
  const f5 =()=>{
    setMenu({
      home:false,
      solutions:false,
      industry:false,
      tech:false,
      careers:true,
      about:false,
      contact:false,
    })
  }
  const f6 =()=>{
    setMenu({
      home:false,
      solutions:false,
      industry:false,
      tech:false,
      careers:false,
      about:true,
      contact:false,
    })
  }
  const f7 =()=>{
    setMenu({
      home:false,
      solutions:false,
      industry:false,
      tech:false,
      careers:false,
      about:false,
      contact:true,
    })
  }
  //Solutions
  const titleSolutions='SOLUTIONS'
  const titleDescriptionSolutions='Custom Software Development'
  const text1Solutions=(<b>
                  We provide full cycle product development, including design,
                  implementation, QA and production deployment.
                  <br />
                  Our partners trust us to build custom Tech solutions for:{" "}
                </b>)
  const text2Solutions=( <div>• Architectural Design. <br />
                • Software Product Development. <br />
                • Product Design Sprint. <br />
                • Quality assurance on development. <br />
                • Test automation during and post development phase. <br />
                • Software support and maintenance.
                <br /></div>)
  //Industry
  const titleIndustry='INDUSTRY'
  const titleDescriptionIndustry='Telecom'
  const text1Industry='The telecom industry involves communications companies and providers of mobile devices, mobile applications as well as Internet and video streaming services.'
  const text2Industry='Our team of software developers has taken on a range of telecommunication software projects with great success. We are an expert team ready for any telecom software project. '
  //Technology
  const titleTechnology='SOLUTIONS'
  const titleDescriptionTechnology='Custom Software Development'
  const text1Technology=(<b>
                  We provide full cycle product development, including design,
                  implementation, QA and production deployment.
                  <br />
                  Our partners trust us to build custom Tech solutions for:{" "}
                </b>)
  const text2Technology=( <div>• Architectural Design. <br />
                • Software Product Development. <br />
                • Product Design Sprint. <br />
                • Quality assurance on development. <br />
                • Test automation during and post development phase. <br />
                • Software support and maintenance.
                <br /></div>)
  //Careers
  const titleCareers='INDUSTRY'
  const titleDescriptionCareers='Telecom'
  const text1Careers='The telecom industry involves communications companies and providers of mobile devices, mobile applications as well as Internet and video streaming services.'
  const text2Careers='Our team of software developers has taken on a range of telecommunication software projects with great success. We are an expert team ready for any telecom software project. '
  //About
  const titleAbout='SOLUTIONS'
  const titleDescriptionAbout='Custom Software Development'
  const text1About=(<b>
                  We provide full cycle product development, including design,
                  implementation, QA and production deployment.
                  <br />
                  Our partners trust us to build custom Tech solutions for:{" "}
                </b>)
  const text2About=( <div>• Architectural Design. <br />
                • Software Product Development. <br />
                • Product Design Sprint. <br />
                • Quality assurance on development. <br />
                • Test automation during and post development phase. <br />
                • Software support and maintenance.
                <br /></div>)
  //Contact
  const titleContact='INDUSTRY'
  const titleDescriptionContact='Telecom'
  const text1Contact='The telecom industry involves communications companies and providers of mobile devices, mobile applications as well as Internet and video streaming services.'
  const text2Contact='Our team of software developers has taken on a range of telecommunication software projects with great success. We are an expert team ready for any telecom software project. '

  return (
    <>
      <Layout f1={f1} f2={f2} f3={f3} f4={f4} f5={f5} f6={f6} f7={f7}>
        {menu.home?(<Carousel/>):null}
        {menu.solutions?(<Tipo2
          title={titleSolutions}
          titleDescription={titleDescriptionSolutions}
          text1={text1Solutions}
          text2={text2Solutions}
          />):null}
        {menu.industry?(<Tipo1
          title={titleIndustry}
          titleDescription={titleDescriptionIndustry}
          text1={text1Industry}
          text2={text2Industry}
          />):null}
          {menu.tech?(<Tipo2
          title={titleTechnology}
          titleDescription={titleDescriptionTechnology}
          text1={text1Technology}
          text2={text2Technology}
          />):null}
          {menu.careers?(<Tipo1
          title={titleCareers}
          titleDescription={titleDescriptionCareers}
          text1={text1Careers}
          text2={text2Careers}
          />):null}
        {menu.about?(<Tipo2
          title={titleAbout}
          titleDescription={titleDescriptionAbout}
          text1={text1About}
          text2={text2About}
          />):null}
           {menu.contact?(<Tipo1
          title={titleContact}
          titleDescription={titleDescriptionContact}
          text1={text1Contact}
          text2={text2Contact}
          />):null}
      </Layout>
     
    </>
  )
}
