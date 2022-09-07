import dayjs from 'dayjs'
import React from 'react'

const TimeNow = () => {
    const time = dayjs().format('DD/MM/YYYY ')
  return (
    <>{time}</>
  )
}

export default TimeNow