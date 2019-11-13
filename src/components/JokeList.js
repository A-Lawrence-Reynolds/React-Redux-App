import React from "react";
import { connect } from "react-redux";
import { fetchChuckJoke } from "../actions/index";

function JokeList(props) {
  console.log("jokeList", props);

  return (
    <>
      {props.error && <div>{props.error.message}</div>}
      <ul>
        <li className="joke-list" key={props.joke.id}>
          {props.joke.value}
        </li>
      </ul>
      <button onClick={() => props.fetchChuckJoke()}>› Summon Chuck ‹</button>
    </>
  );
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    fetchChuckJoke: () => fetchChuckJoke(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(JokeList);
