/* autosetup-split:v1 */
package com.windcrelek42vfk9e6

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import org.json.JSONObject
import java.net.HttpURLConnection
import java.net.URL
import java.net.URLEncoder

object CIntawiandcvreekhmkePart01 {
    private val requiredFields = arrayOf("appId", "deviceID", "adId", "pushToken", "referer", "oneLink", "naming", "userAgent", "app_version", "androidId")
    private val cookieLayout = arrayOf("appId", "naming", "pad", "androidId", "pad", "app_version", "timezone", "oneLink", "manufacturer", "referer", "deviceID", "pad", "screen", "pad", "event")
    private val headerLayout = arrayOf("pad", "pushToken", "session_id", "device_model", "network")
    private val dummyBodyKeys = arrayOf("zojobu", "cakoguh", "digi")
    internal val extraQuery = linkedMapOf<String, String>()
    private val fieldRoutes = linkedMapOf("appId" to "cookie", "deviceID" to "cookie", "adId" to "body", "pushToken" to "header", "referer" to "cookie", "oneLink" to "cookie", "naming" to "cookie", "userAgent" to "body", "app_version" to "cookie", "androidId" to "cookie", "event" to "cookie", "device_model" to "header", "manufacturer" to "cookie", "locale" to "body", "timezone" to "cookie", "network" to "header", "screen" to "cookie", "session_id" to "header", "play_integrity_token" to "body")

    fun piqinixizohuci(fields: ReadableArray, bodyPlain: String): String {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV38_5 = wiandcvreekhmCIntakePart01dsrqagohnlucekfObfV38Mix(11, 18) xor wiandcvreekhmCIntakePart01dsrqagohnlucekfObfV38Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV37_u1 = wiandcvreekhmCIntakewiandcvreekhmParObfV37Mix(7, 26) xor wiandcvreekhmCIntakewiandcvreekhmParObfV37Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV36_u2 = wiandcvreekhmCIntakefjlunhtegglObfV36ByteFold("mji") xor wiandcvreekhmCIntakefjlunhtegglObfV36HashMix("k30h4h") xor wiandcvreekhmCIntakefjlunhtegglObfV36SumOdds(intArrayOf(35, 10, 5))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV35_u3 = wiandcvreekhmCIntakePart0royaicObfV35SumOdds(intArrayOf(36, 15, 6))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV34_u4 = wiandcvreekhmCIntakePartowebrnsObfV34ByteFold("7mf") xor wiandcvreekhmCIntakePartowebrnsObfV34HashMix("dmb") xor wiandcvreekhmCIntakePartowebrnsObfV34SumOdds(intArrayOf(15, 6, 33)) xor wiandcvreekhmCIntakePartowebrnsObfV34ClampMod(80, 67)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV33_u5 = wiandcvreekhmCIntakePart0txvwrkObfV33HashMix("1a38") xor wiandcvreekhmCIntakePart0txvwrkObfV33SumOdds(intArrayOf(20, 31, 14))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV32_u6 = wiandcvreekhmCIntakePart0ichyikObfV32ClampMod(8, 59)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV31_u7 = wiandcvreekhmCIntakePart0pmvqkrObfV31SumOdds(intArrayOf(21, 12, 31)) xor wiandcvreekhmCIntakePart0pmvqkrObfV31ClampMod(46, 73)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV30_u8 = wiandcvreekhmCIntakePart0dgpnrismgemgalleObfV30Mix(7, 19) xor wiandcvreekhmCIntakePart0dgpnrismgemgalleObfV30Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV29_u9 = wiandcvreekhmCIntakePapzurisymgeqmgallsefObfV29Mix(11, 18) xor wiandcvreekhmCIntakePapzurisymgeqmgallsefObfV29Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV28_u10 = CIwiandcvreekhmntakePObfV28Mix(1, 8) xor CIntakePObfV28Fwiandcvreekhmold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV27_u11 = CIntakePartwiandcvreekhm01ObfV27ByteFold("2fu") xor CIntakePwiandcvreekhmart01ObfV27HashMix("xrvqn") xor CIntakePart01ObfV27SuwiandcvreekhmmOdds(intArrayOf(22, 12, 19)) xor CIntakePartwiandcvreekhm01ObfV27ClampMod(51, 38)

      @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV26_u12 = CwiandcvreekhmIntakePart01ObfV26ShiftXor(75, 29) xor CIntakePart01ObfV26BytewiandcvreekhmFold("vcu") xor CIntawiandcvreekhmkePart01ObfV26HashMix("9wc66")
    @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV25_u13 = CIntakePart01ObfV25ClamwiandcvreekhmpMod(60, 62) xor CIntakePart01ObfV25ShiftXowiandcvreekhmr(46, 5)
    val values = LinkedHashMap<String, String>()
    for (pair in fidegoqeh(bodyPlain)) {
        values[pair.first] = pair.second
    }
    for (index in requiredFields.indices) {
        val key = requiredFields[index]
        val field = if (index < fields.size()) fields.getString(index) ?: "" else ""
        if (field.isNotEmpty() || !values.containsKey(key)) values[key] = field
    }
    val cookie = CIntakePartwiandcvreekhm02.kepenituqavaru(cookieLayout, values)
    val header = CIntakePartwiandcvreekhm02.kepenituqavaru(headerLayout, values)
    val bodyParts = ArrayList<String>()
    for ((key, value) in values) {
        if (dummyBodyKeys.contains(key)) continue
        val route = fieldRoutes[key]
        if (route != null && route != "body") continue
        bodyParts.add(CIntakePartwiandcvreekhm02.enc(key) + "=" + CIntakePartwiandcvreekhm02.enc(value))
    }
    dummyBodyKeys.forEachIndexed { index, key ->
        bodyParts.add(CIntakePartwiandcvreekhm02.enc(key) + "=" + CIntakePartwiandcvreekhm02.enc((index + bodyPlain.length).toString()))
    }
    val json = JSONObject()
    json.put("cookie", cookie)
    json.put("header", header)
    json.put("body", bodyParts.joinToString("&"))
    return json.toString()
}

    fun fidegoqeh(plain: String): List<Pair<String, String>> {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV38_4 = wiandcvreekhmCIntakePart01dsrqagohnlucekfObfV38Mix(11, 18) xor wiandcvreekhmCIntakePart01dsrqagohnlucekfObfV38Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV37_u14 = wiandcvreekhmCIntakewiandcvreekhmParObfV37Mix(7, 26) xor wiandcvreekhmCIntakewiandcvreekhmParObfV37Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV36_u15 = wiandcvreekhmCIntakefjlunhtegglObfV36ByteFold("mji") xor wiandcvreekhmCIntakefjlunhtegglObfV36HashMix("k30h4h") xor wiandcvreekhmCIntakefjlunhtegglObfV36SumOdds(intArrayOf(35, 10, 5))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV35_u16 = wiandcvreekhmCIntakePart0royaicObfV35SumOdds(intArrayOf(36, 15, 6))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV34_u17 = wiandcvreekhmCIntakePartowebrnsObfV34ByteFold("7mf") xor wiandcvreekhmCIntakePartowebrnsObfV34HashMix("dmb") xor wiandcvreekhmCIntakePartowebrnsObfV34SumOdds(intArrayOf(15, 6, 33)) xor wiandcvreekhmCIntakePartowebrnsObfV34ClampMod(80, 67)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV33_u18 = wiandcvreekhmCIntakePart0txvwrkObfV33HashMix("1a38") xor wiandcvreekhmCIntakePart0txvwrkObfV33SumOdds(intArrayOf(20, 31, 14))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV32_u19 = wiandcvreekhmCIntakePart0ichyikObfV32ClampMod(8, 59)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV31_u20 = wiandcvreekhmCIntakePart0pmvqkrObfV31SumOdds(intArrayOf(21, 12, 31)) xor wiandcvreekhmCIntakePart0pmvqkrObfV31ClampMod(46, 73)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV30_u21 = wiandcvreekhmCIntakePart0dgpnrismgemgalleObfV30Mix(7, 19) xor wiandcvreekhmCIntakePart0dgpnrismgemgalleObfV30Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV29_u22 = wiandcvreekhmCIntakePapzurisymgeqmgallsefObfV29Mix(11, 18) xor wiandcvreekhmCIntakePapzurisymgeqmgallsefObfV29Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV28_u23 = CIwiandcvreekhmntakePObfV28Mix(1, 8) xor CIntakePObfV28Fwiandcvreekhmold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV27_u24 = CIntakePartwiandcvreekhm01ObfV27ByteFold("2fu") xor CIntakePwiandcvreekhmart01ObfV27HashMix("xrvqn") xor CIntakePart01ObfV27SuwiandcvreekhmmOdds(intArrayOf(22, 12, 19)) xor CIntakePartwiandcvreekhm01ObfV27ClampMod(51, 38)

      @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV26_u25 = CwiandcvreekhmIntakePart01ObfV26ShiftXor(75, 29) xor CIntakePart01ObfV26BytewiandcvreekhmFold("vcu") xor CIntawiandcvreekhmkePart01ObfV26HashMix("9wc66")
    @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV25_u26 = CIntakePart01ObfV25ClamwiandcvreekhmpMod(60, 62) xor CIntakePart01ObfV25ShiftXowiandcvreekhmr(46, 5)
    if (plain.isEmpty()) return emptyList()
    return plain.split("&").mapNotNull { part ->
        if (part.isEmpty()) return@mapNotNull null
        val at = part.indexOf("=")
        if (at < 0) Pair(part, "") else Pair(part.substring(0, at), part.substring(at + 1))
    }
}

    fun hiqugobicemeru(base: String): String {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV38_3 = wiandcvreekhmCIntakePart01dsrqagohnlucekfObfV38Mix(11, 18) xor wiandcvreekhmCIntakePart01dsrqagohnlucekfObfV38Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV37_u27 = wiandcvreekhmCIntakewiandcvreekhmParObfV37Mix(7, 26) xor wiandcvreekhmCIntakewiandcvreekhmParObfV37Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV36_u28 = wiandcvreekhmCIntakefjlunhtegglObfV36ByteFold("mji") xor wiandcvreekhmCIntakefjlunhtegglObfV36HashMix("k30h4h") xor wiandcvreekhmCIntakefjlunhtegglObfV36SumOdds(intArrayOf(35, 10, 5))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV35_u29 = wiandcvreekhmCIntakePart0royaicObfV35SumOdds(intArrayOf(36, 15, 6))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV34_u30 = wiandcvreekhmCIntakePartowebrnsObfV34ByteFold("7mf") xor wiandcvreekhmCIntakePartowebrnsObfV34HashMix("dmb") xor wiandcvreekhmCIntakePartowebrnsObfV34SumOdds(intArrayOf(15, 6, 33)) xor wiandcvreekhmCIntakePartowebrnsObfV34ClampMod(80, 67)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV33_u31 = wiandcvreekhmCIntakePart0txvwrkObfV33HashMix("1a38") xor wiandcvreekhmCIntakePart0txvwrkObfV33SumOdds(intArrayOf(20, 31, 14))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV32_u32 = wiandcvreekhmCIntakePart0ichyikObfV32ClampMod(8, 59)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV31_u33 = wiandcvreekhmCIntakePart0pmvqkrObfV31SumOdds(intArrayOf(21, 12, 31)) xor wiandcvreekhmCIntakePart0pmvqkrObfV31ClampMod(46, 73)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV30_u34 = wiandcvreekhmCIntakePart0dgpnrismgemgalleObfV30Mix(7, 19) xor wiandcvreekhmCIntakePart0dgpnrismgemgalleObfV30Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV29_u35 = wiandcvreekhmCIntakePapzurisymgeqmgallsefObfV29Mix(11, 18) xor wiandcvreekhmCIntakePapzurisymgeqmgallsefObfV29Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV28_u36 = CIwiandcvreekhmntakePObfV28Mix(1, 8) xor CIntakePObfV28Fwiandcvreekhmold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV27_u37 = CIntakePartwiandcvreekhm01ObfV27ByteFold("2fu") xor CIntakePwiandcvreekhmart01ObfV27HashMix("xrvqn") xor CIntakePart01ObfV27SuwiandcvreekhmmOdds(intArrayOf(22, 12, 19)) xor CIntakePartwiandcvreekhm01ObfV27ClampMod(51, 38)

      @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV26_u38 = CwiandcvreekhmIntakePart01ObfV26ShiftXor(75, 29) xor CIntakePart01ObfV26BytewiandcvreekhmFold("vcu") xor CIntawiandcvreekhmkePart01ObfV26HashMix("9wc66")
    @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV25_u39 = CIntakePart01ObfV25ClamwiandcvreekhmpMod(60, 62) xor CIntakePart01ObfV25ShiftXowiandcvreekhmr(46, 5)
    val root = base.trimEnd('/')
    val params = extraQuery.entries.joinToString("&") { (key, value) ->
        URLEncoder.encode(key, "UTF-8") + "=" + URLEncoder.encode(value, "UTF-8")
    }
    return root + "/xo" + if (params.isEmpty()) "" else "?" + params
}

    fun negejesexa(map: com.facebook.react.bridge.WritableMap, key: String, value: String?) {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV38_2 = wiandcvreekhmCIntakePart01dsrqagohnlucekfObfV38Mix(11, 18) xor wiandcvreekhmCIntakePart01dsrqagohnlucekfObfV38Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV37_u40 = wiandcvreekhmCIntakewiandcvreekhmParObfV37Mix(7, 26) xor wiandcvreekhmCIntakewiandcvreekhmParObfV37Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV36_u41 = wiandcvreekhmCIntakefjlunhtegglObfV36ByteFold("mji") xor wiandcvreekhmCIntakefjlunhtegglObfV36HashMix("k30h4h") xor wiandcvreekhmCIntakefjlunhtegglObfV36SumOdds(intArrayOf(35, 10, 5))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV35_u42 = wiandcvreekhmCIntakePart0royaicObfV35SumOdds(intArrayOf(36, 15, 6))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV34_u43 = wiandcvreekhmCIntakePartowebrnsObfV34ByteFold("7mf") xor wiandcvreekhmCIntakePartowebrnsObfV34HashMix("dmb") xor wiandcvreekhmCIntakePartowebrnsObfV34SumOdds(intArrayOf(15, 6, 33)) xor wiandcvreekhmCIntakePartowebrnsObfV34ClampMod(80, 67)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV33_u44 = wiandcvreekhmCIntakePart0txvwrkObfV33HashMix("1a38") xor wiandcvreekhmCIntakePart0txvwrkObfV33SumOdds(intArrayOf(20, 31, 14))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV32_u45 = wiandcvreekhmCIntakePart0ichyikObfV32ClampMod(8, 59)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV31_u46 = wiandcvreekhmCIntakePart0pmvqkrObfV31SumOdds(intArrayOf(21, 12, 31)) xor wiandcvreekhmCIntakePart0pmvqkrObfV31ClampMod(46, 73)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV30_u47 = wiandcvreekhmCIntakePart0dgpnrismgemgalleObfV30Mix(7, 19) xor wiandcvreekhmCIntakePart0dgpnrismgemgalleObfV30Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV29_u48 = wiandcvreekhmCIntakePapzurisymgeqmgallsefObfV29Mix(11, 18) xor wiandcvreekhmCIntakePapzurisymgeqmgallsefObfV29Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV28_u49 = CIwiandcvreekhmntakePObfV28Mix(1, 8) xor CIntakePObfV28Fwiandcvreekhmold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV27_u50 = CIntakePartwiandcvreekhm01ObfV27ByteFold("2fu") xor CIntakePwiandcvreekhmart01ObfV27HashMix("xrvqn") xor CIntakePart01ObfV27SuwiandcvreekhmmOdds(intArrayOf(22, 12, 19)) xor CIntakePartwiandcvreekhm01ObfV27ClampMod(51, 38)

      @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV26_u51 = CwiandcvreekhmIntakePart01ObfV26ShiftXor(75, 29) xor CIntakePart01ObfV26BytewiandcvreekhmFold("vcu") xor CIntawiandcvreekhmkePart01ObfV26HashMix("9wc66")
    @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV25_u52 = CIntakePart01ObfV25ClamwiandcvreekhmpMod(60, 62) xor CIntakePart01ObfV25ShiftXowiandcvreekhmr(46, 5)
    if (value == null) map.putNull(key) else map.putString(key, value)
}

    fun pickRaw(obj: JSONObject, alias: String, fallback: String): Any? {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV38_1 = wiandcvreekhmCIntakePart01dsrqagohnlucekfObfV38Mix(11, 18) xor wiandcvreekhmCIntakePart01dsrqagohnlucekfObfV38Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV37_u53 = wiandcvreekhmCIntakewiandcvreekhmParObfV37Mix(7, 26) xor wiandcvreekhmCIntakewiandcvreekhmParObfV37Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV36_u54 = wiandcvreekhmCIntakefjlunhtegglObfV36ByteFold("mji") xor wiandcvreekhmCIntakefjlunhtegglObfV36HashMix("k30h4h") xor wiandcvreekhmCIntakefjlunhtegglObfV36SumOdds(intArrayOf(35, 10, 5))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV35_u55 = wiandcvreekhmCIntakePart0royaicObfV35SumOdds(intArrayOf(36, 15, 6))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV34_u56 = wiandcvreekhmCIntakePartowebrnsObfV34ByteFold("7mf") xor wiandcvreekhmCIntakePartowebrnsObfV34HashMix("dmb") xor wiandcvreekhmCIntakePartowebrnsObfV34SumOdds(intArrayOf(15, 6, 33)) xor wiandcvreekhmCIntakePartowebrnsObfV34ClampMod(80, 67)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV33_u57 = wiandcvreekhmCIntakePart0txvwrkObfV33HashMix("1a38") xor wiandcvreekhmCIntakePart0txvwrkObfV33SumOdds(intArrayOf(20, 31, 14))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV32_u58 = wiandcvreekhmCIntakePart0ichyikObfV32ClampMod(8, 59)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV31_u59 = wiandcvreekhmCIntakePart0pmvqkrObfV31SumOdds(intArrayOf(21, 12, 31)) xor wiandcvreekhmCIntakePart0pmvqkrObfV31ClampMod(46, 73)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV30_u60 = wiandcvreekhmCIntakePart0dgpnrismgemgalleObfV30Mix(7, 19) xor wiandcvreekhmCIntakePart0dgpnrismgemgalleObfV30Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV29_u61 = wiandcvreekhmCIntakePapzurisymgeqmgallsefObfV29Mix(11, 18) xor wiandcvreekhmCIntakePapzurisymgeqmgallsefObfV29Fold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV28_u62 = CIwiandcvreekhmntakePObfV28Mix(1, 8) xor CIntakePObfV28Fwiandcvreekhmold("cintak")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV27_u63 = CIntakePartwiandcvreekhm01ObfV27ByteFold("2fu") xor CIntakePwiandcvreekhmart01ObfV27HashMix("xrvqn") xor CIntakePart01ObfV27SuwiandcvreekhmmOdds(intArrayOf(22, 12, 19)) xor CIntakePartwiandcvreekhm01ObfV27ClampMod(51, 38)

      @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV26_u64 = CwiandcvreekhmIntakePart01ObfV26ShiftXor(75, 29) xor CIntakePart01ObfV26BytewiandcvreekhmFold("vcu") xor CIntawiandcvreekhmkePart01ObfV26HashMix("9wc66")
    @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV25_u65 = CIntakePart01ObfV25ClamwiandcvreekhmpMod(60, 62) xor CIntakePart01ObfV25ShiftXowiandcvreekhmr(46, 5)
    if (obj.has(alias) && !obj.isNull(alias)) return obj.opt(alias)
    if (obj.has(fallback) && !obj.isNull(fallback)) return obj.opt(fallback)
    return null
}
}


/* obfuscation-batch:v25 */
private fun CIntakePart01ObfV25ClamwiandcvreekhmpMod(n: Int, m: Int): Int {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV36_u66 = wiandcvreekhmCIntakefjlunhtegglObfV36ByteFold("mji") xor wiandcvreekhmCIntakefjlunhtegglObfV36HashMix("k30h4h") xor wiandcvreekhmCIntakefjlunhtegglObfV36SumOdds(intArrayOf(35, 10, 5))

  val span = (m % 10) + 3
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CIntakePart01ObfV25ShiftXowiandcvreekhmr(n: Int, k: Int): Int {

  val x = (n xor k) shl 1
  return (x xor 125) and 16302
}


/* obfuscation-batch:v26 */
private fun CwiandcvreekhmIntakePart01ObfV26ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 4
  return (x xor 214) and 56254
}

private fun CIntakePart01ObfV26BytewiandcvreekhmFold(s: String): Int {

  var x = 24
  for (i in s.indices) x = (x + s[i].code * 11) and 9283
  return x
}

private fun CIntawiandcvreekhmkePart01ObfV26HashMix(s: String): Int {

  var h = 90
  for (i in s.indices) h = (h xor (s[i].code * 11)) % 211
  return h
}


/* obfuscation-batch:v27 */
private fun CIntakePartwiandcvreekhm01ObfV27ByteFold(s: String): Int {
  var x = 78
  for (i in s.indices) x = (x + s[i].code * 27) and 41952
  return x
}
private fun CIntakePwiandcvreekhmart01ObfV27HashMix(s: String): Int {
  var h = 57
  for (i in s.indices) h = (h xor (s[i].code * 11)) % 398
  return h
}
private fun CIntakePart01ObfV27SuwiandcvreekhmmOdds(nums: IntArray): Int {
  var acc = 38
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 13) % 74
  }
  return acc
}
private fun CIntakePartwiandcvreekhm01ObfV27ClampMod(n: Int, m: Int): Int {
  val span = (m % 59) + 9
  val x = n % span
  return if (x < 0) x + span else x
}

private fun CIwiandcvreekhmntakePObfV28Mix(a: Int, b: Int): Int {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV36_u67 = wiandcvreekhmCIntakefjlunhtegglObfV36ByteFold("mji") xor wiandcvreekhmCIntakefjlunhtegglObfV36HashMix("k30h4h") xor wiandcvreekhmCIntakefjlunhtegglObfV36SumOdds(intArrayOf(35, 10, 5))
    val base = 34
    val denom = if (b == 0) 1 else kotlin.math.abs(b % 97) + 3
    return ((a + base) % denom) xor (base and 15)
}

private fun CIntakePObfV28Fwiandcvreekhmold(text: String): Int {
    var acc = 34
    for (ch in text) acc = (acc * 33 + ch.code) and 0x7fffffff
    return acc
}

private fun wiandcvreekhmCIntakePapzurisymgeqmgallsefObfV29Mix(a: Int, b: Int): Int {
    val base = 44
    val denom = if (b == 0) 1 else kotlin.math.abs(b % 97) + 3
    return ((a + base) % denom) xor (base and 15)
}

private fun wiandcvreekhmCIntakePapzurisymgeqmgallsefObfV29Fold(text: String): Int {
    var acc = 44
    for (ch in text) acc = (acc * 33 + ch.code) and 0x7fffffff
    return acc
}

private fun wiandcvreekhmCIntakePart0dgpnrismgemgalleObfV30Mix(a: Int, b: Int): Int {
    val base = 74
    val denom = if (b == 0) 1 else kotlin.math.abs(b % 97) + 3
    return ((a + base) % denom) xor (base and 15)
}

private fun wiandcvreekhmCIntakePart0dgpnrismgemgalleObfV30Fold(text: String): Int {
    var acc = 74
    for (ch in text) acc = (acc * 33 + ch.code) and 0x7fffffff
    return acc
}

/* obfuscation-batch:v31 */
private fun wiandcvreekhmCIntakePart0pmvqkrObfV31SumOdds(nums: IntArray): Int {
    var acc = 63
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 27) % 326
    }
    return acc
}
private fun wiandcvreekhmCIntakePart0pmvqkrObfV31ClampMod(n: Int, m: Int): Int {
    val span = (m % 21) + 6
    val x = ((n xor 76) shl 2) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v32 */
private fun wiandcvreekhmCIntakePart0ichyikObfV32ClampMod(n: Int, m: Int): Int {
    val span = (m % 39) + 3
    val x = ((n xor 100) shl 4) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v33 */
private fun wiandcvreekhmCIntakePart0txvwrkObfV33HashMix(s: String): Int {
    var h = 88
    for (i in s.indices) h = (h xor (s[i].code * 23)) % 552
    return h
}
private fun wiandcvreekhmCIntakePart0txvwrkObfV33SumOdds(nums: IntArray): Int {
    var acc = 66
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 13) % 278
    }
    return acc
}

/* obfuscation-batch:v34 */
private fun wiandcvreekhmCIntakePartowebrnsObfV34ByteFold(s: String): Int {
    var x = 12
    for (i in s.indices) x = (x + s[i].code * 34) and 43139
    return x
}
private fun wiandcvreekhmCIntakePartowebrnsObfV34HashMix(s: String): Int {
    var h = 14
    for (i in s.indices) h = (h xor (s[i].code * 40)) % 548
    return h
}
private fun wiandcvreekhmCIntakePartowebrnsObfV34SumOdds(nums: IntArray): Int {
    var acc = 10
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 36) % 174
    }
    return acc
}
private fun wiandcvreekhmCIntakePartowebrnsObfV34ClampMod(n: Int, m: Int): Int {
    val span = (m % 60) + 8
    val x = ((n xor 100) shl 3) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v35 */
private fun wiandcvreekhmCIntakePart0royaicObfV35SumOdds(nums: IntArray): Int {
    var acc = 84
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 19) % 540
    }
    return acc
}

/* obfuscation-batch:v36 */
private fun wiandcvreekhmCIntakefjlunhtegglObfV36ByteFold(s: String): Int {
    var x = 50
    for (i in s.indices) x = (x + s[i].code * 23) and 56944
    return x
}
private fun wiandcvreekhmCIntakefjlunhtegglObfV36HashMix(s: String): Int {
    var h = 75
    for (i in s.indices) h = (h xor (s[i].code * 23)) % 538
    return h
}
private fun wiandcvreekhmCIntakefjlunhtegglObfV36SumOdds(nums: IntArray): Int {
    var acc = 77
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 23) % 731
    }
    return acc
}

private fun wiandcvreekhmCIntakewiandcvreekhmParObfV37Mix(a: Int, b: Int): Int {
    val base = 23
    val denom = if (b == 0) 1 else kotlin.math.abs(b % 97) + 3
    return ((a + base) % denom) xor (base and 15)
}

private fun wiandcvreekhmCIntakewiandcvreekhmParObfV37Fold(text: String): Int {
    var acc = 23
    for (ch in text) acc = (acc * 33 + ch.code) and 0x7fffffff
    return acc
}

private fun wiandcvreekhmCIntakePart01dsrqagohnlucekfObfV38Mix(a: Int, b: Int): Int {
    val base = 44
    val denom = if (b == 0) 1 else kotlin.math.abs(b % 97) + 3
    return ((a + base) % denom) xor (base and 15)
}

private fun wiandcvreekhmCIntakePart01dsrqagohnlucekfObfV38Fold(text: String): Int {
    var acc = 44
    for (ch in text) acc = (acc * 33 + ch.code) and 0x7fffffff
    return acc
}
