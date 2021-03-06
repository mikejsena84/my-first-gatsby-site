//Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'

//Step 2: Define your component
const AboutPage = () => {
    return (
        <Layout pageTitle="About Me">
            <p>Hi There! I'm the proud creator of this site, which i built with Gatsby.</p>
        </Layout>
    )
}
//Step 3: Export your content
export default AboutPage