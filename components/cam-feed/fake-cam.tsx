import React from "react";
import cam from "../../assets/Magnet-Bay.jpg"
import Image from "next/image"

type fakeCamProps = {}

const fakeCam = (props: fakeCamProps) => {
  return <Image src={cam}/>
}

export default fakeCam;