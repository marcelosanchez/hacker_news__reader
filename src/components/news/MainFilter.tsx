import '../../styles/news/MainFilter.css';

export const MainFilter = () => {
    return (
        <div className="main_filter__cont">
            <div className="main_filter__opt selected">
                <div>All</div>
            </div>
            <div className="main_filter__opt">
                <div>My faves</div>
            </div>
        </div>
    )
}