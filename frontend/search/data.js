/**
 * Created by Paburitel on 30.04.2017.
 */

export default function (arg) {
    const {items} = arg[0];
    const {items: statItems} = arg[1];
    items.forEach((item, i) => item.statistics = statItems[i]);
    return items;
}

