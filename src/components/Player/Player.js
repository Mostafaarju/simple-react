import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Player = (props) => {
  console.log(props);
  const {
    name,
    image,
    salary,
    responsibility,
    birth,
    weight,
    id,
    height,
  } = props.player;
  const handleAddPlayer = props.handleAddPlayer;
  const cartHeight = { width: "18rem" };
  return (
    <div className="d-inline-flex p-3 mx-auto">
      <div className="card shadow" style={cartHeight}>
        <img src={image} class="card-img-top" alt={name} />
        <div className="card-body ">
          <h5 className="card-title">
            {id} {name}{" "}
            <span>
              <small> {responsibility}</small>
            </span>
          </h5>
          <p className="card-text m-0 p-0">Salary: ${salary}</p>
          <p className="card-text m-0 p-0">Birth: {birth}</p>
          <p className="card-text m-0 p-0">Weight: {weight}</p>
          <p className="card-text ">Height: {height}</p>
          <button
            onClick={() => handleAddPlayer(props.player)}
            className="btn btn-primary"
          >
            <FontAwesomeIcon icon={faShoppingCart} /> Add to Club
          </button>
        </div>
      </div>
    </div>
  );
};

export default Player;
