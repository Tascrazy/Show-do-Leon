import '../styles/global.css'

export const metadata = {
  title: 'Show do Leon',
  description: 'nao sei'
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100">{children}</body>
    </html>
  );
}
