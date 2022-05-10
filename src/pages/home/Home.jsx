import { useEffect } from "react";
import ContentContainer from "../../components/ContentContainer";
import Navbar from "../../components/Navbar";
import "./home.css";

const Home = ({ setAuth }) => {
  useEffect(() => {
    const data = {
      category: "movies",
      language: "kannada",
      genre: "all",
      sort: "voting"
    };
    console.log(data);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    async function getData() {
      const response = await fetch("/api/movieList", options);
      const data = response.json();
      console.log(data);
    }
    getData();
  }, []);
  return (
    <div className="home__wrapper">
      <Navbar setAuth={setAuth} />
      <ContentContainer />
    </div>
  );
};

export default Home;
