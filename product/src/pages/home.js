/*
 * Each page is, in fact, a React component. It can import components from
 * the library and render them inside a container.
 */
import React from "react";
import styled from "styled-components";
import { Button, Icon, colors, Avatar, H1, HomeHeader, PageBody, ProductsListNav, Product } from "design-system";
import { Link } from "react-router-dom";
// import avatarImg from "../../public/images/avatar.png"

const data = require("../data/data.js");

const Home = () => {
  return (
    <div>
      <PageBody>
        <HomeHeader>
          <Avatar src={data.user.avatar} />
          <Button isOutline>
            <Icon name="menu" />
          </Button>
        </HomeHeader>
        <H1>Store</H1>

        <ProductsListNav>
          <h4>All Product</h4>

          <StyledDiv4>
            <StyledButton color="transparent">
              <Icon name="viewItem" width={24} height={16} />
            </StyledButton>
            <StyledButton color="transparent">
              <Icon name="viewGrid" width={24} height={16} />
            </StyledButton>
            <StyledBorder />
            <StyledButton color="transparent">
              <Icon name="filter" width={24} height={16} />
            </StyledButton>
          </StyledDiv4>
        </ProductsListNav>
        <GridWrapper>
          <StyledDiv5>
            {Object.entries(data.products).map(([id, item]) => {
              return (
                <Product name={item.name} image={item.image} price={item.price}>
                </Product>
              );
            })}
          </StyledDiv5>
        </GridWrapper>
      </PageBody>
    </div>
  );
};

const StyledImage1 = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 16px;
`;

const StyledDiv1 = styled.div`
  padding: 64px 40px;
`;

const Styledh1 = styled.h1`
  margin-bottom: 40px;
  letter-spacing: -1.6px;
`;

const StyledDiv2 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const StyledDiv3 = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

const StyledDiv4 = styled.div`
  display: flex;
  align-items: center;
`;

const StyledDiv5 = styled.div`
  width: 100%;
  display: grid;
  overflow: hidden;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px 24px;
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
`;

const StyledBorder = styled.div`
  width: 1px;
  height: 16px;
  background-color: ${colors.primaryBlack10};
  margin: 0 8px;
`;

const StyledImg = styled.img`
  max-width: 100%;
  margin-bottom: 16px;
`;

const StyledButton = styled(Button)`
  padding: 0;
  border: 0;
  margin: 0 8px;
  &:last-child {
    margin-right: 0;
  }
`;

const StyledP = styled.p`
  color: ${colors.primaryOrange100};
  font-weight: 700;
  margin-top: 8px;
`;

const GridWrapper = styled.div`
  width: 100%;
`;

export default Home;
