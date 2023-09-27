import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'
import exp from 'constants';

const invoices = [
  {
    requestNum: '089765',
    quantity: '23',
    location: 'Austin, TX',
    deliveryDate: 'Sept 18, 2024',
  },
  {
    requestNum: '',
    quantity: '',
    location: '',
    deliveryDate: '',
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
