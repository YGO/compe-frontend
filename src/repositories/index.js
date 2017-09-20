export let API_BASE_URL

if (process.env.NODE_ENV === 'staging') {
  API_BASE_URL = 'https://lyywnpoayb.execute-api.ap-northeast-1.amazonaws.com/staging'
} else {
  API_BASE_URL = 'https://lyywnpoayb.execute-api.ap-northeast-1.amazonaws.com/staging'
}
