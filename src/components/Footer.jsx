import "./Footer.css";
import msmePdf from "../assets/msme.pdf";
import dippPdf from "../assets/dipp.pdf";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <a
  href="https://wa.me/918881894002?text=Hello%20Brick%20Vista%20Construction%20Team"
  className="whatsapp-float"
  target="_blank"
  rel="noopener noreferrer"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="28"
    height="28"
    fill="white"
  >
    <path d="M16 .4C7.5.4.6 7.3.6 15.8c0 2.8.7 5.5 2.1 7.9L.4 31.6l8-2.2c2.3 1.2 4.9 1.9 7.6 1.9 8.5 0 15.4-6.9 15.4-15.4S24.5.4 16 .4zm0 28.2c-2.4 0-4.8-.7-6.8-2l-.5-.3-4.8 1.3 1.3-4.7-.3-.5c-1.3-2-2-4.4-2-6.8 0-7 5.7-12.7 12.7-12.7s12.7 5.7 12.7 12.7S23 28.6 16 28.6zm7.1-9.6c-.4-.2-2.4-1.2-2.8-1.3-.4-.2-.6-.2-.9.2-.2.4-1 1.3-1.2 1.5-.2.2-.4.3-.8.1-.4-.2-1.6-.6-3-1.9-1.1-1-1.9-2.3-2.1-2.7-.2-.4 0-.6.2-.8.2-.2.4-.4.6-.7.2-.2.2-.4.4-.6.1-.2 0-.5 0-.7 0-.2-.9-2.2-1.2-3-.3-.8-.6-.7-.9-.7h-.8c-.2 0-.6.1-.9.4-.3.4-1.2 1.2-1.2 3s1.2 3.5 1.4 3.7c.2.2 2.4 3.6 5.8 5.1.8.3 1.5.5 2 .6.8.2 1.6.2 2.2.1.7-.1 2.4-1 2.7-2 .3-1 .3-1.9.2-2-.1-.1-.4-.2-.8-.4z"/>
  </svg>
</a>
        <div className="container">
          <div className="footer-row">

            {/* MAIN MENU */}
            <div className="footer-col">
              <h4>MAIN MENU</h4>
              <ul>
                <li><a href="/project">› Project</a></li>
                <li><a href="/gallery">› Gallery</a></li>
                <li><a href="/contact">› Contact Us</a></li>
              </ul>
            </div>

            {/* CERTIFICATE */}
          <div className="footer-col">
  <h4>CERTIFICATE</h4>
  <ul>
    <li>
      <a href={msmePdf} target="_blank" rel="noopener noreferrer">
        › MSME Udyam Registration
      </a>
    </li>

    <li>
      <a href={dippPdf} target="_blank" rel="noopener noreferrer">
        › Department of Industrial Policy & Promotion (DIPP)
      </a>
    </li>
  </ul>
</div>
            {/* CONTACT */}
            <div className="footer-col">
              <h4>CONTACT US</h4>

              <p>
                21st Main Road, RK Colony, 2nd Phase, JP Nagar,  
                Bengaluru – 560078
              </p>

              <p>
                G-3, Krishna Chaubey Compound, Gen Arun Kumar Vaidya Marg,  
                Goregaon East, Mumbai – 400063
              </p>

              <p>
                Bungalow No. 262, AN JHA Marg, Near Kriti Scanning Centre,  
                Prayagraj – 211002
              </p>

              <p>📧 brickvista@gmail.com </p>
              <p>📞 +91 94512 05866, +91 88818 94002</p>
            </div>

          </div>
        </div>
      </footer>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        © {new Date().getFullYear()} 
        <span> Brick Vista Construction Private Limited</span>. 
        All Rights Reserved.

        <div className="developer">
          Developed by 
          <a 
            href="https://varisu.in/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            varisu.in
          </a>
        </div>
      </div>

      {/* SCROLL TO TOP */}
      <a href="#" className="scroll-top">↑</a>
    </>
  );
}