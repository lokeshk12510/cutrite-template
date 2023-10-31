import { useState } from 'react'
// Mui
import {
    AppBar,
    Avatar,
    Box,
    Button,
    ClickAwayListener,
    Container,
    Divider,
    MenuItem,
    MenuList,
    Paper,
    Toolbar,
    ListItemIcon,
} from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import { Logout, Settings } from '@mui/icons-material'
// Config
import Images from 'src/config/images'
// Router
import { Link, useNavigate } from 'react-router-dom'
// Urls
import adminUrls from '../../router/urls'
// Redux
import { useDispatch } from 'react-redux'
import { authLogout } from 'src/app/slices/authSlice'
import { showSnackbar } from 'src/app/slices/snackbarSlice'

const Header = () => {
    const [open, setOpen] = useState(false)

    const handleClick = () => {
        setOpen((prev) => !prev)
    }

    const handleClickAway = () => {
        setOpen(false)
    }
    return (
        <AppBar position="sticky">
            <Container maxWidth={false}>
                <Toolbar disableGutters>
                    <Link to="/">
                        <img src={Images.Logo} alt="logo" width={100} height={50} style={{ width: 100, height: 50 }} />
                    </Link>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'flex-end',
                            alignItems: 'center',
                            height: '50px',
                            '& .menuBtn': {
                                color: '#fff',
                                height: '50px',
                            },
                            gap: 2,
                        }}
                    >
                        <Button className="menuBtn" component={Link} to={adminUrls.orders}>
                            Online orders
                        </Button>
                        <Button className="menuBtn" component={Link} to={adminUrls.users}>
                            Users
                        </Button>

                        <ClickAwayListener onClickAway={handleClickAway}>
                            <Box sx={{ position: 'relative' }}>
                                <Button className="menuBtn" endIcon={<ArrowDropDownIcon />} onClick={handleClick}>
                                    Maintenance
                                </Button>
                                {open ? (
                                    <Paper
                                        elevation={3}
                                        sx={{
                                            position: 'absolute',
                                            top: 50,
                                            right: 0,
                                            left: 0,
                                            zIndex: 1,
                                            width: 'fit-content',
                                        }}
                                    >
                                        <MenuList>
                                            <MenuItem
                                                component={Link}
                                                to={adminUrls.maintenance.faceProfile}
                                                onClick={handleClickAway}
                                            >
                                                Face Profile
                                            </MenuItem>
                                            <MenuItem onClick={handleClickAway}>Edge Profile</MenuItem>
                                            <MenuItem onClick={handleClickAway}>Edge Handle</MenuItem>
                                            <MenuItem onClick={handleClickAway}>Material</MenuItem>
                                            <MenuItem onClick={handleClickAway}>Hinge Brand / Type</MenuItem>
                                            <MenuItem onClick={handleClickAway}>Hinge Bottom Centre</MenuItem>
                                            <MenuItem onClick={handleClickAway}>Hinge Centre Top</MenuItem>
                                            <MenuItem onClick={handleClickAway}>Board Supplier / Color</MenuItem>
                                            <MenuItem onClick={handleClickAway}>Rules</MenuItem>
                                            <MenuItem onClick={handleClickAway}>Manage - Section Image</MenuItem>
                                            <MenuItem onClick={handleClickAway}>Manage Range Fields</MenuItem>
                                        </MenuList>
                                    </Paper>
                                ) : null}
                            </Box>
                        </ClickAwayListener>
                        <Box sx={{ flexGrow: 0 }}></Box>

                        <Divider
                            orientation="vertical"
                            flexItem
                            sx={{ borderColor: '#fff', alignSelf: 'center', height: 30 }}
                        />

                        <Profile />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default Header

const Profile = () => {
    const [open, setOpen] = useState(false)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleClick = () => {
        setOpen((prev) => !prev)
    }

    const handleClickAway = () => {
        setOpen(false)
    }

    const handleLogout = () => {
        dispatch(authLogout())
        navigate(adminUrls.login)

        dispatch(showSnackbar({ title: 'Logged Out successfully!', type: 'success' }))
    }

    return (
        <ClickAwayListener onClickAway={handleClickAway}>
            <Box sx={{ position: 'relative' }}>
                <Button
                    className="menuBtn"
                    endIcon={<ArrowDropDownIcon />}
                    startIcon={
                        <Avatar src="/static/images/avatar/1.jpg" sx={{ width: 28, height: 28, fontSize: '0.80rem' }} />
                    }
                    sx={{ textAlign: 'start', lineHeight: 1.3 }}
                    onClick={handleClick}
                >
                    Welcome <br /> Philip Scott
                </Button>
                {open ? (
                    <Paper
                        elevation={3}
                        sx={{
                            position: 'absolute',
                            top: 50,
                            right: 0,
                            left: 0,
                            zIndex: 1,
                            width: 'fit-content',
                            minWidth: 150,
                        }}
                    >
                        <MenuList>
                            <MenuItem onClick={handleClickAway}>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Settings
                            </MenuItem>
                            <MenuItem onClick={handleLogout}>
                                <ListItemIcon>
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Logout
                            </MenuItem>
                        </MenuList>
                    </Paper>
                ) : null}
            </Box>
        </ClickAwayListener>
    )
}
