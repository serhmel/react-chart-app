import React from 'react';

const TypeSwitcher = (props) => {
    return (
        <ul>
            {props.chartTypes.map((chartType, index) => {
                return (
                    <li className="form-check" key={index}>
                        <label className="form-check-label">
                            <input
                                className="form-check-input"
                                type="radio"
                                value={chartType.type}
                                name="chart_type"
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
