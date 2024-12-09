// 'use client'

// import { Canvas } from '@react-three/fiber'
// import { OrbitControls } from '@react-three/drei'
// import { useState } from 'react'



// function Box(props:any) {
//   const [hovered, setHovered] = useState(false)
//   const [active, setActive] = useState(false)
//   return (
//     <mesh
//       {...props}
//       scale={active ? 1.5 : 1}
//       onClick={() => setActive(!active)}
//       onPointerOver={() => setHovered(true)}
//       onPointerOut={() => setHovered(false)}
//     >
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

// function Sidebar() {
//   return (
//     <div className="h-full">
//       <div>
//         <h2 className="text-xl font-bold mb-4">Sidebar</h2>
//         <ul>
//           <li><button  className="w-full mb-2">Item 1</button></li>
//           <li><button  className="w-full mb-2">Item 2</button></li>
//           <li><button  className="w-full mb-2">Item 3</button></li>
//         </ul>
//       </div>
//     </div>
//   )
// }

// function MainContent() {
//   return (
//     <div className="h-full">
//       <div>
//         <h2 className="text-xl font-bold mb-4">Main Content</h2>
//         <div className="h-[60vh]">
//           <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
//             <ambientLight intensity={0.5} />
//             <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//             <pointLight position={[-10, -10, -10]} />
//             <Box position={[-2, 0, 0]} />
//             <Box position={[2, 0, 0]} />
//             <OrbitControls />
//           </Canvas>
//         </div>
//         <div className="mt-4">
//           <button className="bg-primary hover:bg-primary/90 text-primary-foreground">
//             Action button
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// function AdditionalContent() {
//   return (
//     <div className="h-full">
//       <div>
//         <h2 className="text-xl font-bold mb-4">Additional Content</h2>
//         <p>This is some additional content that complements the 3D layout.</p>
//         <button  className="mt-4">Learn More</button>
//       </div>
//     </div>
//   )
// }

// export default function Component() {
//   return (
//     <div className="min-h-screen bg-gray-100 p-4">
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[80vh]">
//         <div className="col-span-1">
//           <Sidebar />
//         </div>
//         <div className="col-span-1">
//           <MainContent />
//         </div>
//         <div className="col-span-1">
//           <AdditionalContent />
//         </div>
//       </div>
//     </div>
//   )
// }