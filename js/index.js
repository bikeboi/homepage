import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Panel } from './components/cat-panel.js';

// Panels
const artPanel = <Panel name='art' content='Colors and shapes for your eyes...'/>;
const progPanel = <Panel name='programming' content='Knowledge and reason for your mind...'/>;
const lifePanel = <Panel name='life' content='Wisdom and lessons for your soul...'/>;
const musicPanel = <Panel name='music' content='Boombaps and 808s for your ears...'/>;

const panels =<div id="panels">{artPanel}{progPanel}{lifePanel}{musicPanel}</div>;

// Hamburgler
const hamMenu = <div id="ham-main">&#9776;</div>;

// Main page
const content = <div className="content content-main">{hamMenu}{panels}</div>;

ReactDOM.render(content, document.getElementById('root'));
