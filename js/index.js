import App from './App.js';

App.setUrl('../data/xbox.json');
App.fetchData();
App.setData(JSON.parse(localStorage.getItem('data')));
App.setProductCard();
