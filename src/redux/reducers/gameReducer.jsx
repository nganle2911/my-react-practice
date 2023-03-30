
const stateDefault = {
    arrDice: [
        {img: './img/6.png', diem: 6},
        {img: './img/6.png', diem: 6},
        {img: './img/6.png', diem: 6}
    ], 
    sumOfWin: 0,
    sumOfPlay: 0,
    valueOfBet: true, //true: tai, false: xiu 
}

export const gameReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'BET': {
            state.valueOfBet = action.payload;
            return {...state};  
        };
        case 'PLAY_GAME': {
            // Xử lý tạo ra mảng xúc xắc ngẫu nhiên để thay đổi mảng xúc xắc cũ 
            let arrRandomDice = [];
            for (let i = 1; i <= 3; i++) {
                // Mỗi lần chạy tạo ra một số ngẫu nhiên 
                let randomNum = Math.floor(Math.random() * 6) + 1; 

                // Từ số ngẫu nhiên tạo ra object xúc xắc
                let randomDice = {diem: randomNum, img: `./img/${randomNum}.png`};
                
                // Thêm object xúc xắc ngẫu nhiên vào mảng 
                arrRandomDice.push(randomDice);
            }
            // Update state random dice
            state.arrDice = arrRandomDice; 
            return {...state};
        }

    
        default:
            return state;
    }
}