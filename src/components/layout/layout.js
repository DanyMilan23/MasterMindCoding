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
            <Header 
            f1= {props.f1}
            f21={props.f21}
            f22={props.f22}
            f23={props.f23}
            f24={props.f24}
            f31={props.f31}
            f32={props.f32}
            f33={props.f33}
            f34={props.f34}
            f35={props.f35}
            f36={props.f36}
            f37={props.f37}
            f38={props.f38}
            f39={props.f39}
            f41={props.f41}
            f42={props.f42}
            f43={props.f43}
            f44={props.f44}
            f45={props.f45}
            f51={props.f51}
            f52={props.f52}
            f61={props.f61}
            f62={props.f62}
            f71={props.f71}
            f72={props.f72}
            />
            <main>
                {props.children}
            </main>
            <Footer/>
        </>
     );
}
 
export default Layout;