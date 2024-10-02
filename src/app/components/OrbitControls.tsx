import { extend, useThree } from "@react-three/fiber";
import { OrbitControls } from "three/examples/jsm/Addons.js";

extend({ OrbitControls });

const Controls = (props: any) => {
  const { camera, gl } = useThree();
  return (
    <orbitControls attach={"orbitControls"} args={[camera, gl.domElement]} />
  );
};

export default Controls;
