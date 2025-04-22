"use client"

import { useEffect, useState } from "react"

export default function ServidoresTab() {
  const [servers, setServers] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadServers = async () => {
      try {
        // Simulating API call
        await new Promise((resolve) => setTimeout(resolve, 800))

        // Mock data
        const mockServers = Array.from({ length: 15 }, (_, i) => `Servidor #${i + 1}`)
        setServers(mockServers)
        setLoading(false)
      } catch (e) {
        setLoading(false)
      }
    }

    loadServers()
  }, [])

  return (
    <section id="servidores" className="tab">
      <div className="card">
        <h2>Servidores com o Bot</h2>
        {loading ? (
          <ul>
            <li>Carregando servidores...</li>
          </ul>
        ) : servers.length > 0 ? (
          <ul>
            {servers.map((server, index) => (
              <li key={index}>{server}</li>
            ))}
          </ul>
        ) : (
          <ul>
            <li>Não foi possível carregar servidores.</li>
          </ul>
        )}
      </div>
    </section>
  )
}
