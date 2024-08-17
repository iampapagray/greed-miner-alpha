import React from 'react'
import { cn } from "@/lib/utils";

function Spacer({className} : {className?: string}) {
  return (
    <div className={
        cn(
            "w-full h-4",
            className
        )
    } />
  )
}

export default Spacer
