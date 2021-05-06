import {TYPES} from 'store/common/actions/DemoAction';

const productReducer = (state = {}, {payload, type}) => {
    switch (type) {
        case TYPES.PRODUCT_SUCCESS:
            return {
                ...state,
                products: [...payload.products],
            };
        case TYPES.CLEAR_STORE:
            return {};
        default:
            return state;
    }
};

export default productReducer;
