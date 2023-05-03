import React from 'react'
import Person1 from './People/Person1'
import Person2 from './People/Person2'

const RichPerson = () => {
  return (
    <div className='container mt-2'>
        <h1 className='text-center'>ACTION</h1>
        <div className='row mt-3 text-center'>
            <div className='col-6'>
                <Person1 />
            </div>
            <div className='col-6'>
                <Person2 />
            </div>
        </div>
    </div>
  )
}

export default RichPerson
