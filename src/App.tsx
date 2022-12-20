import React from 'react';
import './App.css';

let appRenderedTimes = 0;
export const App: React.FC = () => {
    appRenderedTimes++;

    return (
      <div className="App">
          <span>App rendered: {appRenderedTimes}</span>
          <Container/>
      </div>
    );
}

const commonStyles = {
    padding: '5px',
    margin: '5px',
    borderRadius: '5px',
    boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
}

let containerRenderedTimes = 0;
export const Container = () => {
    containerRenderedTimes++
    return (
      <div style={{
          ...commonStyles,
          backgroundColor: '#d17676',
      }}>
          <span>Container rendered: {containerRenderedTimes}</span>
          <InnerOne/>
          <InnerTwo/>
      </div>
    )
}

let innerOneRenderedTimes = 0;
export const InnerOne = () => {
    innerOneRenderedTimes++

    return (
      <div style={{
          ...commonStyles,
          backgroundColor: '#99d176'
      }}>
          <span>Inner one rendered: {innerOneRenderedTimes}</span>
      </div>
    )
}

let innerTwoRenderedTimes = 0;
export const InnerTwo = () => {
    innerTwoRenderedTimes++

    return (
      <div style={{
          ...commonStyles,
          backgroundColor: '#d1b976',
      }}>
          <span>Inner two rendered: {innerTwoRenderedTimes}</span>
      </div>
    )
}
