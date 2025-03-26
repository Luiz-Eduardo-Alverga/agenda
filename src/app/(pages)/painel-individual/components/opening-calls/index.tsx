'use client'

import { DialogContent, DialogTitle } from '@/components/ui/dialog'

import { Separator } from '@/components/ui/separator'
import { Progress } from '@/components/ui/progress'
import { useState } from 'react'
import { FirstStepOpeningCalls } from './steps/first-step'
import { SecondStepOpeningCalls } from './steps/second-step'
import { ThirdStepOpeningCalls } from './steps/third-step'
import { z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const openingCallsSchema = z.object({
  type: z.string().optional(),
  applicant: z.string().optional(),
  phone: z
    .string()
    .optional()
    .transform((val) => val?.replace(/\D/g, '') || ''),
  access: z.string().optional(),
  accessId: z.string().optional(),
  reasonForCalls: z.string().optional(),
  scheduledTime: z.string().optional(),
  technical: z.string().optional(),
  scripts: z.string().optional(),
})

export type OpeningCallsSchema = z.infer<typeof openingCallsSchema>

export function OpeningCallsDialog() {
  const [step, setStep] = useState(1)
  const [progress, setProgress] = useState(33)

  const openingCallsForm = useForm<OpeningCallsSchema>({
    resolver: zodResolver(openingCallsSchema),
  })

  function handleOpenCall(data: OpeningCallsSchema) {
    console.log(data)
  }

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
          <Progress className="h-6" value={progress} />
        </div>

        <FormProvider {...openingCallsForm}>
          <form onSubmit={openingCallsForm.handleSubmit(handleOpenCall)}>
            {step === 1 && (
              <FirstStepOpeningCalls
                setStep={setStep}
                setProgres={setProgress}
              />
            )}
            {step === 2 && (
              <SecondStepOpeningCalls
                setStep={setStep}
                setProgres={setProgress}
              />
            )}
            {step === 3 && (
              <ThirdStepOpeningCalls
                setStep={setStep}
                setProgres={setProgress}
              />
            )}
          </form>
        </FormProvider>
      </div>
    </DialogContent>
  )
}
