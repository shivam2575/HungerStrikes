import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 0,
      userId2: 0,
    };
    console.log(this.props.name + "child constructor");
  }
  componentDidMount() {
    console.log(this.props.name + "child component did mount");
  }
  render() {
    const { name, location } = this.props;
    const { userId } = this.state;
    const { userId2 } = this.state;
    console.log(name + "child render");
    return (
      <div className="user-card border pad-5 mar-5">
        <h1>User Info - Class</h1>
        <h2>User id: {userId}</h2>
        <h2>User id 2: {userId2}</h2>
        <button
          className="mar-5"
          onClick={() => {
            this.setState({
              userId: this.state.userId + 1,
              userId2: this.state.userId2 + 1,
            });
          }}
        >
          Increase id
        </button>
        <button
          className="mar-5"
          onClick={() => {
            this.setState({
              userId: this.state.userId - 1,
            });
          }}
        >
          Decrease id
        </button>
        <h3>Name: {name} Class</h3>
        <h3>Location: {location}</h3>
        <h3>Github: shivam2575</h3>
      </div>
    );
  }
}

export default UserClass;
