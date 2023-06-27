
import { useState } from 'react';
import './App.css';


function App() {

  // const hamburger = document.querySelector('.toggleHamburger');
  // const navBar = document.querySelectorAll('.navBar');

  //  let toggles=()=>{
  //      for(let elements in navBar){
  //   elements.style.height=0; }
  //   };
  //  hamburger.addEventListener('click',toggles)tives

  const [activeNav, setActiveNav] = useState(false);
  const handleClick = () => {
    activeNav ? 
      setActiveNav(false) : setActiveNav(true)
  }

  // if(activeNav===true){
  //   setActiveNav(false)
  // }
  // else{
  //   setActiveNav(true)
  // }

  return (
    <div id="App">
      <header>

        <div id="top-header">
          <h1>Privacy Policy</h1>
        </div>

        <div id="top-bar">
          <p>
            A World of Learning — Courses Starting from ₹649 | Get New Skills — Less Than 2 Days Left!
          </p>
        </div>

        <nav id="navigation" className="navBar">
          <div className="toggleHamburger">
            {/* (
              const hamburger=document.getElementByclassName('hamburger')[0]
              const navigation=document.getElementById('navigation')[0]

              toggleHamburger.addEventListner('click',() =>{

              })
            ) */}
          </div>
          <div id="logo">
            {/* <img scr="D:/OneDrive/Desktop/New folder/myapp/public/Logo-removebg-preview.png" />  */}
            <img src={`${process.env.PUBLIC_URL}/Logo-removebg-preview.png`} />
          </div>

          <a href="#" className="hamburger" onClick={handleClick}>
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </a>
          {
            activeNav && (
              <>
                <div className={`${activeNav ? "active" : ""} navBar`} id="menu">
                  <ul className="navBar">
                    <li className="navBar"> <a href="#" className="navBar">OUR PROGRAMMES</a> </li>
                    <li className="navBar"> <a href="#" className="navBar">SHOP</a> </li>
                    <li className="navBar"> <a href="#" className="navBar">MERITUS NEAR YOU</a> </li>
                    <li className="navBar"> <a href="#" className="navBar">KNOW US</a> </li>
                  </ul>
                </div>
                <div className="navBar" id="contact-button">
                  <button>Contact Us</button>
                </div>
              </>
            )
          }

        </nav>

      </header>

      <div id="bodyContent">

        <div id="privacyImage">
          {/* <img src={`${process.env.PUBLIC_URL}/backgroundImage.avif`} /> */}
          <div id="leftSide">
            <h2>
              <span className="color1">PRIVACY </span>
              <span className="color2">POLICY</span>
            </h2>
          </div>
          <div id="rightSide">
            <p>This Privacy Policy is made for Meritus AI Learning Experiences Pvt Ltd having its office at # 9, First Cross Street Karpagam Gardens Chennai 600020 India hereinafter referred to as Meritus.</p>
            <p>The 2 web portals aischoolofindia.com and aiworldschool.com offer AI & coding learning experiences to K12 Schools, K12 students, Educators & parents globally.Meritus is committed to protecting personally-identifiable information that we handle in the course of providing our authentication-related services ('Institution Information/Personal Information')</p>
            <p>This Privacy Policy explains what information will be collected by Meritus ('Meritus', 'we,' 'us,' or 'our') when you access our websites, software, mobile applications, connected products or related services ('Product' or 'Service') and how the information will be used. We will not use or share your information with anyone except as described in this Privacy Policy.</p>
            <p>Each time you use our Service you are accepting the practices described in this Privacy Policy, as applicable, at that time.</p>
          </div>
        </div>

        <div id="remainingContent">

          <div>
            <h3>
              <span className="color1">Information </span>
              <span className="color2">Collection &amp; Use </span>
            </h3>
            <p>Meritus is the sole owner of the Personal Information collected through our Web Sites or in connection with the Services.</p>
          </div>


          <div>
            <h3>
              <span className="color1">Data Collected from </span>
              <span className="color2">Registered Users</span>
            </h3>
            <p>We need to collect Personal Information such as name, phone number, email address, state, and country in order for you to register, to ship for Products and Services or to respond to your requests for information that you may submit to us through the Web Site. We use this information to process your requests, to administer the Services, and to provide information to you relating to our Services. We use this information to analyze interest in the Web Site and to improve the information we make available through the Web Sites.
            </p>
            <p>You sholid always review, and if necessary, adjust your privacy settings on third-party websites and services before linking or connecting them to Meritus Service or website.User-generated content/audio/video using our mobile/laptop/tablet application is not monitored by us.
            </p>
            <p>For more details on our data collection practices for Children Users, please see the section on Children's Privacy.
            </p>
          </div>


          <div>
            <h3>
              <span className="color1">Cookies </span>
              <span className="color2"></span>
            </h3>
            <p>Cookies are files with a small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and transferred to your device. We use cookies to collect information in order to improve our services for you.</p>
            <p>You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.The Help feature on most browsers provides information on how to accept cookies, disable cookies, or to notify you when receiving a new cookie.</p>
            <p>If you do not accept cookies, you may not be able to use some features of our Service and we recommend that you leave them turned on.</p>
          </div>


          <div>
            <h3>
              <span className="color1">Log </span>
              <span className="color2">Data</span>
            </h3>
            <p>We may also collect information that your browser sends whenever you visit our Service ('Log Data'). This Log Data may include information such as your computer's Internet Protocol ('IP') address, browser type, browser version, and the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.</p>
            <p>In addition, we may use third party services such as Google Analytics, Facebook analytics, etc. that collect, monitor and analyze this type of information in order to increase our Service's functionality. These third-party service providers have their own privacy policies addressing how they use such information.</p>
          </div>


          <div>
            <h3>
              <span className="color1">Service </span>
              <span className="color2">Providers</span>
            </h3>
            <p>We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services and/or to assist us in analyzing how our Service is used.</p>
            <p>These third parties have access to your Personal Information only to perform specific tasks on our behalf and are obligated not to disclose or use your information for any other purpose.</p>
          </div>


          <div>
            <h3>
              <span className="color1">Communications </span>
              <span className="color2"></span>
            </h3>
            <p>We may use your Personal Information to contact you with newsletters, marketing or promotional materials and other information that may be of interest to you. You may opt-out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.</p>
          </div>


          <div>
            <h3>
              <span className="color1">International </span>
              <span className="color2">Transfer</span>
            </h3>
            <p>Your information, including Personal Information, may be transferred to any country and maintained on computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ from those from your jurisdiction. We take appropriate steps to ensure that recipients of your Personal Data are bound to duties of confidentiality and we implement measures such as standard contractual clauses.</p>
          </div>


          <div>
            <h3>
              <span className="color1">Compliance </span>
              <span className="color2">with Law</span>
            </h3>
            <p> Please note that while our services are targeted and aimed to be used by children ( Under the age of 18 ), Only persons age 18 or older under the category of parents, legal guardians, Teachers or Educators or other adlits are allowed to make purchases on our website.</p>
            <p>Meritus makes commercially reasonable efforts to ensure its website/apps comply with the Children's Online Privacy Protection Act. Audio information is stored inside our product, and no Personal Information is collected or solicited from a child user.</p>
            <p>Meritus does not knowingly collect information from children as defined by local law and does not target its websites or mobile applications to children.</p>
            <p>If you are a parent or guardian and believe that a child under 13 might have provided us with Personal Information without your permission, or if you wish to view, request deletion of, or prohibit further collection of information about your child, please contact us at info@aischoolofindia.com and or info@aiworldschool.com. We urge parents to monitor their children's use of all digital media.</p>
          </div>


          <div>
            <h3>
              <span className="color1">Business </span>
              <span className="color2">Transaction</span>
            </h3>
            <p>Your personal information may be transferred as a business asset if Meritus is involved in mergers, acquisition, or asset sale. In such cases, we will provide notice before your Personal Information is transferred and/or becomes subject to a different Privacy Policy.</p>
          </div>


          <div>
            <h3>
              <span className="color1">Children's </span>
              <span className="color2">Privacy Policy</span>
            </h3>
            <p>Please note that while our services are targeted and aimed to be used by children ( Under the age of 18 ), Only persons age 18 or older under the category of parents, legal guardians, Teachers or Educators or other adlits are allowed to make purchases on our website.</p>
            <p>Meritus makes commercially reasonable efforts to ensure its website/apps comply with the Children's Online Privacy Protection Act. Audio information is stored inside our product, and no Personal Information is collected or solicited from a child user.</p>
            <p>Meritus does not knowingly collect information from children as defined by local law and does not target its websites or mobile applications to children.</p>
            <p>If you are a parent or guardian and believe that a child under 13 might have provided us with Personal Information without your permission, or if you wish to view, request deletion of, or prohibit further collection of information about your child, please contact us at info@aischoolofindia.com and or info@aiworldschool.com. We urge parents to monitor their children's use of all digital media.</p>
          </div>

          <div>
            <h3>
              <span className="color1">Governing </span>
              <span className="color2">Law</span>
            </h3>
            <p>This Privacy Policy, Terms of Service, and any separate agreements whereby we provide you products & services shall be governed by and construed in accordance with the laws of India with the exclusive jurisdiction of Chennai Courts and no other courts will have jurisdiction.</p>
          </div>

        </div>
      </div>

      <footer>
        <div id="footerContent">

          <div>
            <ul>
              <li>
                <h4 className="link-headers">Quick Links</h4>
                <span className="accordion-button" id="on-button">+</span>
                <span className="accordion-button" id="off-button">-</span>
              </li>
              <li className="sub-links">Home</li>
              <li className="sub-links">About Us</li>
              <li className="sub-links">Team</li>
              <li className="sub-links">Philosphy</li>
              <li className="sub-links">Journey</li>
              <li className="sub-links">Awards & Recognitions</li>
              <li className="sub-links">Latest News & Events</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <h4 className="link-headers">Shop</h4>
                <span className="accordion-button" id="on-button">+</span>
                <span className="accordion-button" id="off-button">-</span>

              </li>
              <li className="sub-links">Shop Programes</li>
              <li className="sub-links">Shop Products</li>
              <li className="sub-links">Shop courses</li>
              <li className="sub-links">For Distributors</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <h4 className="link-headers">Policies</h4>
                <span className="accordion-button" id="on-button">+</span>
                <span className="accordion-button" id="off-button">-</span>

              </li>
              <li className="sub-links">RNR Policy</li>
              <li className="sub-links">Shipping</li>
              <li className="sub-links">TNC</li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                <h4 className="link-headers">Partner with us</h4>
                <span className="accordion-button" id="on-button">+</span>
                <span className="accordion-button" id="off-button">-</span>

              </li>
              <li className="sub-links">For Schools</li>
              <li className="sub-links">For Play Schools</li>
              <li className="sub-links">Become a Franchise</li>
              <li className="sub-links">For Toy/Book Stores</li>
              <li className="sub-links">Become a Distributor</li>
              <li className="sub-links">Become a Meritus Certified trainer</li>
            </ul>
          </div>

          <div>

            <div>
              <ul>
                <li>
                  <h4 className="link-headers">Reach Us</h4>
                  <span className="accordion-button" id="on-button">+</span>
                  <span className="accordion-button" id="off-button">-</span>

                </li>
                <li className="sub-links">Our Locations</li>
                <li className="sub-links">Contact us</li>
                <li>
                  <div>

                  </div>
                </li>
              </ul>
            </div>

            <div>
              <ul>
                <li>
                  <h4 className="link-headers">Careers</h4>
                  <span className="accordion-button" id="on-button">+</span>
                  <span className="accordion-button" id="off-button">-</span>

                </li>
                <li className="sub-links">Life At Meritus</li>
                <li className="sub-links">Current Openings</li>
              </ul>
            </div>


          </div>

        </div>
      </footer>


    </div>
  );
}

export default App;


