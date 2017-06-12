/**
 * Created by Paburitel on 04.05.2017.
 */
import './indicator-style.css';

export default function () {

    const wrap = document.createElement('div');
    wrap.className = 'indicator-wrap';
    wrap.id = 'indicator-wrap';
    const  ul = document.createElement('ul');
    ul.id = 'ul-indicator';
    wrap.appendChild(ul);
    document.getElementById('wrapper-content').appendChild(wrap);
}
