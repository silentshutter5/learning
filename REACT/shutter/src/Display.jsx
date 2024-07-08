import React from 'react';


const Display = ({ value }) => {

  return (

    <div

      className="bg-gray-200 h-12 flex justify-end items-center pr-4 text-3xl"

    >

      {value}

    </div>

  );

};


export default Display;