import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import Footer from "../components/footer"

export default () => (
    <div>
        <Header />
        <div id="welcome-section">
            <h1>Hello I'm Diallo Ciré</h1>
            <p>I'm a <span>developper</span></p>
            <p>Passionnate by web, data, and some stuff</p>
            
            <div id="element-thumbs-down"><a href="#projects"><i class="fa fa-angle-double-down"></i></a></div>

            
        </div>
        
        <Footer />
    </div>
)