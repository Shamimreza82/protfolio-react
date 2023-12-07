
import Navber from "../../Layout/Navber/Navber";
import Banner from "../../Layout/Banner/Banner";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Footer from "../../Layout/Footer/Footer";


const Home = () => {
    return (
        <div id="home">
            <Navber></Navber>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;