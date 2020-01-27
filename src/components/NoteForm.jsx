import React from 'react'
import { Form, Input, Button } from 'antd'
import { toast } from 'react-toastify'
import { createNote } from '../api'
import '../../node_modules/react-toastify/dist/ReactToastify.min.css'

// interface Props {
//     form: Form,
//     notes: [],
//     setNotes: Function
// }

const NoteForm = (props) => {
    const {form, notes, setNotes} = props
    const { getFieldDecorator, validateFields, resetFields } = form;

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('[handleSubmit]')
        validateFields((err, values) => {
            console.log('[handleSubmit] err: ', err)
            console.log('[handleSubmit] values.note: ', values.note)
            console.log('[handleSubmit] e.target.value: ', e.currentTarget.textContent)
            if (!err && values.note) {
                console.log('[handleSubmit] values.notes: ', values.note)
                createNote(values.note).then(res => {
                    console.log('[handleSubmit] res: ', res)
                    const newNotesArray = notes.concat([res])
                    setNotes(newNotesArray)
                    toast.success('Added Successfully')
                    resetFields()
                })
            }
        })
    }
    
    return (
        <Form style={{marginBottom: '25px'}} layout="horizontal" onSubmit={handleSubmit}>
            <Form.Item>
                {getFieldDecorator('note', { rules: [] } )(
                    <Input
                        className="note-input"
                        size="large"
                        placeholder="Add New Note"
                    />,
                    <Button>Create</Button>
                )}
            </Form.Item>
        </Form>
    )

    

}

const WrappedNoteForm = Form.create({name: 'notes_form'})(NoteForm)

export default WrappedNoteForm