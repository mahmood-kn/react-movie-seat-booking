import React from 'react';

const Seat = ({ occupeid, selected, onclick }) => {
  const classes = ['seat'];
  if (occupeid) {
    classes.push('occupeid');
  } else if (selected) {
    classes.push('selected');
  }

  return <div className={classes.join(' ')} onClick={onclick}></div>;
};

export default Seat;
