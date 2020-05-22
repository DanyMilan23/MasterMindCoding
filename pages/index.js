import React, { useState } from "react";
import Head from "next/head";
import Layout from "../src/components/layout/layout";
import Carousel from "../src/components/secciones/banner/carousel";
import Tipo1 from "../src/components/secciones/subMenus/tipo1";
import Tipo2 from "../src/components/secciones/subMenus/tipo2";

export default function Home() {
  const [menu, setMenu] = useState("home");
  const f1 = () => {
    setMenu("home");
  };
  const f21 = () => {
    setMenu("staff");
    
  };
  const f22 = () => {
    setMenu("assure");
   
  };
  const f23 = () => {
     setMenu("main");
    
  };
  const f24 = () => {
    setMenu("dev");
    
  };
  const f31 = () => {
    setMenu("telecom");
    
  };
  const f32 = () => {
    setMenu("banking");
    
  };
  const f33 = () => {
    setMenu("ecomerce");
    
  };
  const f34 = () => {
    setMenu("retail");
    
  };
  const f35 = () => {
    setMenu("emark");
    
  };
  const f36 = () => {
    setMenu("manu");
    
  };
  const f37 = () => {
    setMenu("health");
    
  };
  const f38 = () => {
    setMenu("energy");
  };
  const f39 = () => {
    setMenu("automotive");
  };
  const f41 = () => {
    setMenu("web");
  };
  const f42 = () => {
    setMenu("java");
  };
  const f43 = () => {
    setMenu("mobile");
  };
  const f44 = () => {
    setMenu("database");
  };
  const f45 = () => {
    setMenu("others");
  };
  const f51 = () => {
    setMenu("life");
  };
  const f52 = () => {
    setMenu("jobs");
  };
  const f61 = () => {
    setMenu("privacy");
  };
  const f62 = () => {
    setMenu("whoweare");
  };
  const f71 = () => {
    setMenu("home");
  };
  const f72 = () => {
    setMenu("request");
  };
  //Solutions
  const titleSolutions = "SOLUTIONS";
  const titleDescriptionSolutions = "Custom Software Development";
  const text1Solutions = (
    <b>
      We provide full cycle product development, including design,
      implementation, QA and production deployment.
      <br />
      Our partners trust us to build custom Tech solutions for:{" "}
    </b>
  );
  const text2Solutions = (
    <div>
      • Architectural Design. <br />
      • Software Product Development. <br />
      • Product Design Sprint. <br />
      • Quality assurance on development. <br />
      • Test automation during and post development phase. <br />
      • Software support and maintenance.
      <br />
    </div>
  );
  //Industry
  const titleIndustry = "INDUSTRY";
  const titleDescriptionIndustry = "Telecom";
  const text1Industry =
    "The telecom industry involves communications companies and providers of mobile devices, mobile applications as well as Internet and video streaming services.";
  const text2Industry =
    "Our team of software developers has taken on a range of telecommunication software projects with great success. We are an expert team ready for any telecom software project. ";
  //Technology
  const titleTechnology = "SOLUTIONS";
  const titleDescriptionTechnology = "Custom Software Development";
  const text1Technology = (
    <b>
      We provide full cycle product development, including design,
      implementation, QA and production deployment.
      <br />
      Our partners trust us to build custom Tech solutions for:{" "}
    </b>
  );
  const text2Technology = (
    <div>
      • Architectural Design. <br />
      • Software Product Development. <br />
      • Product Design Sprint. <br />
      • Quality assurance on development. <br />
      • Test automation during and post development phase. <br />
      • Software support and maintenance.
      <br />
    </div>
  );
  //Careers
  const titleCareers = "INDUSTRY";
  const titleDescriptionCareers = "Telecom";
  const text1Careers =
    "The telecom industry involves communications companies and providers of mobile devices, mobile applications as well as Internet and video streaming services.";
  const text2Careers =
    "Our team of software developers has taken on a range of telecommunication software projects with great success. We are an expert team ready for any telecom software project. ";
  //About
  const titleAbout = "SOLUTIONS";
  const titleDescriptionAbout = "Custom Software Development";
  const text1About = (
    <b>
      We provide full cycle product development, including design,
      implementation, QA and production deployment.
      <br />
      Our partners trust us to build custom Tech solutions for:{" "}
    </b>
  );
  const text2About = (
    <div>
      • Architectural Design. <br />
      • Software Product Development. <br />
      • Product Design Sprint. <br />
      • Quality assurance on development. <br />
      • Test automation during and post development phase. <br />
      • Software support and maintenance.
      <br />
    </div>
  );
  //Contact
  const titleContact = "INDUSTRY";
  const titleDescriptionContact = "Telecom";
  const text1Contact =
    "The telecom industry involves communications companies and providers of mobile devices, mobile applications as well as Internet and video streaming services.";
  const text2Contact =
    "Our team of software developers has taken on a range of telecommunication software projects with great success. We are an expert team ready for any telecom software project. ";

  return (
    <>
      <Layout
        f1 ={f1}
        f21={f21}
        f22={f22}
        f23={f23}
        f24={f24}
        f31={f31}
        f32={f32}
        f33={f33}
        f34={f34}
        f35={f35}
        f36={f36}
        f37={f37}
        f38={f38}
        f39={f39}
        f41={f41}
        f42={f42}
        f43={f43}
        f44={f44}
        f45={f45}
        f51={f51}
        f52={f52}
        f61={f61}
        f62={f62}
        f71={f71}
        f72={f72}
      >
        {menu == 'home' ? <Carousel /> : null}
        {/*Solutions */}
        {menu == 'staff' ? (
          <Tipo2
            title={titleSolutions}
            titleDescription={titleDescriptionSolutions}
            text1={text1Solutions}
            text2={text2Solutions}
          />
        ) : null}
        {menu == 'assure' ? (
          <Tipo2
            title={titleSolutions}
            titleDescription={titleDescriptionSolutions}
            text1={text1Solutions}
            text2={text2Solutions}
          />
        ) : null}
        {menu == 'main' ? (
          <Tipo2
            title={titleSolutions}
            titleDescription={titleDescriptionSolutions}
            text1={text1Solutions}
            text2={text2Solutions}
          />
        ) : null}
        {menu == 'dev' ? (
          <Tipo2
            title={titleSolutions}
            titleDescription={titleDescriptionSolutions}
            text1={text1Solutions}
            text2={text2Solutions}
          />
        ) : null}
        {/**Industry */}
        {menu == 'telecom' ? (
          <Tipo1
            title={titleIndustry}
            titleDescription={titleDescriptionIndustry}
            text1={text1Industry}
            text2={text2Industry}
          />
        ) : null}
        {menu == 'banking' ? (
          <Tipo1
            title={titleIndustry}
            titleDescription={titleDescriptionIndustry}
            text1={text1Industry}
            text2={text2Industry}
          />
        ) : null}
        {menu == 'ecomerce' ? (
          <Tipo1
            title={titleIndustry}
            titleDescription={titleDescriptionIndustry}
            text1={text1Industry}
            text2={text2Industry}
          />
        ) : null}
        {menu == 'retail' ? (
          <Tipo1
            title={titleIndustry}
            titleDescription={titleDescriptionIndustry}
            text1={text1Industry}
            text2={text2Industry}
          />
        ) : null}
        {menu == 'emark' ? (
          <Tipo1
            title={titleIndustry}
            titleDescription={titleDescriptionIndustry}
            text1={text1Industry}
            text2={text2Industry}
          />
        ) : null}
        {menu == 'manu' ? (
          <Tipo1
            title={titleIndustry}
            titleDescription={titleDescriptionIndustry}
            text1={text1Industry}
            text2={text2Industry}
          />
        ) : null}
        {menu == 'health' ? (
          <Tipo1
            title={titleIndustry}
            titleDescription={titleDescriptionIndustry}
            text1={text1Industry}
            text2={text2Industry}
          />
        ) : null}
        {menu == 'energy' ? (
          <Tipo1
            title={titleIndustry}
            titleDescription={titleDescriptionIndustry}
            text1={text1Industry}
            text2={text2Industry}
          />
        ) : null}
        {menu == 'automotive' ? (
          <Tipo1
            title={titleIndustry}
            titleDescription={titleDescriptionIndustry}
            text1={text1Industry}
            text2={text2Industry}
          />
        ) : null}
        {/**tech */}
        {menu == 'web' ? (
          <Tipo1
            title={titleIndustry}
            titleDescription={titleDescriptionIndustry}
            text1={text1Industry}
            text2={text2Industry}
          />
        ) : null}
        {menu == 'java' ? (
          <Tipo1
            title={titleIndustry}
            titleDescription={titleDescriptionIndustry}
            text1={text1Industry}
            text2={text2Industry}
          />
        ) : null}
        {menu == 'mobile' ? (
          <Tipo1
            title={titleIndustry}
            titleDescription={titleDescriptionIndustry}
            text1={text1Industry}
            text2={text2Industry}
          />
        ) : null}
        {menu == 'database' ? (
          <Tipo1
            title={titleIndustry}
            titleDescription={titleDescriptionIndustry}
            text1={text1Industry}
            text2={text2Industry}
          />
        ) : null}
        {menu == 'others' ? (
          <Tipo1
            title={titleIndustry}
            titleDescription={titleDescriptionIndustry}
            text1={text1Industry}
            text2={text2Industry}
          />
        ) : null}
        {/**careers */}
        {menu == 'life' ? (
          <Tipo2
            title={titleIndustry}
            titleDescription={titleDescriptionIndustry}
            text1={text1Industry}
            text2={text2Industry}
          />
        ) : null}
        {menu == 'jobs' ? (
          <Tipo2
            title={titleIndustry}
            titleDescription={titleDescriptionIndustry}
            text1={text1Industry}
            text2={text2Industry}
          />
        ) : null}
        {/**about us */}
        {menu == 'privacy' ? (
          <Tipo1
            title={titleIndustry}
            titleDescription={titleDescriptionIndustry}
            text1={text1Industry}
            text2={text2Industry}
          />
        ) : null}
        {menu == 'whoweare' ? (
          <Tipo1
            title={titleIndustry}
            titleDescription={titleDescriptionIndustry}
            text1={text1Industry}
            text2={text2Industry}
          />
        ) : null}
        {/**Contact */}
        {menu == 'request' ? (
          <Tipo2
            title={titleIndustry}
            titleDescription={titleDescriptionIndustry}
            text1={text1Industry}
            text2={text2Industry}
          />
        ) : null}       
      </Layout>
    </>
  );
}
