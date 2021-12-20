const Footer = () => {
return (
<div className="footer">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 mb-4 mb-lg-0">
                <h5 className="text">Company</h5>
                <ul className="contact-info list-unstyled">
                    <li> Email:  mail@mail.com</li>
                    <li> Phone:  000000</li>
                </ul>
                <p className="text">Contact us </p>
            </div>
            <div className="col-lg-4 col-md-6">
                <h5 className="text">Information</h5>
                <ul className="list-unstyled">
                    <li>Privacy policy</li>
                    <li>Terms of service</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="col-lg-4 col-md-6">
                <h5>Social networks</h5>
                <ul className="list-unstyled">
                    <li>Facebook</li>
                    <li>Linkedin</li>
                    <li>Instagram</li>
                    <li>Twitter</li>
                </ul>
            </div>
        </div>
    </div>
</div>
)
}
export default Footer;