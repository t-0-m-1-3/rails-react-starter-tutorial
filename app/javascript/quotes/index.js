/*
 * index.js
 * Copyright (C) 2018 t0m <t0m@asuntu>
 *
 * Distributed under terms of the MIT license.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import App  from './components/App ';

const quotes = document.querySelector('#quotes')

ReactDOM.render(<App />, quotes)
