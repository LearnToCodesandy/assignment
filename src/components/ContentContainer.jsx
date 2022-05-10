import CardItem from './CardItem';

const ContentContainer = ({ results }) => {
  return (
    <div className="content__container">
      {results.map((result) => (
        <CardItem result={result} key={Math.random()} />
      ))}
    </div>
  );
};

export default ContentContainer;
