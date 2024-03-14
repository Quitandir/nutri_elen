import "./index.css";
import "./reset.css";

import { Montserrat } from 'next/font/google'

// If loading a variable font, you don't need to specify the font weight
const font = Montserrat({ subsets: ['latin'] })

export const metadata = {
  title: "Elen Rame - Nutrição Inteligente",
  description: "Atendimento especializado para melhorar seu comportamento em relação à comida.",

};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={font.className}>{children}</body>
    </html>
  );
}
