export default function ComandosTab() {
  const commands = [
    { command: "!frete <número>", description: "Aceita um frete disponível pelo número listado." },
    { command: "!disponivel", description: "Exibe a lista de fretes disponíveis no momento." },
    { command: "!encerrar", description: "Encerra o frete atual e concede experiência e pagamento." },
    { command: "!xp", description: "Mostra sua experiência, nível e cargo atual." },
    { command: "!zerar", description: "Zera a experiência de um membro (somente administradores)." },
    { command: "!ajuda", description: "Exibe a lista de comandos disponíveis." },
  ]

  return (
    <section id="comandos" className="tab">
      <div className="card">
        <h2>Comandos do Bot</h2>
        <div className="commands-list">
          {commands.map((cmd, index) => (
            <div className="command-item" key={index}>
              <strong>{cmd.command}</strong>
              <br /> {cmd.description}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
