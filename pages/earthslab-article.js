import '../styles/index.scss';


import React, { Component } from "react";
import styled, { css } from "styled-components";

function GooglePixel3Xl(props) {
  return (
    <Root>
      <MenuStack>
        <Menu>
          <Rectangle>
            <EndWrapperFiller></EndWrapperFiller>
            <HomeRow>
              <Home>HOME</Home>
              <Anatomy>ANATOMY</Anatomy>
              <Physiology>PHYSIOLOGY</Physiology>
              <About>ABOUT</About>
              <Search>
                <Rectangle2>
                  <SearchHere>Search here...</SearchHere>
                </Rectangle2>
              </Search>
            </HomeRow>
          </Rectangle>
        </Menu>
        <Image
          src={''}
        ></Image>
      </MenuStack>
    </Root>
  );
}

const Root = styled.div`
  display: flex;
  background-color: rgba(255,255,255,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Menu = styled.div`
  top: 32px;
  left: 0px;
  height: 58px;
  border-top: solid 5px #df3e35;
  position: absolute;
  right: 0px;
  flex-direction: column;
  display: flex;
`;

const Rectangle = styled.div`
  background-color: rgba(255,255,255,1);
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  box-shadow: 0px 1px 10px  1px rgba(100,100,100,0.101960784313725) ;
`;

const EndWrapperFiller = styled.div`
  flex: 1 1 0%;
  flex-direction: row;
  display: flex;
`;

const Home = styled.span`
    font-family: 'Titillium Web';
    background-color: transparent;
    color: rgba(56,56,56,1);
    font-size: 16px;
    font-weight: 600;
    font-style: normal;
    letter-spacing: 0.4px;
    margin-right: 21px;
    margin-top: 6px;
`;

const Anatomy = styled.span`
  font-family: 'Titillium Web';
  background-color: transparent;
  color: rgba(56,56,56,1);
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  letter-spacing: 0.4px;
  margin-right: 21px;
  margin-top: 6px;
`;

const Physiology = styled.span`
  font-family: 'Titillium Web';
  background-color: transparent;
  color: rgba(56,56,56,1);
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  letter-spacing: 0.4px;
  margin-right: 20px;
  margin-top: 6px;
`;

const About = styled.span`
  font-family: 'Titillium Web';
  background-color: transparent;
  color: rgba(56,56,56,1);
  font-size: 16px;
  font-weight: 600;
  font-style: normal;
  letter-spacing: 0.4px;
  margin-right: 45px;
  margin-top: 6px;
`;

const Search = styled.div`
  width: 350px;
  height: 35px;
  flex-direction: column;
  display: flex;
`;

const Rectangle2 = styled.div`
  width: 350px;
  height: 35px;
  background-color: rgba(255,255,255,1);
  border-color: rgba(227,227,227,1);
  border-width: 1px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
  flex-direction: column;
  display: flex;
  border-style: solid;
`;

const SearchHere = styled.span`
  font-family: Cairo;
  background-color: transparent;
  color: rgba(130,130,130,1);
  font-size: 14px;
  font-weight: 400;
  font-style: normal;
  margin-top: 4px;
  margin-left: 12px;
`;

const HomeRow = styled.div`
  height: 35px;
  flex-direction: row;
  margin-right: 13px;
  margin-top: 14px;
  display: flex;
`;

const Image = styled.img`
  top: 0px;
  left: 30px;
  width: 150px;
  height: 150px;
  background-color: transparent;
  position: absolute;
  object-fit: cover;
`;

const MenuStack = styled.div`
  height: 150px;
  margin-top: 30px;
  position: relative;
`;

export default GooglePixel3Xl;
