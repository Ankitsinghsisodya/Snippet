import { Button } from '@/components/ui/button';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import React from 'react'
type SnippetDetailsProps = {
    params: Promise<{ id: string }>
}
import * as action from '@/actions'
import { notFound } from 'next/navigation';
const SnippetDetailPage = async ({ params }: SnippetDetailsProps) => {
    const id = parseInt((await params).id);
    await new Promise((r) => setTimeout(r, 2000));
    const snippet = await prisma.snippet.findUnique({
        where: {
            id,
        },
    })
    if (!snippet)
        return notFound();

    const deleteSnippetActions = action.deleteSnippet.bind(null, snippet.id);
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex items-center justify-between'>

                <h1 className='font-bold text-xl'>{snippet?.title}</h1>
                <div className='flex items-center gap-2'>
                    <Link href={`/snippet/${snippet.id}/edit`}>
                        <Button className='bg-black text-white'>Edit</Button>
                    </Link>
                    <form action={deleteSnippetActions}>

                        <Button variant={'destructive'} type='submit' className='bg-red-500 text-white'>Delete</Button>
                    </form>
                </div>

            </div>
            <pre className='p-3 bg-gray-200 rounded border-gray-200'>
                <code>{snippet.code}</code>
            </pre>
        </div>
    )
}

export default SnippetDetailPage
