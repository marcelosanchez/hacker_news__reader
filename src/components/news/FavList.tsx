
import { useState } from 'react';
import { NewsItem } from "./NewsItem"

export const FavList = ()=>{
    const favNewsStored  = localStorage.getItem('favNews') ? JSON.parse(localStorage.getItem('favNews')!) : [];
    console.log('favNewsStored:',favNewsStored)
    const [favslist] = useState(favNewsStored)
    return(
        <div className="library_filter__cont">
            <div className="news_list__cont">
                {   favslist.length > 0
                    ? 
                        favslist.map((item:any, index: number) => {
                            return <NewsItem key={index} {...item} />
                        })
                    :
                    <div className="news_list__empty">No news found</div>
                }
            </div>
        </div>
    )
}