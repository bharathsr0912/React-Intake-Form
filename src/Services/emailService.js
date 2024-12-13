import emailjs from 'emailjs-com';

export const sendEmailWithAttachment = (pdfBlob) => {
  const serviceID = 'service_aqhydno'; 
  const templateID = 'template_78j0czt'; 
  const userID = 'tOGFG-xLZVdZ6LDBD'; 

  const recipients = ["bhandavyabv@gmail.com"];

  // Construct email parameters

  const pdfFile = new File([pdfBlob], 'generated-file.pdf', { type: 'application/pdf' });

  const formData = new FormData();
  formData.append('file', pdfFile);

  const templateParams = {
    to_email: "bhandavyabv@gmail.com", // Change to the recipient's email
    subject: "Subject of the Email",
    pdf_attachment:pdfBlob
  };

  // Send email via EmailJS
  emailjs.send(serviceID, templateID,templateParams, userID)
  .then((response) => {
    console.log('Email sent successfully:', response);
  })
  .catch((error) => {
    console.error('Failed to send email:', error);
  });
};