import React from 'react';
import Layout from '../../components/Layout';
import scss from './About.module.scss';

const About = () => {
    return (
        <Layout title="About">
            <div className={scss.about}>
                <h1 className={scss.title}>About</h1>
                <p className={scss.text}>Something about me</p>
            </div>
        </Layout>
    )
}

export default About;