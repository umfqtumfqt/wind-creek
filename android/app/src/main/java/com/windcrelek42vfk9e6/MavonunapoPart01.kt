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

object MavonunapoPart01 {
    fun wamovutuzi(): String {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV33_u1 = wiandcvreekhmMavonunapoPart01ObfV33ClampMod(62, 57) xor wiandcvreekhmMavonunapoPart01ObfV33ShiftXor(48, 67) xor wiandcvreekhmMavonunapoPart01ObfV33ByteFold("45cb0h")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV32_u2 = wiandcvreekhmMavonunapoPart01ObfV32SumOdds(intArrayOf(28, 23, 14))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV31_u3 = wiandcvreekhmMavonunapoPart01ObfV31ClampMod(64, 19)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV30_u4 = wiandcvreekhmMavonunapoPart01ObfV30ByteFold("o9gp") xor wiandcvreekhmMavonunapoPart01ObfV30HashMix("jc") xor wiandcvreekhmMavonunapoPart01ObfV30SumOdds(intArrayOf(38, 25, 32))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV29_u5 = wiandcvreekhmMavonunapoPart01ObfV29SumOdds(intArrayOf(15, 14, 1)) xor wiandcvreekhmMavonunapoPart01ObfV29ClampMod(40, 59) xor wiandcvreekhmMavonunapoPart01ObfV29ShiftXor(10, 21) xor wiandcvreekhmMavonunapoPart01ObfV29ByteFold("cd0b2")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV28_u6 = wiandcvreekhmMavonunapoPart01ObfV28ShiftXor(48, 51)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV27_u7 = wiandcvreekhmMavonunapoPart01ObfV27ClampMod(23, 69) xor wiandcvreekhmMavonunapoPart01ObfV27ShiftXor(44, 19) xor wiandcvreekhmMavonunapoPart01ObfV27ByteFold("tv") xor wiandcvreekhmMavonunapoPart01ObfV27HashMix("4vbx9")

  @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV26_u8 = MavonunapoObfV26BytewiandcvreekhmFold("wr") xor MavonunapoObfV2wiandcvreekhm6HashMix("hoy") xor MavonunapwiandcvreekhmoObfV26SumOdds(intArrayOf(13, 39, 39)) xor MavonunapoObfV26ClwiandcvreekhmampMod(35, 75)
    val alphabet = "0123456789abcdef"
    val rng = java.security.SecureRandom()
    val chars = CharArray(32)
    for (i in chars.indices) {
        chars[i] = alphabet[rng.nextInt(alphabet.length)]
    }
    return String(chars)
}

    fun MavonunapoObfV26BytewiandcvreekhmFold(s: String): Int {

  var x = 19
  for (i in s.indices) x = (x + s[i].code * 24) and 37410
  return x
}

    fun MavonunapoObfV2wiandcvreekhm6HashMix(s: String): Int {

  var h = 86
  for (i in s.indices) h = (h xor (s[i].code * 21)) % 212
  return h
}

    fun MavonunapwiandcvreekhmoObfV26SumOdds(nums: IntArray): Int {

  var acc = 40
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 16) % 250
  }
  return acc
}

    fun MavonunapoObfV26ClwiandcvreekhmampMod(n: Int, m: Int): Int {

  val span = (m % 19) + 7
  val x = n % span
  return if (x < 0) x + span else x
}
}


/* obfuscation-batch:v27 */
private fun wiandcvreekhmMavonunapoPart01ObfV27ClampMod(n: Int, m: Int): Int {
  val span = (m % 53) + 7
  val x = n % span
  return if (x < 0) x + span else x
}
private fun wiandcvreekhmMavonunapoPart01ObfV27ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 2
  return (x xor 181) and 31352
}
private fun wiandcvreekhmMavonunapoPart01ObfV27ByteFold(s: String): Int {
  var x = 76
  for (i in s.indices) x = (x + s[i].code * 24) and 43489
  return x
}
private fun wiandcvreekhmMavonunapoPart01ObfV27HashMix(s: String): Int {
  var h = 18
  for (i in s.indices) h = (h xor (s[i].code * 14)) % 116
  return h
}

/* obfuscation-batch:v28 */
private fun wiandcvreekhmMavonunapoPart01ObfV28ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 4
    return (x xor 244) and 4727
}

/* obfuscation-batch:v29 */
private fun wiandcvreekhmMavonunapoPart01ObfV29SumOdds(nums: IntArray): Int {
    var acc = 38
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 34) % 422
    }
    return acc
}
private fun wiandcvreekhmMavonunapoPart01ObfV29ClampMod(n: Int, m: Int): Int {
    val span = (m % 28) + 9
    val x = ((n xor 122) shl 1) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmMavonunapoPart01ObfV29ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 6
    return (x xor 134) and 31099
}
private fun wiandcvreekhmMavonunapoPart01ObfV29ByteFold(s: String): Int {
    var x = 2
    for (i in s.indices) x = (x + s[i].code * 40) and 27976
    return x
}

/* obfuscation-batch:v30 */
private fun wiandcvreekhmMavonunapoPart01ObfV30ByteFold(s: String): Int {
    var x = 12
    for (i in s.indices) x = (x + s[i].code * 33) and 17638
    return x
}
private fun wiandcvreekhmMavonunapoPart01ObfV30HashMix(s: String): Int {
    var h = 2
    for (i in s.indices) h = (h xor (s[i].code * 28)) % 595
    return h
}
private fun wiandcvreekhmMavonunapoPart01ObfV30SumOdds(nums: IntArray): Int {
    var acc = 68
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 34) % 846
    }
    return acc
}

/* obfuscation-batch:v31 */
private fun wiandcvreekhmMavonunapoPart01ObfV31ClampMod(n: Int, m: Int): Int {
    val span = (m % 48) + 10
    val x = ((n xor 224) shl 5) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v32 */
private fun wiandcvreekhmMavonunapoPart01ObfV32SumOdds(nums: IntArray): Int {
    var acc = 89
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 8) % 144
    }
    return acc
}

/* obfuscation-batch:v33 */
private fun wiandcvreekhmMavonunapoPart01ObfV33ClampMod(n: Int, m: Int): Int {
    val span = (m % 27) + 4
    val x = ((n xor 164) shl 3) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmMavonunapoPart01ObfV33ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 1
    return (x xor 18) and 9514
}
private fun wiandcvreekhmMavonunapoPart01ObfV33ByteFold(s: String): Int {
    var x = 88
    for (i in s.indices) x = (x + s[i].code * 3) and 46999
    return x
}
