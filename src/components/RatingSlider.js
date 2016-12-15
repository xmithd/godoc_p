import React from 'react';
import {connect} from 'react-redux';
import Slider from 'material-ui/Slider';

class RatingSlider extends React.Component {
  
  constructor(props) {
    super(props)
    const val = (typeof props.currentValue !== 'undefined') ? props.currentValue : 2;
    this.state = {
      text: ['Room for improvement', 'Average', 'Good', 'Great', 'Awesome'],
      currentIdx: val
    };
  }

  handleChange = (evt, val) => {
    this.setState({...this.state, currentIdx: val});
  }

  render() {
    return (
      <div style={this.props.style}>
        {this.state.text[this.state.currentIdx]} <br />
        <Slider min={0} max={this.state.text.length-1}
        step={1}
        defaultValue={this.state.currentIdx}
        value={this.state.currentIdx}
        onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default connect(null, null)(RatingSlider);
