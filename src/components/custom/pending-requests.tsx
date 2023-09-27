import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'

const requests = [
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

const PendingRequests = () => {
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
        {requests.map((request) => (
          <TableRow className="flex-row" key={request.requestNum}>
            <TableCell>{request.requestNum}</TableCell>
            <TableCell>{request.quantity}</TableCell>
            <TableCell>{request.location}</TableCell>
            <TableCell className="text-right">{request.deliveryDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table></>
  )
};

export default PendingRequests;
