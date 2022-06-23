import { CREATE } from "../constants/actionTypes";

export const createItem = (item) => async (dispatch) => {
    try {
        dispatch({ type: CREATE, payload: item });
    } catch (error) {
        console.log(error.message);
    }
};
