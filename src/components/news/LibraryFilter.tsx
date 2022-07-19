import { useEffect, useMemo, useState } from 'react';
import angular_img from '../../assets/libraries/angular.png';
import react_img from '../../assets/libraries/react.png';
import vue_img from '../../assets/libraries/vue.png';

import '../../styles/news/LibraryFilter.css';
import { NewsList } from './NewsList';

export const LibraryFilter = () => {
    let options = [
        {name: 'Angular', image: angular_img},
        {name: 'React', image: react_img},
        {name: 'Vue', image: vue_img},
    ];
    const selectedLibraryStorage = localStorage.getItem('selectedLibrary');
    const selectedLibrary = selectedLibraryStorage !== 'undefined' && selectedLibraryStorage !== '' ? JSON.parse(selectedLibraryStorage!) : options[0];
    const option_index = options.indexOf(selectedLibrary);
    console.log('option_index', option_index);
    console.log('selectedLibrary', selectedLibrary);
    const [selected, setSelected] = useState(selectedLibrary);
    
    console.log('selected', selected);

    // Persist the selected option in localStorage
    useEffect( () => {
        console.log('-- Cada vez que se cambia el valor de selected');
        localStorage.setItem('selectedLibrary', JSON.stringify(selected));
    }   
    , [selected]);


    return (
        <>
            <div className="library_filter__cont">
                <select className="library_filter__select" onChange={ (e) => setSelected(options[e.target.selectedIndex]) }>
                    {options.map((option, index) => {
                        return <option key={index} value={index} style={{ 'backgroundImage': `url(${option.image })`}}>{option.name}</option>
                    }
                    )}
                </select>
            </div>
            <NewsList selected={selected}/>
        </>
    )
}