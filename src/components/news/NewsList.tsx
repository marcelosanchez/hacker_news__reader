import { NewsItem } from "./NewsItem"
import { loadNews } from "../../helpers/loadNews";
import { updateLocalStorage } from "../../helpers/updateLocalStorage";
import { useEffect, useState } from 'react';
import { Paginator } from "../base/Paginator";
import '../../styles/news/NewsList.css';

export const NewsList = ({selected}:{selected:{
    name: string;
    image: string;
}}) => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    useEffect( () => { 
        fetchData();
    }, [selected, page]);

    async function fetchData() {
        try {
            const res = await loadNews(selected.name, page);           
            setNews(res.newsList);
            setLoading(false);
            setTotalPages(res.nbPages);
            localStorage.setItem('currentNews', JSON.stringify(news));
            localStorage.setItem('currentPage', '0');
            localStorage.setItem('nbPages', ""+totalPages);
        } catch (err) {
            console.log(err);
        }
    }

    const handleLike = ( _news_item:any , _fav_status: number )=>{
        let updatedNews:any = [];
        updatedNews = news.map( (item:any)=>{
            item['fav_status'] = item.object_id === _news_item.object_id ? _fav_status : item.fav_status
            return item
        } )
        updateLocalStorage(_news_item, _fav_status)
        setNews( updatedNews )
    }

    // Invoke when user click to request another page.
    const handlePageClick = (_page:number) => {
        _page = (_page-1) >= 0 ? (_page-1) : 0
        setPage(_page);
    };

    return (
        <>
            <div className="news_list__cont">
                {   
                    loading 
                    ? <div className="news_list__loading">Loading...</div> 
                    : news.map((item:any, index) => {
                        return <NewsItem key={index} {...item}  handleLike={handleLike}/>
                    })
                }
            </div>
            <div className="news_list__paginator">
                <Paginator totalPages={totalPages} handlePageClick={handlePageClick} />
            </div>
        </>
    )
}