"use client"

import React, { useState } from 'react'
import Editor from '@monaco-editor/react'
import type { Snippet } from '@prisma/client'
import { Button } from './ui/button'
import { saveSnippet } from '@/actions'

function EditSnippetForm({ snippet }: { snippet: Snippet }) {
    const [code, setCode] = useState(snippet.code)

    return (
        <div className="flex flex-col gap-4">
            <form action={() => saveSnippet(snippet.id, code)} className="flex items-center justify-between">
                <h1 className="font-bold text-xl">Your Code Editor</h1>
                <Button type="submit" className="bg-black text-white">
                    Save
                </Button>
            </form>
            <Editor
                height="40vh"
                theme="vs-dark"
                language="javascript"
                value={code}
                onChange={(value) => setCode(value || '')}

            />
        </div>
    )
}

export default EditSnippetForm