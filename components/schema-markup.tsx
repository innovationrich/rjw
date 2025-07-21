import Script from "next/script"

interface SchemaMarkupProps {
  schema: Record<string, any>
}

export function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <Script
      id={`schema-markup-${schema["@type"]}-${Math.random().toString(36).substring(7)}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
