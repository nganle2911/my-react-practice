import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { tangGiamFontSizeAction } from '../../redux/actions/fontSizeAction';

const DemoHookRedux = () => {
     
    const fontSize = useSelector(state => state.fontSizeReducer);  
    const dispatch = useDispatch();

  return (
    <div className='container'>
        <h3 className='mt-3'>Increase / Decrease FontSize</h3>
        <p style={{fontSize: fontSize}}>Sanctus takimata elitr et et labore sadipscing et, diam diam ipsum gubergren duo, est sed kasd stet ipsum sit erat.</p>
        <button className='btn btn-success' onClick={() => {
            const action = tangGiamFontSizeAction(3); 
            dispatch(action);
        }}>+</button>
        <button className='btn btn-success mx-2' onClick={() => {
            const action = tangGiamFontSizeAction(-3);
            dispatch(action);
        }}>-</button>
    </div>
  )
}
export default DemoHookRedux