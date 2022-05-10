import { useEffect } from 'react';
import ContentContainer from '../../components/ContentContainer';
import Navbar from '../../components/Navbar';
import './home.css';
import { getData } from '../../../functions';

const Home = ({ setAuth }) => {
  useEffect(() => {
    console.log('loaded!!!!');
    const data = {
      category: 'movies',
      language: 'kannada',
      genre: 'all',
      sort: 'voting',
    };
    const promise = getData('https://hoblist.com/api/movieList', data);
    Promise.all(promise).then((response) => console.log(response));
  }, []);
  return (
    <div className="home__wrapper">
      <Navbar setAuth={setAuth} />
      <ContentContainer />
    </div>
  );
};

export default Home;
