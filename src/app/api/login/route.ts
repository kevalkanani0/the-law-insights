import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    console.log('✅ Login API route called');
    
    const body = await request.json();
    console.log('📝 Request body:', body);

    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      );
    }

    // For now, just simulate success
    return NextResponse.json({
      message: 'Login successful!',
      user: {
        email,
        firstName: 'Test',
        lastName: 'User'
      }
    });

  } catch (error) {
    console.error('❌ Login API error:', error);
    return NextResponse.json(
      { error: 'Failed to login' },
      { status: 500 }
    );
  }
}