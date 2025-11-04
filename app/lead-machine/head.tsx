const title = 'find, engage, qualify automatically'
const description = 'TrueFlow Lead Machine finds in-market buyers, launches human-grade AI outreach, and qualifies every response automatically so coaches, agencies, and service founders convert more pipeline without manual prospecting.'

export default function Head() {
  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </>
  )
}
