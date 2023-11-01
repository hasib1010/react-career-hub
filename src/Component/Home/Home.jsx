import Banner from "../Banner/Banner";
import Category from "../CategoryList/Category";
import Featured from "../Featured Jobs/Featured";

const Home = () => {
    return (
        <div className="container mx-auto">
            
            <Banner></Banner>
            <Category></Category>
            <Featured></Featured>
        </div>
    );
};

export default Home;