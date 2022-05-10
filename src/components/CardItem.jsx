const CardItem = ({ result }) => {
  console.log(result);
  return (
    <div className="card__item__wrapper">
      <div className="card__item">
        <div className="vote__container">
          <div className="up__arrow arrow"></div>
          <p className="vote__count">{result.totalVoted}</p>
          <div className="down__arrow arrow"></div>
          <p>Votes</p>
        </div>
        <div className="img__container">
          <img src={result.poster} alt="poster" />
        </div>
        <div className="card__content">
          <h2 className="title">{result.title}</h2>

          <div className="directors wrap">
            {result.director.length > 1 ? (
              <>
                <strong>Directors</strong> :
                <p>{result.director.map((dir) => dir)}</p>
              </>
            ) : (
              <>
                <strong>Director</strong> :
                <p>{result.director.map((dir) => dir)}</p>
              </>
            )}
          </div>

          <div className="genre wrap">
            <strong>Genre :</strong>
            <p>{result.genre}</p>
          </div>

          <div className="stars wrap">
            <strong>Starring :</strong>
            {result.stars.join(',')}
          </div>

          <div className="bar__container">
            <div className="bar">mins</div> |
            <div className="bar">{result.language}</div> |
            <div className="bar">
              {new Date(result.releasedDate).toDateString().split(' ')[2] +
                ' ' +
                new Date(result.releasedDate).toDateString().split(' ')[1]}
            </div>
          </div>

          <div className="bar__container">
            <div className="bar bar__hg">{result.pageViews} views</div>|
            <div className="bar bar__hg">
              Voted by {result.totalVoted} people
            </div>
          </div>
        </div>
      </div>
      <button className="watch__trailer__btn">Watch Trailer</button>
    </div>
  );
};

export default CardItem;
