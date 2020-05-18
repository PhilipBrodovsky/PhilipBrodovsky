import React from 'react';

// styled
import Container from './styled';

const Js = props => {
   return (
      <Container>
         <h1>Javascript This</h1>
         <p>The JavaScript this keyword refers to the object it belongs to.</p>

         <h2>rules:</h2>
         <p>rule 1) 'this' determined by the object invoking a function</p>
         <p>rule 2) arrow function dont have their own 'this'. ('this' bound when function created) </p>
         <p>rule 3) invoking function globally, 'this' equal to global object. (undefined in strict mode)</p>
         <p>rule 4) call, apply, bind, can refer 'this' to any object (not work with arrow function) </p>
      </Container>
   );
};

export default Js;
