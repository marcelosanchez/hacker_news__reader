import { useState } from 'react';
import { NewsItem } from "./NewsItem"
import { updateLocalStorage } from "../../helpers/updateLocalStorage";

export const FavList = () => {
    const favNewsStored  = localStorage.getItem('favNews') ? JSON.parse(localStorage.getItem('favNews')!) : [];
    const [favsList, setFavList] = useState(favNewsStored)

    const handleLike = ( _news_item:any , _fav_status: number )=>{
        updateLocalStorage(_news_item, _fav_status)
        setFavList( localStorage.getItem('favNews') ? JSON.parse(localStorage.getItem('favNews')!) : []  )
    }
    return(
        <div className="library_filter__cont">
            <div className="news_list__cont">
                {   favsList.map((item:any, index: number) => {
                        return <NewsItem key={index} {...item} handleLike={handleLike} />
                    })
                }
            </div>
        </div>
    )
}