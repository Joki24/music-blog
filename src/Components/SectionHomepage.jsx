
export default function SectionHomePage() {

    return (
        <div className="homepage">
                    <section id="featured-section">
                        <div id="featured-slider">
                            <div id="prev-article-tab" className="article-tab">
                                <div className="tab-container">
                                    <div className="prev-article">Prev Aticle</div>
                                        <i className="article_prev"></i>
                                </div> 
                            </div>
                            <div id="next-article-tab" className="article-tab">
                                <div className="tab-container">
                                    <div className="next-article">Next Article</div>
                                    <i className="article_next"></i>
                                </div>
                            </div>
                            <div id="slides">
                                <article className="article item cover"  data-slide-number="0">
                                    <div className="text clearfix">
                                        ::before
                                        <div className="title-block">
                                            <div className="category">NEWS</div>
                                            <h2 className="title">
                                                <a href="/article/2022/3/9/red-hot-chili-peppers-nine-inch-nails-slipknot-and-kiss-to-headline-louder-than-life-lineup-spin" className="link">
                                                Red Hot Chili Peppers, Nine Inch Nails, Slipknot and KISS to Headline Louder Than Life Lineup
                                                </a>
                                            </h2>
                                        </div>
                                        ::after
                                    </div>
                                    <div className="gradient-overlay"></div>
                                </article>
                                <article className="article item cover" data-slide-number="1">
                                    <div className="text clearfix">
                                        ::before
                                        <div className="title-block">
                                            <div className="category">NEWS</div>
                                            <h2 className="title">
                                                <a href="/article/2022/3/11/charli-xcx-shares-full-crash-track-listing-nme" className="link">
                                                Charli XCX shares full ‘Crash’ track listing
                                                </a>
                                            </h2>
                                        </div>
                                        ::after
                                    </div>
                                    <div className="gradient-overlay"></div>
                                </article>
                            </div>
                            <div className="slide-nav">
                                <div className="navdot" data-index="0"></div>
                                <div className="navdot" data-index="1"></div>
                                <div className="navdot" data-index="2"></div>
                            </div>
                        </div>
                        <div id="featured-side">
                            <article className="article item cover">
                                <div id="people-browse-widget" >
                                    <div className="people-rotation">
                                        <ul className="profile-carousel">
                                            <li className="selected">
                                                ::marker
                                                <a href="//myspace.com/katelynryry">
                                                    <div>
                                                        <div className="connectButton notReversed tooltips" data-id="8158005" data-entity-key="profile_8158005" data-is-connected="false" data-is-blocked="false" data-is-pending="false" data-show-reverse-status="true" data-image-url="https://x.myspacecdn.com/new/common/images/user.png" data-title="//myspace.com/katelynryry" data-area="profiles" data-type="profile" data-popover-initialized="true">
                                                            <span></span>
                                                            <span></span>
                                                        </div>
                                                        <img src="https://a4-images.myspacecdn.com/images03/30/8a09e233cd474d95a612b79fe3f4df37/300x300.jpg" alt="" />
                                                    </div>
                                                    <div>
                                                        <span>Katelyn Ryan</span>
                                                        <span className="role">Member</span>
                                                    </div>
                                                </a>
                                            </li>
                                            <li className="">
                                                ::marker
                                                <a href="//myspace.com/calvinharris">
                                                    <div>
                                                        <div className="connectButton notReversed tooltips" data-id="89005236" data-entity-key="profile_89005236" data-is-connected="false" data-is-reverse-connected="false" data-is-blocked="false" data-is-pending="false" data-show-reverse-status="true" data-image-url="https://x.myspacecdn.com/new/common/images/user.png" data-title="//myspace.com/calvinharris" data-area="profiles" data-type="profile" data-popover-initialized="true">
                                                            <span></span>
                                                            <span></span>
                                                        </div>
                                                        <img src="https://a4-images.myspacecdn.com/images04/1/2b69174db2ee4fc494f2667ca48f2820/300x300.jpg" alt="" />
                                                    </div>
                                                    <div>
                                                        <span>Clavin Harris</span>
                                                        <span className="role">Musician</span>
                                                    </div>
                                                </a>

                                            </li>
                                        </ul>
                                    </div>
                                    <div className="people-search">
                                        <form name="people-search">
                                            <header>
                                                <h3>Connect with People</h3>
                                            </header>
                                            <div className="profile-search-container">
                                                <input type="text" name="profile-search" placeholder="Enter a Name or Artist..." autocomplete="off"/>
                                            </div>
                                            <div>
                                            <span>or</span>
                                            <select name="roles" id="roles">
                                            <option name="Profile Type" value="None">Profile Type</option>
                                                    
                                                    <option name="Musician" value="Musician">Musician</option>
                                                    
                                                    <option name="Designer" value="Designer">Designer</option>
                                                    
                                                    <option name="Photographer" value="Photographer">Photographer</option>
                                                    
                                                    <option name="Artist" value="Artist">Artist</option>
                                                    
                                                    <option name="DJ / Producer" value="DJ">DJ / Producer</option>
                                                    
                                                    <option name="Blogger" value="Blogger">Blogger</option>
                                                    
                                                    <option name="Filmmaker" value="Filmmaker">Filmmaker</option>
                                                    
                                                    <option name="Writer" value="Writer">Writer</option>
                                                    
                                                    <option name="Comedian" value="Comedian">Comedian</option>
                                                    
                                                    <option name="Actor" value="Actor">Actor</option>
                                                    
                                                    <option name="Model" value="Model">Model</option>
                                                    
                                                    <option name="Promoter" value="Promoter">Promoter</option>
                                                    
                                                    <option name="Venue" value="Venue">Venue</option>
                                                    
                                                    <option name="Brand" value="Brand">Brand</option>
                                                    
                                                    <option name="Developer" value="Developer">Developer</option>
                                                    
                                                    <option name="Entrepreneur" value="Entrepreneur">Entrepreneur</option>
                                                    
                                                    <option name="Curator" value="Curator">Curator</option>
                                                    
                                                    <option name="Dancer" value="Dancer">Dancer</option>
                                                    
                                                    <option name="Athlete" value="Athlete">Athlete</option>
                                                    
                                                    <option name="Activist" value="Activist">Activist</option>
                                                    
                                                    <option name="Entertainer" value="Entertainer">Entertainer</option>
                                            </select>
                                            </div>
                                            <div>
                                                <select name="genres" id="genres">
                                                    
                                                    <option name="All Genres" value="0">All Genres</option>
                                                    
                                                    <option name="Pop" value="1012254">Pop</option>
                                                    
                                                    <option name="Rap &amp; Hip-Hop" value="1002816">Rap &amp; Hip-Hop</option>
                                                    
                                                    <option name="Rock" value="1000001">Rock</option>
                                                    
                                                    <option name="Country" value="1002532">Country</option>
                                                    
                                                    <option name="Latin" value="1002692">Latin</option>
                                                    
                                                    <option name="R&amp;B" value="1002809">R&amp;B</option>
                                                    
                                                    <option name="Electronic" value="1002572">Electronic</option>
                                                    
                                                    <option name="Alternative/Indie Rock" value="1012230">Alternative/Indie Rock</option>
                                                    
                                                    <option name="Metal" value="1002721">Metal</option>
                                                    
                                                    <option name="Reggae" value="1002820">Reggae</option>
                                                    
                                                    <option name="Blues" value="1002467">Blues</option>
                                                    
                                                    <option name="Religious" value="1004431">Religious</option>
                                                    
                                                    <option name="Jazz" value="1002674">Jazz</option>
                                                    
                                                    <option name="Classical" value="1002521">Classical</option>
                                                    
                                                    <option name="Folk" value="1002592">Folk</option>
                                                    
                                                </select>
                                            </div>
                                            <div>
                                                <select name="genders" id="genders">
                                                    
                                                    <option name="Gender" value="0">Gender</option>
                                                    
                                                    <option name="Male" value="1">Male</option>
                                                    
                                                    <option name="Female" value="2">Female</option>
                                                    
                                                </select>
                                            </div>
                                            <div>
                                                <input type="text" name="location" id="location" placeholder="Enter City or Zip..." autocomplete="off"></input>
                                            </div>
                                            <div>
                                                <div id="age" className="age-filter">
                                                <span>Age</span>
                                                    <div id="age-range">
                                                        <div className="currentRange" ></div>
                                                        <div className="leftGrip grip" data-value="18">
                                                                <span>18</span>
                                                        </div>
                                                        <div className="rightGrip grip" data-value="51">
                                                                <span>50+</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <footer>
                                                <button className="primary" type="submit">Search</button>
                                            </footer>
                                        </form>
                                    </div>
                                </div>
                            </article>
                            <article className="article item cover">
                            </article>
                        </div>
                    </section>
                    <nav id="article-category-nav">
                        <a href="#" className="more-btn">
                            More
                            <span>▾</span>
                        </a>
                        <ul className="categories">
                            <li>
                                <a href="/articles/news">NEWS</a>
                            </li>
                            <li>
                                <a href="/articles/artist-of-the-day">ARTIST OF THE DAY</a>
                            </li>
                            <li>
                                <a href="/articles/q-a">Q&amp;A</a>
                            </li>
                            <li>
                                <a href="/articles/everybody-loves-a-list">EVERYBODY LOVES A LIST!</a>
                            </li>
                            <li>
                                <a href="/articles/top-8">TOP 8</a>
                            </li>
                            <li>
                                <a href="/articles/portraits">PORTRAITS</a>
                            </li>
                        </ul>
                        <ul className="more-categories"><li>
				<a href="/articles/artist-of-the-day">ARTIST OF THE DAY</a>
			</li><li>
				<a href="/articles/q-a">Q&amp;A</a>
			</li><li>
				<a href="/articles/everybody-loves-a-list">EVERYBODY LOVES A LIST!</a>
			</li><li>
				<a href="/articles/top-8">TOP 8</a>
			</li><li>
				<a href="/articles/portraits">PORTRAITS</a>
			</li><li>
				<a href="/articles/free-lunch">FREE LUNCH</a>
			</li><li>
				<a href="/articles/10-things">10 THINGS</a>
			</li><li>
				<a href="/articles/profiling">PROFILING</a>
			</li><li>
				<a href="/articles/premiere">PREMIERE</a>
			</li><li>
				<a href="/articles/crowd-surfing">CROWD SURFING</a>
			</li><li>
				<a href="/articles/tattoosday">TATTOOSDAY</a>
			</li><li>
				<a href="/articles/wrestling-wednesday">WRESTLING WEDNESDAY</a>
			</li><li>
				<a href="/articles/new-music-friday">NEW MUSIC FRIDAY</a>
			</li><li>
				<a href="/articles/mikes-favorite-things-on-the-innerwebs">MIKE'S FAVORITE THINGS ON THE INNERWEBS</a>
			</li><li>
				<a href="/articles/playlist">PLAYLIST</a>
			</li><li>
				<a href="/articles/feature">FEATURE</a>
			</li><li>
				<a href="/articles/in-memoriam">IN MEMORIAM</a>
			</li><li>
				<a href="/articles/gallery">GALLERY</a>
			</li><li>
				<a href="/articles/20-questions">20 QUESTIONS</a>
			</li><li>
				<a href="/articles/throwback-thursday">#THROWBACKTHURSDAY</a>
			</li><li>
				<a href="/articles/what-you-missed-over-the-weekend">WHAT YOU MISSED OVER THE WEEKEND</a>
			</li></ul>
                    </nav>
        </div>

    )
}