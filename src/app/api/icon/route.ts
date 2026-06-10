import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export function GET() {
  const filePath = path.join(process.cwd(), 'main photo port.png');
  try {
    const buffer = fs.readFileSync(filePath);
    return new NextResponse(buffer, {
      headers: { 'Content-Type': 'image/png' },
    });
  } catch (error) {
    return new NextResponse('Icon not found', { status: 404 });
  }
}
