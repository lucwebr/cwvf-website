type StructuredDataProps = {
  value: object;
};

export function StructuredData({ value }: StructuredDataProps) {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(value).replace(/</g, "\\u003c"),
      }}
      type="application/ld+json"
    />
  );
}
