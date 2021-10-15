import React from 'react';
import Layout from '../../components/Layout';
import scss from './Contact.module.scss';

const Contact = () => {
    return (
        <Layout title="Contact">
            <div className={scss.contact}>
                <p>Contact</p>
            </div>
        </Layout>
    )
}

export default Contact;