import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('✅ Signup API route called');
    
    const body = await request.json();
    console.log('📝 Request body:', body);

    const { firstName, lastName, email, password, userType, euStatus, city } = body;

    // Simple validation
    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // For now, just simulate success
    return NextResponse.json({
      message: 'Account created successfully!',
      user: {
        firstName,
        lastName,
        email,
        userType,
        euStatus,
        city
      }
    });

  } catch (error) {
    console.error('❌ Signup API error:', error);
    return NextResponse.json(
      { error: 'Failed to create account' },
      { status: 500 }
    );
  }
}