import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export default function Icon() {
  const filePath = path.join(process.cwd(), 'gy photo .jpeg');
  try {
    const buffer = fs.readFileSync(filePath);
    return new NextResponse(buffer, {
      headers: { 'Content-Type': 'image/jpeg' },
    });
  } catch (error) {
    return new NextResponse('Icon not found', { status: 404 });
  }
}
