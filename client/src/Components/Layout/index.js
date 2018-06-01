import React from 'react';
import './style.css';

import LayoutMenu  from './menu';
import { Footer } from './footer';

export const Layout = (props) => (
    <div>
        <LayoutMenu/>
        <div className="wrapper">
            {props.children}
        </div>
        <Footer />
    </div>
);