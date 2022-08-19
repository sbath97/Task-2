import React from 'react';

// Layout component
// parent component

export default function Layout(props) {
    return (
        <div className={props.class}>
            <p className='text-centre'>HEADER</p>
            <p>Hello</p>
            <hr />
            <p className='text-centre'>FOOTER</p>
            <p>Bye</p>
        </div>
    );
 }
