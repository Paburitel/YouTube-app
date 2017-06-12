/**
 * Created by Paburitel on 04.05.2017.
 */
import './ctrl-style.css';
import {plusLimit, arrowClick} from './handle';
export default function () {

    const container = document.getElementById('wrapper-content');
    const aLeft = document.createElement('a');
    aLeft.setAttribute('href', '#');
    const aRight = aLeft.cloneNode(true);
    aLeft.className = 'arrow arrow-left';
    aLeft.id = 'arrow-left';
    aRight.id = 'arrow-right';
    aRight.className = 'arrow arrow-right';
    aLeft.addEventListener('click', arrowClick);
    aRight.addEventListener('click', arrowClick);
    container.appendChild(aLeft);
    container.appendChild(aRight);

    const aNext = document.createElement('a');
    aNext.appendChild(document.createElement('span'));
    aNext.setAttribute('href', '#');
    const aPrev = aNext.cloneNode(true);
    aNext.className = 'arrow arrow-small-right';
    aNext.id = 'next';
    aPrev.className = 'arrow arrow-small-left';
    aPrev.id = 'prev';
    aPrev.addEventListener('click', plusLimit);
    aNext.addEventListener('click', plusLimit);
    container.appendChild(aNext);
    container.appendChild(aPrev);
}
