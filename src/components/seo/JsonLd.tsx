import type { JsonLdNode } from "@/lib/seo";

export default function JsonLd({
  data,
  id,
}: {
  data: JsonLdNode | Array<JsonLdNode | null>;
  id?: string;
}) {
  const nodes = (Array.isArray(data) ? data : [data]).filter(
    (node): node is JsonLdNode => Boolean(node),
  );

  if (!nodes.length) {
    return null;
  }

  const payload = {
    "@context": "https://schema.org",
    "@graph": nodes.map(({ "@context": _context, ...node }) => node),
  };

  return (
    <script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(payload).replace(/</g, "\\u003c"),
      }}
    />
  );
}

