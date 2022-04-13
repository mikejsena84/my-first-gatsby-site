//Step 1: Import React
import * as React from 'react'
import { Link } from 'gatsby'

//Step 2: Define your component
const AboutPage = () => {
    return (
        <main>
            <title>About me</title>
            <h1>About Me</h1>
            <Link to="/">Back to Home</Link>
            <p>Hi there! I'm the proud creator of this site, which i built using Gatsby.</p>
        </main>
    )
}
//Step 3: Export your content
export default AboutPage