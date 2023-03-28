// File cấu hình store chứa các state của ứng dụng 
import {configureStore} from '@reduxjs/toolkit'; 

export const store = configureStore({
    reducer: {
        // Các state ứng dụng đặt tại đây 
        // fontSizeReducer: (state = 16, action) => {
        //     if (action.type == 'TANG_GIAM_FONT_SIZE') {
        //         state = state + action.payload; 
        //     }
        //     return state; 
        // }
        fontSizeReducer: (state = 16, action) => {
            switch (action.type) {
                case 'TANG_GIAM_FONT_SIZE':
                    state += action.payload;
                    return state;
            
                default:
                    return state;
            }
        },
        imgSrcReducer: (state = "./img/imgRedCar.jpg", action) => {
            switch (action.type) {
                
            
                default:
                    return state;
            }
        }
    }
})