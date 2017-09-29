export default function recordToDestination(record) {
  return {
    id: record.id,
    category: record.fields.category,
    body: record.fields.body,
    location: record.fields.location,
    image: record.fields.image
  };
}
