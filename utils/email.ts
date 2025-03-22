import nodemailer from 'nodemailer';

// Creates a test account with Ethereal for testing
export async function createTestAccount() {
  try {
    const testAccount = await nodemailer.createTestAccount();
    console.log('Created Ethereal test account:', testAccount.user);
    return testAccount;
  } catch (error) {
    console.error('Failed to create test account:', error);
    return null;
  }
}

// Creates a testing transporter with Ethereal
export async function createTestTransporter() {
  try {
    // Generate an Ethereal test account
    const testAccount = await createTestAccount();
    
    if (!testAccount) {
      console.error('Failed to create test account');
      return null;
    }
    
    // Create a testing transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass,
      },
    });
    
    console.log('Created test transporter');
    return { transporter, testAccount };
  } catch (error) {
    console.error('Failed to create test transporter:', error);
    return null;
  }
}

// Test the connection
export async function verifyEmailConnection(transporter) {
  try {
    await transporter.verify();
    console.log('Email server connection verified');
    return true;
  } catch (error) {
    console.error('Email verification failed:', error);
    return false;
  }
}

export async function sendNotificationToOwner(transporter, subscriberEmail, testAccount) {
  try {
    const ownerEmail = testAccount ? testAccount.user : process.env.OWNER_EMAIL;
    
    const info = await transporter.sendMail({
      from: `"Model Management" <${testAccount ? testAccount.user : process.env.EMAIL_USER}>`,
      to: ownerEmail,
      subject: 'New subscriber to your Coming Soon page',
      text: `A new user has subscribed to your Coming Soon page: ${subscriberEmail}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #E31C5F;">New Subscriber Alert</h2>
          <p>Hello,</p>
          <p>A new user has subscribed to your Coming Soon page:</p>
          <p style="background-color: #f5f5f5; padding: 10px; border-radius: 5px;"><strong>${subscriberEmail}</strong></p>
          <p>They are interested in being notified when your platform launches.</p>
          <p>Best regards,<br>Model Management System</p>
        </div>
      `,
    });
    
    if (testAccount) {
      // Log a preview URL for Ethereal emails
      console.log('Owner notification email preview URL: %s', nodemailer.getTestMessageUrl(info));
    }
    
    return { success: true, previewUrl: testAccount ? nodemailer.getTestMessageUrl(info) : null };
  } catch (error) {
    console.error('Error sending notification email to owner:', error);
    return { success: false, error };
  }
}

export async function sendConfirmationToSubscriber(transporter, subscriberEmail, testAccount) {
  try {
    const info = await transporter.sendMail({
      from: `"Model Management" <${testAccount ? testAccount.user : process.env.EMAIL_USER}>`,
      to: subscriberEmail,
      subject: 'Thanks for subscribing to Model Management',
      text: `Thank you for subscribing to Model Management. We'll notify you when we launch!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #E31C5F;">Thanks for Subscribing!</h2>
          <p>Hello,</p>
          <p>Thank you for subscribing to Model Management. We're excited to have you join our community!</p>
          <p>We'll notify you as soon as our platform launches.</p>
          <p>In the meantime, you can follow us on social media for updates:</p>
          <div style="margin: 20px 0;">
            <a href="#" style="margin-right: 10px; color: #E31C5F;">Instagram</a>
            <a href="#" style="margin-right: 10px; color: #E31C5F;">Facebook</a>
            <a href="#" style="margin-right: 10px; color: #E31C5F;">Twitter</a>
          </div>
          <p>Best regards,<br>The Model Management Team</p>
        </div>
      `,
    });
    
    if (testAccount) {
      // Log a preview URL for Ethereal emails
      console.log('Subscriber confirmation email preview URL: %s', nodemailer.getTestMessageUrl(info));
    }
    
    return { success: true, previewUrl: testAccount ? nodemailer.getTestMessageUrl(info) : null };
  } catch (error) {
    console.error('Error sending confirmation email to subscriber:', error);
    return { success: false, error };
  }
} 