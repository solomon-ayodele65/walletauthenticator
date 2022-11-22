import { message, notification } from "antd";
import axios from "axios";
import { useNavigate } from "react-router";
import store from "store";



const axiosClient = axios.create({
  baseURL: "https://api-sectionbookie.atmost.online/api"
})

axiosClient.interceptors.request.use(request => {
  const accessToken = store.get('userToken')
  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`
    request.headers.AccessToken = accessToken
  }
  return request
})

axiosClient.interceptors.response.use(undefined, error => {
  const navigate = useNavigate()
  // Errors handling
  const { response } = error
  const { data } = response || {data: ""}
  const error401 = JSON.stringify(error).includes('401')
  if(error401){
    navigate.push('/auth/login')
    store.clearAll()
    message.error({
      content: "Token has expired, please re-login to continue.",
      duration: 4,
      key: "updatable"
    })
  }else{
    notification.error({
      message: 'Error!',
      description: String(error)
    })
  }
  if (data) {
    notification.warning({
      message: data,
    })
  }
})






export default axiosClient