"use client";

import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import React, { useActionState } from 'react'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import * as actions from '@/actions/index'


function CreateSnippetPage() {

    const [formStateData, xyz] = useActionState(actions.createSnippet, { message: '' });

    return (
        <form action={xyz}>
            <div>
                <Label>Title</Label>
                <Input type='text' name='title' id='title' />
            </div>
            <div>
                <Label>Code</Label>
                <Textarea name='code' id='code' />
            </div>
            {formStateData.message && <div className='mt-2 p-2 bg-red-300 border-2 border-red-600'>
                {formStateData.message}
            </div>}

            <Button type='submit' className='my-10'>New</Button>
        </form>
    )
}

export default CreateSnippetPage

