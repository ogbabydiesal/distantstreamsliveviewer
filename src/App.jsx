import { useState } from 'react'
import './App.css'
import { Stream } from "@cloudflare/stream-react";
/*



export const App = () => {
  
  return (
    
  );
};

*/

function App() {
  

  return (
    <>
     <div >
      <iframe
        src="https://customer-fmbage4kryht0m2f.cloudflarestream.com/e23e3d007999040c74e0d4a82ae856ec/iframe"
        
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen={true}
      ></iframe>
    </div>

      
    </>
  )
}



export default App
