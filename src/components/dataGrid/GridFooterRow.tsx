// Mui

import { Box, Pagination, PaginationItem, Stack, Typography } from '@mui/material'
import {
    gridPageCountSelector,
    gridPageSelector,
    gridPageSizeSelector,
    gridRowCountSelector,
    useGridApiContext,
    useGridSelector,
} from '@mui/x-data-grid'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

const GridFooterRow = () => {
    const apiRef = useGridApiContext()
    const page = useGridSelector(apiRef, gridPageSelector)
    const pageCount = useGridSelector(apiRef, gridPageCountSelector)
    const pageSize = useGridSelector(apiRef, gridPageSizeSelector)
    const rowCount = useGridSelector(apiRef, gridRowCountSelector)

    if (rowCount) {
        return (
            <Box sx={(theme) => ({ borderTop: `1px solid ${theme.palette.grey[200]}` })}>
                <Stack
                    direction={'row'}
                    alignItems="center"
                    justifyContent={'space-between'}
                    p={1}
                    flexWrap={'wrap'}
                    rowGap={3}
                >
                    <Box>
                        <Typography variant="body2" component={'span'} pr={2}>
                            Showing {page * pageSize + 1} to{' '}
                            {rowCount > pageSize * (page + 1) ? pageSize * (page + 1) : rowCount} of {rowCount} entries
                        </Typography>
                    </Box>
                    <Pagination
                        count={pageCount}
                        page={page + 1}
                        onChange={(_event, value) => apiRef.current.setPage(value - 1)}
                        color="primary"
                        shape="circular"
                        size="small"
                        //showFirstButton showLastButton
                        siblingCount={1}
                        renderItem={(item) => (
                            <PaginationItem components={{ previous: PreviousButton, next: NextButton }} {...item} />
                        )}
                    />
                </Stack>
            </Box>
        )
    } else {
        return <></>
    }
}

export default GridFooterRow

const PreviousButton = () => {
    return (
        <>
            <ArrowBackIosIcon sx={{ fontSize: 14 }} /> Prev
        </>
    )
}

const NextButton = () => {
    return (
        <>
            Next
            <ArrowForwardIosIcon sx={{ fontSize: 14 }} />
        </>
    )
}
