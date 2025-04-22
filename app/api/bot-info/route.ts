import { NextResponse } from "next/server"

export async function GET() {
  // Simulating database or external API call
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Mock data
  const botInfo = {
    status: "Online",
    nome: "ETS2BOT",
    id: "123456789012345678",
    servidores: 42,
    usuarios: 1250,
  }

  return NextResponse.json(botInfo)
}
