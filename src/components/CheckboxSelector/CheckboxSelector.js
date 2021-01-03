import React from 'react';
import './CheckboxSelector.css';
import { useToggle } from '../useToggle/useToggle';
import { handleChangeCheckbox } from '../../redux/action';
import { connect } from 'react-redux';
import CheckboxInput from '../../CheckboxInput/CheckboxInput';


function CheckboxSelector({ values, handleChangeCheckbox}) {
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

    function optionTemplate(values) {
        return values.map((v) => (
            <li key={v.id}>
                <CheckboxInput value={v} handleChangeCheckbox={handleChangeCheckbox} />{v.value}
            </li>
        ));
    }

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
                    {optionTemplate(values)}
                </ul>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    values: state.modal.values,
});

function mapDispatchToProps(dispatch) {
    return {
        handleChangeCheckbox: (id) => 
            dispatch(handleChangeCheckbox(id))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckboxSelector);
