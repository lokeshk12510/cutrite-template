import { useEffect } from 'react'
// Mui
import { Box, Container, Grid, Paper, styled } from '@mui/material'
// Redux
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAuth } from 'src/app/slices/authSlice'
// Config
import Images from 'src/config/images'
// Urls
import adminUrls from '../../router/urls'

interface IAuthTemplateProps {
    children: React.ReactElement
}

const AuthTemplate = ({ children }: IAuthTemplateProps) => {
    const auth = useSelector(getAuth)

    const navigate = useNavigate()

    useEffect(() => {
        if (auth?.token) {
            navigate(adminUrls.root, { replace: true })
        }
    }, [auth, navigate])

    return (
        <Root>
            <Container maxWidth="lg">
                <Paper elevation={3}>
                    <Grid container>
                        <Grid item xs={6} className="image-grid">
                            <img src={Images.LoginImage} alt="login" className="loginImage" width={576} height={637} />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box className="container">
                                <>{children}</>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
        </Root>
    )
}

export default AuthTemplate

const Root = styled('main')(({ theme }) => ({
    width: '100%',
    height: '100vh',
    background: theme.palette.primary.main,
    backgroundImage: `url(${Images.LoginBg})`,
    objectFit: 'cover',
    backgroundSize: 'cover',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '& .image-grid': {
        [theme.breakpoints.down('md')]: {
            display: 'none',
        },
    },
    '& .loginImage': {
        width: '100%',
        height: '100%',
        objectFilt: 'cover',
    },
    '& .container': {
        padding: theme.spacing(12),
        [theme.breakpoints.down('lg')]: {
            padding: theme.spacing(7),
        },
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(3),
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        '& .logo': {
            marginBottom: theme.spacing(3),
            width: '180px',
        },
        '& .inputField': {
            width: '100%',
            '& .MuiFormLabel-root': {
                fontSize: '0.7rem',
            },
            '& .MuiOutlinedInput-root': {
                fontSize: '0.8rem',
            },
        },
        '& .MuiFormControlLabel-label': {
            fontSize: '0.9rem',
        },
    },
}))
