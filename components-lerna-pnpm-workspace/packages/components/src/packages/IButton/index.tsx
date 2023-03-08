import { Button } from "antd";

interface IButtonProps {
  children?: any;
  type?: "primary" | "dashed" | "default";
  onClick?: () => void;
}
export default function IButton(props: IButtonProps) {
  return (
    <Button type={props?.type} onClick={props?.onClick}>
      {props?.children}
    </Button>
  );
}
