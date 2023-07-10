import React from 'react'
import vg from "../assets/2.webp"
import { AiFillGoogleCircle, AiFillYoutube, AiFillAmazonCircle, AiFillInstagram } from "react-icons/ai"

const Home = () => {
    return (
        <>
            <div className="home" id="home">
                <main>
                    <h1>Karn</h1>
                    <p>Solutions to all your Problems</p>
                </main>
            </div>

            <div className="home2" >
                <img src={vg} alt="...Graphics" />
                <div>
                    <p>
                        We are your one and only solution to the tech problems you face
                        every day. We are leading tech company whose aim is to increase the
                        problem solving ability in children.
                    </p>
                </div>
            </div>

            <div className="home3" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>
                        Tech Solution for IT Services - Karan Mishra
                        <p>


                            Karan Mishra proposes "OptiServe," a comprehensive IT service management platform. OptiServe streamlines processes, enhances productivity, and improves customer experiences. It features a ticketing system, knowledge base, asset management, change management, performance monitoring, integration capabilities, reporting, and mobile support. Implementing OptiServe optimizes IT service delivery, reduces costs, and improves customer satisfaction.
                        </p>
                    </p>
                </div>
            </div>

            <div className="home4" id='brands'>
                <div>
                    <h1>Brands</h1>
                    <article>
                        <div style={{ animationDelay: "0.3s" }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                        <div style={{ animationDelay: "1s" }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>
                        <div style={{ animationDelay: "0.5s" }}>
                            <AiFillYoutube />
                            <p>Youtube</p>
                        </div>
                        <div style={{ animationDelay: "0.8s" }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home
