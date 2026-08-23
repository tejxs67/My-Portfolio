"use client"

import * as React from "react"
import * as ToastPrimitive from "@radix-ui/react-toast"

export type ToastProps = React.ComponentPropsWithoutRef<typeof ToastPrimitive.Root>
export type ToastActionElement = React.ReactElement<typeof ToastPrimitive.Action>
