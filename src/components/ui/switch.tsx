import { Switch as ChakraSwitch } from '@chakra-ui/react'
import { forwardRef } from 'react'

export interface SwitchProps extends ChakraSwitch.RootProps {
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
  rootRef?: React.Ref<HTMLLabelElement>
  trackLabel?: { on: React.ReactNode; off: React.ReactNode }
  thumbLabel?: { on: React.ReactNode; off: React.ReactNode }
  children?: React.ReactNode
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  function Switch(props, ref) {
    const { inputProps, children, rootRef, trackLabel, thumbLabel, ...rest } =
      props

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SwitchControl = ChakraSwitch.Control as any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SwitchThumb = ChakraSwitch.Thumb as any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SwitchThumbIndicator = ChakraSwitch.ThumbIndicator as any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SwitchIndicator = ChakraSwitch.Indicator as any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const SwitchLabel = ChakraSwitch.Label as any

    return (
      <ChakraSwitch.Root ref={rootRef} {...rest}>
        <ChakraSwitch.HiddenInput ref={ref} {...inputProps} />
        <SwitchControl>
          <SwitchThumb>
            {thumbLabel && (
              <SwitchThumbIndicator fallback={thumbLabel?.off}>
                {thumbLabel?.on}
              </SwitchThumbIndicator>
            )}
          </SwitchThumb>
          {trackLabel && (
            <SwitchIndicator fallback={trackLabel?.off}>
              {trackLabel?.on}
            </SwitchIndicator>
          )}
        </SwitchControl>
        {children != null && <SwitchLabel>{children}</SwitchLabel>}
      </ChakraSwitch.Root>
    )
  },
)
