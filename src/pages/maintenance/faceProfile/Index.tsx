import { Add } from '@mui/icons-material'
import { Button } from '@mui/material'
import GridWrapper from 'src/components/GridWrapper'
import MuiDataGrid from 'src/components/dataGrid/Index'

function FaceProfile() {
    return (
        <GridWrapper
            title="Face Profile"
            actionItems={
                <Button color="primary" variant="contained" endIcon={<Add />} fullWidth>
                    Add Face Profile
                </Button>
            }
        >
            <MuiDataGrid rows={rows} columns={columns} />
        </GridWrapper>
    )
}

export default FaceProfile

const rows = [
    {
        id: 1,
        col1: 'Hello',
        col2: 'World',
        col3: 'Wayne',
        col4: 'tim.barnes@gmail.com.au',
        col5: 'Customer',
        col6: '20',
        col7: '27 February 2023 1:38 pm',
    },
    {
        id: 2,
        col1: 'DataGridPro',
        col2: 'is Awesome',
        col3: 'Wayne',
        col4: 'tim.barnes@gmail.com.au',
        col5: 'Customer',
        col6: '20',
        col7: '27 February 2023 1:38 pm',
    },
    {
        id: 3,
        col1: 'MUI',
        col2: 'is Amazing',
        col3: 'Wayne',
        col4: 'tim.barnes@gmail.com.au',
        col5: 'Customer',
        col6: '20',
        col7: '27 February 2023 1:38 pm',
    },
]

const columns = [
    { field: 'col1', headerName: 'First Name', flex: 1 },
    { field: 'col2', headerName: 'Last Name', flex: 1 },
    { field: 'col3', headerName: 'Company Name', flex: 1, minWidth: 200 },
    { field: 'col4', headerName: 'Email ID', flex: 2 },
    { field: 'col5', headerName: 'Role', flex: 1 },
    { field: 'col6', headerName: 'Discount (%)', flex: 1 },
    { field: 'col7', headerName: 'Last Login', flex: 2 },
]
