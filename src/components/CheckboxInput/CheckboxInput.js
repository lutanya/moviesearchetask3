import React from 'react';
import './CheckboxInput.css';
import { useToggle } from '../useToggle/useToggle';

export default function CheckboxInput() {
    const values =
        [
            { id: 1, value: "Animation", isChecked: false },
            { id: 2, value: "Adventure", isChecked: false },
            { id: 3, value: "Family", isChecked: false },
            { id: 4, value: "Comedy", isChecked: false }
        ];

    const [expanded, setExpanded] = useToggle();

    function showCheckboxes() {
        var checkboxes = document.getElementById("checkboxes");
        if (!expanded) {
            checkboxes.style.display = "block";
            setExpanded();
        } else {
            checkboxes.style.display = "none";
            setExpanded();
        }
    }
    const optionTemplate = values.map((v) => (
        <li><input key={v.id} type='checkbox' />{v.value}</li>
    ));

    return (
        <>
            <div className="selectBox" onClick={showCheckboxes}>
                <select>
                    <option>Select Genre</option>
                </select>
                <div className="overSelect"></div>
            </div>
            <div id="checkboxes">
                <ul>
                    {optionTemplate}
                </ul>
            </div>
        </>
    );
}
