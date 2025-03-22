import { NextResponse } from 'next/server';
import { createTestTransporter, verifyEmailConnection } from '@/utils/email';

export async function GET() {
  try {
    // Create a test email transporter
    const transporterData = await createTestTransporter();
    
    if (!transporterData) {
      return NextResponse.json(
        { success: false, message: 'Failed to create test email transporter' },
        { status: 500 }
      );
    }
    
    const { transporter, testAccount } = transporterData;
    
    // Verify email connection
    const isEmailConfigured = await verifyEmailConnection(transporter);
    
    if (isEmailConfigured) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Email configuration is valid using Ethereal test account',
          testAccount: {
            user: testAccount.user,
            previewUrl: `https://ethereal.email/login?u=${encodeURIComponent(testAccount.user)}&p=${encodeURIComponent(testAccount.pass)}`
          }
        },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { 
          success: false, 
          message: 'Email configuration failed'
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error('Email test error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 