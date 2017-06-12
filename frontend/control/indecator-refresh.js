/**
 * Created by Paburitel on 04.05.2017.
 */
import {clickSmallScale} from './handle';

export default function (items, options) {
    const{page, pages, limit} = options;
    let index = 1;

    if (page > limit) {
        index = Math.floor(page/limit) * limit + 1;
        if (page%limit === 0) index = index - limit;
    }
    const ul = document.getElementById('ul-indicator');
    ul.innerHTML = '';
    for (let i = 0; i < limit; i++) {
        if (index > pages) break;
        const li = document.createElement('li');
        if(index === options.page) li.className = 'active-page';
        const a = document.createElement('a');
        a.innerHTML = `${index}`;
        a.setAttribute('href','#');
        a.addEventListener('click', clickSmallScale);
        li.appendChild(a);
        ul.appendChild(li);
        index++;
    }
    console.log(options);
}


