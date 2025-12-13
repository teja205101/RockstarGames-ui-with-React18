import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react'

const config = defineConfig({
  theme: {
    breakpoints: {
      tablet: '768px',
      desktop: '1024px',
      wide: '1280px',
    },
  },
})

const system = createSystem(defaultConfig, config)

export default system
