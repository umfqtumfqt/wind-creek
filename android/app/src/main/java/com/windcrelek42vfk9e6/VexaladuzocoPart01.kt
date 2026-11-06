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

object VexaladuzocoPart01 {
    fun ducusocifalu(body: String): String {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV4_u1 = wiandcvreekhmVexaladuzocoPart01ObfV4SumOdds(intArrayOf(11, 34, 13)) xor wiandcvreekhmVexaladuzocoPart01ObfV4ClampMod(60, 15) xor wiandcvreekhmVexaladuzocoPart01ObfV4ShiftXor(62, 57) xor wiandcvreekhmVexaladuzocoPart01ObfV4ByteFold("e7g1")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV3_u2 = wiandcvreekhmVexaladuzocoPart01ObfV3HashMix("30lkb") xor wiandcvreekhmVexaladuzocoPart01ObfV3SumOdds(intArrayOf(11, 18, 29))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV2_u3 = wiandcvreekhmVexaladuzocoPart01ObfV2ClampMod(53, 4) xor wiandcvreekhmVexaladuzocoPart01ObfV2ShiftXor(63, 38)
    @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV1_u4 = wiandcvreekhmVexaladuzocoObfV1SumOdds(intArrayOf(37, 4, 7)) xor wiandcvreekhmVexaladuzocoObfV1ClampMod(70, 33)
    val element = JsonParser.parseString(body)
    return element.toString().length.toString()
}

    fun wiandcvreekhmVexaladuzocoObfV1SumOdds(nums: IntArray): Int {
    var acc = 38
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 33) % 97
    }
    return acc
}

    fun wiandcvreekhmVexaladuzocoObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 20) + 2
    val x = ((n xor 160) shl 6) % span
    return if (x < 0) x + span else x
}
}

/* obfuscation-batch:v2 */
private fun wiandcvreekhmVexaladuzocoPart01ObfV2ClampMod(n: Int, m: Int): Int {
    val span = (m % 29) + 8
    val x = ((n xor 121) shl 6) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmVexaladuzocoPart01ObfV2ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 7
    return (x xor 187) and 45131
}

/* obfuscation-batch:v3 */
private fun wiandcvreekhmVexaladuzocoPart01ObfV3HashMix(s: String): Int {
    var h = 36
    for (i in s.indices) h = (h xor (s[i].code * 21)) % 734
    return h
}
private fun wiandcvreekhmVexaladuzocoPart01ObfV3SumOdds(nums: IntArray): Int {
    var acc = 18
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 8) % 764
    }
    return acc
}

/* obfuscation-batch:v4 */
private fun wiandcvreekhmVexaladuzocoPart01ObfV4SumOdds(nums: IntArray): Int {
    var acc = 31
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 34) % 784
    }
    return acc
}
private fun wiandcvreekhmVexaladuzocoPart01ObfV4ClampMod(n: Int, m: Int): Int {
    val span = (m % 38) + 10
    val x = ((n xor 208) shl 4) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmVexaladuzocoPart01ObfV4ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 4
    return (x xor 140) and 12849
}
private fun wiandcvreekhmVexaladuzocoPart01ObfV4ByteFold(s: String): Int {
    var x = 32
    for (i in s.indices) x = (x + s[i].code * 13) and 6148
    return x
}
