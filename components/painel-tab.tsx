"use client"

import { useEffect, useState } from "react"

interface BotInfo {
  status: string
  nome: string
  id: string
  servidores: number
  usuarios: number
}

export default function PainelTab() {
  const [botInfo, setBotInfo] = useState<BotInfo | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    const loadBotInfo = async () => {
      try {
        // Simulating API call since we don't have a real endpoint
        // In a real app, you would fetch from your API
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // Mock data
        setBotInfo({
          status: "Online",
          nome: "ETS2BOT",
          id: "123456789012345678",
          servidores: 42,
          usuarios: 1250,
        })
        setLoading(false)
      } catch (e) {
        setError(true)
        setLoading(false)
      }
    }

    loadBotInfo()
  }, [])

  return (
    <section id="painel" className="tab">
      <div className="discord-panel">
        <div className="info">
          <h1 style={{ margin: "0 0 8px 0" }}>
            Bem-vindo ao <span style={{ color: "#ffcc00" }}>ETS2BOT</span>!
          </h1>
          <p>
            O bot definitivo para Euro Truck Simulator 2 no Discord. Gerencie fretes, evolua, desafie amigos e muito
            mais!
          </p>
        </div>
        <a
          className="add-btn"
          href="https://discord.com/oauth2/authorize?client_id=SEU_CLIENT_ID&scope=bot&permissions=8"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fa-brands fa-discord"></i> Adicionar ao Discord
        </a>
      </div>
      <div className="card">
        <h2>Status do Bot</h2>
        {loading ? (
          <p>Carregando informações...</p>
        ) : error ? (
          <p>
            <span style={{ color: "orange" }}>API offline ou bot não está rodando.</span>
          </p>
        ) : (
          botInfo && (
            <div>
              <p>
                <b>Status:</b> <span style={{ color: "limegreen" }}>{botInfo.status}</span>
              </p>
              <p>
                <b>Nome:</b> {botInfo.nome}
              </p>
              <p>
                <b>ID:</b> {botInfo.id}
              </p>
              <p>
                <b>Servidores:</b> {botInfo.servidores}
              </p>
              <p>
                <b>Usuários:</b> {botInfo.usuarios}
              </p>
            </div>
          )
        )}
      </div>
    </section>
  )
}
