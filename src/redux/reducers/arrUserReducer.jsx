// Với reference value (object, array) thì khi thay đổi state phải return về state mới bằng cách clone state ra vùng nhớ bằng spread operator 
const stateDefault = [
    {account: 'kimngan', password: "123"},
    {account: 'vankhoa', password: "321"}
]; 

export const arrUserReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case 'ADD_USER':
            state.push(action.payload);
            console.log(state)
            return [...state]; //immutable - tính bất biến của Redux 
    
        default:
            return state;
    }
}