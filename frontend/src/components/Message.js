import React from 'react';

export default function Message(props) {
  return (
    <div className={`alert-${props.variant || 'info' }`}>
      {props.children}
    </div>
  );
}
