import styles from '../styles/styles.module.css'

import { useProducts } from '../hooks/useProducts'
import { createContext, ReactElement } from 'react';
import { Product, ProductContextProps } from '../interfaces/interfaces';

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext

export interface Props {
    children?: ReactElement | ReactElement[];
    product: Product;
    className?: string;
}

export const ProductCard = ({ children, product, className }: Props) => {

    const { counter, increaseBy } = useProducts()

    return (
        <Provider value={{
            counter,
            increaseBy,
            product
        }}>
            <div className={`${styles.productCard} ${className}`}>
                {children}
            </div >
        </Provider>
    )
}
