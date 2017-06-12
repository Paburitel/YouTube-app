/**
 * Created by Paburitel on 02.05.2017.
 */
export default function () {
    const width = document.body.clientWidth;
    let quantity;
    if (width >= 2300) {
        quantity = 5;
    } else if (width >= 1460) {
        quantity = 4;
    } else if (width >= 1074) {
        quantity = 3;
    } else if (width >= 725) {
        quantity = 2;
    } else {
        quantity = 1;
    }
    return quantity;
}
