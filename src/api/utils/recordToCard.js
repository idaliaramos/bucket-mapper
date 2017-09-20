export default function recordToCard(record) {
  return {
    id: record.id,
    url: record.url,
    title: record.fields.title,
    body: record.fields.body
  };
}
