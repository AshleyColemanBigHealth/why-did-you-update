import React from 'react';
import { render } from 'react-dom';
import whyDidYouUpdate from '../../src';
import ClassDemo from './ClassDemo';

whyDidYouUpdate(React);

const sameByReferenceObject = { b: 'b' };

console.info('First Render (does not trigger whyDidYouUpdate).');
render(<ClassDemo a={1} b={sameByReferenceObject} />, document.getElementById('demo'));

console.info('Second render where the props and state are the same.');
render(<ClassDemo a={1} b={sameByReferenceObject} />, document.getElementById('demo'));

console.info('Third render where the props are the same by value but not by reference.');
render(<ClassDemo a={1} b={{ b: 'b' }} />, document.getElementById('demo'));

console.info('Fourth render where we add a function (does not trigger whyDidYouUpdate).');
render(<ClassDemo a={1} fn={function something() {}} />, document.getElementById('demo'));

console.info('Fifth render with a function by the same name.');
render(<ClassDemo a={1} fn={function something() {}} />, document.getElementById('demo'));

render(<ClassDemo a={1} b={{ c: { d: 4 } }} e={function something() {}} f={1} />, document.querySelector('#demo'));
render(<ClassDemo a={1} b={{ c: { d: 4 } }} e={function something() {}} f={2} />, document.querySelector('#demo'));
