import { Close } from '@mui/icons-material'
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
        <Root onClose={handleClose} {...rest}>
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
        padding: '5px 15px',
        paddingBottom: theme.spacing(1.5),
        background: theme.palette.grey[200],
        borderBottom: `1px solid ${theme.palette.grey[300]}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    '& .MuiDialogContent-root': {
        padding: '13px 15px',

        background: theme.palette.grey[100],
        '& .content': {
            padding: theme.spacing(2),
        },
    },
    '& .MuiDialogActions-root': {
        paddingTop: theme.spacing(1.5),
        paddingInline: 0,
        paddingBottom: 0,
    },
}))
