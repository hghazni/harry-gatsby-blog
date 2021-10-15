import React from 'react';
import Layout from '../../components/Layout';
import scss from './Blog.module.scss';

const Blog = () => {
    return (
        <Layout title="Blog">
        <div className={scss.blog}>
            Blog
        </div>
        </Layout>
    )
}

export default Blog;