export let API_BASE_URL

if (process.env.NODE_ENV === 'development') {
  API_BASE_URL = 'http://localhost:3001'
} else if (process.env.NODE_ENV === 'staging') {
  API_BASE_URL = 'https://6lbyfb0lpb.execute-api.ap-northeast-1.amazonaws.com/staging'
} else if (process.env.NODE_ENV === 'production') {
  API_BASE_URL = 'https://lhsg692zd5.execute-api.ap-northeast-1.amazonaws.com/production'
}
