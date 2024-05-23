export default function Sidebar() {

    return (
      <>
          <div id="siteAlert">
                <div className="siteAlertContent"></div>
                <i className="close_18 close"></i>
          </div>
          <section id="unifiedSidebar">
            <header>
              <a href="/" data-action="logo">
                <i className="myspace-logo svg">Myspace</i>
              </a> 
            </header>
            <a href="/search" id="searchQuery" className="search">
              <i className="search svg"></i>
              <span>Search</span>
            </a>
            <div>
              <h2 className="nav-title"> Discover</h2>
              <nav>
                <ul className="nav-links">
                  <li className="featured selected">
                    <a href="/discover/featured">
                      <i class="discover-featured svg"></i>
                      <span>Featured</span>
                    </a>
                  </li>
                  <li className="music" data-action="music">
                    <a href="/discover/songs">
                      <i className="discover-music svg"></i>
                        <a href="/discover/songs">
                          <i className="discover-music svg"></i>
                          <span>Music</span>
                      </a>
                    </a>
                  </li>
                  <li className="videos">
                    <a href="/discover/videos">
                      <i className="discover-videos svg"></i>
                      <span>Videos</span>
                    </a>
                  </li>
                  <li className="people">
                    <a href="/discover/people">
                      <i className="discover-profiles svg"></i>
                      <span>People</span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
            <div className="sign-up-sign-in">
              <a href="/login">
              <button id="sign-up">Log in</button>
              </a>
              <a href="/register">
              <button id="sign-in">Sign in</button>
              </a>  
            </div>
            <div id="footer_global">
              <span className="link">
                <a href="/help" target="_blank">Help</a>
              </span>
              <span className="link">
                <span id="site-info">Site Info</span>
              </span>
              <br></br>
              <span className="link">
                <a href="/pages/privacy">Privacy</a>
              </span>
              <span className="link">
                <a href="/pages/terms">Terms</a>
              </span>
              <br></br>
              <span className="link">
                <a href="/pages/privacy?page=do-not-sell">Ad Opt-Out</a>
              </span>
              <br></br>
              <span className="link do-not-sell">
                <a href="/pages/privacy?page=do-not-sell">Do-Not-Sell My Personal Information</a>  
              </span>
              <br></br>
              <br></br>
              <span className="network">A part of the People / Entertainment Weekly Network.</span>
              <div id="site-info-popup" className="display: none;">
                <ul className="site-info-links">
                  <li>
                    <a href="/reportabuse" target="_blank">Report Abuse</a>
                  </li>
                </ul>
                <p className="copyright">
                  © 2014 Myspace LLC.
                  <br></br>
                  All rights reserved
                </p>
                <div className="arrow"></div>
              </div>
            </div>
          </section>
      </>
    )
  }
  
  
  