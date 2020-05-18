import React from 'react';
import Styled from 'styled-components';

const Box = Styled.div`
   width: 0;
   border-top: 100px solid lightgreen;
   border-right: 100px solid mediumpurple;
   border-bottom: 100px solid lightsalmon;
   border-left: 100px solid moccasin;
`;

const Heart = Styled.div`
   position: relative;
   width: 200px;
   height: 160px;

   border: 1px solid black;

   :before,:after  {
      position: absolute;
      content: "";
      
      width: 100px;
      height: 160px;
      left: 100px;
      
      background-color: tomato;
      
      border-radius: 100px 100px 0 0;
      
      transform: rotate(-45deg);
      transform-origin: 0px 100%;
   }

   :after {
      left: 0;
      
      transform-origin: 100% 100%;
      transform: rotate(45deg);
   }
 
`;

const Index = props => {
   return (
      <div>
         <Box />
         <Heart />
      </div>
   );
};

export default Index;
