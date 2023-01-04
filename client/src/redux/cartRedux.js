import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    products : [],
    quantity : 0,
    total : 0
}
const cartSlice = createSlice({
    name : "cart",
    initialState,
    reducers: {
        addProduct : (state , action)=>{
            state.quantity += 1;
            state.products.push(action.payload);
            state.total += action.payload.price*action.payload.quantity;
        },
        removeProduct : (state , action)=>{
            state.quantity -= 1;
            state.total -= state.products[action.payload].quantity*state.products[action.payload].price;
            state.products.splice(action.payload , 1);
            console.log(state.products);
        },
        clearData : (state)=>{
            state.products = [];
            state.quantity = 0;
            state.total = 0;
        }
    }
})
export const {addProduct , removeProduct , clearData} = cartSlice.actions;
export default cartSlice.reducer;