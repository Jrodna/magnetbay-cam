
const textLight = '#fff'
const textMed = '#53627c'
const textDark = '#1e2432'
const red = '#ff1e42'
const darkred = '#c3112d'
const orange = '#ff8c00'

export const styles = {
  
  day: {
    position: 'relative',
    padding: '40px 10%',
    borderRadius: '20px',
    background: textLight,
    color: textMed
  },
  '.day::after': {
    content: '',
    width: '90%',
    height: '50px',
    position: 'absolute',
    bottom: '-12px',
    left: '5%',
    zIndex: -1,
    opacity: 0.3,
    borderRadius: '20px',
    background: textLight
  },


  waveHeight: {
    fontSize: '2.5rem',
    fontWeight: 'bold',
    marginTop: '10px',
    color: textDark
  }


} as const