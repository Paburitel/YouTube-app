/**
 * Created by Paburitel on 03.05.2017.
 */
import './animete.css';
import refreshIndecator from '../control/indecator-refresh';
import {pageToken, initRequest} from '../main';
export default  function addItems(e, items, options, res) {
    if(options.currentItem + 50 > items.length) {
        initRequest(pageToken);
    }
    const initItem  = options.currentItem;
    let animate = '';
    if (options.page < 1) options.page = 1;
    if (options.page > options.pages) options.page = options.pages;
    if (!res) options.currentItem = options.previousQuan * options.page - options.previousQuan;
    options.previousQuan = options.quantity;
    options.pages = Math.ceil(items.length / options.quantity);
    options.page = Math.ceil((options.currentItem+1)/ options.quantity);
    const arrForRend = items.slice(options.currentItem, options.currentItem + options.quantity);
    e.innerHTML = '';
    if (options.currentItem > initItem)  animate = 'animate-right';
    if (options.currentItem < initItem)  animate = 'animate-left';
    arrForRend.forEach(item => {
        item.classList.remove('animate-right');
        item.classList.remove('animate-left');
        if (animate) item.classList.add(animate);
        e.appendChild(item);
    });
    console.log("YES");
    // e.classList.add('animate');
    refreshIndecator(items, options);
}
