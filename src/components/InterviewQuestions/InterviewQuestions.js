import React from 'react';

const InterviewQuestions = props => {
   return (
      <div>
         <h2>Css</h2>
         <h2>important rules</h2>
         <div>
            <p>color/background</p>
            <p>margin/padding</p>
            <p>border/border-radius</p>
            <p>width/height - max/min/-width/height</p>
            <p>box-sizing</p>
            <p>font size/weight</p>
            <p>display - inline/block/flex</p>
            <p>overflow</p>
            <p>position</p>
            <p>transitions</p>
            <p>opacity</p>
            <p>media query (responsive design)</p>
            <p>units - px/%/em/rem/vw/vh</p>
         </div>

         <h2>concepts</h2>
         <p>inheritance</p>
         <p>Specificity Hierarchy</p>
         <p>css selectors</p>

         <h3>Cite different types of CSS.</h3>
         <p>
            External – These are written in separate files. Internal – These are cited at the top of the web
            page code document. Inline – These are written right next to the text.
         </p>
         <h3>display inline vs inline-block vs block</h3>
         <p>
            <span>inline - without new line, width=content, without height</span>
            <span>inline-block - without new line, width=content, with height</span>
            <span> block - start with new line, width=100%, with height </span>
         </p>
         <h3>margin vs padding</h3>
         <p>
            <span>padding - inside element border</span>
            <span>margin - outside element border </span>
         </p>
         <h3>Q #12) What is CSS specificity?</h3>
         <p>
            Answer: CSS specificity is a score or rank that decides which style declaration has to be used to
            an element. (*) this universal selector has low specificity while ID selectors have high
            specificity. There are four categories in CSS which authorized the specificity level of the
            selector. <span> Inline style</span>
            <span>IDs (1000 pt)</span>
            <span>Classes, Attributes, and pseudo-classes. (10 pt)</span>
            <span> Elements and pseudo-elements. ( 1pt)</span>
         </p>
         <h3>What is pseudo-class / pseudo-elements? </h3>
         <p>
            pseudo-class - It is a class that is used to define a special state of an HTML element (focus
            etc..)
         </p>
         <p>
            pseudo-elements - it is a feature of CSS which is used to style the given parts of an element.
            (first letter etc..)
         </p>
         <h3>Write all the position states used in CSS.</h3>
         <p>static</p>
         <p>absolute</p>
         <p>relative</p>
         <p>fixed</p>
         <hr />
         <h2>React</h2>
         <h3>What is React?</h3>
         <p>
            React is JavaScript library which is used for building user interfaces It is used for handling
            view layer for web and mobile features: VirtualDOM, components
         </p>

         <h3>What is JSX?</h3>
         <p>
            JSX is a XML-like syntax extension to ECMAScript (the acronym stands for JavaScript XML).
            Basically it just provides syntactic sugar for the React.createElement() function, giving us
            expressiveness of JavaScript along with HTML like template syntax.
         </p>

         <h3>What is state in React?</h3>
         <p>
            State of a component is an object that holds some information that may change over the lifetime of
            the component
         </p>
         <h3>Why should we not update the state directly?</h3>
         <p>If you try to update state directly then it won't re-render the component.</p>

         <h3>What are controlled components?</h3>
         <p>
            A component that controls the input elements within the forms on subsequent user input is called
            Controlled Component, i.e, every state mutation will have an associated handler function.
         </p>
         <h3>what is HOC</h3>
         <h3>stateless vs statefull components</h3>
      </div>
   );
};

export default InterviewQuestions;

