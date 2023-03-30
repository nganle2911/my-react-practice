
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
        
    
        default:
            return state;
    }
}