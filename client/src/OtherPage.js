import React from 'react';
import { Link } from 'react-router-dom';

export default function myFunc() {
  return (
    <div>
      Im some other page!
      <Link to="/">Go back home</Link>
    </div>
  );
};
