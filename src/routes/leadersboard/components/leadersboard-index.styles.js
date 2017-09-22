import { colors } from './leadersboard.colors'
import headerImg from '../assets/banner.jpg'
export const style = {
  self: {
    backgroundColor: colors.gray
  },
  header: {
    self: {
      position: 'relative',
    },
    bg: {
      backgroundImage: `url(${headerImg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '260px',
      color: colors.white,
      filter: 'blur(5px)',
    },
    main: {
      position: 'absolute',
      top: '0',
      color: 'white',
      backgroundColor: 'transparent',
      height: '260px',
    },
  },
  buttons: {
    lineBtn: {
      width: '82px',
      height: '20px',
    },
  },
  footer: {
    self: {
      color: colors.white,
    },
    row: {
      backgroundColor: '#a6a6a6'
    },
    gnIcon: {
      width: '60px',
      height: '60px',
    },
    marketIcon: {
      width: '120px',
      height: '36px',
    },
  },
  section: {
    marginTop: '16px',
  },
  container: {
    maxWidth: '960px',
  },
}
