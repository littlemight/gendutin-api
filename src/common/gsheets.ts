import { google } from 'googleapis';
import { env } from './env';

const API_SCOPE = 'https://www.googleapis.com/auth/spreadsheets';
const SPREADSHEET_ID = env.SPREADSHEET_ID || 'spreadsheet id hehe';

export const auth = new google.auth.GoogleAuth({
  keyFile: 'google-credentials.json',
  scopes: API_SCOPE,
});

export const getRows = async (sheetName: string): Promise<string[]> => {
  const client = await auth.getClient();
  const googleSheets = google.sheets({
    version: 'v4',
    auth: client,
  });

  const rows = await googleSheets.spreadsheets.values.get({
    auth,
    spreadsheetId: SPREADSHEET_ID,
    range: `${sheetName}!A:B`,
  });
  return rows.data.values?.slice(1).map((e) => String(e[0])) ?? [];
};
