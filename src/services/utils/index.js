import { notification } from "antd"


// notification functions 
const infoNotification = ({description, duration, message}) => {
  notification.info({
    message,
    description,
    duration,
    key: "updatable"
  })
}

const successNotification = ({description, duration, message}) => {
  notification.success({
    message,
    description,
    duration,
    key: "updatable"
  })
}

const errorNotification = ({description, duration, message}) => {
  notification.error({
    message,
    description,
    duration,
    key: "updatable"
  })
}


// date functions 
const formatDateFull = (date) => (new Date(date || new Date()))
const formatDateISO = (date) => {console.log((String(date))); return new Date(date || new Date()).toISOString().slice(0, 10)}


export {
  infoNotification, 
  successNotification, 
  errorNotification,
  formatDateFull,
  formatDateISO,
}