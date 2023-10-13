

import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

export default function TimeLogs (){

    return (
        <div>
            <Table>
  <TableCaption>Time Logs of your productivity</TableCaption>
  <TableHeader>
    <TableRow>

      <TableHead className="w-1/3"> Date</TableHead>
      <TableHead className="w-1/3">Hours</TableHead>
      <TableHead className=" w-1/3">Note</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">{new Date().toDateString()}</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>This is the note</TableCell>
     
    </TableRow>
  </TableBody>
</Table>

        </div>
    )
}