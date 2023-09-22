export const metadata = {
  title: 'Portfolio Creator',
  description: 'Create a personal portfolio with ease (and for free)',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
