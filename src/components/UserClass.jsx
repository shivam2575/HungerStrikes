import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userId: 0,
    };
  }
  render() {
    const { name, location } = this.props;
    const { userId } = this.state;
    return (
      <div className="user-card border pad-5 mar-5">
        <h1>User Info - Class</h1>
        <h2>User id: {userId}</h2>
        <button
          className="mar-5"
          onClick={() => {
            this.setState({
              userId: this.state.userId + 1,
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
