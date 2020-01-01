import React from "react"
import Header from "../components/header"

export default () => (
    <div>
        <Header />
        <div>
        <form>
            <input type="text" name="nom" />
            <textarea>Your message</textarea>
        </form>
        </div>
        
    </div>
)