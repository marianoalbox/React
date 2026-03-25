import { useState } from 'react';

function CardLizard({imagen, titulo, parrafo, textoBoton1, enlaceBoton1, textoBoton2, enlaceBoton2, colorBoton3, textoBoton3}) {

  const [colorTxt, setColorTexto] = useState(false);
  
  const estiloTextoColor = {
  color: colorTxt ? colorBoton3 : "white",
  };

  return (
    <div>
        <div style={{
        width: "400px",
        height: "auto",
        minHeight: "300px",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "4px 4px 8px rgba(223, 214, 214, 0.5)",
        fontFamily: "Arial",
        margin: "20px"
        }}>
            <img src={imagen} style={{ width: "100%", height: 'auto' }} />

            <div style={{ padding: "20px", marginTop: "-35px"}}>
                <h2 style={{ display: "flex" }}>{titulo}</h2>
                <div style={{marginBottom: "70px", marginTop: "-10px" , textAlign: "left"}}>
                  <p style={estiloTextoColor}>{parrafo}</p>
                </div>
            </div> 
        </div>

        <div style={{ display: "flex",gap: "20px", left: "40px", top: "-80px", position: "relative" }}>
                    <button style={{backgroundColor: "#ccc", color: "#000"}} href={enlaceBoton1}>{textoBoton1}</button>
                    <button style={{backgroundColor: "#ccc", color: "#000"}} href={enlaceBoton2}>{textoBoton2}</button>
                    <button onClick={() => setColorTexto(!colorTxt)} style={{backgroundColor: "#ccc", color: "#000"}} >{textoBoton3}</button>
        </div>
    </div>
  );
}

export default CardLizard;
