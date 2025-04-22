"use client"

import { useEffect, useState } from "react"

export default function AtividadesTab() {
  const [activities, setActivities] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadActivities = async () => {
      try {
        // Simulating API call
        await new Promise((resolve) => setTimeout(resolve, 700))

        // Mock data
        setActivities([
          "Bot online e monitorando fretes!",
          "Atualização automática de fretes a cada 30 minutos.",
          "Mais de 1250 caminhoneiros participando!",
          "Novo sistema de ranking implementado.",
          "Manutenção programada para o próximo domingo.",
        ])
        setLoading(false)
      } catch (e) {
        setLoading(false)
      }
    }

    loadActivities()
  }, [])

  return (
    <section id="atividades" className="tab">
      <div className="card">
        <h2>Atividades Recentes</h2>
        {loading ? (
          <ul>
            <li>Carregando atividades...</li>
          </ul>
        ) : activities.length > 0 ? (
          <ul>
            {activities.map((activity, index) => (
              <li key={index}>{activity}</li>
            ))}
          </ul>
        ) : (
          <ul>
            <li>Não foi possível carregar atividades.</li>
          </ul>
        )}
      </div>
    </section>
  )
}
