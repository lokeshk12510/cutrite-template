import { Box, Button, IconButton, OutlinedInput } from '@mui/material'
import StyledWrapper from '../StyledWrapper'
import { CopyIcon, DeleteIcon } from 'src/config/icons'
import { Add } from '@mui/icons-material'
import MuiSelect from 'src/components/form/MuiSelect'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
const options = [
    { label: 'Y', value: 'Y' },
    { label: 'N', value: 'N' },
]

const options2 = [
    { label: 'EH01', value: 'EH01' },
    { label: 'EH02', value: 'EH02' },
]

const options3 = [
    { label: 'Top', value: 'Top' },
    { label: 'Bottom', value: 'Bottom' },
]

const AccentProfiledDoors = () => {
    return (
        <StyledWrapper title="Accent Profiled doors & panels">
            <>
                <table className="orderTable">
                    <thead>
                        <tr>
                            <th align="center" className="num"></th>
                            <th colSpan={4} align="center" style={{ maxWidth: 158 }}>
                                Dimensions
                            </th>
                            <th align="center" style={{ maxWidth: 169 }}>
                                <div className="flex-center">
                                    Material
                                    <IconButton className="infoIcon" color="primary">
                                        <InfoOutlinedIcon />
                                    </IconButton>
                                </div>
                            </th>
                            <th align="center" style={{ maxWidth: 67 }}>
                                <div className="flex-center">
                                    Face Profile
                                    <IconButton className="infoIcon" color="primary">
                                        <InfoOutlinedIcon />
                                    </IconButton>
                                </div>
                            </th>
                            <th colSpan={4} align="center" style={{ maxWidth: 106 }}>
                                <div className="flex-center">
                                    Borders
                                    <IconButton className="infoIcon" color="primary">
                                        <InfoOutlinedIcon />
                                    </IconButton>
                                </div>
                            </th>
                            <th align="center" style={{ maxWidth: 45 }}>
                                <div className="flex-center">
                                    Edge Profile
                                    <IconButton className="infoIcon" color="primary">
                                        <InfoOutlinedIcon />
                                    </IconButton>
                                </div>
                            </th>

                            <th colSpan={4} align="center" style={{ maxWidth: 87 }}>
                                <div className="flex-center">
                                    Profiled Edges
                                    <IconButton className="infoIcon" color="primary">
                                        <InfoOutlinedIcon />
                                    </IconButton>
                                </div>
                            </th>
                            <th colSpan={4} align="center" style={{ maxWidth: 150 }}>
                                <div className="flex-center">
                                    Edge Handles
                                    <IconButton className="infoIcon" color="primary">
                                        <InfoOutlinedIcon />
                                    </IconButton>
                                </div>
                            </th>
                            <th colSpan={5} align="center" style={{ maxWidth: 109 }}>
                                <div className="flex-center">
                                    Return edges (100mm)
                                    <IconButton className="infoIcon" color="primary">
                                        <InfoOutlinedIcon />
                                    </IconButton>
                                </div>
                            </th>
                            <th colSpan={8} align="center" style={{ maxWidth: 311 }}>
                                <div className="flex-center">
                                    Hinging instructions
                                    <IconButton className="infoIcon" color="primary">
                                        <InfoOutlinedIcon />
                                    </IconButton>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="labelRow">
                            <td align="center" className="num" style={{ minWidth: 13, maxWidth: 13, margin: 13 }}></td>
                            {/* col 1 */}
                            <td align="center" style={{ minWidth: 58, maxWidth: 58, margin: 58 }}>
                                Comments
                            </td>
                            <td align="center" style={{ minWidth: 22, maxWidth: 22, margin: 22 }}>
                                Qty<span className="star">*</span>
                            </td>
                            <td align="center" style={{ minWidth: 35, maxWidth: 35, margin: 35 }}>
                                Height<span className="star">*</span>
                            </td>
                            <td align="center" style={{ minWidth: 35, maxWidth: 35, margin: 35 }}>
                                Width<span className="star">*</span>
                            </td>
                            {/* col 2 */}
                            <td align="center" style={{ minWidth: 169, maxWidth: 169, margin: 169 }}></td>
                            {/* col 3 */}
                            <td align="center" style={{ minWidth: 67, maxWidth: 67, margin: 67 }}></td>
                            {/* col 4 */}
                            <td align="center" style={{ minWidth: 23, maxWidth: 23, margin: 23 }}>
                                T
                            </td>
                            <td align="center" style={{ minWidth: 23, maxWidth: 23, margin: 23 }}>
                                B
                            </td>
                            <td align="center" style={{ minWidth: 23, maxWidth: 23, margin: 23 }}>
                                L
                            </td>
                            <td align="center" style={{ minWidth: 23, maxWidth: 23, margin: 23 }}>
                                R
                            </td>
                            {/* col 5 */}
                            <td align="center" style={{ minWidth: 45, maxWidth: 45, margin: 45 }}></td>
                            {/* col 6 */}
                            <td align="center" style={{ minWidth: 16, maxWidth: 16, margin: 16 }}>
                                T
                            </td>
                            <td align="center" style={{ minWidth: 16, maxWidth: 16, margin: 16 }}>
                                B
                            </td>
                            <td align="center" style={{ minWidth: 16, maxWidth: 16, margin: 16 }}>
                                L
                            </td>
                            <td align="center" style={{ minWidth: 16, maxWidth: 16, margin: 16 }}>
                                R
                            </td>
                            {/* col 4 */}
                            <td align="center" style={{ minWidth: 33, maxWidth: 33, margin: 33 }}>
                                Select
                            </td>
                            <td align="center" style={{ minWidth: 46, maxWidth: 46, margin: 46 }}>
                                Location
                            </td>
                            <td align="center" style={{ minWidth: 32, maxWidth: 32, margin: 32 }}>
                                Start
                            </td>
                            <td align="center" style={{ minWidth: 32, maxWidth: 32, margin: 32 }}>
                                Stop
                            </td>
                            {/* col 5 */}
                            <td align="center" style={{ minWidth: 16, maxWidth: 16, margin: 16 }}>
                                T
                            </td>
                            <td align="center" style={{ minWidth: 16, maxWidth: 16, margin: 16 }}>
                                B
                            </td>
                            <td align="center" style={{ minWidth: 16, maxWidth: 16, margin: 16 }}>
                                L
                            </td>
                            <td align="center" style={{ minWidth: 16, maxWidth: 16, margin: 16 }}>
                                R
                            </td>
                            <td align="center" style={{ minWidth: 16, maxWidth: 16, margin: 16 }}>
                                Dbl Side
                            </td>
                            {/* col 6 */}
                            <td align="center" style={{ minWidth: 26, maxWidth: 26, margin: 26 }}>
                                Hinge Qty
                            </td>
                            <td align="center" style={{ minWidth: 38, maxWidth: 38, margin: 38 }}>
                                Door Swing
                            </td>
                            <td align="center" style={{ minWidth: 38, maxWidth: 38, margin: 38 }}>
                                Bott
                            </td>
                            <td align="center" style={{ minWidth: 38, maxWidth: 38, margin: 38 }}>
                                Top
                            </td>
                            <td align="center" style={{ minWidth: 38, maxWidth: 38, margin: 38 }}>
                                Pos 3
                            </td>
                            <td align="center" style={{ minWidth: 38, maxWidth: 38, margin: 38 }}>
                                Pos 4
                            </td>
                            <td align="center" style={{ minWidth: 38, maxWidth: 38, margin: 38 }}>
                                Pos 5
                            </td>
                            <td align="center" style={{ minWidth: 38, maxWidth: 38, margin: 38 }}>
                                Pos 6
                            </td>
                            <td align="center" style={{ minWidth: 60, maxWidth: 60, margin: 60 }}></td>
                        </tr>

                        <TableRow comment="Comment" />
                        <TableRow comment="Abcdefgh" />
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={31}>
                                <Box
                                    pt={0.3}
                                    px={2.5}
                                    minHeight={30}
                                    display={'flex'}
                                    gap={1.5}
                                    className="errorMsg"
                                    alignItems={'center'}
                                >
                                    <span>Minimum Height is 2000</span>
                                    <span>Minimum width is 100</span>
                                </Box>
                            </td>
                            <td colSpan={2}>
                                <Button variant="contained" size="small" startIcon={<Add />} fullWidth>
                                    Add Line
                                </Button>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </>
        </StyledWrapper>
    )
}

export default AccentProfiledDoors

const TableRow = ({ comment }: { comment: string }) => {
    const [isEdit, setIsEdit] = useState(false)

    const handleEdit = () => {
        setIsEdit((e) => !e)
    }

    return (
        <tr>
            <td align="center" className="num">
                1
            </td>
            {/* col 1 */}
            <td>
                <OutlinedInput size="small" defaultValue={comment} disabled={!isEdit} />
            </td>
            <td>
                <OutlinedInput size="small" defaultValue={'2'} error disabled={!isEdit} />
            </td>
            <td>
                <OutlinedInput size="small" defaultValue={'2000'} error disabled={!isEdit} />
            </td>
            <td>
                <OutlinedInput size="small" defaultValue={'100'} error disabled={!isEdit} />
            </td>
            {/* col 2 */}
            <td>
                <OutlinedInput size="small" defaultValue={'might need to abbreviate 18mm'} disabled={!isEdit} />
            </td>
            {/* col 3 */}
            <td>
                <OutlinedInput size="small" defaultValue={'FP100'} disabled={!isEdit} />
            </td>
            {/* col 4 */}
            <td>
                <OutlinedInput size="small" defaultValue={'60'} disabled={!isEdit} />
            </td>
            <td>
                <OutlinedInput size="small" defaultValue={'300'} disabled={!isEdit} />
            </td>
            <td>
                <OutlinedInput size="small" defaultValue={'60'} disabled={!isEdit} />
            </td>
            <td>
                <OutlinedInput size="small" defaultValue={'300'} disabled={!isEdit} />
            </td>
            {/* col 5 */}
            <td>
                <MuiSelect size="small" defaultValue={'EH01'} selectList={options2} disabled={!isEdit} />
            </td>
            {/* col 6 */}
            <td>
                <MuiSelect size="small" defaultValue={'Y'} selectList={options} disabled={!isEdit} />
            </td>
            <td>
                <MuiSelect size="small" defaultValue={'Y'} selectList={options} disabled={!isEdit} />
            </td>
            <td>
                <MuiSelect size="small" defaultValue={'Y'} selectList={options} disabled={!isEdit} />
            </td>
            <td>
                <MuiSelect size="small" defaultValue={'Y'} selectList={options} disabled={!isEdit} />
            </td>
            {/* col 4 */}
            <td>
                <MuiSelect size="small" defaultValue={'EH01'} selectList={options2} disabled={!isEdit} />
            </td>
            <td>
                <MuiSelect size="small" defaultValue={'Bottom'} selectList={options3} disabled={!isEdit} />
            </td>
            <td>
                <OutlinedInput size="small" defaultValue={'2500'} disabled={!isEdit} />
            </td>
            <td>
                <OutlinedInput size="small" defaultValue={'2500'} disabled={!isEdit} />
            </td>
            {/* col 5 */}
            <td>
                <MuiSelect size="small" defaultValue={'N'} selectList={options} disabled={!isEdit} />
            </td>
            <td>
                <MuiSelect size="small" defaultValue={'N'} selectList={options} disabled={!isEdit} />
            </td>
            <td>
                <MuiSelect size="small" defaultValue={'N'} selectList={options} disabled={!isEdit} />
            </td>
            <td>
                <MuiSelect size="small" defaultValue={'N'} selectList={options} disabled={!isEdit} />
            </td>
            <td>
                <MuiSelect size="small" defaultValue={'N'} selectList={options} disabled={!isEdit} />
            </td>
            {/* col 6 */}
            <td>
                <OutlinedInput size="small" defaultValue={'6'} disabled={!isEdit} />
            </td>
            <td>
                <MuiSelect size="small" defaultValue={'Bottom'} selectList={options3} disabled={!isEdit} />
            </td>
            <td>
                <OutlinedInput size="small" defaultValue={'0000.0'} disabled={!isEdit} />
            </td>
            <td>
                <OutlinedInput size="small" defaultValue={'0000.0'} disabled={!isEdit} />
            </td>
            <td>
                <OutlinedInput size="small" defaultValue={'0000.0'} disabled={!isEdit} />
            </td>
            <td>
                <OutlinedInput size="small" defaultValue={'0000.0'} disabled={!isEdit} />
            </td>
            <td>
                <OutlinedInput size="small" defaultValue={'0000.0'} disabled={!isEdit} />
            </td>
            <td>
                <OutlinedInput size="small" defaultValue={'0000.0'} disabled={!isEdit} />
            </td>
            <td>
                <IconButton disabled={!isEdit} color="primary">
                    <CopyIcon />
                </IconButton>

                <IconButton disabled={!isEdit} color="error">
                    <DeleteIcon />
                </IconButton>

                <IconButton onClick={handleEdit}>
                    <MoreVertIcon />
                </IconButton>
            </td>
        </tr>
    )
}
