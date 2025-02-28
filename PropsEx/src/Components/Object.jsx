import React from 'react'

const Object = (props) => {
  return (
    <div>
        <h1>Student details</h1>
        
        <h1>Student Name is:{props.stu.sname}</h1>
        <h1>Student Name is:{props.stu.sage}</h1>
    </div>
  )
}

export default Object