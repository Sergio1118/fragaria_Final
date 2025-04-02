import { useState, useEffect } from "react";

function BotonClima() {
  const [clima, setClima] = useState(null);
  const [mostrarClima, setMostrarClima] = useState(false);

  useEffect(() => {
    const climaGet = async () => {
      try {
        const response = await fetch("http://localhost:8000/clima/", {
          method: "GET",
          credentials: "include",
          headers: { "Content-Type": "application/json" }
        });

        if (!response.ok) {
          throw new Error("Error al obtener datos del clima");
        }

        const data = await response.json();
        setClima(data.clima);
      } catch (error) {
        console.error("Error en la solicitud:", error);
      }
    };

    climaGet();
  }, []); // Se ejecuta una vez al montar el componente

  return (
    <>
      {/* Botón flotante en la esquina inferior derecha */}
      <button
        className="btn btn-warning rounded-circle position-fixed"
        style={{
          width: "60px",
          height: "60px",
          fontSize: "24px",
          right: "90px",
          bottom: "20px",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          zIndex: 2000
        }}
        onClick={() => setMostrarClima(!mostrarClima)}
      >
        🌞
      </button>

      {/* Tarjeta del clima flotante */}
      {mostrarClima && clima && (
        <div
          className="position-fixed bg-light p-3 rounded shadow border"
          style={{
            bottom: "90px",
            right: "20px",
            maxWidth: "250px"
          }}
        >
          <h4>Datos del Clima</h4>
          <p><strong>Temperatura:</strong> {clima.temperatura}°C</p>
          <p><strong>Descripción:</strong> {clima.descripcion}</p>
          <p><strong>Humedad:</strong> {clima.humedad}%</p>
          <p><strong>Presión:</strong> {clima.presion} hPa</p>
          <p><strong>Velocidad del Viento:</strong> {clima.velocidad_viento} m/s</p>
        </div>
      )}
    </>
  );
}

export default BotonClima;
