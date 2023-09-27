import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../ui/table'

const offers = [
  {
    offerNumber: '736291',
    status: '~',
    fuelType: '~',
    quantity: '~',
    paymentTerms: '~',
    port: '~',
    price: '~'
  },
  {
    offerNumber: '929118',
    status: '~',
    fuelType: '~',
    quantity: '~',
    paymentTerms: '~',
    port: '~',
    price: '~'
  },
]

export function OfferHistory() {
  return (
    <><h1>Pending Outgoing Requests</h1><Table>
      <TableHeader>
        <TableRow className="flex-row justify-between">
          <TableHead>Offer Number</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Fuel Type</TableHead>
          <TableHead>Quantity</TableHead>
          <TableHead>Payment Terms</TableHead>
          <TableHead>Port</TableHead>
          <TableHead>Price</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {offers.map((offer) => (
          <TableRow className="flex-row" key={offer.offerNumber}>
            <TableCell>{offer.offerNumber}</TableCell>
            <TableCell>{offer.status}</TableCell>
            <TableCell>{offer.fuelType}</TableCell>
            <TableCell>{offer.quantity}</TableCell>
            <TableCell>{offer.paymentTerms}</TableCell>
            <TableCell>{offer.port}</TableCell>
            <TableCell>{offer.price}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table></>
  )
}

export default OfferHistory;
