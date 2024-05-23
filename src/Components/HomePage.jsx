import Blogsection from "./Blogsection";
import SectionHomePage from "./SectionHomepage";
import Sidebar from "./Sidebar";
import "../assets/css/homePage.css"


export default function HomePage() {

    return (
        <div className="App">
            <div id="container">
                <Sidebar/>
                <div id="wrap" >
                    <SectionHomePage/>
                    <Blogsection/>
                </div>
            </div>
        </div>
    )
}