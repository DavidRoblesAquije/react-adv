import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import '../styles/custom-styles.css'

const product = {
    id: '1',
    title: 'Coffe Mug - Card',
    img: './coffee-mug.png',
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard
                    product={product}
                    className="bg-dark"
                >
                    <ProductImage className="custom-image" />
                    <ProductTitle title='Taza Javascript' className="text-white" />
                    <ProductButtons />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle title='Taza Developer' />
                    <ProductButtons />
                </ProductCard>

                <ProductCard product={product}>
                    <ProductImage />
                    <ProductTitle />
                    <ProductButtons />
                </ProductCard>
            </div>
        </div>
    )
}
