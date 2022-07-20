export const updateLocalStorage = ( _newsItem:any , _favStatus: number )=>{
    let favStorage = localStorage.getItem('favNews') ? JSON.parse(localStorage.getItem('favNews')!) : [] ;
    if (_favStatus === 1) {
        const favNews = {
            object_id: _newsItem.object_id,
            author: _newsItem.author,
            story_title: _newsItem.story_title,
            story_url: _newsItem.story_url,
            created_at: _newsItem.created_at,
            fav_status: 1
        }
        const found = favStorage.find(function(item: { object_id: string; }){
            if(item.object_id === _newsItem.object_id){
                return item;
            }
        });
        if(!found){
            favStorage.push(favNews);
            localStorage.setItem('favNews', JSON.stringify(favStorage));
        }

    } else {
        const newFavNews = favStorage.filter((fnews: { object_id: string; }) => fnews.object_id !== _newsItem.object_id);
        localStorage.setItem('favNews', JSON.stringify(newFavNews));
    }
}