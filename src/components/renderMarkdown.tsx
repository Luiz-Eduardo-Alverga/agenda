/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import React from 'react'
import ReactMarkdown from 'react-markdown'

type Props = {
  content: string
}

function cleanMarkdown(text: string): string {
  return text
    .replace(/\\\\/g, '\\')
    .replace(/\\\*/g, '*')
    .replace(/\\_/g, '_')
    .replace(/\\`/g, '`')
    .replace(/\\\[/g, '[')
    .replace(/\\\]/g, ']')
    .replace(/\\\(/g, '(')
    .replace(/\\\)/g, ')')
}

export function RenderMarkdown({ content }: Props) {
  const cleaned = cleanMarkdown(content)

  return (
    <div className="prose dark:prose-invert max-w-none">
      <ReactMarkdown
        components={{
          img: ({ node, ...props }) => (
            // eslint-disable-next-line jsx-a11y/alt-text
            <img {...props} className="max-w-full h-auto rounded-md my-4" />
          ),
          a: ({ node, ...props }) => (
            <a
              {...props}
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            />
          ),
        }}
      >
        {cleaned}
      </ReactMarkdown>
    </div>
  )
}
