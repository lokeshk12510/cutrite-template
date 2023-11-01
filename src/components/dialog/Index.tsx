// Mui
import {
    Button,
    ButtonProps,
    Dialog,
    DialogActions,
    DialogContent,
    DialogProps,
    DialogTitle,
    IconButton,
    Paper,
    styled,
} from '@mui/material'
import { Close } from '@mui/icons-material'

export interface IActionBtn extends ButtonProps {
    label: string
}

interface IDialogProps extends DialogProps {
    title: string
    children: React.ReactElement
    actions: IActionBtn[]
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const MuiDialog = (props: IDialogProps) => {
    const { title, children, actions, setOpen, ...rest } = props

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Root maxWidth="xs" onClose={handleClose} {...rest}>
            <DialogTitle>
                {title}
                <IconButton onClick={handleClose}>
                    <Close />
                </IconButton>
            </DialogTitle>
            <DialogContent>
                <Paper className="content">
                    {children}
                    <DialogActions>
                        {actions.map((button, item) => {
                            return (
                                <Button key={item} {...button}>
                                    {button.label}
                                </Button>
                            )
                        })}
                    </DialogActions>
                </Paper>
            </DialogContent>
        </Root>
    )
}

export default MuiDialog

const Root = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogTitle-root': {
        padding: '3px 10px',
        background: theme.palette.grey[200],
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        ...theme.typography.subtitle2,
    },
    '& .MuiDialogContent-root': {
        padding: '10px!important',

        background: theme.palette.grey[100],
        '& .content': {
            padding: theme.spacing(1.5),
        },
    },
    '& .MuiDialogActions-root': {
        paddingTop: theme.spacing(1.5),
        paddingInline: 0,
        paddingBottom: 0,
    },
}))
