import React from 'react';
import Header from '../Header';



const Layout = (props) => {
    return (
        <div>
            <Header>
                Header
            </Header>
            {props.children}
        </div>
    );
};



export default Layout;
