"use client"

import { useState } from "react"

interface NavItem {
  id: string
  icon: string
  label: string
}

interface SidebarProps {
  activeTab: string
  onTabChange: (tabId: string) => void
}

export default function Sidebar({ activeTab, onTabChange }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false)

  const navItems: NavItem[] = [
    { id: "painel", icon: "fa-solid fa-gauge", label: "Painel" },
    { id: "comandos", icon: "fa-solid fa-terminal", label: "Comandos" },
    { id: "funcionamento", icon: "fa-solid fa-gears", label: "Como Funciona" },
    { id: "servidores", icon: "fa-solid fa-server", label: "Servidores" },
    { id: "atividades", icon: "fa-solid fa-chart-line", label: "Atividades" },
    { id: "termos", icon: "fa-solid fa-file-contract", label: "Termos" },
    { id: "privacidade", icon: "fa-solid fa-user-shield", label: "Privacidade" },
  ]

  const toggleSidebar = () => {
    setCollapsed(!collapsed)
  }

  return (
    <nav className={`sidebar ${collapsed ? "collapsed" : ""}`} id="sidebar">
      <div className="logo">
        <i className="fa-solid fa-truck"></i>
        <span style={{ marginLeft: "12px" }}>ETS2BOT</span>
        <button className="toggle-btn" onClick={toggleSidebar} title="Expandir/Contrair">
          <i className="fa fa-bars"></i>
        </button>
      </div>
      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <button onClick={() => onTabChange(item.id)} className={activeTab === item.id ? "active" : ""}>
              <i className={item.icon}></i>
              <span>{item.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
