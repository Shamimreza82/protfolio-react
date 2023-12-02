
import Navber from "../../Layout/Navber/Navber";
import Banner from "../../Layout/Banner/Banner";
import About from "../About/About";
import Projects from "../Projects/Projects";


const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
            <About></About>
            <Projects></Projects>
        </div>
    );
};

export default Home;