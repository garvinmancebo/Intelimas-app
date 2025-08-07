import React from 'react'

export default function Dashboard({ language }) {
  const texts = {
    es: {
      greeting: '¡Arriba Intelimas!',
      driverID: 'ID del Chofer',
      route: 'Ruta',
      chat: 'Chat de Asistencia'
    },
    en: {
      greeting: 'Let's go Intelimas!',
      driverID: 'Driver ID',
      route: 'Route',
      chat: 'Support Chat'
    }
  }

  const t = texts[language]

  return (
    <div style={{ fontFamily: 'Arial', padding: '2rem', backgroundColor: '#f4fbff', color: '#003c5a' }}>
      <h1>{t.greeting}</h1>
      <div style={{ display: 'flex', gap: '1rem' }}>
        <div style={{ flex: 1, border: '1px solid #ccc', padding: '1rem', background: '#e0f7fa' }}>
          <h2>{t.driverID}</h2>
          <p>Nombre: Juan Pérez</p>
          <p>ID: 123456</p>
        </div>
        <div style={{ flex: 1, border: '1px solid #ccc', padding: '1rem', background: '#e0f2f1' }}>
          <h2>{t.route}</h2>
          <ul>
            <li>Maria Lopez - 123 Main St - (123) 456-7890</li>
            <li>Carlos Ruiz - 456 Elm St - (987) 654-3210</li>
          </ul>
        </div>
        <div style={{ flex: 1, border: '1px solid #ccc', padding: '1rem', background: '#e8f5e9' }}>
          <h2>{t.chat}</h2>
          <iframe
            src="https://webchat.botpress.cloud/0c462bc3-b4f4-437b-a5c1-9d1e82de7d18"
            width="100%"
            height="300"
            title="Botpress Chat"
          />
        </div>
      </div>
    </div>
  )
}