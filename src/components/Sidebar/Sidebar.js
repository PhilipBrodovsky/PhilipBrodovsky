import React, { useState, useCallback } from 'react';

import { NavLink } from 'react-router-dom';

//  style
import { Items, Item, SubItems, SubItem, } from './SidebarStyle';

const data = [
   {
      title: 'Introduction',
      items: [],
   },
   {
      title: 'HTML Tutorial',
      items: [
         {
            label: 'HTML Tutorial',
            link: '/course/html',
         },
         {
            label: 'HTML is the standard markup language for Web pages',
            link: '/',
         },
         {
            label: 'describes the structure of a Web page',
            link: '/',
         },
         {
            label: 'Elements & Attributes',
            link: '/',
         },
         {
            label: 'Images',
            link: '/',
         },
         {
            label: 'Links',
            link: '/',
         },
         {
            label: 'List',
            link: '/',
         },
         {
            label: 'File Paths',
            link: '/',
         },
         {
            label: 'head vs body elements',
            link: '/',
         },
         {
            label: 'inline style',
            link: '/',
         },
         {
            label: 'Tables',
            link: '/',
         },
      ],
   },
   {
      title: 'CSS Tutorial',
      items: [],
   },
   {
      title: 'JS Tutorial',
      items: [
         {
            label: 'Javascript tutorial',
            link: '/course/js',
         },
      ],
   },
];

const Sidebar = props => {
   const [showSubItems, setShowSubItems] = useState({});

   const handleClick = useCallback(event => {
      const { target, currentTarget } = event;
      if (target != currentTarget) return;
      const { id } = currentTarget;
      if (showSubItems[id]) return setShowSubItems({ ...showSubItems, [id]: false });
      setShowSubItems({ ...showSubItems, [id]: true });
   });
   return (
      <Items>
         {data.map(({ title, items }) => {
            const isOpen = showSubItems[title];
            return (
               <Item key={title}>
                  <div className='title' id={title} onClick={handleClick}>
                     {title}
                  </div>
                  <SubItems isOpen={isOpen} length={items.length}>
                     {items.map(({ label, link }) => (
                        <SubItem key={label}>
                           <NavLink to={link}>{label}</NavLink>
                        </SubItem>
                     ))}
                  </SubItems>
               </Item>
            );
         })}
      </Items>
   );
};

export default Sidebar;
