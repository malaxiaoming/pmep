const fs = require('fs');
const path = require('path');

const documents = [
  // BCA Guidelines
  {
    filename: 'bca-pmep-guidelines.pdf',
    title: 'Prefabricated MEP Guidelines',
    docNumber: 'BCA-PMEP-2024-001'
  },
  {
    filename: 'bca-quality-framework.pdf',
    title: 'Quality Assessment Framework',
    docNumber: 'BCA-PMEP-2024-002'
  },
  {
    filename: 'bca-safety-requirements.pdf',
    title: 'Safety Requirements',
    docNumber: 'BCA-PMEP-2024-003'
  },
  // Singapore Standards
  {
    filename: 'ss-564.pdf',
    title: 'SS 564: Prefabricated MEP Systems',
    docNumber: 'SS-564-2024'
  },
  {
    filename: 'ss-531.pdf',
    title: 'SS 531: Mechanical Ventilation and Air-conditioning',
    docNumber: 'SS-531-2024'
  },
  {
    filename: 'ss-636.pdf',
    title: 'SS 636: Electrical Installations',
    docNumber: 'SS-636-2024'
  }
];

// Create placeholder PDFs
documents.forEach(doc => {
  const htmlContent = fs.readFileSync(
    path.join(__dirname, '../public/documents/placeholder.html'),
    'utf8'
  )
    .replace('[DOC-NUMBER]', doc.docNumber)
    .replace('PMEP Standards Document', doc.title)
    .replace('[CURRENT-DATE]', new Date().toISOString().split('T')[0]);

  // In a real implementation, you would convert this HTML to PDF
  // For now, we'll just save the HTML file
  fs.writeFileSync(
    path.join(__dirname, `../public/documents/${doc.filename.replace('.pdf', '.html')}`),
    htmlContent
  );
});

console.log('Placeholder documents generated successfully!'); 