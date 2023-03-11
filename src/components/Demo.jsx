// rfc - react function component 
import React from 'react'

export default function Demo() { //functional component - stateless component 

  // Lệnh return sẽ chứa giao diện component 
  // NOTE: Nội dung của component phải được bao phủ bởi 1 thẻ
  // <> </>: thẻ vô hình fragment 
  return (
    <>
      <button className='btn btn-success'>button</button>
      <button className='btn btn-success'>button</button>
    </>
  )
}


