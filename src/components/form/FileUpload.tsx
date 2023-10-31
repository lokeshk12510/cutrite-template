// Mui
import { Box, Button, FormHelperText, Typography, alpha, styled } from '@mui/material'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate'
// Utils
import { isValidImg } from 'src/utils/helper'

interface FileUploadProps {
    value: File | null
    onChange: (e: File | null) => void
    helperText?: string
}

const FileUpload = (props: FileUploadProps) => {
    const { value, onChange, helperText = ' ' } = props

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files

        if (file?.length && file.length > 0) {
            if (isValidImg(file[0].type)) {
                onChange(file[0])
            } else {
                console.log('Invalid file type!')
            }
        } else {
            onChange(null)
        }
    }

    return (
        <Box>
            <Root component="label" id="file">
                <input type="file" name="file" hidden onChange={handleChange} />
                <Box display={'flex'} alignItems={'center'} gap={2} pl={1}>
                    <AddPhotoAlternateIcon color="primary" />
                    {value?.name ? (
                        <Typography>{value.name}</Typography>
                    ) : (
                        <Typography className="placeholder">Choose files to upload</Typography>
                    )}
                </Box>
                <Button variant="contained" color="primary" sx={{ pointerEvents: 'none' }}>
                    Choose Images
                </Button>
            </Root>
            {<FormHelperText>{helperText}</FormHelperText>}
        </Box>
    )
}

export default FileUpload

const Root = styled(Box)(({ theme }) => ({
    border: `1px dashed ${theme.palette.primary.main}`,
    padding: theme.spacing(1),
    borderRadius: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 'auto',
    width: '100%',
    cursor: 'pointer',
    '&:hover': { backgroundColor: alpha(theme.palette.primary.light, 0.1) },
    '& .placeholder': {
        color: theme.palette.text.disabled,
    },
}))
