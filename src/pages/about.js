import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

class About extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Header />
                <p>Vous êtes dans la section About</p>
                <Footer />
            </div>
            
        )
    }
}

export default About;