import React, { useEffect, useState } from 'react';
import { useToggle } from '../components/useToggle/useToggle';
/**
 * @param {string} label label on input
 * @return {Element} inputs in the edit form
 */
export default function CheckboxInput({ value, handleChangeCheckbox }) {
  return (
    <input id={value.id} type='checkbox' checked={value.isChecked} onChange={(event)=>handleChangeCheckbox(event.target.id)} />
  );
}
