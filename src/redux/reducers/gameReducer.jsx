
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

export const gameReducer = (state = stateDefault, {type, payload}) => {
    switch (type) {
        case 'BET': {
            return {
                ...state,
                valueOfBet : payload
            } 
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

            // Xử lý tính điểm
            let sumPoints = arrRandomDice.reduce((sum, dice) => {
                return sum + dice.diem; 
            }, 0)

            // Xử lý thắng 
            if ((sumPoints > 11 & state.valueOfBet) || (sumPoints <= 11 && !state.valueOfBet)) {
                // Thắng: cập nhật lại state số bàn thắng
                state.sumOfWin += 1; 
            }
            // Luôn luôn tăng state sau mỗi lần play game
            state.sumOfPlay += 1; 
            return {...state};
        }

        default:
            return state;
    }
}