import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import React, { useRef, useState } from 'react'
import { store } from '../store'
import Input from './Input';
import { useLocation } from 'react-router-dom';


function Home() {
  const { toDoList, deleteToDo, markToDo } = store()

  return (
    <div className='home'>
      <div className="header-home">
          <Input />
      </div>
      <div>
        <table>
          <tbody>
            {toDoList?.map(toDo => (
              <tr className={toDo.isDone ? 'mark-text' : null} key={toDo.id} onClick={() => markToDo(toDo.id)}>
                <td style={{ width: '10%' }}>{toDo.id}.</td>
                <td style={{ width: '60%' }}>{toDo.toDo}</td>
                <td style={{ width: '20%' }}>{toDo.isDone ? 'Done' : 'progress'}</td>
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
    </div>
  )
}

export default Home