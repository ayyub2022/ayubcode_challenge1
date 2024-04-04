function calculateNetSalary(basicSalary, benefits) {
    // Constants for tax calculations
    const nhifRate = 0.02; // NHIF rate (2% of basic salary)
    const nssfRate = 0.06; // NSSF rate (6% of pensionable earnings)
    const taxBands = [12298, 23885, 35472, 47059]; // KRA tax bands
    const taxRates = [0.10, 0.15, 0.20, 0.25]; // Corresponding tax rates

    // Calculate gross salary
    let grossSalary = basicSalary + benefits;

    // Calculate PAYE tax
    let taxableIncome = grossSalary;
    let payeTax = 0;
    for (let i = 0; i < taxBands.length; i++) {
        if (taxableIncome > taxBands[i]) {
            payeTax += taxBands[i] * taxRates[i];
            taxableIncome -= taxBands[i];
        } else {
            payeTax += taxableIncome * taxRates[i];
            break;
        }
    }

    // Calculate NHIF deductions
    let nhifDeductions = basicSalary * nhifRate;

    // Calculate NSSF deductions
    let nssfDeductions = basicSalary * nssfRate;

    // Calculate net salary
    let netSalary = grossSalary - payeTax - nhifDeductions - nssfDeductions;

    return netSalary;
}

// Example usage:
let basicSalary = 50000; // Enter the basic salary here
let benefits = 10000;    // Enter the benefits here
let netSalary = calculateNetSalary(basicSalary, benefits);
console.log(`The net salary is: ${netSalary.toFixed(2)}`);
