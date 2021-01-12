import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import LoaderWrapper from '../../core/components/loader-wrapper/LoaderWrapper';
import ProductPageContent from './ProductPageContent';
import PRODUCTS_API from '../../core/api/products';
import { setProducts } from '../../redux/actions';
import { TProduct } from '../../core/models/product';

const ProductPage = () => {
    // ID from router params
    const { id: productId }: any = useParams();
    // Redux
    const dispatch = useDispatch();
    const product = useSelector((state: any) => state.products.find((product: TProduct) => product._id === productId));

    // Local state
    const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
    const [loadingError, setLoadingError] = React.useState<boolean>(false);

    const fetchProduct = async () => {
        try {
            const productResponse: any = await PRODUCTS_API.getRealProductById(productId);
            
            dispatch(setProducts([productResponse.data]));
            setIsLoaded(true);
        } catch(e) {
            setIsLoaded(true);
            setLoadingError(true);
            console.error(e);
        }
    };

    React.useEffect(() => {
        if (!product) {
            fetchProduct();
        } else {
            setIsLoaded(true);
        }
    // eslint-disable-next-line
    }, [product]);
    
    return (
        <LoaderWrapper isLoaded={ isLoaded } hasError={ loadingError } >
            <ProductPageContent product={ product } />
        </LoaderWrapper>
    )
};

export default ProductPage;
