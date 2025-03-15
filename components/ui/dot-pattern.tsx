"use client"

import { useId } from "react"
import { cn } from "@/lib/utils"

interface DotPatternProps {
  width?: number
  height?: number
  className?: string
}

export function DotPattern({
  width = 100,
  height = 100,
  className,
}: DotPatternProps) {
  const id = useId()

  return (
    <div className="absolute inset-0 h-full w-full">
      <svg
        className={cn(
          "absolute h-full w-full",
          className
        )}
        aria-hidden="true"
      >
        <defs>
          <pattern
            id={id}
            width={width}
            height={height}
            patternUnits="userSpaceOnUse"
          >
            <circle cx={1.5} cy={1.5} r={1.1} className="fill-black-900 dark:fill-white" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth={0}
          fill={`url(#${id})`}
        />
      </svg>
    </div>
  )
}