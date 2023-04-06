import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const DemoHookRedux = () => {


    // useSelector tương tự mapStateToProps giúp ta lấy state từ Redux về 
    const fontSize = useSelector(state => state.fontSizeReducer); 
    console.log("fontSize", fontSize); 

    // useDispatch() thay thế cho this.props.dispatch() khi connect với redux store 
    const dispatch = useDispatch();

  return (
    <div className='container'>
        <h3 className='mt-3'>Increase / Decrease FontSize</h3>
        <p style={{fontSize: fontSize}}>Sanctus takimata elitr et et labore sadipscing et, diam diam ipsum gubergren duo, est sed kasd stet ipsum sit erat.</p>
        <button className='btn btn-success' onClick={() => {
            const action = {
                type: "TANG_GIAM_FONT_SIZE",
                payload: 3
            }
            dispatch(action);
        }}>+</button>
        <button className='btn btn-success mx-2' onClick={() => {
            const action = {
                type: "TANG_GIAM_FONT_SIZE",
                payload: -3
            }
            dispatch(action);
        }}>-</button>
    </div>
  )
}

export default DemoHookRedux