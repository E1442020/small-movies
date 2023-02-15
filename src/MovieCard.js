import "./MovieCard.css";
export default function MovieCard(props) {
  return (
    <>
      <div className="card-container">
        <div className="img-container">
          <img src={props.poster!=='N/A'?props.poster:'https://via.placeholder.com/400'} alt={props.title} />
        </div>
        <h3>{props.type}</h3>
        <p>{props.title}</p>
      </div>
    </>
  );
}
