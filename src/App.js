import React from 'react';
import {useState} from 'react';
function App() {
    const [navs,setNavs]=useState([
        {
            name:"Public",  isFolder:true,content:
        [
            {
            name:"index.html",
            isFolder:false,
            content:null
            
            
          }
        ]
    },
        {
            name:"Src",  isFolder:true,content:
            [
            {
            name:"App.css",
            isFolder:false,
            content:null
            }
            ]
        }
        
    ])
   
 
    return ( 
        
    <div className = "App" >
       {navs.map( (nav,index)=>
       (
          <div key={index}>
              <div className="btn btn-primary" >{nav.name}</div>
            
              
                  <div className="btn btn-warning">{nav.content[0].name}</div>
              
          </div>
       )
       )}
      

     </div>
    );
}

export default App;