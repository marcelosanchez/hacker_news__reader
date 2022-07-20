import favoriteIcon from '../../assets/icons/fav.svg'
import unfavoriteIcon from '../../assets/icons/un_fav.svg'
import timeIcon from '../../assets/icons/time.svg'
import ReactTimeAgo from 'react-time-ago'
import '../../styles/news/NewsItem.css'

export const NewsItem = ( { object_id, author, story_title, story_url, created_at, fav_status , handleLike }: { object_id:string; author: string; story_title: string; story_url: string; created_at: number; fav_status: number ; handleLike: Function } ) => {
    const toggleFav = () => {
        let _fav_status =  fav_status === 0 ? 1 : 0
        handleLike( {
            object_id: object_id,
            author: author,
            story_title: story_title,
            story_url: story_url,
            created_at: created_at,
            fav_status: _fav_status
        } , _fav_status);
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
                <img className="news_item__fav__img" src={fav_status === 0 ? unfavoriteIcon : favoriteIcon} alt="fav" />
            </div>
        </div>
    )
}