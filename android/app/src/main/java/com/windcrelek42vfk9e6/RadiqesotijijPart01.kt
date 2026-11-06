/* autosetup-split:v1 */
package com.windcrelek42vfk9e6

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.google.android.play.core.integrity.IntegrityManagerFactory
import com.google.android.play.core.integrity.StandardIntegrityManager
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicBoolean

object RadiqesotijijPart01 {
    fun suwobupobok(): String {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV6_u1 = wiandcvreekhmRadiqesotijijPart0ObfV6SumOdds(intArrayOf(13, 20, 15)) xor wiandcvreekhmRadiqesotijijPart0ObfV6ClampMod(46, 57)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV5_u2 = wiandcvreekhmRadiqesotijijPart0ObfV5HashMix("din034") xor wiandcvreekhmRadiqesotijijPart0ObfV5SumOdds(intArrayOf(20, 15, 38)) xor wiandcvreekhmRadiqesotijijPart0ObfV5ClampMod(33, 80) xor wiandcvreekhmRadiqesotijijPart0ObfV5ShiftXor(27, 34)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV4_u3 = wiandcvreekhmRadiqesotijijPart0ObfV4ByteFold("bi9g") xor wiandcvreekhmRadiqesotijijPart0ObfV4HashMix("4l0") xor wiandcvreekhmRadiqesotijijPart0ObfV4SumOdds(intArrayOf(14, 33, 40)) xor wiandcvreekhmRadiqesotijijPart0ObfV4ClampMod(35, 10)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV3_u4 = wiandcvreekhmRadiqesotijijPart0ObfV3SumOdds(intArrayOf(37, 28, 39)) xor wiandcvreekhmRadiqesotijijPart0ObfV3ClampMod(38, 33)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV2_u5 = wiandcvreekhmRadiqesotijijPart0ObfV2HashMix("ni") xor wiandcvreekhmRadiqesotijijPart0ObfV2SumOdds(intArrayOf(20, 7, 14)) xor wiandcvreekhmRadiqesotijijPart0ObfV2ClampMod(17, 16) xor wiandcvreekhmRadiqesotijijPart0ObfV2ShiftXor(43, 2)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV1_u6 = wiandcvreekhmRadiqesotijijPart0ObfV1HashMix("il") xor wiandcvreekhmRadiqesotijijPart0ObfV1SumOdds(intArrayOf(39, 14, 25)) xor wiandcvreekhmRadiqesotijijPart0ObfV1ClampMod(40, 59)
    val alphabet = "0123456789abcdef"
    val rng = java.security.SecureRandom()
    val chars = CharArray(32)
    for (i in chars.indices) {
        chars[i] = alphabet[rng.nextInt(alphabet.length)]
    }
    return String(chars)
}
}

/* obfuscation-batch:v1 */
private fun wiandcvreekhmRadiqesotijijPart0ObfV1HashMix(s: String): Int {
    var h = 72
    for (i in s.indices) h = (h xor (s[i].code * 18)) % 544
    return h
}
private fun wiandcvreekhmRadiqesotijijPart0ObfV1SumOdds(nums: IntArray): Int {
    var acc = 88
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 5) % 292
    }
    return acc
}
private fun wiandcvreekhmRadiqesotijijPart0ObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 24) + 5
    val x = ((n xor 18) shl 5) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v2 */
private fun wiandcvreekhmRadiqesotijijPart0ObfV2HashMix(s: String): Int {
    var h = 27
    for (i in s.indices) h = (h xor (s[i].code * 25)) % 146
    return h
}
private fun wiandcvreekhmRadiqesotijijPart0ObfV2SumOdds(nums: IntArray): Int {
    var acc = 79
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 19) % 517
    }
    return acc
}
private fun wiandcvreekhmRadiqesotijijPart0ObfV2ClampMod(n: Int, m: Int): Int {
    val span = (m % 60) + 3
    val x = ((n xor 7) shl 4) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmRadiqesotijijPart0ObfV2ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 93) and 15286
}

/* obfuscation-batch:v3 */
private fun wiandcvreekhmRadiqesotijijPart0ObfV3SumOdds(nums: IntArray): Int {
    var acc = 61
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 35) % 819
    }
    return acc
}
private fun wiandcvreekhmRadiqesotijijPart0ObfV3ClampMod(n: Int, m: Int): Int {
    val span = (m % 59) + 11
    val x = ((n xor 100) shl 1) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v4 */
private fun wiandcvreekhmRadiqesotijijPart0ObfV4ByteFold(s: String): Int {
    var x = 28
    for (i in s.indices) x = (x + s[i].code * 14) and 27348
    return x
}
private fun wiandcvreekhmRadiqesotijijPart0ObfV4HashMix(s: String): Int {
    var h = 69
    for (i in s.indices) h = (h xor (s[i].code * 20)) % 710
    return h
}
private fun wiandcvreekhmRadiqesotijijPart0ObfV4SumOdds(nums: IntArray): Int {
    var acc = 16
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 16) % 131
    }
    return acc
}
private fun wiandcvreekhmRadiqesotijijPart0ObfV4ClampMod(n: Int, m: Int): Int {
    val span = (m % 34) + 9
    val x = ((n xor 137) shl 6) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v5 */
private fun wiandcvreekhmRadiqesotijijPart0ObfV5HashMix(s: String): Int {
    var h = 5
    for (i in s.indices) h = (h xor (s[i].code * 3)) % 259
    return h
}
private fun wiandcvreekhmRadiqesotijijPart0ObfV5SumOdds(nums: IntArray): Int {
    var acc = 13
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 29) % 146
    }
    return acc
}
private fun wiandcvreekhmRadiqesotijijPart0ObfV5ClampMod(n: Int, m: Int): Int {
    val span = (m % 37) + 6
    val x = ((n xor 155) shl 6) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmRadiqesotijijPart0ObfV5ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 2
    return (x xor 197) and 35677
}

/* obfuscation-batch:v6 */
private fun wiandcvreekhmRadiqesotijijPart0ObfV6SumOdds(nums: IntArray): Int {
    var acc = 31
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 37) % 237
    }
    return acc
}
private fun wiandcvreekhmRadiqesotijijPart0ObfV6ClampMod(n: Int, m: Int): Int {
    val span = (m % 62) + 12
    val x = ((n xor 100) shl 7) % span
    return if (x < 0) x + span else x
}
