import Editor from 'components/editor/editor';
import Footer from 'components/footer/footer';
import Header from 'components/header/header';
import Preview from 'components/preview/preview';
import React from 'react';

const Home = (props) => (
    <>
        <Header/>
        <section>
            <Editor/>
            <Preview/>
        </section>
        <Footer/>
    </>   
    );

export default Home;