import { DialogContent, DialogTitle } from '@/components/ui/dialog'

import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import { useState } from 'react'
import { FirstStepOpeningCalls } from './steps/first-step'
import { SecondStepOpeningCalls } from './steps/second-step'
import { ThirdStepOpeningCalls } from './steps/third-step'

export function OpeningCallsDialog() {
  const [step, setStep] = useState(1)

  return (
    <DialogContent className="sm:max-w-xl">
      <div className="space-y-4">
        <DialogTitle>
          <div>
            <div className="flex flex-col">
              <div className="flex justify-between">
                <span className="text-lg">59785 - Arthur Frios</span>
              </div>
              <span className="text-xs">
                Programa: Softshop - Versão: Desktop - PDV: Franquia
              </span>
            </div>
          </div>
        </DialogTitle>

        <Separator />

        <div className="flex flex-col gap-1">
          <span className="">
            Etapa <span className="font-bold">{step}</span> de{' '}
            <span className="font-bold">3</span>
          </span>
          <Progress className="h-6" value={50} />
        </div>

        {step === 1 && <FirstStepOpeningCalls setStep={setStep} />}
        {step === 2 && <SecondStepOpeningCalls setStep={setStep} />}
        {step === 3 && <ThirdStepOpeningCalls setStep={setStep} />}
      </div>
    </DialogContent>
  )
}
