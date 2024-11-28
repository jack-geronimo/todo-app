import React, {useState} from 'react';

const HexCombiner: React.FC = () => {
    const [input, setInput] = useState('');
    const [output, setOutput] = useState('');
    const [error, setError] = useState(false);

    function combineHexValues(input: string): string {

        if (input.trim() === '') {
            setError(false);
            return '';
        }

        // Match valid two-digit hex values with optional "0x" prefix
        const hexPattern = /(?:0x)?([0-9A-Fa-f]{2})/g;
        let match;
        const hexValues = [];

        // Extract all valid hex values
        while ((match = hexPattern.exec(input)) !== null) {
            hexValues.push(match[1]);
        }

        // Remove all valid hex values and allowed separators
        const leftover = input
            .replace(hexPattern, '')
            .replace(/[,;\s]+/g, '').trim();

        if (hexValues.length === 0 || leftover.length > 0) {
            setError(true);
            return '';
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
        <div style={{fontFamily: 'Arial', padding: '20px'}}>
            <h2>Hexadecimal Combiner</h2>
            <input id={'hexInput'}
                   type="text"
                   value={input}
                   onChange={handleInputChange}
                   placeholder="Enter hex values (e.g., 0x12,0x13;14 or 121314)"
                   style={{
                       border: error ? '2px solid red' : '2px solid black',
                       padding: '5px',
                       width: '600px',
                   }}
            />
            {error &&
                <p id={'errorContainer'} style={{color: 'red'}}>Invalid input. Ensure all hex values are two digits and separated correctly.</p>}
            <p id={'resultContainer'}>Output: {output}</p>
            <button onClick={handleSubmit} disabled={!isValidHexEntry()}>
                Send
            </button>

            {/*            <Button active onClick={() => handleSubmit()} className="w-full mt-2">
                Add new Task
            </Button>*/}
        </div>
    );
};

export default HexCombiner;
