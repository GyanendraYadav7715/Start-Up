
import React from 'react';
import "./Footer.css";
import "./Responsive.css";
import 'remixicon/fonts/remixicon.css'


const Footer = () => {
  return (
    <>

      {/* My website content goes here */}
      <footer>
        {/* there is the first div under the footer */}
        <div className="main1">
          <div className="box1">
            <h4>

              We remember your memories<br/>
              that you don't forget.
            </h4>
            <p>Download one of our apps.</p>
            <div className="store">
              <button className="app">
                <i className="ri-apple-fill" />
                ios
              </button>
              <button className="app">
                <i className="ri-android-fill" />
                Android
              </button>
            </div>
            <div className="icon">
              <i className="ri-facebook-box-line" />
              <i className="ri-twitter-line" />
              <i className="ri-instagram-line" />
              <i className="ri-pinterest-line" />
            </div>
          </div>

         <div className='box2'>
         <div className="left">
            <h4>Yaadein</h4>
            <li>Free Stock Photos</li>
            <li>Free Videos</li>
            <li>Popular searches</li>
            <li>Collections</li>
            <li>Challenges</li>
            <li>Leaderboard</li>
            <li>Other plugins</li>
          </div>

          <div className="right">
            <h4>Company</h4>
            <li>
              <a href="/about.html">About</a>
            </li>
            <li>
              <a href="/blog.html">Blog</a>
            </li>
            <li>
              <a href="/fqs.html">FAQ</a>
            </li>
            <li>
              <a href="/hero.html">Beacome a hero</a>
            </li>
            <li>
              <a href="/partner.html">Partner with Yaadein</a>
            </li>
            <li>image &amp; Video API</li>
            <li>Sign Up</li>
          </div>
         </div>
          <div className="box3">
            <h1>Yaadein</h1>

            <div className="newsletter">
              <h2>Keep up to date</h2>
              <p>Join our newsletter for regular updates. No spam ever.</p>
              <form action="/subscribe" method="post">
                <label htmlFor="email">Your email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@email.com"
                  required=""
                />
                <button type="submit" onclick="send()">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* there is the first div under the footer codeing  closed*/}

        <hr />

        {/* {there is the second div under footer} */}
        <div className="main2">
          <p>© 2023 Yaadein. All Rights Reserved.</p>
          <div>

            <a href="/term.html">Terms of Use</a>
            <a href="/privacy.html">Privacy Policy</a>
            <a href="/lince.html">License</a>
            <a href="/cookie.html">Imprint Cookies Policy</a>

          </div>

        </div>
        {/* there is the second div under the footer codeing  closed*/}
      </footer>
    </>

  )
}

export default Footer

