import { NextResponse } from 'next/server';
import { 
  createTestTransporter, 
  sendNotificationToOwner, 
  sendConfirmationToSubscriber, 
  verifyEmailConnection 
} from '@/utils/email';

// This ensures the route is included in the static export
export const dynamic = "force-static";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body;
    
    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'Valid email is required' },
        { status: 400 }
      );
    }

    // In a real application, you would add the email to your database
    console.log(`New subscription: ${email}`);
    
    // Create test email transporter
    const transporterData = await createTestTransporter();
    
    if (!transporterData) {
      console.error('Failed to create test email transporter');
      return NextResponse.json(
        { success: false, error: 'Email service configuration failed' },
        { status: 500 }
      );
    }
    
    const { transporter, testAccount } = transporterData;
    
    // Verify email connection
    const isEmailConfigured = await verifyEmailConnection(transporter);
    
    if (!isEmailConfigured) {
      console.warn('Email service is not properly configured');
      return NextResponse.json(
        { success: false, error: 'Email service is not properly configured' },
        { status: 500 }
      );
    }
    
    // Send notification email to the owner
    const ownerNotification = await sendNotificationToOwner(transporter, email, testAccount);
    
    // Send confirmation email to the subscriber
    const subscriberConfirmation = await sendConfirmationToSubscriber(transporter, email, testAccount);
    
    // For testing, we'll return the preview URLs
    const previewUrls = {
      ownerNotification: ownerNotification.previewUrl,
      subscriberConfirmation: subscriberConfirmation.previewUrl
    };

    return NextResponse.json(
      { 
        success: true, 
        message: 'Subscription successful',
        // Only include preview URLs in development
        ...(process.env.NODE_ENV === 'development' ? { previewUrls } : {})
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Subscription error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 