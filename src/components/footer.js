import React from "react"

const Footer = () => {
    return(
        <footer>
            <h3> Or Reach me on </h3>
            <div class="social_media_footer">
                <div class="social_media_element"><a href="facebook.com" class="col-md-4">Facebook</a></div>
                <div class="social_media_element"><a href="github.com" class="col-md-4">Github</a></div>
                <div class="social_media_element"><a href="twitter.com" class="col-md-4">Twitter</a></div>
        
            </div>
            <hr />
            <p class="text-center ending-text">&copy; Copyright 2019 written by <a href="https://www.freecodecamp.com/cirediallo">Diallo Ciré</a></p>
        </footer>
    )
}

export default Footer;