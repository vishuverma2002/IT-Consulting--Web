// Table: semantic data-table primitive.
// REUSABLE: client lists, appointment lists, billing. Renders real <table>
// semantics for accessibility. `columns` describes headers; `rows` are arbitrary
// records and `renderCell` lets the caller control per-cell output.
// STYLING LATER: zebra rows, sticky header, responsive horizontal scroll.

export default function Table({ columns = [], rows = [], renderCell }) {
  return (
    <table data-component="table">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key} scope="col">
              {col.label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={row.id ?? rowIndex}>
            {columns.map((col) => (
              <td key={col.key}>
                {renderCell ? renderCell(row, col) : row[col.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
