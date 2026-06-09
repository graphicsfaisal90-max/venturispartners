import { Helmet } from 'react-helmet-async'

const defaultKeywords = [
  'Venturis Partners',
  'business consultancy Dubai',
  'IT companies in UAE',
  'business setup Dubai',
  'management consulting UAE',
  'Dubai business services',
  'corporate services UAE',
  'business growth solutions',
  'UAE business consultants',
  'Dubai company formation',
]

export default function SEO({ title, description, keywords = [] }) {
  const siteName = 'Venturis Partners'
  const fullTitle = title ? `${title} | ${siteName}` : siteName
  const allKeywords = [...defaultKeywords, ...keywords].join(', ')
  const url = 'https://venturispartners.com'

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />

      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </Helmet>
  )
}
