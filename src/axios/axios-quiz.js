import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-app-6dd29.firebaseio.com/'
})