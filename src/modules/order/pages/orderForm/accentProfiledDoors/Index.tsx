import { Box, Button, IconButton, OutlinedInput } from '@mui/material'
import StyledWrapper from '../StyledWrapper'
import { CopyIcon, DeleteIcon } from 'src/config/icons'
import { Add } from '@mui/icons-material'
import MuiSelect from 'src/components/form/MuiSelect'
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined'
import { useState } from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { pxForWidth } from 'src/utils/helper'
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
                            <th colSpan={4} align="center" style={{ maxWidth: 158 }} className="borderRight">
                                Dimensions
                            </th>
                            <th className="borderRight" align="center" style={{ maxWidth: 169 }}>
                                <div className="flex-center">
                                    Material
                                    <IconButton className="infoIcon" color="primary">
                                        <InfoOutlinedIcon />
                                    </IconButton>
                                </div>
                            </th>
                            <th className="borderRight" align="center" style={{ maxWidth: 67 }}>
                                <div className="flex-center">
                                    Face <br /> Profile
                                    <IconButton className="infoIcon" color="primary">
                                        <InfoOutlinedIcon />
                                    </IconButton>
                                </div>
                            </th>
                            <th className="borderRight" colSpan={4} align="center" style={{ maxWidth: 106 }}>
                                <div className="flex-center">
                                    Borders
                                    <IconButton className="infoIcon" color="primary">
                                        <InfoOutlinedIcon />
                                    </IconButton>
                                </div>
                            </th>
                            <th className="borderRight" align="center" style={{ maxWidth: 45 }}>
                                <div className="flex-center">
                                    Edge <br /> Profile
                                    <IconButton className="infoIcon" color="primary">
                                        <InfoOutlinedIcon />
                                    </IconButton>
                                </div>
                            </th>

                            <th className="borderRight" colSpan={4} align="center" style={{ maxWidth: 87 }}>
                                <div className="flex-center">
                                    Profiled <br /> Edges
                                    <IconButton className="infoIcon" color="primary">
                                        <InfoOutlinedIcon />
                                    </IconButton>
                                </div>
                            </th>
                            <th className="borderRight" colSpan={4} align="center" style={{ maxWidth: 150 }}>
                                <div className="flex-center">
                                    Edge Handles
                                    <IconButton className="infoIcon" color="primary">
                                        <InfoOutlinedIcon />
                                    </IconButton>
                                </div>
                            </th>
                            <th className="borderRight" colSpan={5} align="center" style={{ maxWidth: 109 }}>
                                <div className="flex-center">
                                    Return edges <br /> (100mm)
                                    <IconButton className="infoIcon" color="primary">
                                        <InfoOutlinedIcon />
                                    </IconButton>
                                </div>
                            </th>
                            <th className="borderRight" colSpan={8} align="center" style={{ maxWidth: 311 }}>
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
                            <td align="center" className="num" style={{ minWidth: 13, maxWidth: 13, width: 13 }}></td>
                            {/* col 1 */}
                            <td
                                align="center"
                                style={{
                                    minWidth: 58,
                                    maxWidth: pxForWidth(58),
                                    width: pxForWidth(58),
                                }}
                            >
                                Comments
                            </td>
                            <td
                                align="center"
                                style={{ minWidth: 22, maxWidth: pxForWidth(22), width: pxForWidth(22) }}
                            >
                                Qty<span className="star">*</span>
                            </td>
                            <td
                                align="center"
                                style={{ minWidth: 35, maxWidth: pxForWidth(35), width: pxForWidth(35) }}
                            >
                                Height<span className="star">*</span>
                            </td>
                            <td
                                align="center"
                                style={{
                                    minWidth: 35,
                                    maxWidth: pxForWidth(35),
                                    width: pxForWidth(35),
                                }}
                                className="borderRight"
                            >
                                Width<span className="star">*</span>
                            </td>
                            {/* col 2 */}
                            <td
                                align="center"
                                style={{ minWidth: 169, maxWidth: pxForWidth(169), width: pxForWidth(169) }}
                                className="borderRight"
                            ></td>
                            {/* col 3 */}
                            <td
                                align="center"
                                style={{ minWidth: 67, maxWidth: pxForWidth(67), width: pxForWidth(67) }}
                                className="borderRight"
                            ></td>
                            {/* col 4 */}
                            <td
                                align="center"
                                style={{ minWidth: 25, maxWidth: pxForWidth(25), width: pxForWidth(25) }}
                            >
                                T
                            </td>
                            <td
                                align="center"
                                style={{ minWidth: 25, maxWidth: pxForWidth(25), width: pxForWidth(25) }}
                            >
                                B
                            </td>
                            <td
                                align="center"
                                style={{ minWidth: 25, maxWidth: pxForWidth(25), width: pxForWidth(25) }}
                            >
                                L
                            </td>
                            <td
                                align="center"
                                style={{ minWidth: 25, maxWidth: pxForWidth(25), width: pxForWidth(25) }}
                                className="borderRight"
                            >
                                R
                            </td>
                            {/* col 5 */}
                            <td
                                align="center"
                                style={{ minWidth: 45, maxWidth: pxForWidth(45), width: pxForWidth(45) }}
                                className="borderRight"
                            ></td>
                            {/* col 6 */}
                            <td
                                align="center"
                                style={{ minWidth: 18, maxWidth: pxForWidth(18), width: pxForWidth(18) }}
                            >
                                T
                            </td>
                            <td
                                align="center"
                                style={{ minWidth: 18, maxWidth: pxForWidth(18), width: pxForWidth(18) }}
                            >
                                B
                            </td>
                            <td
                                align="center"
                                style={{ minWidth: 18, maxWidth: pxForWidth(18), width: pxForWidth(18) }}
                            >
                                L
                            </td>
                            <td
                                align="center"
                                style={{ minWidth: 18, maxWidth: pxForWidth(18), width: pxForWidth(18) }}
                                className="borderRight"
                            >
                                R
                            </td>
                            {/* col 4 */}
                            <td
                                align="center"
                                style={{ minWidth: 33, maxWidth: pxForWidth(33), width: pxForWidth(33) }}
                            >
                                Select
                            </td>
                            <td
                                align="center"
                                style={{ minWidth: 46, maxWidth: pxForWidth(46), width: pxForWidth(46) }}
                            >
                                Location
                            </td>
                            <td
                                align="center"
                                style={{ minWidth: 32, maxWidth: pxForWidth(32), width: pxForWidth(32) }}
                            >
                                Start
                            </td>
                            <td
                                align="center"
                                style={{ minWidth: 32, maxWidth: pxForWidth(32), width: pxForWidth(32) }}
                                className="borderRight"
                            >
                                Stop
                            </td>
                            {/* col 5 */}
                            <td
                                align="center"
                                style={{ minWidth: 18, maxWidth: pxForWidth(18), width: pxForWidth(18) }}
                            >
                                T
                            </td>
                            <td
                                align="center"
                                style={{ minWidth: 18, maxWidth: pxForWidth(18), width: pxForWidth(18) }}
                            >
                                B
                            </td>
                            <td
                                align="center"
                                style={{ minWidth: 18, maxWidth: pxForWidth(18), width: pxForWidth(18) }}
                            >
                                L
                            </td>
                            <td
                                align="center"
                                style={{ minWidth: 18, maxWidth: pxForWidth(18), width: pxForWidth(18) }}
                            >
                                R
                            </td>
                            <td
                                align="center"
                                style={{ minWidth: 20, maxWidth: pxForWidth(20), width: pxForWidth(20) }}
                                className="borderRight"
                            >
                                Dbl Side
                            </td>
                            {/* col 6 */}
                            <td
                                align="center"
                                style={{ minWidth: 26, maxWidth: pxForWidth(26), width: pxForWidth(28) }}
                            >
                                Hinge Qty
                            </td>
                            <td
                                align="center"
                                style={{ minWidth: 45, maxWidth: pxForWidth(45), width: pxForWidth(47) }}
                            >
                                Door Swing
                            </td>
                            <td
                                align="center"
                                style={{ minWidth: 40, maxWidth: pxForWidth(40), width: pxForWidth(40) }}
                            >
                                Bott
                            </td>
                            <td
                                align="center"
                                style={{ minWidth: 40, maxWidth: pxForWidth(40), width: pxForWidth(40) }}
                            >
                                Top
                            </td>
                            <td
                                align="center"
                                style={{ minWidth: 40, maxWidth: pxForWidth(40), width: pxForWidth(40) }}
                            >
                                Pos 3
                            </td>
                            <td
                                align="center"
                                style={{ minWidth: 40, maxWidth: pxForWidth(40), width: pxForWidth(40) }}
                            >
                                Pos 4
                            </td>
                            <td
                                align="center"
                                style={{ minWidth: 40, maxWidth: pxForWidth(40), width: pxForWidth(40) }}
                            >
                                Pos 5
                            </td>
                            <td
                                align="center"
                                style={{ minWidth: 40, maxWidth: pxForWidth(40), width: pxForWidth(40) }}
                                className="borderRight"
                            >
                                Pos 6
                            </td>
                            {/* col 7 */}
                            <td
                                align="center"
                                style={{ minWidth: 60, maxWidth: pxForWidth(60), width: pxForWidth(60) }}
                            ></td>
                        </tr>

                        <TableRow comment="Comment" />
                        <TableRow comment="Abcdefgh" />
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={29}>
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
                            <td colSpan={4} align="right">
                                <Button
                                    variant="contained"
                                    size="small"
                                    className="addBtn"
                                    startIcon={<Add />}
                                    fullWidth
                                >
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
            <td className="borderRight">
                <OutlinedInput size="small" defaultValue={'100'} error disabled={!isEdit} />
            </td>
            {/* col 2 */}
            <td className="borderRight">
                <OutlinedInput size="small" defaultValue={'might need to abbreviate 18mm'} disabled={!isEdit} />
            </td>
            {/* col 3 */}
            <td className="borderRight">
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
            <td className="borderRight">
                <OutlinedInput size="small" defaultValue={'300'} disabled={!isEdit} />
            </td>
            {/* col 5 */}
            <td className="borderRight">
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
            <td className="borderRight">
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
            <td className="borderRight">
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
            <td className="borderRight">
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
            <td className="borderRight">
                <OutlinedInput size="small" defaultValue={'0000.0'} disabled={!isEdit} />
            </td>
            {/* col 7 */}
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
