import Image from "next/image";
import tg_logo from "/public/logo-png.png";

export default function Logo() {
  return <Image src={tg_logo} alt="me" width={164} height={164} />;
}
