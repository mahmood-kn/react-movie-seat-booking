import React from 'react';

const Seat = ({ id, occupeid, selected }) => {
  const classes = ['seat'];
  if (occupeid) {
    classes.push('occupeid');
  } else if (selected) {
    classes.push('selected');
  }
  return <div className={classes.join(' ')} data-id={id}></div>;
};

export default Seat;
