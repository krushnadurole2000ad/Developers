import React from 'react'

const Alert = (props) => {
  const capitalize = (word) => {

    if (word === "danger") {
      word = "error"
    }
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    <>
      <div className='alerrt' >
        {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissable fade show`} role="alert">
          <strong>{capitalize(props.alert.type)}:{props.alert.msg}</strong>
        </div>}
      </div>
    </>
  )
}

export default Alert