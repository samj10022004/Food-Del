import { assets } from "../../assets/frontend_assets/assets"
import "./footer.css"

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, dicta nihil. Quam maxime, tempore nam ex totam provident molestiae accusamus aliquam nisi porro sequi deserunt. Ad aperiam nesciunt ducimus. Nemo.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="icon" />
                    <img src={assets.twitter_icon} alt="icon" />
                    <img src={assets.linkedin_icon} alt="icon" />
                </div>
            </div>
            <div className="footer-content-right">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>         
            <div className="footer-content-center">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1 234 567 890</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright"> Copyright 2024 Tomato.com - All Right Reserved. </p>
      
    </div>
  )
}

export default Footer
