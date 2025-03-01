import React from 'react'

function JustInfo(props) {
  const{showLabel}=props
    console.log("just ingooo");
  return (
    <div>JustInfo{showLabel}</div>
  )
}
export default React.memo(JustInfo)
