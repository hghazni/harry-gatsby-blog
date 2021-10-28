import React from 'react';
import Layout from '../../components/Layout';
import scss from './Contact.module.scss';

const Contact = () => {
    return (
        <Layout title="Contact">
            <div className={scss.contact}>
            <h1 className={scss.title}>Contact</h1>
                <p className={scss.text}>Contact me</p>
            </div>
        </Layout>
    )
}

export default Contact;