import React from "react"
import Header from "../components/header"

class About extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <Header />
                <p>Vous êtes dans la section About</p>
            </div>
            
        )
    }
}

export default About;