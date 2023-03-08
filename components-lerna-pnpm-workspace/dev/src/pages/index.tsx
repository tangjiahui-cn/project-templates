import {add, dec, hello, test} from '@monorepo/common'
import {IButton} from '@monorepo/components'
import "antd/dist/antd.min.css"

export default function () {

  return <div>
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
      <IButton>按钮</IButton>
    </div>
  </div>
}