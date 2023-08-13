const Card = (props) => {
  return(
  <div>
    <div>
      <img src={props.img} alt={props.name} />
    </div>
    <div>
      <a href="props.url">
        <h1>{props.name}</h1>
      </a>
      <a href={props.url} target="_blank">
        <button>See More...</button>
      </a>
    </div>
    </div>);
};

export default Card;
