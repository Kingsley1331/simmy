import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchScenes, fetchScene } from "../actions/scenes";

class Profile extends Component {
  componentDidMount() {
    this.props.fetchScenes();
  }

  fetchScene = sceneId => {
    console.log("props", this.props);
    const { fetchScene, history } = this.props;
    fetchScene(sceneId);
    setTimeout(() => history.replace("/scenes"), 1500);
  };

  getScenes() {
    // const { fetchScene } = this.props;
    if (this.props.scenes[0]) {
      let names = this.props.scenes.map(scene => {
        return (
          <tr key={scene._id}>
            <td>{scene._id}</td>
            <td>
              <button onClick={() => this.fetchScene(scene._id)}>
                load scene
              </button>
              {/* <button onClick={() => fetchScene(scene._id)}>load scene</button> */}
            </td>
          </tr>
        );
      });

      return (
        <div>
          <h1>User's Table</h1>
          <table>
            <tbody>
              <tr>
                <th> scene ID </th>
                <th> load scene </th>
                {/* <th> Delete </th> */}
              </tr>
              {names}
            </tbody>
          </table>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Scenes</h1>
        {/* <button onClick={this.props.fetchUser}>fetch simmy users</button> */}
        {this.getScenes()}
      </div>
    );
  }
}

const mapStateToProps = ({ scenes, scene }) => {
  return {
    scenes,
    scene
  };
};

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchUser : () => dispatch(fetchUser())
//   }
// }
//
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Users);

export default connect(
  mapStateToProps,
  {
    fetchScenes,
    fetchScene
  }
)(Profile);
