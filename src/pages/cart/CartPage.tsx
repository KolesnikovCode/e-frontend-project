import React from 'react';
import { useSelector } from 'react-redux';
import LoaderWrapper from '../../core/components/loader-wrapper/LoaderWrapper';
import { useTitlePage } from '../../core/hooks';
import CartPageContent from './CartPageContent';

const CartPage = () => {
    // Local state
    const [isLoaded, setIsLoaded] = React.useState<boolean>(false);

    // Redux
    const cartProducts = useSelector((state: any) => state.cartProducts);

    useTitlePage('E A S Y - Корзина');

    React.useEffect(() => {
        setIsLoaded(true);
        // eslint-disable-next-line
    }, []);

    return (
        <LoaderWrapper isLoaded={ isLoaded }>
            <CartPageContent products={ cartProducts } />
        </LoaderWrapper>
    )
}

export default CartPage;
