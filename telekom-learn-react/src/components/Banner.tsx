import './Banner.css'
import Typography from '@mui/material/Typography'

export const Banner = () => {
  return (<div className='banner'>
    <img width="50px" height="50px" src='/logo.svg' alt="logo" />
      <Typography variant="h6" component='h1' >Kochrezept-Sammlung</Typography>
    </div>
  )
}