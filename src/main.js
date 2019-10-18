import React from 'react';
import Dva from 'dva';
import App from './App.js';

const app = Dva();

app.router(()=>{
    return <App />;
});

app.start('#app');
