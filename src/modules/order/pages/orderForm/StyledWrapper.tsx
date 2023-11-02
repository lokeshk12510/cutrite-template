import { Box, BoxProps, Typography, styled } from '@mui/material'
import { pxForWidth } from 'src/utils/helper'

interface IBoxProps extends BoxProps {
    children: React.ReactElement
    title: string
}

const StyledWrapper = (props: IBoxProps) => {
    const { children, title, ...boxProps } = props

    return (
        <Root {...boxProps}>
            <Typography variant="subtitle1" color={'primary'} textTransform={'uppercase'} pb={0.4} pt={1.5} px={2}>
                {title}
            </Typography>
            <>{children}</>
        </Root>
    )
}

export default StyledWrapper

const Root = styled(Box)(({ theme }) => ({
    borderBottom: `2px solid ${theme.palette.common.white}`,
    [theme.breakpoints.between(1360, 2560)]: {
        fontSize: 10.5,
    },

    '& .boxImg': {
        width: 447,
        height: '30px',
        objectFit: 'fill',
    },
    '& .orderTable': {
        borderSpacing: '3px 1px',
        [theme.breakpoints.between(0, 1360)]: {
            borderSpacing: '1px 0px',
        },
        [theme.breakpoints.between(1360, 1460)]: {
            borderSpacing: '2px 0px',
        },
        '& thead': {
            height: 32,
            background: theme.palette.grey[300],
            '& th': {
                fontWeight: 400,
                color: theme.palette.primary.main,
                '&.num': {
                    width: 13,
                    background: theme.palette.background.default,
                },
                '& .infoIcon': {
                    padding: 1,
                    svg: {
                        fontSize: '0.55rem',
                    },
                },
            },
        },
        '& tbody': {
            '& tr': {
                '&.labelRow': {
                    height: 34,
                    color: theme.palette.grey[600],
                    '& .star': {
                        color: theme.palette.error.main,
                    },
                },
                height: 28,
                color: theme.palette.common.black,
                '& .MuiInputBase-root': {
                    height: 26,
                    minWidth: 17,
                    width: '100%',
                    fontSize: 10,
                    input: {
                        fontSize: 10,
                        color: theme.palette.common.black,
                        textAlign: 'center',
                        '&.Mui-disabled': {
                            WebkitTextFillColor: theme.palette.common.black,
                        },
                    },
                    '& .MuiSelect-select': {
                        paddingRight: 0,
                        padding: '3px 2.4px',
                        textAlign: 'center',
                        '&.Mui-disabled': {
                            WebkitTextFillColor: theme.palette.common.black,
                        },
                    },
                    '& .MuiSelect-icon': {
                        display: 'none',
                    },
                },

                '& .Mui-error': {
                    input: {
                        color: theme.palette.error.main,
                    },
                },
                [theme.breakpoints.between(0, 1568)]: {
                    '& .MuiSvgIcon-root ': {
                        fontSize: '0.8rem',
                    },
                    '& .MuiIconButton-root': {
                        padding: 3,
                    },
                },
            },
        },
        '& .flex-center': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 3,
        },
        '& .addBtn': {
            maxWidth: '80px',
        },
        '& .borderRight': {
            borderRight: `${pxForWidth(3)} solid #F1F2F6`,
        },
    },
    '& .errorMsg': {
        color: theme.palette.error.main,
        marginRight: theme.spacing(1.5),
    },
}))
