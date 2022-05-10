import ContentContainer from '../../components/ContentContainer';
import Navbar from '../../components/Navbar';
import './home.css';
// import data from '../../../data.js'; // this is a backup file
import { useEffect, useState } from 'react';
import axios from 'axios';

const BODY = {
  category: 'movies',
  language: 'kannada',
  genre: 'all',
  sort: 'voting',
};

const URL = 'https://hoblist.com/api/movieList';

const Home = ({ setAuth }) => {
  // const [results, setResults] = useState([...data.result]); // this is used with backup file!
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData(url, body) {
      const response = await axios.post(URL, BODY);
      setResults(response.data.result);
      setLoading(false);
    }

    getData();
  }, []);

  return (
    <div className="home__wrapper">
      <Navbar setAuth={setAuth} />
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <ContentContainer results={results} />
      )}
    </div>
  );
};

export default Home;
