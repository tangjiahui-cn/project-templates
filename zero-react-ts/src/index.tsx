
import React from 'react'
import ReactDom from 'react-dom/client'
import Index from './pages/index';

const root = ReactDom.createRoot(document.getElementById('root') as Element)
root.render(
    <div>
        <Index />
    </div>
);