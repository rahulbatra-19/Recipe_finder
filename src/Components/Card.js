import styles from '../styles/card.module.css';
const Card = (props) => {
  return(
  <div className={styles.card}>
    <div>
      <img className={styles.img} src={props.img} alt={props.name} />
    </div>
    <div>
      <a href={props.url}> 
        <h3>{props.name}</h3>
      </a>
      <a href={props.url} target="_blank">
          <button className={styles.btn}>See More...</button>
      </a>
    </div>
    </div>);
};

export default Card;
