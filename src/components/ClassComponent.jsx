// import React from "react";

// class ClassComponent extends React.Component{
//     render(){
//         return <h1>Demo Class Component</h1>;
//     }
// }
// export default ClassComponent;
import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>;
      </div>
    );
  }
}

export default ClassComponent;
