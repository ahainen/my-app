import { useRive } from "rive-react";

function App() {
  const { rive, RiveComponent } = useRive({
      src:"switch.riv",
      stateMachines:"state-machine",
      autoplay:true,
  });



  return ( 
  <div className="h-screen">
    <RiveComponent />
  </div>
  );
}

export default App;
