'use client'

import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import {
  EditorContent,
  useEditor,
  BubbleMenu,
  FloatingMenu,
} from '@tiptap/react'
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
        <FloatingMenu
          editor={editor}
          className="flex flex-col gap-1 overflow-hidden rounded-lg border border-zinc-600 bg-zinc-700 px-1 py-2 shadow-xl shadow-black/20"
          shouldShow={({ state }) => {
            const { $from } = state.selection
            const currentLineText = $from.nodeBefore?.textContent

            return currentLineText === '/'
          }}
        >
          <button
            className="flex min-w-[280px] items-center gap-2 rounded p-1 hover:bg-zinc-600"
            onClick={() => {
              const { $from } = editor.state.selection
              const deleteRange = {
                from: $from.pos - 1,
                to: $from.pos,
              }

              editor.chain().focus().deleteRange(deleteRange).run()
            }}
          >
            <img
              src="https://www.notion.so/images/blocks/text/en-US.png"
              alt="Text"
              className="w-12 rounded border border-zinc-600"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm">Text</span>
              <span className="text-xs text-zinc-400">
                Just start writing with plain text.
              </span>
            </div>
          </button>

          <button
            className="flex min-w-[280px] items-center gap-2 rounded p-1 hover:bg-zinc-600"
            onClick={() => {
              const { $from } = editor.state.selection
              const deleteRange = {
                from: $from.pos - 1,
                to: $from.pos,
              }

              editor
                .chain()
                .focus()
                .deleteRange(deleteRange)
                .toggleHeading({ level: 1 })
                .run()
            }}
          >
            <img
              src="https://www.notion.so/images/blocks/header.57a7576a.png"
              alt="Heading 1"
              className="w-12 rounded border border-zinc-600"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm">Heading 1</span>
              <span className="text-xs text-zinc-400">
                Big section heading.
              </span>
            </div>
          </button>

          <button
            className="flex min-w-[280px] items-center gap-2 rounded p-1 hover:bg-zinc-600"
            onClick={() => {
              const { $from } = editor.state.selection
              const deleteRange = {
                from: $from.pos - 1,
                to: $from.pos,
              }

              editor
                .chain()
                .focus()
                .deleteRange(deleteRange)
                .toggleCodeBlock()
                .run()
            }}
          >
            <img
              src="https://www.notion.so/images/blocks/code.a8b201f4.png"
              alt="Code"
              className="w-12 rounded border border-zinc-600"
            />
            <div className="flex flex-col text-left">
              <span className="text-sm">Code</span>
              <span className="text-xs text-zinc-400">
                Capture a code snippet.
              </span>
            </div>
          </button>
        </FloatingMenu>
      )}

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
