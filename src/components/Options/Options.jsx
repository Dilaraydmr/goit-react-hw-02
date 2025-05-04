import React from 'react';

function Options({ options, onLeaveFeedback, onReset, hasFeedback }) {
    return (
        <div>
            {options.map(option => (
                <button key={option} onClick={() => onLeaveFeedback(option)}>
                    {option}
                </button>
            ))}

            {hasFeedback && (
                <button onClick={onReset}>
                    Reset
                </button>
            )}
        </div>
    );
}

export default Options;
