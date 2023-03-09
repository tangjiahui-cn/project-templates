import React from 'react'
import ReactDOM from 'react-dom/client'
import {add, dec, hello, test, helloVite} from '@monorepo/common'
import {IButton} from '@monorepo/components'
import 'antd/dist/antd.min.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
  <div>
    Hello Umi
    <div>
     1 + 2 = {add(1, 2)}
    </div>
    <div>
      1 - 2 = {dec(1, 2)}
    </div>
    <div>
      {test()}
    </div>
    <div>
      {hello()}
    </div>
    <div>
      {helloVite()}
    </div>
    <div>
      <IButton>按钮</IButton>
    </div>
  </div>
  </React.StrictMode>,
)
