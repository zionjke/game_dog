import React from 'react';
import './App.css'
import dogaudio from './dog.mp3'
import Item from "./Item";

class App extends React.Component {

    state = {
        item: [0,1, 2, 3, 4, 5, 6, 7, 8],
        counter: 0,
        randomIndex: 0
    }

    audio = new Audio(dogaudio)

    onClickCounter = () => {
        this.setState({
            counter: this.state.counter + 1
        })
        this.audio.play()
    }

    getRandomImageIndex = () => {
        return Math.floor(Math.random() * 9);
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                randomIndex: this.getRandomImageIndex()
            })
        },1000)
    }


    render = () => {

        let itemList = this.state.item.map ((item,index) => {
            if (index === this.state.randomIndex) {
              return  <Item key={index} onClick={this.onClickCounter} className="photo show"/>
            } else {
             return   <Item key={index}  className="photo"/>
            }
        })

        return (
            <div className="App">
                <div className="wrapper">
                    {itemList}
                    <div className="counter">
                        <span>{this.state.counter}</span>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;
