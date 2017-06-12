/**
 * Created by Paburitel on 30.04.2017.
 */
import './container.css';

export default function () {
    const wrapperContent = document.createElement('div');
    wrapperContent.className = 'wrapper-content';
    wrapperContent.id = 'wrapper-content';
    const body = document.body;
    const container = document.createElement('section');
    container.className = 'container';
    container.id = 'container';
    body.appendChild(wrapperContent);
    wrapperContent.appendChild(container);
}
