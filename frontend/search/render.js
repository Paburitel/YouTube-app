/**
 * Created by Paburitel on 28.04.2017.
 */
'use strict'
import './search.css';
export default function () {
    const wrap = document.createElement('div');
    wrap.className = 'wrap-search';
    const form = document.createElement('div');
    form.className = 'search-form';
    const inputSearch = document.createElement('input');
    inputSearch.setAttribute('id', 'search');
    inputSearch.className = 'search-input';
    inputSearch.setAttribute('placeholder', 'search...');
    inputSearch.setAttribute('name', 'search');
    inputSearch.setAttribute('type', 'text');
    form.appendChild(inputSearch);
    document.body.appendChild(wrap);
    wrap.appendChild(form);
    const searhBtn = document.createElement('button');
    searhBtn.className = 'search-btn';
    searhBtn.setAttribute('id', 'btn');
    searhBtn.setAttribute('type', 'button');
    const i  = document.createElement('i');
    i.className = "fa fa-search fa-2x";
    searhBtn.appendChild(i);
    form.appendChild(searhBtn);
};
