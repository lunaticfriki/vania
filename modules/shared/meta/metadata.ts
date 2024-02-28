const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:4321'

export const metadataContent = {
  metadataBase: new URL(defaultUrl),
  title: 'Vania',
  description: 'Easy database for random stupid things',
}
