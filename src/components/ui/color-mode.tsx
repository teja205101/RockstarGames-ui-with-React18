'use client'

import { ThemeProvider, useTheme } from 'next-themes'
import * as React from 'react'

export function ColorModeProvider(
  props: React.ComponentProps<typeof ThemeProvider>,
) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange {...props} />
  )
}

export function useColorMode() {
  const { resolvedTheme, setTheme } = useTheme()
  const toggleColorMode = () => {
    setTheme(resolvedTheme === 'light' ? 'dark' : 'light')
  }
  return {
    colorMode: resolvedTheme,
    setColorMode: setTheme,
    toggleColorMode,
  }
}

export function useColorModeValue<T>(light: T, dark: T) {
  const { resolvedTheme } = useTheme()
  return resolvedTheme === 'light' ? light : dark
}

export type ColorMode = 'light' | 'dark'

export interface ColorModeContextType {
  colorMode: ColorMode
  setColorMode: (mode: ColorMode) => void
  toggleColorMode: () => void
}
