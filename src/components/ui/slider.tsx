"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"
import { cn } from "@/lib/utils"

interface SliderProps extends React.ComponentProps<typeof SliderPrimitive.Root> {
  className?: string
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center group",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-2 w-full grow overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
      <SliderPrimitive.Range className="absolute h-full bg-slate-900 dark:bg-slate-50" />
    </SliderPrimitive.Track>
    {props.defaultValue && props.defaultValue.map((_, i) => (
      <SliderPrimitive.Thumb
        key={i}
        className={cn(
          "block h-5 w-5 rounded-full border-2 border-slate-900 bg-white dark:border-slate-50 dark:bg-slate-950",
          "hover:bg-slate-900 hover:dark:bg-slate-50",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950 focus-visible:ring-offset-2",
          "disabled:pointer-events-none disabled:opacity-50"
        )}
      />
    ))}
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }