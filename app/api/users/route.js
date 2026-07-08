import { NextResponse } from "next/server";
import db from "@/lib/db";

// GET ALL USERS
export async function GET() {
  try {
    const [rows] = await db.execute("SELECT * FROM users ORDER BY id DESC");

    return NextResponse.json({
      success: true,
      users: rows,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      },
    );
  }
}

// SAVE USER
export async function POST(request) {
  try {
    const { username, email, phoneNumber } = await request.json();

    if (!username || !email || !phoneNumber) {
      return NextResponse.json(
        {
          success: false,
          message: "All fields are required.",
        },
        {
          status: 400,
        },
      );
    }

    await db.execute(
      `INSERT INTO users (username,email,phone_number)
       VALUES (?,?,?)`,
      [username, email, phoneNumber],
    );

    return NextResponse.json(
      {
        success: true,
        message: "User saved successfully.",
      },
      {
        status: 201,
      },
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: error.message,
      },
      {
        status: 500,
      },
    );
  }
}
