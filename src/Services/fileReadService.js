import { PDFDocument } from 'pdf-lib';
import { jsPDF } from "jspdf";

export const readFile = (uploadedFile) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onloadend = async () => {
      try {
        if (uploadedFile.type === 'application/pdf') {
            if (!reader.result) {
                return reject(new Error('File read failed.'));
            }
            const pdfData = new Uint8Array(reader.result);
            const uploadedPdfDoc = await PDFDocument.load(pdfData);
            resolve(uploadedPdfDoc);
        }
        else if (uploadedFile.type.startsWith('image/')) {
            const imgData = reader.result; 
            const doc = new jsPDF();
            doc.addImage(imgData, 'JPEG', 10, 10, 180, 160); 
            resolve(doc); 
        } 
        
      } catch (error) {
        console.error('Error during PDF loading:', error);
        reject(error);
      }
    };

    reader.onerror = (error) => {
      console.error('FileReader error:', error);
      reject(error);
    };
    // reader.readAsArrayBuffer(uploadedFile);
    if (uploadedFile.type === 'application/pdf') {
        reader.readAsArrayBuffer(uploadedFile); // For PDF files, read as ArrayBuffer
      } else if (uploadedFile.type.startsWith('image/')) {
        reader.readAsDataURL(uploadedFile); // For image files, read as DataURL
      } else {
        reject(new Error('Unsupported file type.'));
      }
  });
};
