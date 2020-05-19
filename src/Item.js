import React from 'react';
import './App.css'
import dog from './dog.jpg'

class Item extends React.Component {

  render = () => {

    return (
        <div className="item">
            <img onClick={this.props.onClick}
                 className={this.props.className}
                 src={dog}
                 alt="dog"/>
        </div>
    );
  }
}



export default Item;
