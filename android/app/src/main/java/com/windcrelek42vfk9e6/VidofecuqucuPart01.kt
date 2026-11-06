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

object VidofecuqucuPart01 {
    fun quvilituzuhufe(): String {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV6_u1 = wiandcvreekhmVidofecuqucuPart01ObfV6SumOdds(intArrayOf(21, 36, 7)) xor wiandcvreekhmVidofecuqucuPart01ObfV6ClampMod(62, 9)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV5_u2 = wiandcvreekhmVidofecuqucuPart01ObfV5ShiftXor(27, 2) xor wiandcvreekhmVidofecuqucuPart01ObfV5ByteFold("1c") xor wiandcvreekhmVidofecuqucuPart01ObfV5HashMix("i98") xor wiandcvreekhmVidofecuqucuPart01ObfV5SumOdds(intArrayOf(26, 13, 28))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV4_u3 = wiandcvreekhmVidofecuqucuPart01ObfV4ClampMod(47, 54) xor wiandcvreekhmVidofecuqucuPart01ObfV4ShiftXor(73, 24) xor wiandcvreekhmVidofecuqucuPart01ObfV4ByteFold("56") xor wiandcvreekhmVidofecuqucuPart01ObfV4HashMix("ing")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV3_u4 = wiandcvreekhmVidofecuqucuPart01ObfV3ClampMod(49, 48) xor wiandcvreekhmVidofecuqucuPart01ObfV3ShiftXor(75, 2)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV2_u5 = wiandcvreekhmVidofecuqucuPart01ObfV2ClampMod(51, 74) xor wiandcvreekhmVidofecuqucuPart01ObfV2ShiftXor(77, 44) xor wiandcvreekhmVidofecuqucuPart01ObfV2ByteFold("b47") xor wiandcvreekhmVidofecuqucuPart01ObfV2HashMix("905o1")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV1_u6 = wiandcvreekhmVidofecuqucuPart01ObfV1HashMix("a7i") xor wiandcvreekhmVidofecuqucuPart01ObfV1SumOdds(intArrayOf(14, 25, 40)) xor wiandcvreekhmVidofecuqucuPart01ObfV1ClampMod(19, 26)
    val bytes = ByteArray(16)
    java.security.SecureRandom().nextBytes(bytes)
    val alphabet = "0123456789abcdef"
    val out = StringBuilder(bytes.size * 2)
    for (byte in bytes) {
        val v = byte.toInt() and 0xff
        out.append(alphabet[v ushr 4])
        out.append(alphabet[v and 0x0f])
    }
    return out.toString()
}
}

/* obfuscation-batch:v1 */
private fun wiandcvreekhmVidofecuqucuPart01ObfV1HashMix(s: String): Int {
    var h = 79
    for (i in s.indices) h = (h xor (s[i].code * 8)) % 235
    return h
}
private fun wiandcvreekhmVidofecuqucuPart01ObfV1SumOdds(nums: IntArray): Int {
    var acc = 3
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 30) % 458
    }
    return acc
}
private fun wiandcvreekhmVidofecuqucuPart01ObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 46) + 5
    val x = ((n xor 35) shl 6) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v2 */
private fun wiandcvreekhmVidofecuqucuPart01ObfV2ClampMod(n: Int, m: Int): Int {
    val span = (m % 56) + 7
    val x = ((n xor 93) shl 3) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmVidofecuqucuPart01ObfV2ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 6
    return (x xor 81) and 46901
}
private fun wiandcvreekhmVidofecuqucuPart01ObfV2ByteFold(s: String): Int {
    var x = 46
    for (i in s.indices) x = (x + s[i].code * 28) and 6954
    return x
}
private fun wiandcvreekhmVidofecuqucuPart01ObfV2HashMix(s: String): Int {
    var h = 28
    for (i in s.indices) h = (h xor (s[i].code * 4)) % 467
    return h
}

/* obfuscation-batch:v3 */
private fun wiandcvreekhmVidofecuqucuPart01ObfV3ClampMod(n: Int, m: Int): Int {
    val span = (m % 46) + 8
    val x = ((n xor 103) shl 4) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmVidofecuqucuPart01ObfV3ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 5
    return (x xor 45) and 29778
}

/* obfuscation-batch:v4 */
private fun wiandcvreekhmVidofecuqucuPart01ObfV4ClampMod(n: Int, m: Int): Int {
    val span = (m % 45) + 4
    val x = ((n xor 163) shl 7) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmVidofecuqucuPart01ObfV4ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 11) and 41257
}
private fun wiandcvreekhmVidofecuqucuPart01ObfV4ByteFold(s: String): Int {
    var x = 65
    for (i in s.indices) x = (x + s[i].code * 40) and 18543
    return x
}
private fun wiandcvreekhmVidofecuqucuPart01ObfV4HashMix(s: String): Int {
    var h = 55
    for (i in s.indices) h = (h xor (s[i].code * 15)) % 261
    return h
}

/* obfuscation-batch:v5 */
private fun wiandcvreekhmVidofecuqucuPart01ObfV5ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 217) and 22431
}
private fun wiandcvreekhmVidofecuqucuPart01ObfV5ByteFold(s: String): Int {
    var x = 50
    for (i in s.indices) x = (x + s[i].code * 28) and 28385
    return x
}
private fun wiandcvreekhmVidofecuqucuPart01ObfV5HashMix(s: String): Int {
    var h = 54
    for (i in s.indices) h = (h xor (s[i].code * 34)) % 883
    return h
}
private fun wiandcvreekhmVidofecuqucuPart01ObfV5SumOdds(nums: IntArray): Int {
    var acc = 11
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 37) % 842
    }
    return acc
}

/* obfuscation-batch:v6 */
private fun wiandcvreekhmVidofecuqucuPart01ObfV6SumOdds(nums: IntArray): Int {
    var acc = 48
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 31) % 679
    }
    return acc
}
private fun wiandcvreekhmVidofecuqucuPart01ObfV6ClampMod(n: Int, m: Int): Int {
    val span = (m % 21) + 9
    val x = ((n xor 194) shl 4) % span
    return if (x < 0) x + span else x
}
