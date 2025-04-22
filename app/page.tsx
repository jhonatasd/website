"use client"

import { useState } from "react"
import Sidebar from "@/components/sidebar"
import PainelTab from "@/components/painel-tab"
import ComandosTab from "@/components/comandos-tab"
import FuncionamentoTab from "@/components/funcionamento-tab"
import ServidoresTab from "@/components/servidores-tab"
import AtividadesTab from "@/components/atividades-tab"
import TermosTab from "@/components/termos-tab"
import PrivacidadeTab from "@/components/privacidade-tab"

export default function Home() {
  const [activeTab, setActiveTab] = useState("painel")

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId)
  }

  return (
    <>
      <Sidebar activeTab={activeTab} onTabChange={handleTabChange} />
      <main className="main-content">
        {activeTab === "painel" && <PainelTab />}
        {activeTab === "comandos" && <ComandosTab />}
        {activeTab === "funcionamento" && <FuncionamentoTab />}
        {activeTab === "servidores" && <ServidoresTab />}
        {activeTab === "atividades" && <AtividadesTab />}
        {activeTab === "termos" && <TermosTab />}
        {activeTab === "privacidade" && <PrivacidadeTab />}
      </main>
    </>
  )
}
