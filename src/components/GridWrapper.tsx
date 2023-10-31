// Mui
import { OutlinedInput, Paper, Typography, styled } from '@mui/material'
import { Search } from '@mui/icons-material'

interface GridWrapperProps {
    title: string
    actionItems?: React.ReactElement
    children: React.ReactElement
}

const GridWrapper = (props: GridWrapperProps) => {
    const { title, actionItems, children } = props
    return (
        <Root>
            <div className="toolbar">
                <Typography variant="h6" fontWeight={'600'}>
                    {title}
                </Typography>
                <div className="actionItems">
                    <OutlinedInput endAdornment={<Search />} placeholder="Search..." fullWidth />
                    {actionItems ?? null}
                </div>
            </div>
            <div className="table">{children}</div>
        </Root>
    )
}

export default GridWrapper

const Root = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(1),
    '& .toolbar': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    '& .actionItems': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        gap: 10,
        '& .MuiOutlinedInput-root': {
            minWidth: 350,
            [theme.breakpoints.down('md')]: {
                minWidth: 100,
            },
            fontSize: 12,
        },
    },
    '& .table': {
        paddingBlock: theme.spacing(1),
    },
}))
