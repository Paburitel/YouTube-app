/**
 * Created by Paburitel on 02.05.2017.
 */
export default function (e) {
    let ev;
    if (e.clientX) {
        ev = e
    } else {
        ev = e.changedTouches[0];
    }
    return {
        x: ev.clientX,
        y: ev.clientY
    };
}
