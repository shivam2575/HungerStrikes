import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import Usercontext from "../utils/Usercontext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  componentDidMount() {
    this.intervalId = setInterval(() => {
      console.log("parent component did mount");
    }, 1000);
  }

  componentDidUpdate() {
    console.log("parent component did update");
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    console.log("parent render");
    return (
      <div>
        <h1>About Us</h1>
        <Usercontext.Consumer>
          {({ username }) => (
            <UserClass name={username} location={"Daman, DNH & DD"} />
          )}
        </Usercontext.Consumer>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        {/* <User name={"Shivam"} location={"Daman, DNH & DD"} /> */}

        <UserClass name={"Mona"} location={"My Heart"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <p>
//         Lorem Ipsum is simply dummy text of the printing and typesetting
//         industry. Lorem Ipsum has been the industry's standard dummy text ever
//         since the 1500s, when an unknown printer took a galley of type and
//         scrambled it to make a type specimen book. It has survived not only five
//         centuries, but also the leap into electronic typesetting, remaining
//         essentially unchanged. It was popularised in the 1960s with the release
//         of Letraset sheets containing Lorem Ipsum passages, and more recently
//         with desktop publishing software like Aldus PageMaker including versions
//         of Lorem Ipsum.
//       </p>
//       {/* <User name={"Shivam"} location={"Daman, DNH & DD"} /> */}
//       <UserClass name={"Shivam"} location={"Daman, DNH & DD"} />
//     </div>
//   );
// };

export default About;
