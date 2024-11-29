import React, { useState } from 'react';
import Button from "../disignSystem/Button";

const HexCombiner: React.FC = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [error, setError] = useState(false);

    function combineHexValues(input: string): string {
        if (input.trim() === '') {
            setError(false);
            return '';
        }

        const hexPattern = /(?:0x)?([0-9A-Fa-f]{2})/g;
        let match;
        const hexValues = [];

        while ((match = hexPattern.exec(input)) !== null) {
            hexValues.push(match[1]);
        }

        const leftover = input
            .replace(hexPattern, '')
            .replace(/[,;\s]+/g, '').trim();

        if (hexValues.length === 0 || leftover.length > 0) {
            setError(true);
            return 'Invalid input. Ensure all hex values are two digits and separated correctly.';
        }

        setError(false);
        return `0x${hexValues.join('')}`;
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setInput(value);
        const result = combineHexValues(value);
        setOutput(result);
    };

    const handleSubmit = () => {
        if (isValidHexEntry()) {
            alert(`Valid Hex Sequence Sent: ${output}`);
        }
    };

    const isValidHexEntry = (): boolean => !error && output.trim() !== '';

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                fontFamily: 'Arial',
                padding: '20px',
                margin: '20px',
                textAlign: 'left',
                width: '700px',
                backgroundColor: 'white',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)',
                borderRadius: '8px'
            }}>
                <div>Hexadecimal Combiner</div>
                <input id={'hexInput'}
                       type="text"
                       value={input}
                       onChange={handleInputChange}
                       placeholder="Enter hex values (e.g., 0x12,0x13;14 or 121314)"
                       style={{
                           border: error ? '2px solid red' : '2px solid black',
                           padding: '5px',
                           width: '100%',
                           marginBottom: '10px'
                       }}
                />
                <div id={'resultContainer'}>
                    <span style={{ fontWeight: 'bold' }}>Output: </span>
                    <span style={{ color: error ? 'red' : 'green' }}>{output}</span>
                </div>
                <Button
                    active onClick={() => handleSubmit()}
                    className="w-full mt-2"
                    width="120px"
                    disabled={!isValidHexEntry()}
                >
                    Send
                </Button>
            </div>
        </div>
    );
};

export default HexCombiner;
