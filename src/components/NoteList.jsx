import React, {memo} from 'react'
import {Icon} from 'antd'

const NoteList = memo(({data, onRemove, onEdit}) => (
    <>
        {data && data.map(note => (
            <div key={note.ref.id} className="note-row">
                <Icon
                    onClick={e => onRemove(e, note.ref.id)}
                    theme="twoTone"
                    style={{crusor: 'pointer', fontSize: '16px', margin: '20px'}}
                    type="delete"
                />
                <p
                    contentEditable
                    suppressContentEditableWarning
                    onChange={e => onEdit(e, note.ref.id, e.currentTarget.textContent)}
                    onBlur={e => onEdit(e, note.ref.id, e.currentTarget.textContent)}
                    onInput={e => onEdit(e, note.ref.id, e.currentTarget.textContent)}
                >
                    {note.data.text}
                </p>
                
            </div>
        ))}
    </>
))

export default NoteList