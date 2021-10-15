import React from 'react';
import Layout from '../../components/Layout';
import scss from './About.module.scss';

const About = () => {
    return (
        <Layout title="About">
            <div className={scss.about}>
                About
            </div>
        </Layout>
    )
}

export default About;