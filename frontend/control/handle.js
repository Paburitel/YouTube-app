/**
 * Created by Paburitel on 05.05.2017.
 */
import {options, items} from '../main';
import addItems from '../swipe/add-items';

const clickSmallScale = function (e) {
    const container = document.getElementById('container');
    options.page = +e.currentTarget.innerText;
    addItems(container, items, options);
    console.log("CLICk");
    // e.stopPropagation();
};
const plusLimit = function (e) {
    const container = document.getElementById('container');
    const teg = e.currentTarget.id.toUpperCase();
    if (teg === 'next'.toUpperCase()) {
        options.page = options.page + options.limit;
    };
    if (teg === 'prev'.toUpperCase()) {
        options.page = options.page - options.limit;
    };
    addItems(container, items, options);
}
const arrowClick = function (e) {
    const container = document.getElementById('container');
    if (e.currentTarget.id === 'arrow-left') options.page--;
    if (e.currentTarget.id === 'arrow-right') options.page++;
    addItems(container, items, options);
    console.log(options);
};
export {clickSmallScale, plusLimit, arrowClick};
