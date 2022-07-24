import {StaticImageData} from 'next/image';
import cam1 from '../../assets/Magnet-Bay.jpg';
import cam2 from '../../assets/beacons.jpg';
import cam3 from '../../assets/raglan.jpg';

import seedrandom from 'seedrandom';

const cameras = [cam1, cam2, cam3];
const now = new Date();

export const getCam = (): StaticImageData => {
  const random = seedrandom(`${now.getDate() + now.getMonth() + now.getFullYear()}`);
  const index = Math.abs(random.int32()) % cameras.length

  return cameras[index];
};
