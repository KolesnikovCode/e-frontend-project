export const addProductIdInLocalStorage = (productId: any) => {
    const localStorProductIds: any = localStorage.getItem('cartProductIds');

    if (localStorProductIds) {
        const productIds: any = JSON.parse(localStorProductIds);
        localStorage.setItem('cartProductIds', JSON.stringify([...productIds, productId]));
    } else {
        localStorage.setItem('cartProductIds', JSON.stringify([productId]));
    }
};

export const getCartProductIdsFromLocalStorage = (): Array<string> => {
    const localStorProductIds: any = localStorage.getItem('cartProductIds');

    if (localStorProductIds) {
        return JSON.parse(localStorProductIds);
    } else {
        return [];
    }
};

export const clearCartProductIdsFromLocalStorage = (): void => {
    localStorage.setItem('cartProductIds', JSON.stringify([]))
};
