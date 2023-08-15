import './globals.css'

export const metadata = {
  title: 'Yuvaraja',
  description: "I'm a Passionate Developer with over 3+ years of experience in Programming and other fields of Computer Science, Currently passionate about Cloud Computing and Quantum Computing. Currently pursuring B.Tech CSE from MVIT",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
