import React from 'react';

const PageNotFound = () => {
  const myStyle = {
    color: 'blue',
    fontSize: '16px',
  };
  const myStyles = {
    backgroundColor: 'grey',
    padding: '20px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };
  return (
    <>
    <div style={myStyles}>
    <div style={myStyle}>PageNotFound</div>
    </div>
    </>
  )
}

export default PageNotFound;