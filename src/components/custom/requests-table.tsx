import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'

const invoices = [
  {
    requestNum: '089765',
    quantity: '23',
    location: 'Austin, TX',
    deliveryDate: 'Sept 18, 2024',
  },
  {
    requestNum: '456765',
    quantity: '87',
    location: 'Baltimore, MD',
    deliveryDate: 'November 12, 2023',
  },
]

export function RequestsTable() {
  return (
    <><h1>Pending Outgoing Requests</h1><Table>
      <TableHeader>
        <TableRow className="flex-row justify-between">
          <TableHead>Request Number</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Location</TableHead>
          <TableHead className="text-right">Delivery Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow className="flex-row" key={invoice.requestNum}>
            <TableCell>{invoice.requestNum}</TableCell>
            <TableCell>{invoice.quantity}</TableCell>
            <TableCell>{invoice.location}</TableCell>
            <TableCell className="text-right">{invoice.deliveryDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table></>
  )
}

export default RequestsTable;
