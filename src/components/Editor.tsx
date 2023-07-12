'use client'

import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { EditorContent, useEditor, BubbleMenu } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import html from 'highlight.js/lib/languages/xml'
import { lowlight } from 'lowlight'
import {
  RxFontBold,
  RxFontItalic,
  RxStrikethrough,
  RxCode,
  RxChevronDown,
  RxChatBubble,
} from 'react-icons/rx'

import 'highlight.js/styles/tokyo-night-dark.css'

import { initialContent } from './initialContent'
import { BubbleButton } from './BubbleButton'

lowlight.registerLanguage('html', html)

export function Editor() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    content: initialContent,
    editorProps: {
      attributes: {
        class: 'outline-none',
      },
    },
  })

  return (
    <>
      <EditorContent
        editor={editor}
        className="prose prose-invert prose-pink mx-auto max-w-[700px] pt-16"
      />

      {editor && (
        <BubbleMenu
          editor={editor}
          className="flex divide-x divide-zinc-500 overflow-hidden rounded-lg border border-zinc-600 bg-zinc-700 shadow-xl shadow-black/20"
        >
          <BubbleButton>
            Text <RxChevronDown className="h-4 w-4" />
          </BubbleButton>

          <BubbleButton>
            <RxChatBubble className="h-4 w-4" /> Comment
          </BubbleButton>

          <div className="flex items-center divide-x divide-zinc-500">
            <BubbleButton
              onClick={() => editor.chain().focus().toggleBold().run()}
              data-active={editor.isActive('bold')}
            >
              <RxFontBold className="h-4 w-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleItalic().run()}
              data-active={editor.isActive('italic')}
            >
              <RxFontItalic className="h-4 w-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleStrike().run()}
              data-active={editor.isActive('strike')}
            >
              <RxStrikethrough className="h-4 w-4" />
            </BubbleButton>
            <BubbleButton
              onClick={() => editor.chain().focus().toggleCode().run()}
              data-active={editor.isActive('code')}
            >
              <RxCode className="h-4 w-4" />
            </BubbleButton>
          </div>
        </BubbleMenu>
      )}
    </>
  )
}
