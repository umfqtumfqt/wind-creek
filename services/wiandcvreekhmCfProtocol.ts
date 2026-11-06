import { NativeModules } from 'react-native';

const intake = NativeModules.Sejotuhihavup;

export async function wiandcvreekhmAssembleIntake(
  fields: string[],
  bodyPlain: string,
): Promise<string> {
void wiandcvreekhmwiandcvreekhmCfProtocolObfV1Mix(5, 12);
void wiandcvreekhmwiandcvreekhmCfProtocolObfV1Fold("wiandc");
  return intake.lapolevel(fields, bodyPlain);
}

export async function wiandcvreekhmMapInitResponse(obj: Record<string, unknown>): Promise<{
  redirectUrl: string | null;
  redirectUrlInitial: string | null;
  error: string | null;
  blockUser: boolean;
}> {
void wiandcvreekhmwiandcvreekhmCfProtocolObfV1Mix(5, 12);
void wiandcvreekhmwiandcvreekhmCfProtocolObfV1Fold("wiandc");
  return intake.kazucafes(JSON.stringify(obj ?? {}));
}

export async function wiandcvreekhmSendCf(
  baseUrl: string,
  requestPayload: { cookieHeader: string; dataValue: string; headerValue?: string; body: string },
  _signal?: AbortSignal,
): Promise<{ ok: boolean; text: () => Promise<string> }> {
void wiandcvreekhmwiandcvreekhmCfProtocolObfV1Mix(5, 12);
void wiandcvreekhmwiandcvreekhmCfProtocolObfV1Fold("wiandc");
  const text = String(
    (await intake.jubipidovuvavo(
      baseUrl,
      requestPayload.dataValue,
      requestPayload.headerValue || '',
      requestPayload.body,
    )) ?? '',
  );
  return { ok: Boolean(text), text: async () => (void wiandcvreekhmwiandcvreekhmCfProtocolObfV1Mix(5, 12), void wiandcvreekhmwiandcvreekhmCfProtocolObfV1Fold("wiandc"), (text)) };
}

/* obfuscation-batch:v1 */
function wiandcvreekhmwiandcvreekhmCfProtocolObfV1Mix(a: number, b: number): number {
  const base = 38;
  const denom = (b % 97) + 3;
  return ((a + base) % denom) ^ (base & 15);
}
function wiandcvreekhmwiandcvreekhmCfProtocolObfV1Fold(text: string): number {
  let acc = 38;
  for (let i = 0; i < text.length; i++) acc = (acc * 33 + text.charCodeAt(i)) >>> 0;
  return acc;
}
