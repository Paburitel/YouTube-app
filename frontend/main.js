
//import base style
import './css/reset.css';
import './body/body.css';
import 'whatwg-fetch';
import 'font-awesome/css/font-awesome.css';
import searchRend from './search/render.js';
import request from './search/request.js';
import statistics from './search/statistics.js';
import dataSet from './search/data.js';
import conteinerRender from  './container/container-render.js';
import itemRender from  './item/items-render.js';
import resize from  './item/resize';
import coordinates from  './swipe/coordinates';
import addItems from  './swipe/add-items';
import ctrlRender from './control/ctr-render';
import indicatorRender from './control/indicator-render';


let [data, items, options, pageToken] = [[], [],
    {quantity: 0, page: 1, currentItem: 0, pages: 0, previousQuan: 0, limit: 5}, null];
const swipe = function (e) {
    if (e.target.tagName.toUpperCase() === 'a'.toUpperCase() ) return;
    const container = document.getElementById('container');
    let start = coordinates(e);
    document.body.addEventListener('mouseup', endCoor);
    document.body.addEventListener('touchend', endCoor);
    function endCoor (ev) {
        let end = coordinates(ev);
        let dif = end.x - start.x;
        if (dif > -20 && dif < 20) {
            console.log('NO - SWIPE');
            console.log(options);
            document.body.removeEventListener('mouseup', endCoor);
            document.body.removeEventListener('touchend', endCoor);
            return;
        }
        if (end.x < start.x) options.page++;
        if (end.x > start.x) options.page--;
        addItems(container, items, options);
        console.log('SWIPE');
        console.log(options);
        document.body.removeEventListener('mouseup', endCoor);
        document.body.removeEventListener('touchend', endCoor);
    }

};
const onResize = function () {
    if(!items.length) return;
    const container = document.getElementById('container');
    options.quantity = resize(container);
    if (options.previousQuan !== options.quantity) addItems(container, items, options, true);
};
const initPrepare = function () {
    const container = document.getElementById('container');
    ctrlRender();
    indicatorRender();
    document.body.addEventListener('mousedown', swipe);
    document.body.addEventListener('touchstart', swipe);
    options.quantity  = resize(container);
    addItems(container, items, options);

}

const makeItems = function (data) {
    let checkFirst = true;
    if (items.length) {
        checkFirst = false;
    } // render ctrl ones

    data.forEach(item => {
        let el = itemRender(item);
        items.push(el);
    });
    if (checkFirst) initPrepare();
};


const initRequest = function (token) {
    const qText = document.getElementById('search').value;
    const key = 'AIzaSyCezr_WaXSn1D2MoJnz0ZzHUXDGKudl3mM';
    let [resp,  stat] = [null, null];
    let requestPromise = new Promise((resolve) => {
        resolve(request(qText, key, token));
    });
    requestPromise
        .then((res) => {
            resp = res;
            pageToken = res.nextPageToken;
            console.log("PROMISE");
            return statistics(res, key);
        })
        .then((st) => {
            console.log('stat!!!');
            console.log(st);
            stat = st;
            return [resp, stat];
        })
        .then((arr) => {
            console.log(arr);
            let chunk = dataSet(arr)
            data = data.concat(chunk);
            console.log(data);
            makeItems(chunk);
        })
};

const prepareRequest = function (e) {
    if ((e.currentTarget.id === 'search' && e.keyCode === 13) || (e.currentTarget.id === 'btn')) {
        const mainContainer = document.getElementById('wrapper-content');
        if (mainContainer) document.body.removeChild(mainContainer);
        pageToken = '';
        data = [];
        items = [];
        options = {quantity: 0, page: 1, currentItem: 0, pages: 0, previousQuan: 0, limit: 5};
        conteinerRender();
        initRequest(pageToken);
    }
};
searchRend();
document.getElementById('btn').addEventListener('click', prepareRequest);
document.getElementById('search').addEventListener('keydown', prepareRequest);
document.body.onresize = onResize;
console.log("i am ready");

export {options, items, pageToken, initRequest};

