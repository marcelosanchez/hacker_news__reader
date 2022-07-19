
export const loadNews = async ( query:string, page:number ) => {
    const favNews = JSON.parse(localStorage.getItem('favNews') || '[]');
    const favNewsIds = favNews.map((fnews: { created_at: number; }) => fnews.created_at);

    const newsSnap = await fetch( `https://hn.algolia.com/api/v1/search_by_date?query=${query}&page=${page}` );
    const news = await newsSnap.json();
    
    const newsList = news.hits.map( ( item:any ) => {
        const date_created = new Date(item.created_at);
        return {
            author: item.author,
            story_title: item.story_title,
            story_url: item.story_url,
            created_at: date_created.getTime(),
            fav_status: favNewsIds.includes(date_created.getTime()) ? 1 : 0
        }
    } );
    
    const hitsPerPage = news.hitsPerPage;
    const nbPages = news.nbPages;
    
    return {
        'newsList': newsList,
        'hitsPerPage': hitsPerPage,
        'nbPages': nbPages
    };
}
