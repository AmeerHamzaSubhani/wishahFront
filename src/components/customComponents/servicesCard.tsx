import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import 'react-circular-progressbar/dist/styles.css';
// const serviceDate =[
//     {
//         name: 'Today',
//         count: 0
//     },
//     {},
//     {},
//     {},
//     {},
// ]
function servicesCard() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Toady’s Services Statistics </CardTitle>
        <CardDescription>
        Show all services based on user branch permission.
        </CardDescription>
      </CardHeader>
      <CardContent>

      </CardContent>
    </Card>
  )
}

export default servicesCard