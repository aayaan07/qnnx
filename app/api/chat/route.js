import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";

// Initialize the Gemini API with your key from .env.local
const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey || "");

/**
 * System Prompt: Contains the core knowledge base of QNNX.
 * Rewritten to prioritize simple English and concise answers.
 */
const SYSTEM_PROMPT = `
You are the "QNNX Quantum Interface," an advanced AI assistant for QNNX. 
Your goal is to explain complex quantum security topics in simple, easy-to-understand English. 
Keep your answers short (under 50 words) and helpful.

CORE INFORMATION:

1. ABOUT QNNX:
- We build future-proof cybersecurity to protect against quantum computer attacks.
- We specialize in Post-Quantum Cryptography (PQC), secure communication, and AI defense.
- Our goal is to protect government networks, defense systems, and banks from future threats.

2. STRATEGIC TRUST & PARTNERS:
- Defense: Indian Army (Signal Regiment), Delhi Police (Crime Division), DRDO.
- Government: C-DOT (PQC Division), SEBI Leadership.
- Investors: Bessemer Venture Partners, Info Edge (Sanjeev Bikhchandani).

3. FOUNDER PROFILE (Sidharth Kumar):
- Founder of QNNX and a researcher in applied cybersecurity.
- Former Quantum Research Intern at IBM, focusing on AI and quantum error mitigation.
- Multiple national-level hackathon winner.

4. CONTACT DETAILS:
- Email: sidharth@qnnx.in
- Phone: +91 7601959971
- Website: www.qnnx.in

GUIDELINES FOR RESPONDING:
- Use basic English that anyone can understand.
- If asked "What do you do?", say: "We build advanced security systems to protect data from powerful quantum computers."
- If asked about pricing or sales, say: "Please request a demo on our site or email sidharth@qnnx.in."
- Stay professional and polite, but keep it very brief.
`;

export async function POST(req) {
  try {
    // 1. Validate API Key Presence
    if (!apiKey) {
      console.error("❌ GEMINI_API_KEY is missing in environment variables.");
      return NextResponse.json({ text: "System Offline: Configuration error." }, { status: 500 });
    }

    // 2. Parse Request Body
    const body = await req.json();
    const { message, history } = body;

    // 3. Initialize the Stable Model
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    // 4. Construct Sanitized Chat History
    // Gemini requires alternating 'user' and 'model' roles.
    const chatHistory = [
      { role: "user", parts: [{ text: SYSTEM_PROMPT }] },
      { role: "model", parts: [{ text: "System Online. I am ready to assist with QNNX security queries in simple terms." }] },
      ...(history || []).map(msg => ({
        role: msg.role === 'ai' ? 'model' : 'user',
        parts: [{ text: msg.text || "" }]
      }))
    ];

    // 5. Start Chat Session
    const chat = model.startChat({
      history: chatHistory,
    });

    // 6. Send User Message and Await Response
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();

    return NextResponse.json({ text });

  } catch (error) {
    console.error("❌ Gemini API Error:", error);

    // Provide a user-friendly fallback message for the typewriter effect
    return NextResponse.json({
      text: "Quantum interference detected. Please try refreshing or try again in a moment."
    }, { status: 500 });
  }
}
