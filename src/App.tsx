import React from "react";
import "./App.css";

function Consumer({number}: {number: string}) {
  return (
    <div style={{position: "relative", display: "flex", width: "150px", height: "150px", justifyContent:"center"}}>
      <img style={{position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: 0}} src="img/ui/user_background.png"></img> 
      <img style={{position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: 1}} src="img/ui/user_shiny.png"></img> 
      <img style={{position: "absolute", width: "100%", height: "100%", objectFit: "cover", zIndex: 2}} src="img/ui/user_grid.png"></img> 
      <p style={{position: "absolute", left: "9px", top: "-11px", zIndex: 3, fontFamily: "Retro Gaming", fontSize: "18px", textAlign: "center"}}>{number}</p>
    </div>
  );
}

function App() {
  return (
    <div className="App" style={{position: "absolute", backgroundColor: "black", width: "100%", height: "100%"}}>
      <div style={{display: "flex", flexDirection: "row", flex: 1, height: "100%", justifyContent: "center"}}>
        <div style={{display: "flex", flex: 1, flexDirection: "column", gap: "20px", height: "100%", justifyContent: "center", marginLeft: "20px"}}>
          <div style={{display: "flex", flexDirection: "row", gap: "20px", width: "100%"}}>
              <Consumer number="1"/>
              <Consumer number="2"/>
              <Consumer number="3"/>
              <Consumer number="4"/>
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "20px", width: "100%"}}>
              <Consumer number="5"/>
              <Consumer number="6"/>
              <Consumer number="7"/>
              <Consumer number="8"/>
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "20px", width: "100%"}}>
              <Consumer number="9"/>
              <Consumer number="10"/>
              <Consumer number="11"/>
              <Consumer number="12"/>
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "20px", width: "100%"}}>
              <Consumer number="13"/>
              <Consumer number="14"/>
              <Consumer number="15"/>
              <Consumer number="16"/>
          </div>
        </div>
        <div style={{display: "flex", flex: 1, flexDirection: "column", gap: "20px", height: "100%", justifyContent: "center", marginLeft: "20px"}}>
          {/* <div style={{display: "flex", flexDirection: "row", gap: "20px", width: "100%"}}>
              <Consumer number="1"/>
              <Consumer number="2"/>
              <Consumer number="3"/>
              <Consumer number="4"/>
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "20px", width: "100%"}}>
              <Consumer number="5"/>
              <Consumer number="6"/>
              <Consumer number="7"/>
              <Consumer number="8"/>
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "20px", width: "100%"}}>
              <Consumer number="9"/>
              <Consumer number="10"/>
              <Consumer number="11"/>
              <Consumer number="12"/>
          </div>
          <div style={{display: "flex", flexDirection: "row", gap: "20px", width: "100%"}}>
              <Consumer number="13"/>
              <Consumer number="14"/>
              <Consumer number="15"/>
              <Consumer number="16"/>
          </div> */}
        </div>
      </div>
    </div>
    
  )
}

export default App;
