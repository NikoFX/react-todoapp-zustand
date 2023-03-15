import React from 'react'
import { IconButton } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { store } from '../store'

function Done() {

  const { toDoList, deleteToDo } = store()

  return (
    <div className='done'>
      <table>
        <tbody>
          {toDoList?.filter(i => i.isDone === true).map(toDo => (
            <tr key={toDo.id}>
              <td style={{ width: '10%' }}>{toDo.id}.</td>
              <td style={{ width: '80%' }}>{toDo.toDo}</td>
              <td style={{ width: '10%' }}>
                <IconButton aria-label="delete" onClick={() => deleteToDo(toDo.id)}>
                  <DeleteOutlineOutlinedIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Done