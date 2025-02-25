import { Button } from '@/components/ui/button';
import { prisma } from '@/lib/prisma';
import Link from 'next/link';
import React from 'react'
type SnippetDetailsProps = {
    params: Promise<{ id: string }>
}
const SnippetDetailPage = async ({ params }: SnippetDetailsProps) => {
    const id = parseInt((await params).id);

    const snippet = await prisma.snippet.findUnique({
        where: {
            id,
        },
    })
    if (!snippet)
        return <h1>Snippet not found</h1>
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex items-center justify-between'>

                <h1 className='font-bold text-xl'>{snippet?.title}</h1>
                <div className='flex items-center gap-2'>
                    <Link href={`/snippet/${snippet.id}/edit`}>
                        <Button className='bg-black text-white'>Edit</Button>
                    </Link>
                    <Button variant={'destructive'} className='bg-red-500 text-white'>Delete</Button>
                </div>

            </div>
            <pre className='p-3 bg-gray-200 rounded border-gray-200'>
                <code>{snippet.code}</code>
            </pre>
        </div>
    )
}

export default SnippetDetailPage
