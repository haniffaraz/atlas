import React, { Component } from 'react';
import Header from './Header'


class SideBar extends Component {

    state = {
        panelClass: "panel closed",
        btn1Class: "arrow left hidden",
        btn2Class: "arrow right"       
    }

    handleRightClick = (e) => {
        if (e.currentTarget.classList.value === 'arrow right') {
            this.setState({
                panelClass: "panel open",
                btn1Class: "arrow left",
                btn2Class: "arrow right hidden"
            })
        }
    }

    handleLeftClick = (e) => {
        if (e.currentTarget.classList.value === 'arrow left') {
            this.setState({
                panelClass: "panel closed",
                btn1Class: "arrow left hidden",
                btn2Class: "arrow right"
            })
        }
    }
    
  render() {
    return (
        <div className={this.state.panelClass} >
                <button className={this.state.btn1Class} onClick={this.handleLeftClick}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 50 80" xmlSpace="preserve">
                    <polyline fill="none" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
                </svg>
                </button>
                <button className={this.state.btn2Class} onClick={this.handleRightClick}>
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="40px" height="40px" viewBox="0 0 50 80" xmlSpace="preserve">
                    <polyline fill="none" stroke="black" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>
                </svg>
                </button>
                <div className="content">
                    <Header data={this.props.data}/>
                </div>
        </div>
    )
  }
}

export default SideBar;
