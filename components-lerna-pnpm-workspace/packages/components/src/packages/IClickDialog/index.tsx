import IButton from "@/IButton";
import Modal from "antd/lib/modal/Modal";
import { useState } from "react";

export default function IClickDialog() {
  const [visible, setVisible] = useState<boolean>(false);
  return (
    <>
      <IButton onClick={() => setVisible(true)}>点击弹窗</IButton>
      <Modal
        centered
        title="提醒"
        width={300}
        visible={visible}
        bodyStyle={{
          height: 150,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        这是一个弹窗
      </Modal>
    </>
  );
}
