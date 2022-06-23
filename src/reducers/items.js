import { CREATE } from "../constants/actionTypes";

export default (items = [], action) => {
    switch (action.type) {
        case CREATE:
            return [...items, action.payload];
        default:
            return items;
    }
};
