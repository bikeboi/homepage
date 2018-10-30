import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Panel } from './components/cat-panel.js';
import { Content } from './components/content.js';
import { Ham } from './components/ham.js';

// Panels
const artPanel = <Panel name='art' content='Colors and shapes for your eyes...'/>;
const progPanel = <Panel name='programming' content='Knowledge and reason for your mind...'/>;
const lifePanel = <Panel name='life' content='Wisdom and lessons for your soul...'/>;
const musicPanel = <Panel name='music' content='Boombaps and 808s for your ears...'/>;

const panels =<div id="panels">{artPanel}{progPanel}{lifePanel}{musicPanel}</div>;

// Side Menu
const infoMenu = <div className="info-menu">Some info</div>;

// Main page
const content = <Content name="main" panels={panels} info={infoMenu} />;

ReactDOM.render(content, document.getElementById('root'));
