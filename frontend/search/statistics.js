/**
 * Created by Paburitel on 30.04.2017.
 */
import dataAdd from './data'
export default function (mainResp, key) {
    let id = mainResp.items.map(item => item.id.videoId).join(',');
    let str = `https://www.googleapis.com/youtube/v3/videos?id=${id}&key=${key}&part=statistics`;
    return new Promise(resolve => {
        fetch(str)
            .then(function (respons) {
                console.log("STAT" + respons.status);
                return respons.json();
            })
            .then(function (res) {
                // console.log("STAT");
                // console.log(res);
                resolve(res);
                // dataAdd(mainResp, res);

            })
            .catch(function (error) {
                console.log(error);
            })
    })
}
