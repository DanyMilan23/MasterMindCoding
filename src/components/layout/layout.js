import React from 'react';
import Header from './header';
import Footer from './footer';
import Head from 'next/head';

const Layout = props => {
    return ( 
        <>
            <Head>
                <title>Master Mind Coding LLC.</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha256-l85OmPOjvil/SOvVt3HnSSjzF1TUMyT9eV0c2BzEGzU=" crossOrigin="anonymous" />
            </Head>
            <Header f1={props.f1} f2={props.f2} f3={props.f3}  f4={props.f4} f5={props.f5} f6={props.f6} f7={props.f7}/>
            <main>
                {props.children}
            </main>
            <Footer/>
        </>
     );
}
 
export default Layout;