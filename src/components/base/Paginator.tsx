import { Pagination } from '@mui/material'
import '../../styles/base/Paginator.css'

export const Paginator = ({totalPages}:{totalPages:number}) => {


    return (
        <div className="paginator__cont">
            <Pagination count={totalPages} variant="outlined" shape="rounded" />
        </div>
    )
}