// Mui
import { Typography, styled } from '@mui/material'

const Footer = () => {
    return (
        <Root>
            <Typography>
                © Copyright {new Date().getFullYear()}{' '}
                <Typography component={'span'} color={'primary.light'}>
                    Roof assess Pty Ltd{' '}
                </Typography>{' '}
                | ABN 16 617 532 519
            </Typography>
            <Typography>
                Designed By{' '}
                <Typography component={'span'} color={'warning.main'}>
                    Intergy Consulting
                </Typography>{' '}
            </Typography>
        </Root>
    )
}

export default Footer

const Root = styled('footer')(({ theme }) => ({
    padding: theme.spacing(1.5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    background: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    '& .MuiTypography-root': {
        fontSize: '.8rem',
    },
}))
