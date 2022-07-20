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
    const selectedLibraryStorage = localStorage.getItem('selectedLibrary') ? localStorage.getItem('selectedLibrary') : '';
    const selectedLibrary = selectedLibraryStorage !== 'undefined' && selectedLibraryStorage !== '' ? JSON.parse(selectedLibraryStorage!) : options[0];

    let option_index = 0

    const found = options.find(function(item: { name: string; }, i: number){
        if(item.name === selectedLibrary.name){
            option_index = i;
            return selectedLibrary;
        }
    });
    
    
    const [selectedObject, setSelectedObject] = useState(selectedLibrary);
    const [selectedIndex, setSelectedIndex] = useState(option_index);


    // Persist the selected option in localStorage
    useEffect( () => {
        localStorage.setItem('selectedLibrary', JSON.stringify(selectedObject));
    }   
    , [selectedObject, selectedIndex]);


    const handleSelectChange = (_e:any)=>{
        setSelectedObject(options[_e.target.selectedIndex])
        setSelectedIndex(_e.target.selectedIndex)
    }

    return (
        <>
            <div className="library_filter__cont">
                <select className="library_filter__select" onChange={ handleSelectChange } value= {selectedIndex}>
                    {options.map((option, index) => {
                        return <option key={index} value={index} style={{ 'backgroundImage': `url(${option.image })`}} >{option.name}</option>
                    }
                    )}
                </select>
            </div>
            <NewsList selected={selectedObject}/>
        </>
    )
}