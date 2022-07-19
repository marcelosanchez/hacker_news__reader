import { NewsItem } from "./NewsItem"
import '../../styles/news/NewsList.css';
import { loadNews } from "../../helpers/loadNews";
import { useContext, useEffect, useState } from 'react';
import { Paginator } from "../base/Paginator";

export const NewsList = ({selected}:{selected:{
    name: string;
    image: string;
}}) => {
    const itemsPerPage = 20;
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    useEffect( () => { 
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
        fetchData();
    }, [selected]);

    // Invoke when user click to request another page.
    const handlePageClick = (event:any) => {
        const selectedPage = event.selected;
        setPage(selectedPage);
    };

    return (
        <>
            <div className="news_list__cont">
                {   
                    loading 
                    ? <div className="news_list__loading">Loading...</div> 
                    : news.map((item:any, index) => {
                        return <NewsItem key={index} {...item} />
                    }
                )}

                
            </div>
            <div className="news_list__paginator">
                <Paginator totalPages={totalPages}/>
            </div>
        </>
    )
}