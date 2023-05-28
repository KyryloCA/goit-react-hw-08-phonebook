import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addFilterRedux } from 'slice';

const Filter = () => {
  const dispatch = useDispatch();

  const searchEngine = evt => {
    evt.preventDefault();
    dispatch(addFilterRedux(evt.target.value));
  };

  return (
    <input
      id="searchForm"
      name="searchForm"
      type="text"
      value={useSelector(state => state.filter)}
      onChange={searchEngine}
    />
  );
};

export default Filter;
