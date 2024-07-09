import React, { useEffect, useState } from 'react';
import Header from '../Components/Header/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { ProductsD } from '../Data/Products';
import { HeroDiv, Producthead, HeroContainer, ProdImage, ProductDesc, AnimatedDiv, Overlay } from './Styles/product.styles';
import { HeroButton } from '../Components/Hero/Hero.styles';
import Compare from '../Components/Compare/Compare';
import Footer from '../Components/Footer/Footer';
import { Comparebutton, Div } from '../Components/Compare/Compare.style';

function Products() {
  const { id } = useParams();
  const productId = parseInt(id, 10);
  const [product, setProduct] = useState(ProductsD[productId]);
  const navigate = useNavigate();

  useEffect(() => {
    setProduct(ProductsD[productId]);
  }, [id, productId]);

  if (!product) {
    return (
      <div>
        <Header />
        <p>Product not found</p>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <HeroContainer>
        <Overlay>
          <HeroDiv>
            <Producthead>{product.Head}</Producthead>
            <ProductDesc>{product.Hero}</ProductDesc>
            <AnimatedDiv>
              <HeroButton to="/Prebook">Pre-Book</HeroButton>
              <HeroButton to="/Prebook#Rental">Rental</HeroButton>
            </AnimatedDiv>
          </HeroDiv>
          <ProdImage back={product.Image} size={product.size} />
        </Overlay>
      </HeroContainer>
      <Div>
        <Compare id={id} />
        <Comparebutton onClick={() => navigate("/Compare")}>
          Compare all
        </Comparebutton>
      </Div>
      <Footer />
    </div>
  );
}

export default Products;
