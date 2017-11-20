import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectShape from '../../actions/buttons';

import {PlayButton, NoneButton, SquareButton, TriangleButton, PentagonButton, HexagonButton, CircleButton, PlusButton, ArrowButton, StarButton, TshapeButton, BarButton, ConcaveButton, BoxButton } from './buttons';

class Buttons extends Component {
  render() {
    return (
      <div className='buttons'>
          <PlayButton selectShape={function(){this.props.selectShape('play')}.bind(this)}/>
          <NoneButton selectShape={function(){this.props.selectShape('none')}.bind(this)}/>
          <SquareButton selectShape={function(){this.props.selectShape('square')}.bind(this)}/>
          <TriangleButton/>
          <PentagonButton/>
          <HexagonButton/>
          <CircleButton/>
          <PlusButton/>
          <ArrowButton/>
          <StarButton/>
          <TshapeButton/>
          <BarButton/>
          <ConcaveButton/>
          <BoxButton/>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    buttons: state.buttons
  };
}

const mapDispatchToProps = dispatch => {
  return {
    selectShape : shape => dispatch(selectShape(shape))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Buttons);
