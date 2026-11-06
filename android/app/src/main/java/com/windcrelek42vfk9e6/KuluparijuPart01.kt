/* autosetup-split:v1 */
package com.windcrelek42vfk9e6

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import okhttp3.OkHttpClient
import okhttp3.Request
import java.util.concurrent.TimeUnit
import com.google.gson.JsonParser

object KuluparijuPart01 {
    fun jixinamajej(body: String): String {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV5_u1 = wiandcvreekhmKuluparijuPart01ObfV5SumOdds(intArrayOf(3, 18, 21)) xor wiandcvreekhmKuluparijuPart01ObfV5ClampMod(44, 31) xor wiandcvreekhmKuluparijuPart01ObfV5ShiftXor(30, 9) xor wiandcvreekhmKuluparijuPart01ObfV5ByteFold("0p8")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV4_u2 = wiandcvreekhmKuluparijuPart01ObfV4HashMix("96h09") xor wiandcvreekhmKuluparijuPart01ObfV4SumOdds(intArrayOf(17, 24, 3)) xor wiandcvreekhmKuluparijuPart01ObfV4ClampMod(66, 61) xor wiandcvreekhmKuluparijuPart01ObfV4ShiftXor(52, 23)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV3_u3 = wiandcvreekhmKuluparijuPart01ObfV3ByteFold("3eja") xor wiandcvreekhmKuluparijuPart01ObfV3HashMix("ilc")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV2_u4 = wiandcvreekhmKuluparijuPart01ObfV2ByteFold("94") xor wiandcvreekhmKuluparijuPart01ObfV2HashMix("op2")
    @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV1_u5 = wiandcvreekhmKuluparijuObfV1ClampMod(51, 42) xor wiandcvreekhmKuluparijuObfV1ShiftXor(13, 76) xor wiandcvreekhmKuluparijuObfV1ByteFold("h0poh8") xor wiandcvreekhmKuluparijuObfV1HashMix("mbgdip")
    val element = JsonParser.parseString(body)
    return element.toString().length.toString()
}

    fun wiandcvreekhmKuluparijuObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 23) + 7
    val x = ((n xor 247) shl 2) % span
    return if (x < 0) x + span else x
}

    fun wiandcvreekhmKuluparijuObfV1ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 183) and 20155
}

    fun wiandcvreekhmKuluparijuObfV1ByteFold(s: String): Int {
    var x = 51
    for (i in s.indices) x = (x + s[i].code * 28) and 17379
    return x
}

    fun wiandcvreekhmKuluparijuObfV1HashMix(s: String): Int {
    var h = 90
    for (i in s.indices) h = (h xor (s[i].code * 6)) % 256
    return h
}
}

/* obfuscation-batch:v2 */
private fun wiandcvreekhmKuluparijuPart01ObfV2ByteFold(s: String): Int {
    var x = 36
    for (i in s.indices) x = (x + s[i].code * 28) and 50594
    return x
}
private fun wiandcvreekhmKuluparijuPart01ObfV2HashMix(s: String): Int {
    var h = 75
    for (i in s.indices) h = (h xor (s[i].code * 24)) % 382
    return h
}

/* obfuscation-batch:v3 */
private fun wiandcvreekhmKuluparijuPart01ObfV3ByteFold(s: String): Int {
    var x = 82
    for (i in s.indices) x = (x + s[i].code * 41) and 11892
    return x
}
private fun wiandcvreekhmKuluparijuPart01ObfV3HashMix(s: String): Int {
    var h = 15
    for (i in s.indices) h = (h xor (s[i].code * 9)) % 656
    return h
}

/* obfuscation-batch:v4 */
private fun wiandcvreekhmKuluparijuPart01ObfV4HashMix(s: String): Int {
    var h = 79
    for (i in s.indices) h = (h xor (s[i].code * 27)) % 711
    return h
}
private fun wiandcvreekhmKuluparijuPart01ObfV4SumOdds(nums: IntArray): Int {
    var acc = 36
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 32) % 484
    }
    return acc
}
private fun wiandcvreekhmKuluparijuPart01ObfV4ClampMod(n: Int, m: Int): Int {
    val span = (m % 61) + 8
    val x = ((n xor 24) shl 1) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmKuluparijuPart01ObfV4ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 4
    return (x xor 168) and 23809
}

/* obfuscation-batch:v5 */
private fun wiandcvreekhmKuluparijuPart01ObfV5SumOdds(nums: IntArray): Int {
    var acc = 61
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 4) % 455
    }
    return acc
}
private fun wiandcvreekhmKuluparijuPart01ObfV5ClampMod(n: Int, m: Int): Int {
    val span = (m % 26) + 4
    val x = ((n xor 166) shl 7) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmKuluparijuPart01ObfV5ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 4
    return (x xor 12) and 54191
}
private fun wiandcvreekhmKuluparijuPart01ObfV5ByteFold(s: String): Int {
    var x = 53
    for (i in s.indices) x = (x + s[i].code * 17) and 44178
    return x
}
