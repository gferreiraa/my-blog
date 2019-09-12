import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/seo'
import { Link } from 'gatsby'

const AboutPage = () => (
    <Layout>
        <SEO title="about"/>
        <h1>Página de about</h1>
        <Link to="/">Back to Home</Link>
    </Layout>
)

export default AboutPage