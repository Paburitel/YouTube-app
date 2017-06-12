/**
 * Created by Paburitel on 29.04.2017.
 */

export default function(qText, key, pageToken) {
    let request = qText;
    let str = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${request}&key=${key}&maxResults=15&pageToken=${pageToken}&type=video`;
    return new Promise(function(resolve, reject) {
        fetch(str)
            .then(function (respons) {
                console.log(respons.status);
                return respons.json();
            })
            .then(function (res) {
                resolve(res);
            })
            .catch(function (error) {
                console.log(error);
            })
    })
}
