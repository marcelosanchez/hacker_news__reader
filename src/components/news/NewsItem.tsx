import '../../styles/news/NewsItem.css'
import favoriteIcon from '../../assets/icons/fav.svg'
import unfavoriteIcon from '../../assets/icons/un_fav.svg'
import timeIcon from '../../assets/icons/time.svg'
import ReactTimeAgo from 'react-time-ago'
import { useState, useEffect } from 'react';

export const NewsItem = ( { object_id, author, story_title, story_url, created_at, fav_status }: { object_id:string; author: string; story_title: string; story_url: string; created_at: number; fav_status: number } ) => {
    const [favStatus, setFavStatus] = useState(fav_status);

    useEffect(() => {
        // save the news marked as favorite in localStorage
        let favStorage = localStorage.getItem('favNews') ? JSON.parse(localStorage.getItem('favNews')!) : [] ;
        if (favStatus === 1) {
            const favNews = {
                object_id: object_id,
                author: author,
                story_title: story_title,
                story_url: story_url,
                created_at: created_at,
                fav_status: 1
            }
            const found = favStorage.find(function(item: { object_id: string; }){
                if(item.object_id === object_id){
                    return item;
                }
            });
            if(!found){
                favStorage.push(favNews);
                localStorage.setItem('favNews', JSON.stringify(favStorage));
            }
        } else {
            const newFavNews = favStorage.filter((fnews: { object_id: string; }) => fnews.object_id !== object_id);
            localStorage.setItem('favNews', JSON.stringify(newFavNews));
        }
    }, [favStatus]);

    const toggleFav = () => {
        setFavStatus(favStatus === 0 ? 1 : 0);
    }

    return (
        <div className="news_item__cont">
            <a href={story_url} target="_blank" rel="noopener noreferrer">
                <div className="news_item__text__cont">
                    <div className="news_item__time">
                        <div className="news_item__time__cont">
                            <img className="news_item__time__img" src={timeIcon} alt="fav" />
                            <span className="news_item__time__text"> <ReactTimeAgo date={created_at} locale="en-US"/> by {author}</span>
                        </div>
                    </div>
                    <div className="news_item__title">
                        <span>{story_title}</span>
                    </div>
                </div>
            </a>
            <div className="news_item__fav__cont" onClick={() => {
                toggleFav();
            } }>
                <img className="news_item__fav__img" src={favStatus === 0 ? unfavoriteIcon : favoriteIcon} alt="fav" />
            </div>
        </div>
    )
}