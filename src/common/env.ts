const keys = ['PORT', 'SPREADSHEET_ID'] as const;

type Env = Record<typeof keys[number], string>;

require('dotenv').config();
export const env = Object.fromEntries(
  keys.map((key) => [key, process.env[key] ?? ''])
) as Env;

console.log('ENV values');
for (const key of keys) {
  console.log(`${key} = ${env[key]}`);
}
