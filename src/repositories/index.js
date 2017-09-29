export let API_BASE_URL

if (process.env.NODE_ENV === 'development') {
  API_BASE_URL = 'https://hl2bl1abk2.execute-api.ap-northeast-1.amazonaws.com/staging'
} else if (process.env.NODE_ENV === 'staging') {
  API_BASE_URL = 'https://hl2bl1abk2.execute-api.ap-northeast-1.amazonaws.com/staging'
} else {
  API_BASE_URL = 'https://hl2bl1abk2.execute-api.ap-northeast-1.amazonaws.com/staging'
}
