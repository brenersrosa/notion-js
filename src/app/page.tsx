import { Editor } from '@/components/Editor'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-gray-900 via-purple-900 to-violet-600 text-zinc-50">
      <div className="mx-auto grid min-h-[720px] w-[1100px] grid-cols-[16rem_1fr] overflow-hidden rounded-xl border border-black/20 bg-zinc-900 shadow-sm">
        <aside className="border-r border-r-zinc-600 bg-zinc-800 p-4">
          <div className="group flex gap-2">
            <button className="h-3 w-3 rounded-full bg-zinc-300 transition-colors group-hover:bg-red-400" />
            <button className="h-3 w-3 rounded-full bg-zinc-300 transition-colors group-hover:bg-yellow-400" />
            <button className="h-3 w-3 rounded-full bg-zinc-300 transition-colors group-hover:bg-green-400" />
          </div>
        </aside>
        <main className="p-4">
          <Editor />
        </main>
      </div>
    </div>
  )
}
