import React from 'react';
import './App.css'
import duck from './assets/duck1.gif'

class Item extends React.Component {

  render = () => {

    return (
        <div className="item">
            <img onClick={this.props.onClick}
                 className={this.props.className}
                 src={duck}
                 alt="dog"/>
        </div>
    );
  }
}



export default Item;
