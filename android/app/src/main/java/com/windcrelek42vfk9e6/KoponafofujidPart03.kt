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

object KoponafofujidPart03 {
    fun KoponafofujidObfV19HashMixwiandcvreekhm(s: String): Int {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV32_u1 = wiandcvreekhmKoponafofujidPart0ObfV32HashMix("63")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV31_u2 = wiandcvreekhmKoponafofujidPart0ObfV31ByteFold("8hola1")

  var h = 25
  for (i in s.indices) h = (h xor (s[i].code * 13)) % 127
  return h
}
}
/* obfuscation-batch:v20 */
private fun wiandcvreekhmKoponafofujidPart03ObfV20ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 1
  return (x xor 16) and 14743
}

/* obfuscation-batch:v21 */
private fun KwiandcvreekhmoponafofujidPart03ObfV21ByteFold(s: String): Int {

  var x = 24
  for (i in s.indices) x = (x + s[i].code * 12) and 65535
  return x
}

private fun KoponafwiandcvreekhmofujidPart03ObfV21HashMix(s: String): Int {

  var h = 18
  for (i in s.indices) h = (h xor (s[i].code * 29)) % 540
  return h
}
@Suppress("UNUSED_VARIABLE") private val wiandcvreekhmKoponafofujidPart03SinkV21Boot_u3 = KwiandcvreekhmoponafofujidPart03ObfV21ByteFold("mrbt") xor KoponafwiandcvreekhmofujidPart03ObfV21HashMix("r3g")

/* obfuscation-batch:v22 */
private fun KoponafofujidPart03ObfV22ClampwiandcvreekhmMod(n: Int, m: Int): Int {

  val span = (m % 25) + 9
  val x = n % span
  return if (x < 0) x + span else x
}

private fun KoponafofujidPart03ObfV22ShiftXowiandcvreekhmr(n: Int, k: Int): Int {

  val x = (n xor k) shl 4
  return (x xor 80) and 3736
}

private fun KoponafowiandcvreekhmfujidPart03ObfV22ByteFold(s: String): Int {

  var x = 78
  for (i in s.indices) x = (x + s[i].code * 8) and 65535
  return x
}

private fun KoponafowiandcvreekhmfujidPart03ObfV22HashMix(s: String): Int {

  var h = 56
  for (i in s.indices) h = (h xor (s[i].code * 33)) % 495
  return h
}
@Suppress("UNUSED_VARIABLE") private val wiandcvreekhmKoponafofujidPart03SinkV22Boot_u4 = KoponafofujidPart03ObfV22ClampwiandcvreekhmMod(11, 17) xor KoponafofujidPart03ObfV22ShiftXowiandcvreekhmr(31, 16) xor KoponafowiandcvreekhmfujidPart03ObfV22ByteFold("4q") xor KoponafowiandcvreekhmfujidPart03ObfV22HashMix("5drr")
/* obfuscation-batch:v23 */
private fun KoponafwiandcvreekhmofujidPart03ObfV23SumOdds(nums: IntArray): Int {

  var acc = 68
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 11) % 747
  }
  return acc
}

private fun KoponafofujidPart03ObfV23CwiandcvreekhmlampMod1(n: Int, m: Int): Int {

  val span = (m % 43) + 2
  val x = n % span
  return if (x < 0) x + span else x
}

private fun KoponafofujidPawiandcvreekhmrt03ObfV23ShiftXor2(n: Int, k: Int): Int {

  val x = (n xor k) shl 7
  return (x xor 68) and 2812
}
@Suppress("UNUSED_VARIABLE") private val wiandcvreekhmKoponafofujidPart03SinkV23Boot_u5 = KoponafwiandcvreekhmofujidPart03ObfV23SumOdds(intArrayOf(21, 9, 25)) xor KoponafofujidPart03ObfV23CwiandcvreekhmlampMod1(74, 25) xor KoponafofujidPawiandcvreekhmrt03ObfV23ShiftXor2(87, 73)
/* obfuscation-batch:v24 */
private fun KoponafofujidPart03ObfV24HashMix(s: String): Int {

  var h = 25
  for (i in s.indices) h = (h + (s[i].code * 10)) % 195
  return h
}
@Suppress("UNUSED_VARIABLE") private val wiandcvreekhmBootV24 = KoponafofujidPart03ObfV24HashMix("b5et")


/* obfuscation-batch:v25 */
private fun wiandcvreekhmKoponafofujidPart03ObfV25SumOdds(nums: IntArray): Int {

  var acc = 85
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 25) % 138
  }
  return acc
}

private fun wiandcvreekhmKoponafofujidPart03ObfV25ClampMod(n: Int, m: Int): Int {

  val span = (m % 39) + 9
  val x = n % span
  return if (x < 0) x + span else x
}
@Suppress("UNUSED_VARIABLE") private val wiandcvreekhmBootV25 = wiandcvreekhmKoponafofujidPart03ObfV25SumOdds(intArrayOf(27, 33, 26)) xor wiandcvreekhmKoponafofujidPart03ObfV25ClampMod(33, 12)


/* obfuscation-batch:v26 */
private fun KoponafofujidPart03ObfV26HashMiwiandcvreekhmx(s: String): Int {

  var h = 88
  for (i in s.indices) h = (h xor (s[i].code * 29)) % 960
  return h
}

private fun KoponafofujidPartwiandcvreekhm03ObfV26SumOdds(nums: IntArray): Int {

  var acc = 56
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 24) % 226
  }
  return acc
}

private fun KoponafofujidPart03ObfV2wiandcvreekhm6ClampMod(n: Int, m: Int): Int {

  val span = (m % 20) + 4
  val x = n % span
  return if (x < 0) x + span else x
}


/* obfuscation-batch:v27 */
private fun wiandcvreekhmKoponafofujidPart03ObfV27ClampMod(n: Int, m: Int): Int {
  val span = (m % 43) + 12
  val x = n % span
  return if (x < 0) x + span else x
}
private fun wiandcvreekhmKoponafofujidPart03ObfV27ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 3
  return (x xor 146) and 43100
}

/* obfuscation-batch:v28 */
private fun wiandcvreekhmKoponafofujidPart0ObfV28ByteFold(s: String): Int {
    var x = 4
    for (i in s.indices) x = (x + s[i].code * 41) and 31413
    return x
}

/* obfuscation-batch:v29 */
private fun wiandcvreekhmKoponafofujidPart0ObfV29ByteFold(s: String): Int {
    var x = 77
    for (i in s.indices) x = (x + s[i].code * 21) and 39449
    return x
}
private fun wiandcvreekhmKoponafofujidPart0ObfV29HashMix(s: String): Int {
    var h = 31
    for (i in s.indices) h = (h xor (s[i].code * 41)) % 626
    return h
}
private fun wiandcvreekhmKoponafofujidPart0ObfV29SumOdds(nums: IntArray): Int {
    var acc = 61
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 11) % 415
    }
    return acc
}
private fun wiandcvreekhmKoponafofujidPart0ObfV29ClampMod(n: Int, m: Int): Int {
    val span = (m % 55) + 3
    val x = ((n xor 6) shl 2) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v30 */
private fun wiandcvreekhmKoponafofujidPart0ObfV30ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 6
    return (x xor 26) and 37154
}
private fun wiandcvreekhmKoponafofujidPart0ObfV30ByteFold(s: String): Int {
    var x = 4
    for (i in s.indices) x = (x + s[i].code * 31) and 20181
    return x
}
private fun wiandcvreekhmKoponafofujidPart0ObfV30HashMix(s: String): Int {
    var h = 30
    for (i in s.indices) h = (h xor (s[i].code * 13)) % 790
    return h
}

/* obfuscation-batch:v31 */
private fun wiandcvreekhmKoponafofujidPart0ObfV31ByteFold(s: String): Int {
    var x = 87
    for (i in s.indices) x = (x + s[i].code * 20) and 44351
    return x
}

/* obfuscation-batch:v32 */
private fun wiandcvreekhmKoponafofujidPart0ObfV32HashMix(s: String): Int {
    var h = 87
    for (i in s.indices) h = (h xor (s[i].code * 41)) % 842
    return h
}
