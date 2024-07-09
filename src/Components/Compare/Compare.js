import React from 'react';
import { Comparemain, Comparetable, Comparetablediv, Comparetablehead, Comparetablerow, Comparetabletitle } from './Compare.style';
import { ProductsD } from '../../Data/Products';

const Compare = ({ id }) => {
    const productsToDisplay = id !== undefined ? [ProductsD[id]] : ProductsD;

    return (
        <Comparemain>
            {productsToDisplay.map((product, index) => (
                <Comparetablediv key={index}>
                    <Comparetabletitle>
                        {product.Head}
                    </Comparetabletitle>
                    {Object.entries(product.specs).map(([key, value]) => (
                        <Comparetable key={key}>
                            <Comparetablerow>{key}</Comparetablerow>
                            <Comparetablehead>{Array.isArray(value) ? value.join(', ') : value}</Comparetablehead>
                        </Comparetable>
                    ))}
                </Comparetablediv>
            ))}
        </Comparemain>
    );
}

export default Compare;
