import React, { useState } from 'react'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'


const Header = () => {
    const [burgerStatus, setBurgerStatus] = useState(false);
    return (
        <div>
            <Container>
                <a>
                    <img src="images/logo.svg" alt="" />
                </a>
                <Menu>

                   
                    <a href='#'>Model S</a>
                    <a href='#'>Model 3</a>
                     
                    

                    <a href='#'>Model X</a>


                    <a href='#'>Model Y</a>
                    <span></span>
                </Menu>
                <RigtMenu>
                    <a href=''>Shop</a>
                    <a href=''>Tesla Acount</a>
                    <MiniMenu onClick={() => setBurgerStatus(true)} />

                </RigtMenu>
                <BurgerNav show={burgerStatus}>
                    <CloseWap>
                        <CloseButton onClick={() => setBurgerStatus(false)} />
                    </CloseWap>

                    <li><a href="#">Existing Inventory</a></li>
                    <li><a href="#">Used Inventory</a></li>
                    <li><a href="#">Trade-in</a></li>
                    <li><a href="#">Cybertruck</a></li>
                    <li><a href="#">Roadaster</a></li>
                    <li><a href="#">Powerwall</a></li>
                    <li><a href="#">Commercial energy</a></li>
                    <li><a href="#">Utilties</a></li>
                    <li><a href="#">Test Drive</a></li>
                </BurgerNav>
            </Container>

        </div>
    )
}

export default Header

const Container = styled.div`
z-index: 1;
min-height:60px;
position:fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding:0 20px;
top:0;
left:0;
right:0;
`

const Menu = styled.div`

display: flex;
align-items: center;
padding: 15px;
border-radius: 10px;
overflow: hidden;

a {
  position: flex;
  text-decoration: none;
  color: #252525;
  font-weight: 600;
  flex-wrap: nowrap;
  line-height: 1;
  text-align: center;
  display: flex;
  width: 100px;
  padding: 10px;
  z-index: 2;
}

@media (max-width: 768px) {
  display: none;
}

span {
  position: absolute;
  width: 100px;
  top: 15px;
  bottom: 15px;
  background: #171a20;
  opacity: 0.1;
  border-radius: 4px;
  z-index: 1;
  transform: translateX(0px);
  transition: 0.3s ease transform;
}

a:not(:hover) ~ span {
  opacity: 0
}
a:hover ~ span {
    opacity: 0.1;
  }
a:nth-child(1):hover ~ span {
  transform: translateX(0px);
}

a:nth-child(2):hover ~ span {
  transform: translateX(100px);
}

a:nth-child(3):hover ~ span {
  transform: translateX(calc(100px * 2));
}

a:nth-child(4):hover ~ span {
  transform: translateX(calc(100px * 3));
}
 
`
const RigtMenu = styled.div`
display: flex;
align-items: center;
 a {
    font-weight: 600;
    margin-right: 10px;
    }
    
`
const MiniMenu = styled(MenuIcon)`
cursor: pointer`

const BurgerNav = styled.div`
position: fixed;
top: 0;
bottom: 0;
right: 0;
background: white;
width: 300px;
z-index: 16;
list-style: none;
padding: 20px;
display: flex;
flex-direction: column;
text-align: start;
transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'}; // promenjeno mesto true i false u ternarnom operatoru
transition: transform 0.2s ease-in-out;

li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0,.2);
    a {
    font-weight: 600; 
    }
    }
`

const CloseButton = styled(CloseIcon)`
cursor: pointer

`
const CloseWap = styled.div`

display: flex;
justify-content: flex-end;
`