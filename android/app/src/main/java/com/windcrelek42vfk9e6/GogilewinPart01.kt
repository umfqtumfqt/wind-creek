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

object GogilewinPart01 {
    fun lutamifikuvuqi(): String {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV2_u1 = wiandcvreekhmGogilewinPart01ObfV2SumOdds(intArrayOf(19, 10, 5)) xor wiandcvreekhmGogilewinPart01ObfV2ClampMod(20, 71) xor wiandcvreekhmGogilewinPart01ObfV2ShiftXor(38, 65) xor wiandcvreekhmGogilewinPart01ObfV2ByteFold("29e")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV1_u2 = wiandcvreekhmGogilewinPart01ObfV1HashMix("hale3o") xor wiandcvreekhmGogilewinPart01ObfV1SumOdds(intArrayOf(32, 35, 18)) xor wiandcvreekhmGogilewinPart01ObfV1ClampMod(21, 20) xor wiandcvreekhmGogilewinPart01ObfV1ShiftXor(63, 6)
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
private fun wiandcvreekhmGogilewinPart01ObfV1HashMix(s: String): Int {
    var h = 33
    for (i in s.indices) h = (h xor (s[i].code * 7)) % 563
    return h
}
private fun wiandcvreekhmGogilewinPart01ObfV1SumOdds(nums: IntArray): Int {
    var acc = 52
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 15) % 606
    }
    return acc
}
private fun wiandcvreekhmGogilewinPart01ObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 55) + 6
    val x = ((n xor 101) shl 3) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmGogilewinPart01ObfV1ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 7
    return (x xor 213) and 49570
}

/* obfuscation-batch:v2 */
private fun wiandcvreekhmGogilewinPart01ObfV2SumOdds(nums: IntArray): Int {
    var acc = 84
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 35) % 455
    }
    return acc
}
private fun wiandcvreekhmGogilewinPart01ObfV2ClampMod(n: Int, m: Int): Int {
    val span = (m % 70) + 5
    val x = ((n xor 168) shl 5) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmGogilewinPart01ObfV2ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 5
    return (x xor 164) and 10994
}
private fun wiandcvreekhmGogilewinPart01ObfV2ByteFold(s: String): Int {
    var x = 35
    for (i in s.indices) x = (x + s[i].code * 3) and 19890
    return x
}
