import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'

const orders = [
  {
    orderNumber: '089765',
    status: '~',
    actions: '~',
    deliveryDate: '~',
  },
  {
    requestNum: '456765',
    status: '~',
    actions: '~',
    deliveryDate: '~',
  },
]

export function ProcessingOrders() {
  return (
    <><h1>Orders In Process</h1><Table>
      <TableHeader>
        <TableRow className="flex-row justify-between">
          <TableHead>Order Number</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Actions to be Taken</TableHead>
          <TableHead>Delivery Date</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {orders.map((orders) => (
          <TableRow className="flex-row" key={orders.orderNumber}>
            <TableCell>{orders.orderNumber}</TableCell>
            <TableCell>{orders.status}</TableCell>
            <TableCell>{orders.actions}</TableCell>
            <TableCell className="text-right">{orders.deliveryDate}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table></>
  )
}

export default ProcessingOrders;
