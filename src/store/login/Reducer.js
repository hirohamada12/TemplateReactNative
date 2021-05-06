import {FETCH_PRODUCT_FAILURE, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS} from './Action';


const defaultState = {
    loading: false,
    products: [],
    error: '',
};

export const productReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST:
            return {loading: true, products: [], error: ''};
        case FETCH_PRODUCT_SUCCESS:
            return {loading: false, products: action.products, error: ''};
        case FETCH_PRODUCT_FAILURE:
            return {loading: false, products: [], error: action.error};
        default:
            return state;
    }
};
