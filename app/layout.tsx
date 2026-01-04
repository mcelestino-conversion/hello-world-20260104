import './globals.css'

export const metadata = {
  title: 'hello world 20260104',
  description: '{"project":{"name":"hello world","type":"web_app","framework":"nextjs","language":"typescript"},"description":"a simple one-page hello world website.","features":[],"pages":["home"],"styling":{"framework":"tailwind"}}',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
