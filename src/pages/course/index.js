import React from 'react';

import { Route } from 'react-router-dom';

// Components
import { Sidebar } from '../../components';

// pages
import HtmlTutorial from './Html';
import JsTutorial from './Javascript';

const CoursePage = props => {
   return (
      <div>
         <Sidebar />
         <div>
            <Route path='/course/html' component={HtmlTutorial} />
            <Route path='/course/js' component={JsTutorial} />
         </div>
      </div>
   );
};

export default CoursePage;
