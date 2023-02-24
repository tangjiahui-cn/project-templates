import Styles from "./index.module.less";
import { Image } from "antd";
import DEFAULT from './default.jpg';

interface IImageProps {
  src?: string;
  alt?: string;
}
export default function IImage(props?: IImageProps) {
  return <div className={Styles.myImage}>
    <Image src={props?.src || DEFAULT} alt={props?.alt}/>
  </div>;
}
