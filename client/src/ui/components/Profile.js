import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchScenes, fetchScene, deleteScene } from "../actions/scenes";

class Profile extends Component {
  componentDidMount() {
    this.props.fetchScenes();
  }

  componentDidUpdate(prevProps) {
    console.log("prevProps", prevProps.scene.shapes);
    console.log("props =>", this.props.scene.shapes);
  }

  fetchScene = sceneId => {
    const { fetchScene, history } = this.props;
    fetchScene(sceneId);
    setTimeout(() => history.replace("/scenes"), 1500);
  };

  deleteScene = sceneId => {
    const { deleteScene } = this.props;
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this scene?"
    );
    if (confirmDelete) {
      deleteScene(sceneId);
    }
  };

  getScenes() {
    if (this.props.scenes[0]) {
      let names = this.props.scenes.map(scene => {
        return (
          <tr key={scene._id}>
            <td>{scene.name || scene._id}</td>
            <td>
              <button onClick={() => this.fetchScene(scene._id)}>
                load scene
              </button>
              <button onClick={() => this.deleteScene(scene._id)}>
                delete scene
              </button>
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
                <th> scene name </th>
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

export default connect(
  mapStateToProps,
  {
    fetchScenes,
    fetchScene,
    deleteScene
  }
)(Profile);
