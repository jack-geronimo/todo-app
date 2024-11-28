import React, { useState } from 'react';

const HexCombiner: React.FC = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('0x');

    const combineHexValues = (input: string): string => {
        const cleanedInput = input.replace(/\s|,/g, '');
        const matches = cleanedInput.match(/0x[0-9a-fA-F]+/g);

        if (!matches) {
            return '0x';
        }

        const combinedHex = matches.map(hex => hex.slice(2)).join('');
        return `0x${combinedHex}`;
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInput(value);
        setOutput(combineHexValues(value));
    };

    return (
        <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px' }}>
            <label htmlFor="hexInput" style={{ display: 'block', marginBottom: '8px' }}>
                Hex-Eingabe:
            </label>
            <input
                id="hexInput"
                type="text"
                value={input}
                onChange={handleInputChange}
                placeholder="z.B. 0x12, 0x130x14, ..."
                style={{
                    padding: '8px',
                    width: '300px',
                    border: '1px solid #ccc',
                    borderRadius: '4px',
                    marginBottom: '16px',
                }}
            />
            <p>
                Ergebnis: <span style={{ fontWeight: 'bold' }}>{output}</span>
            </p>
        </div>
    );
};

export default HexCombiner;
