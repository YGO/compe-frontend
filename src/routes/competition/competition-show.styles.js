import headerImg from './assets/banner.jpg'
export const style = {
  self: {
    backgroundColor: '#eee',
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
      color: '#fff',
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
      color: '#fff',
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
