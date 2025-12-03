"use client"

import { CheckCircle2Icon } from "lucide-react"
import { useState } from "react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

import colors from "@/data/colors"

export default function StylingCustomizer() {
  const [activeColor, setActiveColor] = useState(colors[0].name)

  const updateColor = (colorName: string) => {
    const r = window.document.querySelector(":root") as HTMLElement
    const color = colors.find((c) => c.name === colorName)!

    setActiveColor(colorName)

    const isDarkMode = document.documentElement.classList.contains("dark")

    if (isDarkMode) {
      r.style.setProperty("--background", color.darkBg)
      r.style.setProperty("--main", color.darkMain)
    } else {
      r.style.setProperty("--background", color.bg)
      r.style.setProperty("--main", color.main)
    }
  }

  return (
    <div className="mx-auto max-w-[800px] w-full mt-20 sm:px-5 px-0">
      <div className="grid md:gap-10 gap-5">
        <div className="grid md:grid-cols-3 sm:grid-cols-3 grid-cols-1 gap-4 sm:w-full w-2/3 mx-auto">
          {colors.map((color) => (
            <Button
              key={color.name}
              variant={activeColor === color.name ? "default" : "neutral"}
              className="h-full md:text-base sm:text-sm text-xs sm:px-4 px-2 capitalize"
              onClick={() => updateColor(color.name)}
            >
              {color.name}
            </Button>
          ))}
        </div>
        <div
          className="bg-background sm:border-x-3 border-x-0 border-y-3 sm:shadow-shadow shadow-none flex flex-col justify-between sm:p-8 p-4 border-border h-[350px] bg-[linear-gradient(to_right,#80808022_1px,transparent_1px),linear-gradient(to_bottom,#80808022_1px,transparent_1px)] bg-[size:30px_30px]"
        >
          <Alert>
            <CheckCircle2Icon />
            <AlertTitle>Success! Your changes have been saved</AlertTitle>
            <AlertDescription>
              This is an alert with icon, title and description.
            </AlertDescription>
          </Alert>

          <Accordion type="single" defaultValue="item-1">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="flex items-center justify-between gap-2">
            <Button size="sm">
              Button
            </Button>
            <Button variant="neutral" size="sm">
              Neutral
            </Button>
            <Badge className="hidden md:block">
              Badge
            </Badge>
          </div>
        </div>
      </div>
    </div>
  )
}
