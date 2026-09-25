import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      fullName,
      phone,
      gender,
      occupation,
      occupationOther,
      affectedAreas,
      affectedAreasOther,
      comfortableDiscussing,
      previousHelp,
      onlineComfort,
      callTime,
      // Fallback aliases if older forms submit
      painDiscomfort,
      pregnancyImpact,
      desireChanges,
      helpNeeds,
      comfortPreference,
    } = body;

    // ── 1. Validate required fields ───────────────────────────────────────────
    if (!fullName || !phone) {
      return NextResponse.json(
        { error: 'Full Name and Phone Number are required.' },
        { status: 400 }
      );
    }

    // ── 2. Process & format fields ─────────────────────────────────────────────
    const finalOccupation =
      occupation === 'Other' && occupationOther
        ? `Other: ${occupationOther}`
        : occupation || '—';

    let affectedList = Array.isArray(affectedAreas) ? [...affectedAreas] : [];
    if (affectedList.includes('Other') && affectedAreasOther) {
      affectedList = affectedList.map((item) =>
        item === 'Other' ? `Other: ${affectedAreasOther}` : item
      );
    }
    const finalAffectedAreas =
      affectedList.length > 0 ? affectedList.join(', ') : '—';

    const finalComfortableDiscussing =
      comfortableDiscussing || desireChanges || comfortPreference || '—';
    const finalPreviousHelp = previousHelp || '—';
    const finalOnlineComfort = onlineComfort || '—';
    const finalCallTime = callTime || '—';

    const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
    const privateKey = process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n');
    const spreadsheetId = process.env.GOOGLE_SHEET_ID;

    // If credentials or sheet ID are missing, log a warning and return success for client UX
    if (!clientEmail || !privateKey || !spreadsheetId) {
      console.warn(
        '[Google Sheets Integration Warning]: Missing environment variables (GOOGLE_CLIENT_EMAIL, GOOGLE_PRIVATE_KEY, or GOOGLE_SHEET_ID).'
      );
      return NextResponse.json(
        { success: true, warning: 'Environment variables not fully configured yet.' },
        { status: 200 }
      );
    }

    // ── 3. Authenticate with Google using Service Account ─────────────────────
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: clientEmail,
        private_key: privateKey,
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // ── 4. Append a new row to the sheet ──────────────────────────────────────
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: 'Sheet1!A:J',
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [
          [
            new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
            fullName,
            phone,
            gender || '—',
            finalOccupation,
            finalAffectedAreas,
            finalComfortableDiscussing,
            finalPreviousHelp,
            finalOnlineComfort,
            finalCallTime,
          ],
        ],
      },
    });

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error: unknown) {
    const errMessage = error instanceof Error ? error.message : String(error);
    console.error('[Google Sheets API Error]:', errMessage);
    return NextResponse.json(
      { error: 'Failed to submit form. Please try again later.' },
      { status: 500 }
    );
  }
}
