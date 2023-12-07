import React from 'react'
import Layout from "../../Components/Layouts/Layout"
import Section1 from './section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Section4 from './Section4'
import Section5 from './Section5'
import Section6 from './Section6'
import Section7 from './Section7'



const Home = () => {
    return (
        <>
            <Layout>
                {/* Home section Hero Banner  */}
                <Section1 />

                {/* Home Section About */}
                <Section2 />

                {/* Home Section Menu Cards */}
                <Section3 />

                {/* Home Section Promotion */}
                <Section4 />

                {/* Home Section Shop */}
                <Section5 />

                {/* Home Blog Section */}
                <Section6 />

                {/* Home Section Contact */}
                <Section7 />
            </Layout>
        </>
    )
}

export default Home