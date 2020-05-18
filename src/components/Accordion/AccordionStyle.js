import styled from 'styled-components';

export const PanelStyle = styled.div`
   background-color: #eee;
   color: #444;
   cursor: pointer;
   padding: 18px;
   width: 100%;
   border: none;
   text-align: left;
   outline: none;
   font-size: 15px;
   transition: 0.4s;
`;

export const ContentStyle = styled.div`
   padding: 0 18px;
   max-height: ${p => p.height + 'px'};
   overflow: hidden;
   transition: max-height 0.2s ease-out;
`;
