import React from "react"
import { Link } from "gatsby"
import axios from 'axios'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {

    constructor(props){
        super(props)
    }

    componentDidMount() {
        axios.get('/.netlify/functions/hello').then(response => console.log(response)).catch(err => console.log(err))
    }

    render() {

    return(
    <Layout>
        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
        <h1>Hi people</h1>
        <p>WASSSSUP!!!!</p>
        <p>Now go build something great.</p>
        <div style={{maxWidth: `300px`, marginBottom: `1.45rem`}}>
        <Image />
        <div data-netlify-identity-menu></div>
          <div data-netlify-identity-button>Login with Netlify Identity</div>
        </div>
        <Link to="/page-2/">Go to page 2</Link>
    </Layout>
)
}
}

export default IndexPage
