import React from "react"
import { Button } from "react-bootstrap"

import "../styles/bootstrap.min.css"
import Header from "../components/header"
import Footer from "../components/footer"

export default () => (
    <div>
        <Header />
        <div>
        <form>
            <p>
                <label for="name">Name: </label>
                <input type="text" id="name" required placeholder="Enter your name" />
            </p>
            <p>
                <label for="email" name="email">E-mail: </label>
                <input type="email" id="email" placeholder="xyz@xyz.com" required />
            </p>
            <p>
                <label for="message">Message: </label>
                <textarea id="message">Your message</textarea>
            </p>
            <Button variant="primary" block>Send</Button>
        </form>
        </div>
        <Footer />
    </div>
)