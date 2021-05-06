export const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST';
export const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS';
export const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE';

const requestProducts = () => ({
    type: FETCH_PRODUCT_REQUEST,
    loading: true,
    products: [],
    error: '',
});
const receiveProducts = (products) => ({
    type: FETCH_PRODUCT_SUCCESS,
    loading: false,
    products: products,
    error: '',
});
const invalidateProduct = () => ({
    type: FETCH_PRODUCT_FAILURE,
    loading: false,
    products: [],
    error: 'Unable to fetch product list',
});

export const boundRequestProducts = () => {
    return (dispatch) => {
        dispatch(requestProducts());
        return {};
    };
};
