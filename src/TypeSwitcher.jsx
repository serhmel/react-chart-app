import React from 'react';

const TypeSwitcher = (props) => {
    return (
        <ul className="rc_radioButtons">
            {props.chartTypes.map((chartType, index) => {
                return (
                    <li className="rc_radioButtons_item" key={index}>
                        <label>
                            <input
                                type="radio"
                                value={chartType.type}
                                name="chart"
                                defaultChecked={index === 0}
                                onChange={() => props.setType(chartType.type)}
                            />
                            {chartType.name}
                        </label>
                    </li>
                );
            })}
        </ul>
    );
};

export default TypeSwitcher;
