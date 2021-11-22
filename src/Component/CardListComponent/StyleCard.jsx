import styled from 'styled-components'

export const CardStyle = styled.div`
display : flex;
flex-wrap : wrap;
box-sizing : border-box;
 border-radius : 5px;
 width: 20vw;
 justify-content: space-around;
 align-items: center;
 flex-direction: row;
 height: 100%;
 margin:5px;
background: #fff;
box-shadow: 0 6px 10px rgba(0,0,0,.08), 0 0 6px rgba(0,0,0,.05);
padding: 14px 80px 18px 36px;
cursor: pointer;
&:hover{
    transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}
`