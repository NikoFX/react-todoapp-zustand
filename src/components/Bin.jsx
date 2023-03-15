import { IconButton } from '@mui/material'
import React from 'react'
import { store } from '../store'
import RestorePageOutlinedIcon from '@mui/icons-material/RestorePageOutlined';

function Bin() {

  const { deletedList, restoreToDo } = store()

  const restore = (id) => {
    restoreToDo(id)
  }

  return (
    <div className='done'>
      <table>
        <tbody>
          {deletedList?.map(toDo => (
            <tr key={toDo.id}>
              <td style={{ width: '10%' }}>{toDo.id}.</td>
              <td style={{ width: '80%' }}>{toDo.toDo}</td>
              <td style={{ width: '10%' }}>
                <IconButton aria-label="delete" onClick={() => restore(toDo.id)}>
                  <RestorePageOutlinedIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Bin