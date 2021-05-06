import {_get} from 'api';

export const TYPES = {
    CLEAR_STORE: 'CLEAR_STORE',
    PRODUCT: 'PRODUCT',
    PRODUCT_REQUEST: 'PRODUCT_REQUEST',
    PRODUCT_ERROR: 'PRODUCT_ERROR',
    PRODUCT_SUCCESS: 'PRODUCT_SUCCESS',
};

const getProductRequest = () => ({
    type: TYPES.PRODUCT_REQUEST,
    payload: null,
});

const getProductError = error => ({
    type: TYPES.PRODUCT_ERROR,
    payload: {error},
});

const getProductSuccess = products => ({
    type: TYPES.PRODUCT_SUCCESS,
    payload: {
        products: products,
    },
});

export const clearStore = () => ({
    type: TYPES.CLEAR_STORE,
    payload: null,
});

export const getAll = () => async dispatch => {
    dispatch(getProductRequest());
    try {
        const products = await _get('products');
        dispatch(getProductSuccess(products));
    } catch (error) {
        dispatch(getProductError(error.message));
    }
};

