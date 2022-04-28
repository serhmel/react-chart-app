import React, {useState} from 'react';

const ChartDataForm = (props) => {
    const [labelsString, setLabelsString] = useState(props.defaultLabels.join(', '));
    const [quantityString, setQuantityString] = useState(props.defaultQuantity.join(', '));

    const splitInputValue = (value) => {
        return value.trim().split(',').map(v => v.trim());
    }

    const updateData = () => {
        props.setDynamicData({
            labels: splitInputValue(labelsString),
            quantity: splitInputValue(quantityString)
        });
    };

    const submitForm = (e) => {
        e.preventDefault();
        updateData();
    };

    return (
        <form className="rc_dataForm" onSubmit={submitForm}>
            <label htmlFor="rc_dataLabel">X axis labels:</label>
            <input
                className="rc_dataInput"
                id="rc_dataLabel"
                type="text"
                value={labelsString}
                onChange={e => setLabelsString(e.currentTarget.value)}
                onBlur={updateData}
            />

            <label htmlFor="rc_dataValue">Y axis values:</label>
            <input
                className="rc_dataInput"
                id="rc_dataValue"
                type="text"
                value={quantityString}
                onChange={e => setQuantityString(e.currentTarget.value)}
                onBlur={updateData}
            />

            <input type="submit" style={{display: 'none'}}/>
        </form>
    );
};

export default ChartDataForm;
