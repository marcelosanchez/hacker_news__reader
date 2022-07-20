import { useState } from 'react';
import '../../styles/news/MainFilter.css';

export const MainFilter = ( { tabs , setTab}:{tabs:{ label: string; value: string; }[] ; setTab:Function }  ) => {
    const [tabSelected, setTabSelected] = useState( tabs[0].value )

    const setTabValue = (value:string) =>{
        setTabSelected(value);
        setTab(value)
    }

    return (
        <div className="main_filter__cont">
            {
                tabs.map((item:any, index) =>{
                    return <div key={index} className={"main_filter__opt " + (tabSelected == item.value ? 'selected' : '' )} onClick={()=>setTabValue(item.value)}>
                        <div>{item.label}</div>
                    </div>
                })
            }
        </div>
    )
}