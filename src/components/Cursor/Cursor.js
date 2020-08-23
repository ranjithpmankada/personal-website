import React, {Component} from 'react';
//import './cursor.scss'

function Cursor() {
    
}
class Cursor extends Component {
    state = {
        transform: 'translate3d(0px,0px,0px)',
        display: 'none',
        opacity: 0
    }

    componentDidMount() { this.cursorEvents(); }
    componentWillUnmount() { this.cursorEvents(); }

    cursorEvents() {
        let timeout = () => {};
        document.addEventListener('mouseenter',(e) => {
            this.setState({display: 'inline-block'})
        });
        document.addEventListener('mouseleave',(e) => {
        });
        document.addEventListener('mousemove', (e) => {
            clearTimeout(timeout);
            this.setState({display:'inline-block',transform: 'translate3d('+e.clientX+'px,'+e.clientY+'px,0px)', opacity:1});
            timeout = setTimeout(() => {
                this.setState({display: 'none'});
            }, 3000);
        });
    }
    render() {
        return (
            <div style={{display: this.state.display, transform: this.state.transform, opacity: this.state.opacity}} className='cursor'>
                <div className='cursor-outer'>
                    <div className='cursor-inner'></div>
                </div>
            </div>
        )
    }
}

export default Cursor;
var x = document.body.scrollTop;
            console.log(x);