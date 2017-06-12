/**
 * Created by Paburitel on 30.04.2017.
 */
import './item.css';
export default function (options) {
    const snippet = options.snippet;
    const head = snippet.title;
    const authorText = snippet.channelTitle;
    const discriptionText = snippet.description;
    const dateText = snippet.publishedAt;
    const img = {};
    img.link = snippet.thumbnails.medium.url;
    img.width = snippet.thumbnails.medium.width;
    img.height = snippet.thumbnails.medium.height;

    const link = `https://www.youtube.com/watch?v=${options.id.videoId}`;
    const statistics = options.statistics.statistics;

    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    h3.textContent  = head;

    const imgEl = document.createElement('img');
    imgEl.setAttribute('src', img.link);
    imgEl.setAttribute('width', img.width);
    imgEl.setAttribute('height', img.height);

    const a = document.createElement('a');
    a.setAttribute('href', link);
    a.textContent = `Watch video`;
    const i = document.createElement('i');
    i.setAttribute('aria-hidden', 'true');
    const iAuthor = i.cloneNode(true);
    iAuthor.className = 'fa fa-user-o';
    const author = document.createElement('p');
    author.textContent = authorText;
    author.insertBefore(iAuthor, author.firstChild);
    // console.dir(author);
    const disc = document.createElement('p');
    disc.className = 'disc';
    disc.textContent = discriptionText;

    const date = document.createElement('p');
    const iDate = i.cloneNode(true);
    iDate.className = 'fa fa-calendar';
    date.textContent = dateText.slice(0, 10);
    date.insertBefore(iDate, date.firstChild);

    const view = document.createElement('p');
    const iView = i.cloneNode(true);
    iView.className = 'fa fa-eye';
    view.textContent = statistics.viewCount;
    view.insertBefore(iView, view.firstChild);

    const header = document.createElement('div');
    header.className = 'article-header';

    const wrap = document.createElement('div');
    wrap.className = 'article-wrap';
    const bottomWrap = document.createElement('div');
    bottomWrap.className = 'bottom-wrap';

    header.appendChild(h3);
    article.appendChild(header);
    article.appendChild(imgEl);
    article.appendChild(a);
    article.appendChild(wrap);
    wrap.appendChild(author);
    wrap.appendChild(disc);
    article.appendChild(bottomWrap);
    bottomWrap.appendChild(date);
    bottomWrap.appendChild(view);

    return article;
}
