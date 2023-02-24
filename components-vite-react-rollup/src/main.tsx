import React from "react";
import ReactDOM from "react-dom/client";
// import { IButton, IClickDialog, IImage } from "./packages";
import { IButton, IClickDialog, IImage } from "../dist/index";
import 'antd/dist/antd.min.css';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div>
      <IButton type={"primary"}>按钮</IButton>
      <IImage alt='图片'/>
      <IClickDialog />
    </div>
  </React.StrictMode>
);
