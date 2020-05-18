import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { Header, Main } from './layout';

// global style
import GlobalStyle from './AppStyle';

import { BrowserRouter, Switch } from 'react-router-dom';
import InterviewQuestions from './components/InterviewQuestions';
import Accordion from './components/Accordion';
import Agenda from './components/Agenda';

// import data
import questions from './data/interviewQuestions.json';

// Shapes
import Shapes from './components/Shapes';

import Pages from './pages';

const threshold = [];

let y = 0;

for (let i = 0; i < 100; i++) {
   const x = 0.01;
   y += x;
   threshold.push(y);
}

console.log('threshold', threshold);

const Div = styled.div`
   padding: 8px;
   margin: 8px;
   border-bottom: 1px solid;

   &.target {
      color: red;
   }
`;

function App() {
   const targetEl2 = useRef(null);
   const targetEl = useRef(null);

   // useEffect(() => {
   //    const observer = new IntersectionObserver(
   //       entries => {
   //          console.log('entries', entries[0].intersectionRatio);
   //       },
   //       {
   //          root: null,
   //          rootMargin: '0px',
   //          threshold: [0, 1]
   //       }
   //    );
   //    console.log('observer ', observer);
   //    observer.observe(targetEl.current);
   // });

   return (
      <BrowserRouter>
         <GlobalStyle />
         <Header />
         <Main>
            <Switch>{Pages}</Switch>
         </Main>
      </BrowserRouter>
   );

   return (
      <div>
         <Div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a dolor eu tellus consequat convallis ac vel massa. Sed
            tincidunt urna leo, sed dignissim augue mattis quis. Suspendisse ac nulla ante. In nisi dui, efficitur at turpis quis,
            egestas ultricies arcu. In interdum turpis et ligula tristique volutpat. Etiam tristique lorem sed leo sagittis
            tincidunt. Etiam molestie ligula maximus scelerisque blandit. Donec non risus sed mauris scelerisque rhoncus. Nunc a
            erat justo. Maecenas iaculis ipsum et aliquet dignissim. Donec ac sem in arcu feugiat dignissim id vel mi. Sed in
            varius libero. Curabitur diam elit, ornare eget tristique et, tempus vitae ex. Integer sodales lorem orci, eu feugiat
            sem interdum a. Mauris in feugiat tellus.
         </Div>
         <Div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a dolor eu tellus consequat convallis ac vel massa. Sed
            tincidunt urna leo, sed dignissim augue mattis quis. Suspendisse ac nulla ante. In nisi dui, efficitur at turpis quis,
            egestas ultricies arcu. In interdum turpis et ligula tristique volutpat. Etiam tristique lorem sed leo sagittis
            tincidunt. Etiam molestie ligula maximus scelerisque blandit. Donec non risus sed mauris scelerisque rhoncus. Nunc a
            erat justo. Maecenas iaculis ipsum et aliquet dignissim. Donec ac sem in arcu feugiat dignissim id vel mi. Sed in
            varius libero. Curabitur diam elit, ornare eget tristique et, tempus vitae ex. Integer sodales lorem orci, eu feugiat
            sem interdum a. Mauris in feugiat tellus.
         </Div>
         <Div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a dolor eu tellus consequat convallis ac vel massa. Sed
            tincidunt urna leo, sed dignissim augue mattis quis. Suspendisse ac nulla ante. In nisi dui, efficitur at turpis quis,
            egestas ultricies arcu. In interdum turpis et ligula tristique volutpat. Etiam tristique lorem sed leo sagittis
            tincidunt. Etiam molestie ligula maximus scelerisque blandit. Donec non risus sed mauris scelerisque rhoncus. Nunc a
            erat justo. Maecenas iaculis ipsum et aliquet dignissim. Donec ac sem in arcu feugiat dignissim id vel mi. Sed in
            varius libero. Curabitur diam elit, ornare eget tristique et, tempus vitae ex. Integer sodales lorem orci, eu feugiat
            sem interdum a. Mauris in feugiat tellus.
         </Div>
         <Div ref={targetEl} className='target'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a dolor eu tellus consequat convallis ac vel massa. Sed
            tincidunt urna leo, sed dignissim augue mattis quis. Suspendisse ac nulla ante. In nisi dui, efficitur at turpis quis,
            egestas ultricies arcu. In interdum turpis et ligula tristique volutpat. Etiam tristique lorem sed leo sagittis
            tincidunt. Etiam molestie ligula maximus scelerisque blandit. Donec non risus sed mauris scelerisque rhoncus. Nunc a
            erat justo. Maecenas iaculis ipsum et aliquet dignissim. Donec ac sem in arcu feugiat dignissim id vel mi. Sed in
            varius libero. Curabitur diam elit, ornare eget tristique et, tempus vitae ex. Integer sodales lorem orci, eu feugiat
            sem interdum a. Mauris in feugiat tellus.
         </Div>
         <Div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a dolor eu tellus consequat convallis ac vel massa. Sed
            tincidunt urna leo, sed dignissim augue mattis quis. Suspendisse ac nulla ante. In nisi dui, efficitur at turpis quis,
            egestas ultricies arcu. In interdum turpis et ligula tristique volutpat. Etiam tristique lorem sed leo sagittis
            tincidunt. Etiam molestie ligula maximus scelerisque blandit. Donec non risus sed mauris scelerisque rhoncus. Nunc a
            erat justo. Maecenas iaculis ipsum et aliquet dignissim. Donec ac sem in arcu feugiat dignissim id vel mi. Sed in
            varius libero. Curabitur diam elit, ornare eget tristique et, tempus vitae ex. Integer sodales lorem orci, eu feugiat
            sem interdum a. Mauris in feugiat tellus.
         </Div>
         <Div ref={targetEl2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a dolor eu tellus consequat convallis ac vel massa. Sed
            tincidunt urna leo, sed dignissim augue mattis quis. Suspendisse ac nulla ante. In nisi dui, efficitur at turpis quis,
            egestas ultricies arcu. In interdum turpis et ligula tristique volutpat. Etiam tristique lorem sed leo sagittis
            tincidunt. Etiam molestie ligula maximus scelerisque blandit. Donec non risus sed mauris scelerisque rhoncus. Nunc a
            erat justo. Maecenas iaculis ipsum et aliquet dignissim. Donec ac sem in arcu feugiat dignissim id vel mi. Sed in
            varius libero. Curabitur diam elit, ornare eget tristique et, tempus vitae ex. Integer sodales lorem orci, eu feugiat
            sem interdum a. Mauris in feugiat tellus.
         </Div>
         <Div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi a dolor eu tellus consequat convallis ac vel massa. Sed
            tincidunt urna leo, sed dignissim augue mattis quis. Suspendisse ac nulla ante. In nisi dui, efficitur at turpis quis,
            egestas ultricies arcu. In interdum turpis et ligula tristique volutpat. Etiam tristique lorem sed leo sagittis
            tincidunt. Etiam molestie ligula maximus scelerisque blandit. Donec non risus sed mauris scelerisque rhoncus. Nunc a
            erat justo. Maecenas iaculis ipsum et aliquet dignissim. Donec ac sem in arcu feugiat dignissim id vel mi. Sed in
            varius libero. Curabitur diam elit, ornare eget tristique et, tempus vitae ex. Integer sodales lorem orci, eu feugiat
            sem interdum a. Mauris in feugiat tellus.
         </Div>
      </div>
   );

   const questionsUI = questions.map((questions, i) => {
      return (
         <Accordion key={i}>
            <Accordion.Panel>{questions.text}</Accordion.Panel>
            <Accordion.Content>{questions.answer}</Accordion.Content>
         </Accordion>
      );
   });

   return <Shapes />;
   return (
      <div className='App'>
         <Agenda />
         {questionsUI}

         {/* <InterviewQuestions /> */}
      </div>
   );
}

export default App;
