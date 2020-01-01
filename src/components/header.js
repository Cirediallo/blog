import React from 'react' 
import { Link } from "gatsby"

export default () => (
    <header>
        <h1>Blog</h1>
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="../about" >About</Link></li>
                <li><Link to="../projects">Projects</Link></li>
                <li><Link to="../contact">Contact</Link></li>
            </ul>
        </nav>
    </header>
)
        