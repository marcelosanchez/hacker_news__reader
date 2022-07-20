import { Pagination } from '@mui/material'
import { useState } from 'react'
import '../../styles/base/Paginator.css'

export const Paginator = ({totalPages, handlePageClick}:{totalPages:number ; handlePageClick:Function}) => {

    const [selectedPage, setSelectedPage] = useState(1)

    const handleChange = (_e: any, value: number) =>{
        console.log(value)
        handlePageClick(value)
        setSelectedPage(value)
    }

    return (
        <div className="paginator__cont">
            <Pagination 
                count={totalPages} 
                page = {selectedPage}
                onChange={handleChange}
                variant="outlined" shape="rounded"/>
        </div>
    )
}