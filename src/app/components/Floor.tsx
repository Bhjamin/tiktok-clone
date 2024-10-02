import { extend } from "@react-three/fiber";

const Floor = (props: any) => {
  return (
    <mesh {...props}>
      <boxGeometry args={[10, 1, 10]} />
      <meshStandardMaterial color="#00ff00" />
    </mesh>
  );
};

export default Floor;
