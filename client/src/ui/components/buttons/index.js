import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectShape from '../../actions/buttons';
import Scene, { updateSelected } from '../../../engine/scenes/scene';

import { PlayButton, StepButton, NoneButton, SquareButton, TriangleButton, PentagonButton, HexagonButton, CircleButton, PlusButton, ArrowButton, StarButton, TshapeButton, BarButton, ConcaveButton, BoxButton, DeleteButton} from './buttons';

class Buttons extends Component {
  selectButton(){
   return <h1>{this.props.buttons['play'].toString()}</h1>;
  }

  render() {
    return (
      <div className='buttons'>
          <PlayButton selected={this.props.buttons['play']} selectShape={() => {this.props.selectShape('play')}}/>
          <StepButton selected={this.props.buttons['step']} selectShape={() => {this.props.selectShape('step')}}/>
          <NoneButton selected={this.props.buttons['none']} selectShape={() => {this.props.selectShape('none')}}/>
          <SquareButton selected={this.props.buttons['square']} selectShape={() => this.props.selectShape('square')}/>
          <TriangleButton selected={this.props.buttons['triangle']} selectShape={() => this.props.selectShape('triangle')}/>
          <PentagonButton selected={this.props.buttons['pentagon']} selectShape={() => this.props.selectShape('pentagon')}/>
          <HexagonButton selected={this.props.buttons['hexagon']} selectShape={() => this.props.selectShape('hexagon')}/>
          <CircleButton selected={this.props.buttons['circle']} selectShape={() => this.props.selectShape('circle')}/>
          <PlusButton selected={this.props.buttons['plus']} selectShape={() => this.props.selectShape('plus')}/>
          <ArrowButton selected={this.props.buttons['arrow']} selectShape={() => this.props.selectShape('arrow')}/>
          <StarButton selected={this.props.buttons['star']} selectShape={() => this.props.selectShape('star')}/>
          <TshapeButton selected={this.props.buttons['tShape']} selectShape={() => this.props.selectShape('tShape')}/>
          <BarButton selected={this.props.buttons['bar']} selectShape={() => this.props.selectShape('bar')}/>
          <ConcaveButton selected={this.props.buttons['concave']} selectShape={() => this.props.selectShape('concave')}/>
          <BoxButton selected={this.props.buttons['box']} selectShape={() => this.props.selectShape('box')}/>
          <DeleteButton selected={this.props.buttons['_delete']} selectShape={() => this.props.selectShape('_delete')}/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  updateSelected(state, Scene);
  return {
    buttons: state.buttons
  };
}

const mapDispatchToProps = dispatch => {
  return {
    selectShape: shape => dispatch(selectShape(shape))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
