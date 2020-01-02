import React from "react"
import Header from "../components/header"

export default () => (
    <div>
        <Header />
        <div>
        <form>
            <p>
                <label for="name">Name: </label>
                <input type="text" name="name" required placeholder="Enter your name" />
            </p>
            <p>
                <label for="email" name="email">E-mail: </label>
                <input type="email" name="email" placeholder="xyz@xyz.com" required />
            </p>
            <p>
                <label for="message">Message: </label>
                <textarea>Your message</textarea>
            </p>
            <p><button>Send</button></p>
        </form>
        </div>
        <Fooer />
    </div>
)