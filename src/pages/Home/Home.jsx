import { Outlet } from "react-router-dom";
import Navber from "../../Layout/Navber/Navber";
import Banner from "../../Layout/Banner/Banner";


const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <Banner></Banner>
        </div>
    );
};

export default Home;