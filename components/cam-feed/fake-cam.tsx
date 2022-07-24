import React from "react";
import Image from "next/image"
import { getCam } from "./cams";

type fakeCamProps = {}

const fakeCam = (props: fakeCamProps) => {
  return <Image src={getCam()}/>
}

export default fakeCam;