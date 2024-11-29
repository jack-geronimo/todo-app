/// <reference types="cypress" />

export {}; // This makes the file a module

describe('HexCombiner Component', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/react-todo-app'); // Adjust the URL to your application
    });

    it('should correctly combine hex values with valid input: 0x12, 0x13 => 0x1213', () => {
        cy.get('#hexInput').type('0x12, 0x13');
        cy.get('#resultContainer').should('contain.text', '0x1213');
    });

    it('should handle input with spaces and separators: 0x12 0x13; 14 => 0x121314', () => {
        cy.get('#hexInput').type('0x12 0x13; 14');
        cy.get('#resultContainer').should('contain.text', '0x121314');
    });

    it('should show error for invalid input: 0x12, 0xG3 => Invalid input', () => {
        cy.get('#hexInput').type('0x12, 0xG3');
        cy.get('#resultContainer').should('contain.text', 'Invalid input. Ensure all hex values are two digits and separated correctly.');
    });

    it('should handle empty input:  => ', () => {
        cy.get('#hexInput').clear();
        cy.get('#resultContainer').should('contain.text', '');
    });

    it('should handle input without 0x prefix: 12, 13 => 0x1213', () => {
        cy.get('#hexInput').type('12, 13');
        cy.get('#resultContainer').should('contain.text', '0x1213');
    });

    it('should handle input with mixed valid and invalid hex values: 0x12, 0x13, 0xZZ => Invalid input', () => {
        cy.get('#hexInput').type('0x12, 0x13, 0xZZ');
        cy.get('#resultContainer').should('contain.text', 'Invalid input. Ensure all hex values are two digits and separated correctly.');
    });

    it('should handle input with only invalid hex values: 0xZZ, 0xYY => Invalid input', () => {
        cy.get('#hexInput').type('0xZZ, 0xYY');
        cy.get('#resultContainer').should('contain.text', 'Invalid input. Ensure all hex values are two digits and separated correctly.');
    });

    it('should handle input with no hex values: abc, def => Invalid input', () => {
        cy.get('#hexInput').type('abc, def');
        cy.get('#resultContainer').should('contain.text', 'Invalid input. Ensure all hex values are two digits and separated correctly.');
    });

    it('should handle input with complex valid input: 0x12, 0x130x14 ,  0x1567890x20;212324 => 0x12131415678920212324', () => {
        cy.get('#hexInput').type('0x12, 0x130x14 ,  0x1567890x20;212324');
        cy.get('#resultContainer').should('contain.text', '0x12131415678920212324');
    });
});
