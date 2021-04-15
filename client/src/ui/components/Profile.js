import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { fetchScenes, fetchScene, deleteScene } from "../actions/scenes";

class Profile extends Component {
  componentDidMount() {
    this.props.fetchScenes();
  }

  componentDidUpdate(prevProps) {
    console.log("prevProps", prevProps.scene.shapes);
    console.log("props =>", this.props.scene.shapes);
  }

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
              <Link to={`/_scenes/${scene._id}`}>
                <img src={scene.imageURL} alt="thumbnail" width="200" />
              </Link>
            </td>
            <td>
              <button
                className="button button--delete"
                onClick={() => this.deleteScene(scene._id)}
              >
                delete scene
              </button>
            </td>
          </tr>
        );
      });

      return (
        <div>
          <table>
            <tbody>{names}</tbody>
          </table>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <h1>Scenes</h1>
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

const mapDispatchToProps = dispatch => {
  return {
    fetchScenes: () => dispatch({ type: "SCENES" }),
    fetchScene: sceneId => dispatch({ type: "GET_SCENE_ID", sceneId }),
    deleteScene: sceneId => dispatch({ type: "DELETE_SCENE", sceneId })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
