import React from "react"
import { Button } from "react-bootstrap"


import Header from "../components/header"
import Footer from "../components/footer"

export default () => (
    <div>
        <Header />
        <div id="contactMe">
            <h3>Interested ? Mail me</h3>
            <form>
                <div className="row">
                    <label for="name" className="col-md-3">Name: </label>
                    <input type="text" className="col-7" id="name" required placeholder="Enter your name" />
                </div>
                <div className="row">
                    <label for="email" name="email" className="col-md-3">E-mail: </label>
                    <input type="email" id="email" className="col-7" placeholder="xyz@xyz.com" required />
                </div>
                <div className="row">
                    <label for="message" className="col-md-3">Message: </label>
                    <textarea id="message" className="col-7" rows="5">Your message</textarea>
                </div>
                <Button variant="primary" block>Send</Button>
            </form>
        </div>
        <Footer />
    </div>
)