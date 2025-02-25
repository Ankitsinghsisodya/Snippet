import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import React from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { prisma } from '@/lib/prisma'
import { redirect } from 'next/navigation'

function CreateSnippetPage() {
    async function createSnippet(formData: FormData) {
        "use server" // use server directive
        const title = formData.get("title") as string;
        const code = formData.get("code") as string;
        const snippet = await prisma.snippet.create({
            data: {
                title, code
            }
        })
        console.log("created snippet", snippet);
        redirect("/");
    }
    return (
        <form action={createSnippet}>
            <div>
                <Label>Title</Label>
                <Input type='text' name='title' id='title' />
            </div>
            <div>
                <Label>Code</Label>
                <Textarea name='code' id='code' />
            </div>
            <Button type='submit' className='my-10'>New</Button>
        </form>
    )
}

export default CreateSnippetPage
