import React from 'react'
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

  
const Cards = () => {
  return (
    <Card className="w-full">
        <CardHeader>
            <CardTitle><Badge className="w-[100px] h-[40px] flex justify-center cursor-pointer">Badge</Badge></CardTitle>
            <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
            <p>Card Content</p>
        </CardContent>
        <CardFooter>
            <p>Card Footer</p>
        </CardFooter>
    </Card>
  )
}

export default Cards