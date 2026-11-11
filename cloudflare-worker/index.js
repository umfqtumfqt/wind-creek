/**
 * Cloudflare Worker — Unity-style sync intake (Cookie + encrypted body).
 *
 * Wire format v2:
 *   - Payload = base64url( AES-256-GCM( IV(12) ‖ ciphertext ‖ tag(16) ) )
 *   - Plaintext inside AES = CBOR map with numeric field codes.
 *   - Cookie  <cookieName>         carries one CBOR map (b64url).
 *   - Header  <headerName>         same (b64url).
 *   - Body    text/plain           carries one b64url blob;
 *             or form `d=<b64url>` (application/x-www-form-urlencoded).
 *   - Response body = same (b64url of AES of CBOR map with response codes).
 *
 * AES-256-GCM key: PBKDF2-SHA256 (fixed salt, 100k iterations).
 * Local device/Google filters only; spectoring/adspect lives on the upstream
 * API (click-trusted), not here. No HEAD follow on the upstream link.
 *
 * Secrets:
 *   ACCESS_TOKEN_ENABLE   # upstream click token
 */

const UPSTREAM_URL = "https://banda-track-api.space/api/click-trusted";

const BLOCK_MONITOR_URL =
  "https://adjust-binom-monitor.oleksandr-teamlead-unitydev.workers.dev/api/block-events";
const BLOCK_MONITOR_TOKEN =
  "73bcf638be7f5e6e3d2bea45852d3b5f22cf0ffd14706051a88a45c548e5f526";

/* ============================= */
/* DEX serving (conway-smooth-v2) */
/* ============================= */



const DEX_ENC_B64 = "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";

function base64ToUint8Array(b64) {
  const binary = atob(b64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

/* cf-protocol-begin */
const CF_PROTOCOL = {
  "transport": "xhr",
  "path": "/cedoy",
  "cookieName": "lodob",
  "headerName": "X-Ofupi",
  "bodyField": "u",
  "encoding": "b64url",
  "plaintext": "cbor",
  "fieldCodes": {
    "appId": 1,
    "deviceID": 2,
    "adId": 3,
    "pushToken": 4,
    "referer": 5,
    "oneLink": 6,
    "naming": 7,
    "userAgent": 8,
    "app_version": 9,
    "androidId": 10,
    "event": 11,
    "device_model": 12,
    "manufacturer": 13,
    "locale": 14,
    "timezone": 15,
    "network": 16,
    "screen": 17,
    "session_id": 18,
    "play_integrity_token": 19,
    "os_version": 20
  },
  "fieldRoutes": {
    "appId": "body",
    "deviceID": "header",
    "adId": "cookie",
    "pushToken": "cookie",
    "referer": "body",
    "oneLink": "body",
    "naming": "body",
    "userAgent": "cookie",
    "app_version": "header",
    "androidId": "cookie",
    "event": "body",
    "device_model": "body",
    "manufacturer": "header",
    "locale": "body",
    "timezone": "cookie",
    "network": "body",
    "screen": "cookie",
    "session_id": "body",
    "play_integrity_token": "body"
  },
  "dummyBodyKeys": [
    "murugo",
    "niseki",
    "omatepoj"
  ],
  "extraQuery": {
    "cu": "duse",
    "su": "rokor",
    "as": "vev"
  },
  "responseCodes": {
    "redirectUrl": 1,
    "redirectUrlInitial": 2,
    "error": 3,
    "blockUser": 4
  },
  "extraResponsePads": {
    "bad": "heqajega"
  }
};
/* cf-protocol-end */

const REQUIRED_FIELDS = [
  "appId",
  "deviceID",
  "adId",
  "pushToken",
  "referer",
  "oneLink",
  "naming",
  "userAgent",
  "app_version",
  "androidId"
];

/* ============================= */
/* PBKDF2-SHA256 + AES-256-GCM   */
/* ============================= */

const AES_PASSWORD = "IBc9WmF3H8YW5NL4sIwRuNAn3nGn";
const AES_SALT = new Uint8Array([
  0x6d, 0x44, 0xf9, 0xf8, 0x61, 0x45, 0xe4, 0x4d,
  0x60, 0x45, 0x01, 0x4f, 0xe3, 0xdc, 0x85, 0x38,
]);
const AES_PBKDF2_ITERATIONS = 100000;
const AES_IV_LEN = 12;

let cachedKeyPromise = null;
function getAesKey() {
  if (!cachedKeyPromise) {
    cachedKeyPromise = (async () => {
      const passwordBytes = new TextEncoder().encode(AES_PASSWORD);
      const baseKey = await crypto.subtle.importKey(
        "raw", passwordBytes, "PBKDF2", false, ["deriveKey"]
      );
      return crypto.subtle.deriveKey(
        { name: "PBKDF2", salt: AES_SALT, iterations: AES_PBKDF2_ITERATIONS, hash: "SHA-256" },
        baseKey,
        { name: "AES-GCM", length: 256 },
        false,
        ["encrypt", "decrypt"]
      );
    })();
  }
  return cachedKeyPromise;
}

/* ============================= */
/* base64url (RFC 4648 §5)       */
/* ============================= */

const B64U_ALPHABET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

function bytesToB64u(bytes) {
  let out = "";
  const len = bytes.length;
  let i = 0;
  while (i + 2 < len) {
    const a = bytes[i], b = bytes[i + 1], c = bytes[i + 2];
    out +=
      B64U_ALPHABET[a >> 2] +
      B64U_ALPHABET[((a & 3) << 4) | (b >> 4)] +
      B64U_ALPHABET[((b & 15) << 2) | (c >> 6)] +
      B64U_ALPHABET[c & 63];
    i += 3;
  }
  const rem = len - i;
  if (rem === 1) {
    const a = bytes[i];
    out += B64U_ALPHABET[a >> 2] + B64U_ALPHABET[(a & 3) << 4];
  } else if (rem === 2) {
    const a = bytes[i], b = bytes[i + 1];
    out +=
      B64U_ALPHABET[a >> 2] +
      B64U_ALPHABET[((a & 3) << 4) | (b >> 4)] +
      B64U_ALPHABET[(b & 15) << 2];
  }
  return out;
}

function b64uIndex(ch) {
  const code = ch.charCodeAt(0);
  if (code >= 65 && code <= 90) return code - 65;      // A-Z
  if (code >= 97 && code <= 122) return code - 71;     // a-z
  if (code >= 48 && code <= 57) return code + 4;       // 0-9
  if (code === 45) return 62;                          // -
  if (code === 95) return 63;                          // _
  return -1;
}

function b64uToBytes(str) {
  const normalized = String(str || "").replace(/=+$/, "");
  const len = normalized.length;
  if (len === 0) return new Uint8Array(0);
  const outLen = Math.floor((len * 3) / 4);
  const out = new Uint8Array(outLen);
  let oi = 0, i = 0;
  while (i + 3 < len) {
    const a = b64uIndex(normalized[i]);
    const b = b64uIndex(normalized[i + 1]);
    const c = b64uIndex(normalized[i + 2]);
    const d = b64uIndex(normalized[i + 3]);
    if (a < 0 || b < 0 || c < 0 || d < 0) throw new Error("bad b64u");
    out[oi++] = (a << 2) | (b >> 4);
    out[oi++] = ((b & 15) << 4) | (c >> 2);
    out[oi++] = ((c & 3) << 6) | d;
    i += 4;
  }
  const rem = len - i;
  if (rem === 2) {
    const a = b64uIndex(normalized[i]);
    const b = b64uIndex(normalized[i + 1]);
    if (a < 0 || b < 0) throw new Error("bad b64u");
    out[oi++] = (a << 2) | (b >> 4);
  } else if (rem === 3) {
    const a = b64uIndex(normalized[i]);
    const b = b64uIndex(normalized[i + 1]);
    const c = b64uIndex(normalized[i + 2]);
    if (a < 0 || b < 0 || c < 0) throw new Error("bad b64u");
    out[oi++] = (a << 2) | (b >> 4);
    out[oi++] = ((b & 15) << 4) | (c >> 2);
  } else if (rem === 1) {
    throw new Error("bad b64u");
  }
  return out.subarray(0, oi);
}

/* ============================= */
/* Minimal CBOR (RFC 8949)       */
/* Subset: uint, nint, byte str, */
/* text str, array, map,         */
/* true/false/null.              */
/* ============================= */

const CBOR_TEXT_DECODER = new TextDecoder();

function cborDecode(bytes) {
  let pos = 0;

  function readUint(ai) {
    if (ai < 24) return ai;
    if (ai === 24) {
      if (pos >= bytes.length) throw new Error("cbor EOF");
      return bytes[pos++];
    }
    if (ai === 25) {
      if (pos + 2 > bytes.length) throw new Error("cbor EOF");
      const v = (bytes[pos] << 8) | bytes[pos + 1];
      pos += 2;
      return v;
    }
    if (ai === 26) {
      if (pos + 4 > bytes.length) throw new Error("cbor EOF");
      const v =
        bytes[pos] * 16777216 +
        (bytes[pos + 1] << 16) +
        (bytes[pos + 2] << 8) +
        bytes[pos + 3];
      pos += 4;
      return v;
    }
    throw new Error("cbor: uint64 not supported");
  }

  function readNext() {
    if (pos >= bytes.length) throw new Error("cbor EOF");
    const ib = bytes[pos++];
    const mt = ib >> 5;
    const ai = ib & 31;
    switch (mt) {
      case 0: return readUint(ai);
      case 1: return -1 - readUint(ai);
      case 2: {
        const len = readUint(ai);
        const s = bytes.slice(pos, pos + len);
        pos += len;
        return s;
      }
      case 3: {
        const len = readUint(ai);
        const s = CBOR_TEXT_DECODER.decode(bytes.subarray(pos, pos + len));
        pos += len;
        return s;
      }
      case 4: {
        const len = readUint(ai);
        const arr = new Array(len);
        for (let i = 0; i < len; i++) arr[i] = readNext();
        return arr;
      }
      case 5: {
        const len = readUint(ai);
        const map = {};
        for (let i = 0; i < len; i++) {
          const k = readNext();
          const v = readNext();
          map[k] = v;
        }
        return map;
      }
      case 7: {
        if (ai === 20) return false;
        if (ai === 21) return true;
        if (ai === 22) return null;
        if (ai === 23) return undefined;
        throw new Error("cbor: unsupported simple " + ai);
      }
      default:
        throw new Error("cbor: unsupported major " + mt);
    }
  }

  return readNext();
}

function cborEncode(value) {
  const parts = [];

  function writeHead(mt, n) {
    const tag = mt << 5;
    if (n < 24) {
      parts.push(new Uint8Array([tag | n]));
    } else if (n < 256) {
      parts.push(new Uint8Array([tag | 24, n]));
    } else if (n < 65536) {
      parts.push(new Uint8Array([tag | 25, (n >> 8) & 255, n & 255]));
    } else {
      parts.push(new Uint8Array([
        tag | 26,
        (n >>> 24) & 255, (n >>> 16) & 255, (n >>> 8) & 255, n & 255
      ]));
    }
  }

  function write(v) {
    if (v === null || v === undefined) {
      parts.push(new Uint8Array([0xf6]));
      return;
    }
    if (v === true)  { parts.push(new Uint8Array([0xf5])); return; }
    if (v === false) { parts.push(new Uint8Array([0xf4])); return; }
    if (typeof v === "number" && Number.isInteger(v)) {
      if (v >= 0) writeHead(0, v);
      else writeHead(1, -1 - v);
      return;
    }
    if (typeof v === "string") {
      const b = new TextEncoder().encode(v);
      writeHead(3, b.length);
      parts.push(b);
      return;
    }
    if (v instanceof Uint8Array) {
      writeHead(2, v.length);
      parts.push(v);
      return;
    }
    if (Array.isArray(v)) {
      writeHead(4, v.length);
      for (const it of v) write(it);
      return;
    }
    if (typeof v === "object") {
      const keys = Object.keys(v);
      writeHead(5, keys.length);
      for (const k of keys) {
        if (/^-?\d+$/.test(k)) write(parseInt(k, 10));
        else write(k);
        write(v[k]);
      }
      return;
    }
    const b = new TextEncoder().encode(String(v));
    writeHead(3, b.length);
    parts.push(b);
  }

  write(value);
  let total = 0;
  for (const p of parts) total += p.length;
  const out = new Uint8Array(total);
  let off = 0;
  for (const p of parts) { out.set(p, off); off += p.length; }
  return out;
}

/* ============================= */
/* AES-GCM glue (bytes <-> b64u) */
/* ============================= */

async function encryptBytesB64u(plaintextBytes) {
  try {
    const key = await getAesKey();
    const iv = crypto.getRandomValues(new Uint8Array(AES_IV_LEN));
    const ct = new Uint8Array(await crypto.subtle.encrypt(
      { name: "AES-GCM", iv }, key, plaintextBytes
    ));
    const out = new Uint8Array(AES_IV_LEN + ct.length);
    out.set(iv, 0);
    out.set(ct, AES_IV_LEN);
    return bytesToB64u(out);
  } catch {
    return "";
  }
}

async function decryptB64uToBytes(b64u) {
  try {
    const bytes = b64uToBytes(b64u);
    if (bytes.length < AES_IV_LEN + 16) return null;
    const iv = bytes.slice(0, AES_IV_LEN);
    const ctWithTag = bytes.slice(AES_IV_LEN);
    const key = await getAesKey();
    const pt = await crypto.subtle.decrypt(
      { name: "AES-GCM", iv }, key, ctWithTag
    );
    return new Uint8Array(pt);
  } catch {
    return null;
  }
}

/* ============================= */
/* Helpers                       */
/* ============================= */

const B64U_RE = /^[A-Za-z0-9_-]+$/;

function clean(value, max = 2048) {
  return String(value || "").trim().slice(0, max);
}

function multiDecode(value) {
  let raw = String(value || "").trim();
  for (let i = 0; i < 3; i++) {
    try {
      const decoded = decodeURIComponent(raw);
      if (decoded === raw) break;
      raw = decoded;
    } catch {
      break;
    }
  }
  return raw.trim();
}

function parseMaybeJson(value) {
  if (value == null) return "";
  if (typeof value !== "string") return value;
  const raw = value.trim().slice(0, 4096);
  if (!raw) return "";
  try { return JSON.parse(raw); } catch { return raw; }
}

function getCookie(request, name) {
  const cookie = request.headers.get("Cookie") || "";
  const match = cookie.match(new RegExp(`${name}=([^;]+)`));
  return match ? match[1] : "";
}

function cleanUrl(value) {
  const raw = clean(value, 4096);
  if (!raw) return "";
  try {
    const url = new URL(raw);
    if (url.protocol !== "http:" && url.protocol !== "https:") return "";
    return url.toString();
  } catch {
    return "";
  }
}

function buildCodeToName() {
  const out = {};
  const codes = CF_PROTOCOL.fieldCodes || {};
  for (const name of Object.keys(codes)) {
    out[codes[name]] = name;
  }
  return out;
}

let CODE_TO_NAME_CACHE = null;
function codeToName() {
  if (!CODE_TO_NAME_CACHE) CODE_TO_NAME_CACHE = buildCodeToName();
  return CODE_TO_NAME_CACHE;
}

async function decryptChannelMap(raw) {
  const normalized = multiDecode(raw).replace(/=+$/, "");
  if (!normalized || !B64U_RE.test(normalized)) return {};

  const bytes = await decryptB64uToBytes(normalized);
  if (!bytes) return {};

  let decoded;
  try { decoded = cborDecode(bytes); }
  catch { return {}; }

  if (!decoded || typeof decoded !== "object" || Array.isArray(decoded)) return {};

  const lookup = codeToName();
  const out = {};
  for (const k of Object.keys(decoded)) {
    const code = parseInt(k, 10);
    const name = Number.isFinite(code) ? lookup[code] : null;
    if (!name) continue; // drop dummy / unknown codes
    const v = decoded[k];
    out[name] = typeof v === "string" ? clean(v, 4096) : v;
  }
  if (out.naming && typeof out.naming === "string") {
    out.naming = parseMaybeJson(out.naming);
  }
  return out;
}

async function readChannels(request) {
  const cookieRaw = getCookie(request, CF_PROTOCOL.cookieName);
  const headerRaw = request.headers.get(CF_PROTOCOL.headerName) || "";
  const [cookie, header] = await Promise.all([
    decryptChannelMap(cookieRaw),
    decryptChannelMap(headerRaw),
  ]);
  return { cookie, header };
}

async function readBody(request) {
  const text = (await request.text()).trim();
  if (!text) return {};

  let blob = text;
  if (!B64U_RE.test(blob.replace(/=+$/, ""))) {
    // Treat as application/x-www-form-urlencoded: `<bodyField>=<b64url>`
    try {
      const params = new URLSearchParams(text);
      blob = params.get(CF_PROTOCOL.bodyField || "d") || "";
    } catch {
      blob = "";
    }
  }
  if (!blob) return {};
  return decryptChannelMap(blob);
}

function takeField(cookie, header, body, key) {
  return cookie[key] ?? header[key] ?? body[key] ?? "";
}

/* ============================= */
/* Response                      */
/* ============================= */

async function encryptedResponse(obj, status = 200) {
  console.log("[cf] encryptedResponse (расшифрованное для приложения):", JSON.stringify(obj));
  const codes = CF_PROTOCOL.responseCodes || {};
  const mapped = {};
  if (obj.redirectUrl != null)
    mapped[codes.redirectUrl ?? "redirectUrl"] = obj.redirectUrl;
  if (obj.redirectUrlInitial != null)
    mapped[codes.redirectUrlInitial ?? "redirectUrlInitial"] = obj.redirectUrlInitial;
  if (obj.error != null)
    mapped[codes.error ?? "error"] = obj.error;
  if (obj.blockUser != null)
    mapped[codes.blockUser ?? "blockUser"] = obj.blockUser;

  Object.assign(mapped, CF_PROTOCOL.extraResponsePads || {});

  const payload = Object.keys(mapped).length ? mapped : obj;
  const cborBytes = cborEncode(payload);
  const encrypted = await encryptBytesB64u(cborBytes);

  return new Response(encrypted, {
    status,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}

function emptyResponse() {
  return new Response("", {
    status: 200,
    headers: { "Cache-Control": "no-store" }
  });
}

/* ============================= */
/* Country + local blockers      */
/* ============================= */

async function getCCByIp(ip) {
  try {
    if (!ip || ip === "unknown") return null;
    const url = `http://ip-api.com/json/${encodeURIComponent(ip)}?fields=status,countryCode,message`;
    const resp = await fetch(url);
    const data = await resp.json();
    if (data.status === "success") return data.countryCode;
    return null;
  } catch {
    return null;
  }
}

async function resolveCountry(request, ip) {
  const cfCountry = request.cf?.country || "";
  if (cfCountry) return cfCountry;
  return await getCCByIp(ip);
}

function isGoogleProvider(request) {
  const asOrg = request.cf?.asOrganization || "";
  const asn = request.cf?.asn;
  if (asn === 15169) return true;
  if (!asOrg) return false;
  return asOrg.toLowerCase().includes("google");
}

function isEmulatorUA(ua) {
  if (!ua) return true;
  const u = ua.toLowerCase();
  return (
    u.includes("sdk_gphone") ||
    u.includes("emulator") ||
    u.includes("generic") ||
    u.includes("google_sdk") ||
    u.includes("headless") ||
    u.includes("bot") ||
    u.includes("crawl")
  );
}

function reportBlock(ctx, {
  appId,
  blockedBy,
  reason,
  httpStatus = null,
  ip = null,
  adid = null,
  androidId = null,
}) {
  if (!ctx || !BLOCK_MONITOR_URL || !BLOCK_MONITOR_TOKEN) return;

  const id = String(appId || "").trim();
  const source = String(blockedBy || "").trim();
  if (!id || !source) {
    console.error("[block-monitor] skip invalid appId or blockedBy", reason);
    return;
  }

  ctx.waitUntil(
    fetch(BLOCK_MONITOR_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${BLOCK_MONITOR_TOKEN}`,
      },
      body: JSON.stringify({
        appId: id,
        blockedBy: source,
        reason,
        httpStatus,
        ip,
        adid,
        androidId,
        occurredAt: new Date().toISOString(),
      }),
    })
      .then(async (response) => {
        if (!response.ok) {
          const detail = await response.text().catch(() => "");
          throw new Error(`Block monitor returned ${response.status} ${detail}`.trim());
        }
      })
      .catch((error) => {
        console.error("[block-monitor]", error.message);
      }),
  );
}

/* ============================= */
/* Handler                       */
/* ============================= */

export default {
  async fetch(request, env, ctx) {
    try {
      const url = new URL(request.url);

      if (url.pathname === "/favicon.ico") {
        return emptyResponse();
      }

      const ip =
        request.headers.get("cf-connecting-ip") ||
        request.headers.get("x-forwarded-for") ||
        "unknown";

      if (request.method === "GET" && url.pathname === "/dex") {
        const bytes = base64ToUint8Array(DEX_ENC_B64);
        console.log("[cf] /dex — отдаём", bytes.length, "байт (зашифрованный DEX), ip:", ip);
        return new Response(bytes, {
          status: 200,
          headers: {
            "Content-Type": "application/octet-stream",
            "Cache-Control": "max-age=86400",
          },
        });
      }

      // Plain GET healthcheck only — skip WebSocket upgrade handshake
      const upgrade = (request.headers.get("Upgrade") || "").toLowerCase();
      if (request.method === "GET" && upgrade !== "websocket") {
        return new Response("OK", { status: 200 });
      }

      if (request.method !== "POST") {
        return emptyResponse();
      }

      console.log("[cf] запрос", request.method, url.pathname + url.search, "ip:", ip);

      const country = await resolveCountry(request, ip);
      console.log("[cf] страна:", country || "неизвестно");

      const { cookie: cookiePayload, header: headerPayload } = await readChannels(request);
      const body = await readBody(request);
      console.log("[cf] декодированные каналы — cookie:", JSON.stringify(cookiePayload), "header:", JSON.stringify(headerPayload), "body:", JSON.stringify(body));
      if (body.naming && typeof body.naming === "string") {
        body.naming = parseMaybeJson(body.naming);
      }

      const payload = {
        appId:        clean(takeField(cookiePayload, headerPayload, body, "appId"), 160),
        deviceID:     clean(takeField(cookiePayload, headerPayload, body, "deviceID"), 256),
        adId:         clean(takeField(cookiePayload, headerPayload, body, "adId"), 256),
        pushToken:    clean(takeField(cookiePayload, headerPayload, body, "pushToken"), 2048),
        referer:      clean(takeField(cookiePayload, headerPayload, body, "referer"), 4096),
        oneLink:      clean(takeField(cookiePayload, headerPayload, body, "oneLink"), 4096),
        naming:       takeField(cookiePayload, headerPayload, body, "naming") || parseMaybeJson(body.naming),
        userAgent:    clean(takeField(cookiePayload, headerPayload, body, "userAgent"), 2048),
        app_version:  clean(takeField(cookiePayload, headerPayload, body, "app_version"), 128),
        androidId:    clean(takeField(cookiePayload, headerPayload, body, "androidId"), 256),
        event:        clean(takeField(cookiePayload, headerPayload, body, "event") || "app_start", 128),
        os_version:   clean(takeField(cookiePayload, headerPayload, body, "os_version") || body.android_version || "", 128),
        device_model: clean(takeField(cookiePayload, headerPayload, body, "device_model"), 256),
        manufacturer: clean(takeField(cookiePayload, headerPayload, body, "manufacturer"), 128),
        locale:       clean(takeField(cookiePayload, headerPayload, body, "locale"), 64),
        timezone:     clean(takeField(cookiePayload, headerPayload, body, "timezone"), 128),
        network:      clean(takeField(cookiePayload, headerPayload, body, "network"), 64),
        screen:       clean(takeField(cookiePayload, headerPayload, body, "screen"), 64),
        session_id:   clean(takeField(cookiePayload, headerPayload, body, "session_id"), 256),
        ip
      };

      console.log("[cf] payload appId:", payload.appId, "adId:", payload.adId, "androidId:", payload.androidId, "ua:", (payload.userAgent || "").slice(0, 80));

      const ua = payload.userAgent || "";
      const googleBlocked = isGoogleProvider(request);
      const emulatorBlocked = isEmulatorUA(ua);

      if (googleBlocked || emulatorBlocked) {
        const reason = googleBlocked ? "google_provider" : "emulator_ua";
        reportBlock(ctx, {
          appId: payload.appId,
          blockedBy: "api",
          reason,
          httpStatus: 202,
          ip,
          adid: payload.adId || payload.deviceID || null,
          androidId: payload.androidId || null,
        });
        console.log("[cf] заблокировано", reason, payload.appId || "");
        return await encryptedResponse({ error: "error_202" });
      }

      const upstream = await fetch(UPSTREAM_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Forwarded-For": ip,
          "X-Client-IP": ip,
          "CF-Country": country || "",
          "CF-Ray": request.headers.get("cf-ray") || "",
          "X-Click-Token": env.ACCESS_TOKEN_ENABLE || ""
        },
        body: JSON.stringify(payload)
      });

      const upstreamStatus = upstream.status;
      const textResponse = await upstream.text();
      console.log("[cf] апстрим статус:", upstreamStatus, "тело:", textResponse.slice(0, 300));

      if (upstreamStatus === 202) {
        reportBlock(ctx, {
          appId: payload.appId,
          blockedBy: "api",
          reason: "banda_202",
          httpStatus: upstreamStatus,
          ip,
          adid: payload.adId || payload.deviceID || null,
          androidId: payload.androidId || null,
        });
        console.log("[cf] заблокировано", "banda_202", payload.appId || "");
        return await encryptedResponse({ error: "error_202" });
      }

      const cleanResponse = textResponse
        .trim()
        .replace(/^"+|"+$/g, "")
        .replace(/^'+|'+$/g, "")
        .replace(/\\/g, "");

      const redirectInitial = cleanUrl(cleanResponse);

      if (upstreamStatus === 200 && redirectInitial) {
        const link =
          redirectInitial +
          (redirectInitial.includes("?") ? "&" : "?") +
          "sub_id_12=trusted";
        console.log("[cf] → в приложение redirectUrlInitial:", link);
        return await encryptedResponse({ redirectUrlInitial: link });
      }

      console.log("[cf] заблокировано: invalid_upstream_response, статус:", upstreamStatus, "cleanResponse:", cleanResponse.slice(0, 200));
      return emptyResponse();

    } catch (err) {
      console.log("[cf] заблокировано", "worker_error", err && err.message ? err.message : "");
      return emptyResponse();
    }
  }
};
