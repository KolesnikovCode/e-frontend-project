import React from "react";
import { connect } from "react-redux";
import { setCounter, ISetCounter } from "../../../redux/actions";
import I from "immutable";

interface IProps {
  setCounter: ISetCounter;
  counter: number;
}

const Home: React.FC<IProps> = (props) => {
  return (
    <div>
      <button onClick={() => props.setCounter(Math.round(Math.random() * 100))}>
        {props.counter}
      </button>
    </div>
  );
};

function mapStateToProps(state: I.Map<string, any> /*, ownProps*/) {
  return {
    counter: state.get("counter", 0)
  };
}

export default connect(mapStateToProps, { setCounter })(Home);
