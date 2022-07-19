import '../../styles/news/NewsItem.css'
import favoriteIcon from '../../assets/icons/fav.svg'
import unfavoriteIcon from '../../assets/icons/un_fav.svg'
import timeIcon from '../../assets/icons/time.svg'
import ReactTimeAgo from 'react-time-ago'
import { useState, useEffect } from 'react';

export const NewsItem = ( { author, story_title, story_url, created_at, fav_status }: { author: string; story_title: string; story_url: string; created_at: number; fav_status: number } ) => {
    const [favStatus, setFavStatus] = useState(fav_status);

    useEffect(() => {
        // save the news marked as favorite in localStorage
        if (favStatus === 1) {
            const favNews = {
                author: author,
                story_title: story_title,
                story_url: story_url,
                created_at: created_at,
                fav_status: 1
            }
            localStorage.getItem('favNews') 
                ? localStorage.setItem('favNews', JSON.stringify(JSON.parse(localStorage.getItem('favNews')!).concat(favNews))) 
                : localStorage.setItem('favNews', JSON.stringify([favNews]));
                
        } else {
            const favNews = JSON.parse(localStorage.getItem('favNews') || '[]');
            const newFavNews = favNews.filter((fnews: { created_at: number; }) => fnews.created_at !== created_at);
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
//             }
//             }>
//                 <img className="news_item__fav__img" src={fav_status ? favoriteIcon : unfavoriteIcon} alt="fav" />
//                 {fav_status === 1 ? <img className="news_item__fav__img" src={favoriteIcon} alt="fav" /> : <img className="news_item__fav__img" src={unfavoriteIcon} alt="fav" />}
//             </div>
//         </div>
//     )
// }