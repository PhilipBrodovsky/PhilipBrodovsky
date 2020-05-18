import React, { memo, createContext, useContext, useState, useCallback, useRef, useEffect } from 'react';

// style
import { PanelStyle, ContentStyle } from './AccordionStyle';

const Context = createContext({});

const Accordion = props => {
   const { children } = props;
   const [isOpen, setIsOpen] = useState(false);
   const toggleAccordion = useCallback(() => {
      setIsOpen(!isOpen);
   }, [isOpen]);
   return <Context.Provider value={{ isOpen, toggleAccordion }}>{children}</Context.Provider>;
};

const Panel = memo(props => {
   const { children } = props;
   const { toggleAccordion } = useContext(Context);
   return (
      <PanelStyle className='Accordion-Action' onClick={toggleAccordion}>
         {children}
      </PanelStyle>
   );
});

const Content = props => {
   const { children } = props;
   const { isOpen } = useContext(Context);
   const [height, setHeight] = useState(0);
   const ref = useRef(null);

   useEffect(() => {
      let currentHeight = ref.current.scrollHeight;
      currentHeight = isOpen ? currentHeight : 0;
      setHeight(currentHeight);
   }, [isOpen, height]);

   return (
      <ContentStyle ref={ref} height={height} className='Accordion-Content'>
         {children}
      </ContentStyle>
   );
};

Accordion.Panel = Panel;

Accordion.Content = Content;

export default Accordion;
