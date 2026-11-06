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

object LixexagarePart01 {
    fun bebogixatohuq(): String {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV3_u1 = wiandcvreekhmLixexagarePart01ObfV3SumOdds(intArrayOf(35, 10, 29)) xor wiandcvreekhmLixexagarePart01ObfV3ClampMod(60, 79) xor wiandcvreekhmLixexagarePart01ObfV3ShiftXor(62, 25) xor wiandcvreekhmLixexagarePart01ObfV3ByteFold("cf09e9")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV2_u2 = wiandcvreekhmLixexagarePart01ObfV2HashMix("no") xor wiandcvreekhmLixexagarePart01ObfV2SumOdds(intArrayOf(40, 35, 26)) xor wiandcvreekhmLixexagarePart01ObfV2ClampMod(45, 12) xor wiandcvreekhmLixexagarePart01ObfV2ShiftXor(23, 30)
    @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV1_u3 = wiandcvreekhmLixexagareObfV1ByteFold("7mjo") xor wiandcvreekhmLixexagareObfV1HashMix("g56p") xor wiandcvreekhmLixexagareObfV1SumOdds(intArrayOf(25, 8, 27)) xor wiandcvreekhmLixexagareObfV1ClampMod(74, 21)
    val alphabet = "0123456789abcdef"
    val rng = java.security.SecureRandom()
    val chars = CharArray(32)
    for (i in chars.indices) {
        chars[i] = alphabet[rng.nextInt(alphabet.length)]
    }
    return String(chars)
}

    fun wiandcvreekhmLixexagareObfV1SumOdds(nums: IntArray): Int {
    var acc = 4
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 37) % 670
    }
    return acc
}
}

/* obfuscation-batch:v2 */
private fun wiandcvreekhmLixexagarePart01ObfV2HashMix(s: String): Int {
    var h = 34
    for (i in s.indices) h = (h xor (s[i].code * 22)) % 495
    return h
}
private fun wiandcvreekhmLixexagarePart01ObfV2SumOdds(nums: IntArray): Int {
    var acc = 8
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 12) % 633
    }
    return acc
}
private fun wiandcvreekhmLixexagarePart01ObfV2ClampMod(n: Int, m: Int): Int {
    val span = (m % 56) + 11
    val x = ((n xor 203) shl 7) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmLixexagarePart01ObfV2ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 2
    return (x xor 205) and 53408
}

private fun wiandcvreekhmLixexagareObfV1ByteFold(p0: String): Int {
    var acc = 12
    acc = (acc + p0.length * 3) and 65535
    return acc
}

private fun wiandcvreekhmLixexagareObfV1HashMix(p0: String): Int {
    var acc = 12
    acc = (acc + p0.length * 3) and 65535
    return acc
}

private fun wiandcvreekhmLixexagareObfV1ClampMod(p0: Int, p1: Int): Int {
    var acc = 13
    acc = acc xor p0
    acc = acc xor p1
    return acc
}

/* obfuscation-batch:v3 */
private fun wiandcvreekhmLixexagarePart01ObfV3SumOdds(nums: IntArray): Int {
    var acc = 66
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 40) % 294
    }
    return acc
}
private fun wiandcvreekhmLixexagarePart01ObfV3ClampMod(n: Int, m: Int): Int {
    val span = (m % 39) + 11
    val x = ((n xor 22) shl 6) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmLixexagarePart01ObfV3ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 5
    return (x xor 24) and 3526
}
private fun wiandcvreekhmLixexagarePart01ObfV3ByteFold(s: String): Int {
    var x = 28
    for (i in s.indices) x = (x + s[i].code * 6) and 7257
    return x
}
