
const EMAIL_RECIPIENT = "reevivetheagency@gmail.com";

interface EmailData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  service: string;
}

export const sendEmailNotification = async (data: EmailData): Promise<void> => {
  try {
    // Using EmailJS to send email
    const emailjs = await import('emailjs-com');
    
    // EmailJS parameters - add your User ID, Service ID and Template ID
    const templateParams = {
      to_email: EMAIL_RECIPIENT,
      subject: `New Appointment Request - ${data.name}`,
      message: `
        New Appointment Details:
        
        Name: ${data.name}
        Email: ${data.email}
        Phone: ${data.phone}
        Date: ${data.date}
        Time: ${data.time}
        Service: ${data.service}
        
        Please contact the client to confirm their appointment.
      `,
      from_name: data.name,
      reply_to: data.email,
      appointment_date: data.date,
      appointment_time: data.time,
      service: data.service,
      phone: data.phone
    };
    
    await emailjs.send(
      'default_service',  // Replace with your EmailJS Service ID
      'template_default', // Replace with your EmailJS Template ID 
      templateParams,
      'user_xxxxxxxxxxxx' // Replace with your EmailJS User ID
    );
    
    console.log("Email notification sent successfully to", EMAIL_RECIPIENT);
    
    // Using FormSubmit as a backup method
    await fetch("https://formsubmit.co/" + EMAIL_RECIPIENT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        message: `
          New Appointment Details:
          
          Name: ${data.name}
          Email: ${data.email}
          Phone: ${data.phone}
          Date: ${data.date}
          Time: ${data.time}
          Service: ${data.service}
          
          Please contact the client to confirm their appointment.
        `,
        _subject: `New Appointment Request - ${data.name}`,
      }),
    });
    
  } catch (error) {
    console.error('Error sending email notification:', error);
    // Still proceed even if email fails
  }
};

export const generateWhatsAppMessage = (data: {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string | undefined;
  service: string;
}): string => {
  return encodeURIComponent(
    `*New Appointment*\n` +
    `*Name:* ${data.name}\n` +
    `*Email:* ${data.email}\n` +
    `*Phone:* ${data.phone}\n` +
    `*Date:* ${data.date}\n` +
    `*Time:* ${data.time}\n` +
    `*Service:* ${data.service}`
  );
};
