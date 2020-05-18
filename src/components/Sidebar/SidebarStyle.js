import styled from 'styled-components';

export const Items = styled.div`
   max-width: 300px;
   border-right: 1px solid lightgray;
   padding: 6px;
`;
export const Item = styled.div`
   max-width: 300px;
   border-right: 1px solid lightgray;
   font-weight: bold;

   .title {
      padding: 8px;
      :hover {
         background: lightgray;
         cursor: pointer;
      }
   }
`;

export const SubItems = styled.div`
   overflow: hidden;
   transition: max-height 0.4s;
   padding: 0 8px;
   max-height: ${p => (p.isOpen ? p.length * 50 + 'px' : 0)};
`;

export const SubItem = styled.div`
   color: gray;
   padding: 8px;
   :hover {
      background: lightgray;
      cursor: pointer;
   }
`;
