import { Button } from '@/components/ui/button'
import { ArrowRight, X } from 'lucide-react'
import { ReactNode } from 'react'

interface FooterStepProps {
  buttonType: 'submit' | 'reset' | 'button' | undefined
  proceedButtonLabel: string
  backButtonLabel: string
  setStepProceedButton?: () => void
  setProgresProceedButton?: () => void
  setStepBackButton: () => void
  setProgresBackButton: () => void
  backIcon?: ReactNode
  proceedIcon?: ReactNode
}

export function FooterStep({
  buttonType,
  proceedButtonLabel,
  backButtonLabel,
  backIcon = <X />,
  proceedIcon = <ArrowRight />,
  setProgresProceedButton,
  setStepProceedButton,
  setProgresBackButton,
  setStepBackButton,
}: FooterStepProps) {
  return (
    <div className="mt-2 ml-auto space-x-2">
      <Button
        type="button"
        onClick={() => {
          setStepBackButton()
          setProgresBackButton()
        }}
        variant={'outline'}
      >
        {backIcon}
        {backButtonLabel}
      </Button>

      <Button
        type={buttonType}
        onClick={() => {
          if (setProgresProceedButton) setProgresProceedButton()
          if (setStepProceedButton) setStepProceedButton()
        }}
      >
        {proceedIcon}
        {proceedButtonLabel}
      </Button>
    </div>
  )
}
