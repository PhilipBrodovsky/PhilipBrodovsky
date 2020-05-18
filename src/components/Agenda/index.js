import React from 'react';

import daysData from '../../data/week-days.json';
import tasksData from '../../data/tasks.json';

import Table from './AgendaStyle';

const hoursRows = new Array(5).fill(0);

const Agenda = props => {
   console.log(daysData);
   console.log('tasksData', tasksData);

   const headerTds = daysData.map(({ value }) => {
      return (
         <td key={value} id={value}>
            {value}
         </td>
      );
   });

   const dataRows = hoursRows.map((_, i) => {
      console.log('day', daysData[i]);
      console.log('qork', tasksData);
      return (
         <tr>
            {[1, 2, 3, 4, 5, 6, 7, 8].map((_, j) => {
               const task = tasksData[`${i}-${j}`];
               console.log('${i}-${j}', `${i}-${j}`);
               console.log('task', task);
               return <td key={j}>{task ? task.title : `${i},${j}`}</td>;
            })}
         </tr>
      );
   });
   console.log('dataRows', dataRows);
   return (
      <Table>
         <thead>
            <tr>{headerTds}</tr>
         </thead>
         <tbody>{dataRows}</tbody>
         <tfoot></tfoot>
      </Table>
   );
};

export default Agenda;
