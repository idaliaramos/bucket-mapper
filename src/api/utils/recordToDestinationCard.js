export default function recordToCard(record) {
  return {
    id: record,
    name: record.fields.name
  };
}
