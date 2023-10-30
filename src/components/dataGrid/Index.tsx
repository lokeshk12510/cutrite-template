import { DataGrid, DataGridProps } from '@mui/x-data-grid'
import GridFooterRow from './GridFooterRow'

const MuiDataGrid = (props: DataGridProps) => {
    return (
        <DataGrid
            pagination
            disableColumnMenu
            rowHeight={40}
            autoHeight
            {...props}
            slots={{
                footer: () => <GridFooterRow />,
            }}
        />
    )
}

export default MuiDataGrid
