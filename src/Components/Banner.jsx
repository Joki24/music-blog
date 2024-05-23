
export default function Banner() {
    
    return (
        <section id="recommended-people">
            <div className="container-main">
                <h2 className="section-header">The Best in Music &amp; Culture. All In One Place.</h2>
                <div className="clearfix people-grid">
                    <div className="people-grid infinite" id="browse-people"></div>
                </div>
                <p className="join-millions">Join the Millions of Musicians and Artists on Myspace</p>
                <div className="sign-up-button">
                    <a href="/register" className="sign-up-today">Sign Up Today</a>
                </div>
            </div>
        </section>
)
}