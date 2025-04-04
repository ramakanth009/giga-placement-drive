import React from 'react'
import { makeStyles } from '@mui/styles'
import Porj from '../../../assets/programhighlights.png'

const useStyles = makeStyles({
  heroContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  heroImage: {
    width: '100vw',
    objectFit: 'cover',
    borderRadius: '8px',
  }
});

const ProjectHigh = () => {
  const classes = useStyles();
  return (
    <div className={classes.heroContainer}>
      <img src={Porj} alt="Hero" className={classes.heroImage} />
    </div>
  )
}

export default ProjectHigh