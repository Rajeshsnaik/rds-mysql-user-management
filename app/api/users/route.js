import { NextResponse } from "next/server";

import dynamodb from "@/lib/dynamodb";

import {
    PutCommand,
    ScanCommand,
} from "@aws-sdk/lib-dynamodb";

import { v4 as uuidv4 } from "uuid";

const TABLE_NAME = process.env.DYNAMODB_TABLE;

/* ===========================================================
   GET - Fetch All Users
=========================================================== */

export async function GET() {
    try {
        const result = await dynamodb.send(
            new ScanCommand({
                TableName: TABLE_NAME,
            })
        );

        return NextResponse.json({
            success: true,
            count: result.Items ? .length || 0,
            users: result.Items || [],
        }, { status: 200 });
    } catch (error) {
        console.error("GET Error:", error);

        return NextResponse.json({
            success: false,
            message: "Failed to fetch users.",
        }, { status: 500 });
    }
}

/* ===========================================================
   POST - Save User
=========================================================== */

export async function POST(request) {
    try {
        const body = await request.json();

        const { username, email, phoneNumber } = body;

        // Validation
        if (!username || !email || !phoneNumber) {
            return NextResponse.json({
                success: false,
                message: "All fields are required.",
            }, { status: 400 });
        }

        const user = {
            id: uuidv4(),
            username: username.trim(),
            email: email.trim(),
            phoneNumber: phoneNumber.trim(),
            createdAt: new Date().toISOString(),
        };

        await dynamodb.send(
            new PutCommand({
                TableName: TABLE_NAME,
                Item: user,
            })
        );

        return NextResponse.json({
            success: true,
            message: "User saved successfully.",
            user,
        }, { status: 201 });
    } catch (error) {
        console.error("POST Error:", error);

        return NextResponse.json({
            success: false,
            message: "Failed to save user.",
        }, { status: 500 });
    }
}