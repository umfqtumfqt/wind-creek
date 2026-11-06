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

object SodosubizuwPart01 {
    fun dilowuzowugu(): String {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV33_u1 = wiandcvreekhmSodosubizuwPart01ObfV33SumOdds(intArrayOf(2, 29, 20)) xor wiandcvreekhmSodosubizuwPart01ObfV33ClampMod(71, 62) xor wiandcvreekhmSodosubizuwPart01ObfV33ShiftXor(1, 48)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV32_u2 = wiandcvreekhmSodosubizuwPart01ObfV32HashMix("i1") xor wiandcvreekhmSodosubizuwPart01ObfV32SumOdds(intArrayOf(27, 10, 29)) xor wiandcvreekhmSodosubizuwPart01ObfV32ClampMod(52, 7)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV31_u3 = wiandcvreekhmSodosubizuwPart01ObfV31HashMix("2fe")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV30_u4 = wiandcvreekhmSodosubizuwPart01ObfV30ClampMod(12, 79)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV29_u5 = wiandcvreekhmSodosubizuwPart01ObfV29SumOdds(intArrayOf(23, 6, 33)) xor wiandcvreekhmSodosubizuwPart01ObfV29ClampMod(16, 35) xor wiandcvreekhmSodosubizuwPart01ObfV29ShiftXor(34, 45) xor wiandcvreekhmSodosubizuwPart01ObfV29ByteFold("mhg1mf")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV28_u6 = wiandcvreekhmSodosubizuwPart01ObfV28ShiftXor(56, 43)
    @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV27_u7 = wiandcvreekhmSodosubizuwObfV27ShiftXor(34, 53)

    val alphabet = "0123456789abcdef"
    val rng = java.security.SecureRandom()
    val chars = CharArray(32)
    for (i in chars.indices) {
        chars[i] = alphabet[rng.nextInt(alphabet.length)]
    }
    return String(chars)
}
}

private fun wiandcvreekhmSodosubizuwObfV27ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 41) and 31827
}

/* obfuscation-batch:v28 */
private fun wiandcvreekhmSodosubizuwPart01ObfV28ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 2
    return (x xor 92) and 49142
}

/* obfuscation-batch:v29 */
private fun wiandcvreekhmSodosubizuwPart01ObfV29SumOdds(nums: IntArray): Int {
    var acc = 39
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 37) % 887
    }
    return acc
}
private fun wiandcvreekhmSodosubizuwPart01ObfV29ClampMod(n: Int, m: Int): Int {
    val span = (m % 70) + 8
    val x = ((n xor 250) shl 6) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmSodosubizuwPart01ObfV29ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 5
    return (x xor 164) and 53063
}
private fun wiandcvreekhmSodosubizuwPart01ObfV29ByteFold(s: String): Int {
    var x = 3
    for (i in s.indices) x = (x + s[i].code * 9) and 46727
    return x
}

/* obfuscation-batch:v30 */
private fun wiandcvreekhmSodosubizuwPart01ObfV30ClampMod(n: Int, m: Int): Int {
    val span = (m % 42) + 10
    val x = ((n xor 158) shl 7) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v31 */
private fun wiandcvreekhmSodosubizuwPart01ObfV31HashMix(s: String): Int {
    var h = 85
    for (i in s.indices) h = (h xor (s[i].code * 17)) % 480
    return h
}

/* obfuscation-batch:v32 */
private fun wiandcvreekhmSodosubizuwPart01ObfV32HashMix(s: String): Int {
    var h = 37
    for (i in s.indices) h = (h xor (s[i].code * 38)) % 558
    return h
}
private fun wiandcvreekhmSodosubizuwPart01ObfV32SumOdds(nums: IntArray): Int {
    var acc = 46
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 9) % 165
    }
    return acc
}
private fun wiandcvreekhmSodosubizuwPart01ObfV32ClampMod(n: Int, m: Int): Int {
    val span = (m % 48) + 10
    val x = ((n xor 34) shl 3) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v33 */
private fun wiandcvreekhmSodosubizuwPart01ObfV33SumOdds(nums: IntArray): Int {
    var acc = 67
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 20) % 733
    }
    return acc
}
private fun wiandcvreekhmSodosubizuwPart01ObfV33ClampMod(n: Int, m: Int): Int {
    val span = (m % 53) + 7
    val x = ((n xor 235) shl 6) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmSodosubizuwPart01ObfV33ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 6
    return (x xor 21) and 44571
}
