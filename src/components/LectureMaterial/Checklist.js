import React from "react";
import "./Checklist.css";

export const Checklist = ({ items }) => {
  return <ItemList />;
};

class Item extends React.Component {
  constructor(props) {
    super();

    this.state = {
      checked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({
      checked: !this.state.checked,
    });
  }
  render() {
    let text = this.state.checked ? (
      <strike>{this.props.message}</strike>
    ) : (
      this.props.message
    );
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <input type="checkbox" onClick={this.handleClick} />
            &nbsp;{text}
            <hr />
          </div>
        </div>
      </div>
    );
  }
}

let item2 = <Item message="Download and install an IDE (vscode)" />;
let item3 = <Item message="Download and install terminal GUI (git bash)" />;
let item4 = (
  <Item message="Configuring your vscode with your first extensions" />
);

let allTheThings = [item2, item3, item4];

class ItemList extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    let items = allTheThings.map((thing) => thing);
    return (
      <>
        <div className="checklist">
          <h4>{items}</h4>
        </div>
      </>
    );
  }
}
