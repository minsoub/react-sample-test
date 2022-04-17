import './App.css';
import { Component, Fragment } from 'react';
import MyComponent from './component/MyComponent';
import Counter from './component/Counter';
import Sya from './component/Sya';
import EventTest from './component/EventTest';
import ValidationTest from './component/ValidationTest';
import ScrollBox from './component/ScrollBox';
import IterationSample from './component/IterationSample';
import LifeCycleSample from './component/LifeCycleSample';
import ErrorBoundary from './error/ErrorBoundary';
import Info from './component/Info';
import ReducerCounter from './component/ReducerCounter';
import Average from './component/Average';

// function App() {
//     const name = 'React';

//     return (
//         <Fragment>
//             <div className="react">{name}</div>
//             <input />
//         </Fragment>
//     );
// }

function getRandomColor() {
    return '#' + Math.floor(Math.random() * 1677215).toString(16);
}
class App extends Component {
    state = {
        color: '#000000',
        visible: true,
    };

    handleClick = () => {
        this.setState({
            color: getRandomColor(),
        });
    };
    visibleClick = () => {
        console.log('visibleClick => ' + this.state.visible);
        this.setState({
            visible: this.state.visible === true ? false : true,
        });
    };
    render() {
        const name = 'React';
        return (
            <Fragment>
                <div className="react">{name}</div>
                <input />
                <MyComponent favoriteNumber={7}>Tag children</MyComponent>
                <Counter />
                <Sya />
                <EventTest />
                <ValidationTest />
                <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
                <button onClick={() => this.scrollBox.scrollToBottom()}>
                    Bottom
                </button>
                <IterationSample />
                <button onClick={this.handleClick}>Random Color</button>
                <ErrorBoundary>
                    <LifeCycleSample color={this.state.color} />
                </ErrorBoundary>
                <button
                    onClick={() => {
                        this.visibleClick();
                    }}
                >
                    {this.state.visible ? '숨기기' : '보이기'}
                </button>
                {this.state.visible && <Info />}
                <ReducerCounter />
                <Average />
            </Fragment>
        );
    }
}
export default App;
