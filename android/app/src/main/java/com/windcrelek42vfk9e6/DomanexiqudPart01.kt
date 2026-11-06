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

object DomanexiqudPart01 {
    fun dirimazacavef(body: String): String {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV33_u1 = wiandcvreekhmDomanexiqudPart01ObfV33ShiftXor(37, 36) xor wiandcvreekhmDomanexiqudPart01ObfV33ByteFold("la9")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV32_u2 = wiandcvreekhmDomanexiqudPart01ObfV32SumOdds(intArrayOf(5, 36, 39)) xor wiandcvreekhmDomanexiqudPart01ObfV32ClampMod(22, 33)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV31_u3 = wiandcvreekhmDomanexiqudPart01ObfV31ShiftXor(23, 46) xor wiandcvreekhmDomanexiqudPart01ObfV31ByteFold("bcna") xor wiandcvreekhmDomanexiqudPart01ObfV31HashMix("6j85e") xor wiandcvreekhmDomanexiqudPart01ObfV31SumOdds(intArrayOf(10, 5, 4))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV30_u4 = wiandcvreekhmDomanexiqudPart01ObfV30SumOdds(intArrayOf(3, 10, 5)) xor wiandcvreekhmDomanexiqudPart01ObfV30ClampMod(12, 31) xor wiandcvreekhmDomanexiqudPart01ObfV30ShiftXor(62, 73) xor wiandcvreekhmDomanexiqudPart01ObfV30ByteFold("g1058")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV29_u5 = wiandcvreekhmDomanexiqudPart01ObfV29ClampMod(36, 71)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV28_u6 = wiandcvreekhmDomanexiqudPart01ObfV28ClampMod(3, 26) xor wiandcvreekhmDomanexiqudPart01ObfV28ShiftXor(77, 76) xor wiandcvreekhmDomanexiqudPart01ObfV28ByteFold("helm") xor wiandcvreekhmDomanexiqudPart01ObfV28HashMix("cf2")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV27_u7 = wiandcvreekhmDomanexiqudPart01ObfV27ByteFold("2xw7") xor wiandcvreekhmDomanexiqudPart01ObfV27HashMix("c9v")

  @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV26_u8 = DomanexiqudObfV26ClampModwiandcvreekhm(33, 57) xor DomanexiwiandcvreekhmqudObfV26ShiftXor(7, 66) xor DomanexiwiandcvreekhmqudObfV26ByteFold("y1mn") xor DwiandcvreekhmomanexiqudObfV26HashMix("hm95e")
    val element = JsonParser.parseString(body)
    return element.toString().length.toString()
}

    fun DomanexiqudObfV26ClampModwiandcvreekhm(n: Int, m: Int): Int {

  val span = (m % 53) + 6
  val x = n % span
  return if (x < 0) x + span else x
}

    fun DomanexiwiandcvreekhmqudObfV26ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 4
  return (x xor 221) and 3154
}

    fun DomanexiwiandcvreekhmqudObfV26ByteFold(s: String): Int {

  var x = 14
  for (i in s.indices) x = (x + s[i].code * 20) and 34409
  return x
}

    fun DwiandcvreekhmomanexiqudObfV26HashMix(s: String): Int {

  var h = 41
  for (i in s.indices) h = (h xor (s[i].code * 29)) % 635
  return h
}
}


/* obfuscation-batch:v27 */
private fun wiandcvreekhmDomanexiqudPart01ObfV27ByteFold(s: String): Int {
  var x = 31
  for (i in s.indices) x = (x + s[i].code * 28) and 35023
  return x
}
private fun wiandcvreekhmDomanexiqudPart01ObfV27HashMix(s: String): Int {
  var h = 61
  for (i in s.indices) h = (h xor (s[i].code * 16)) % 372
  return h
}

/* obfuscation-batch:v28 */
private fun wiandcvreekhmDomanexiqudPart01ObfV28ClampMod(n: Int, m: Int): Int {
    val span = (m % 42) + 7
    val x = ((n xor 235) shl 4) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmDomanexiqudPart01ObfV28ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 2
    return (x xor 201) and 5889
}
private fun wiandcvreekhmDomanexiqudPart01ObfV28ByteFold(s: String): Int {
    var x = 23
    for (i in s.indices) x = (x + s[i].code * 17) and 31116
    return x
}
private fun wiandcvreekhmDomanexiqudPart01ObfV28HashMix(s: String): Int {
    var h = 71
    for (i in s.indices) h = (h xor (s[i].code * 5)) % 208
    return h
}

/* obfuscation-batch:v29 */
private fun wiandcvreekhmDomanexiqudPart01ObfV29ClampMod(n: Int, m: Int): Int {
    val span = (m % 66) + 9
    val x = ((n xor 210) shl 5) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v30 */
private fun wiandcvreekhmDomanexiqudPart01ObfV30SumOdds(nums: IntArray): Int {
    var acc = 62
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 5) % 309
    }
    return acc
}
private fun wiandcvreekhmDomanexiqudPart01ObfV30ClampMod(n: Int, m: Int): Int {
    val span = (m % 62) + 8
    val x = ((n xor 212) shl 7) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmDomanexiqudPart01ObfV30ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 1
    return (x xor 4) and 33938
}
private fun wiandcvreekhmDomanexiqudPart01ObfV30ByteFold(s: String): Int {
    var x = 23
    for (i in s.indices) x = (x + s[i].code * 9) and 56451
    return x
}

/* obfuscation-batch:v31 */
private fun wiandcvreekhmDomanexiqudPart01ObfV31ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 5
    return (x xor 109) and 6141
}
private fun wiandcvreekhmDomanexiqudPart01ObfV31ByteFold(s: String): Int {
    var x = 52
    for (i in s.indices) x = (x + s[i].code * 20) and 34880
    return x
}
private fun wiandcvreekhmDomanexiqudPart01ObfV31HashMix(s: String): Int {
    var h = 78
    for (i in s.indices) h = (h xor (s[i].code * 27)) % 688
    return h
}
private fun wiandcvreekhmDomanexiqudPart01ObfV31SumOdds(nums: IntArray): Int {
    var acc = 44
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 12) % 484
    }
    return acc
}

/* obfuscation-batch:v32 */
private fun wiandcvreekhmDomanexiqudPart01ObfV32SumOdds(nums: IntArray): Int {
    var acc = 76
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 41) % 781
    }
    return acc
}
private fun wiandcvreekhmDomanexiqudPart01ObfV32ClampMod(n: Int, m: Int): Int {
    val span = (m % 38) + 7
    val x = ((n xor 232) shl 3) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v33 */
private fun wiandcvreekhmDomanexiqudPart01ObfV33ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 4
    return (x xor 29) and 29501
}
private fun wiandcvreekhmDomanexiqudPart01ObfV33ByteFold(s: String): Int {
    var x = 75
    for (i in s.indices) x = (x + s[i].code * 35) and 33006
    return x
}
