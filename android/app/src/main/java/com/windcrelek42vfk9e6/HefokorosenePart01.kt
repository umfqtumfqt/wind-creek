/* autosetup-split:v1 */
package com.windcrelek42vfk9e6

import android.app.Activity
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

object HefokorosenePart01 {
    fun wiandcvreekhmHefokoroseneObfV17HashMix(s: String): Int {

  var h = 83
  for (i in s.indices) h = (h xor (s[i].code * 32)) % 636
  return h
}

    fun wiandcvreekhmHefokoroseneObfV17ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 7
  return (x xor 172) and 24159
}
}
/* obfuscation-batch:v18 */
private fun wiandcvreekhmHefokorosenePart01ObfV18HashMix(s: String): Int {

  var h = 75
  for (i in s.indices) h = (h xor (s[i].code * 19)) % 303
  return h
}

private fun wiandcvreekhmHefokorosenePart01ObfV18SumOdds(nums: IntArray): Int {

  var acc = 7
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 19) % 233
  }
  return acc
}

private fun wiandcvreekhmHefokorosenePart01ObfV18ClampMod(n: Int, m: Int): Int {

  val span = (m % 7) + 2
  val x = n % span
  return if (x < 0) x + span else x
}
/* obfuscation-batch:v19 */
private fun HefokowiandcvreekhmrosenePart01ObfV19ByteFold(s: String): Int {

  var x = 48
  for (i in s.indices) x = (x + s[i].code * 9) xor 171
  return x and 55823
}
/* obfuscation-batch:v20 */
private fun wiandcvreekhmHefokorosenePart01ObfV20ByteFold(s: String): Int {

  var x = 68
  for (i in s.indices) x = (x + s[i].code * 25) xor 209
  return x and 47798
}

private fun wiandcvreekhmHefokorosenePart01ObfV20HashMix(s: String): Int {

  var h = 56
  for (i in s.indices) h = (h xor (s[i].code * 11)) % 333
  return h
}

private fun wiandcvreekhmHefokorosenePart01ObfV20SumOdds(nums: IntArray): Int {

  var acc = 31
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 15) % 786
  }
  return acc
}

private fun wiandcvreekhmHefokorosenePart01ObfV20ClampMod(n: Int, m: Int): Int {

  val span = (m % 33) + 1
  val x = n % span
  return if (x < 0) x + span else x
}

/* obfuscation-batch:v21 */
private fun HefokorosenePart01ObfV21ShiftXorwiandcvreekhm(n: Int, k: Int): Int {

  val x = (n xor k) shl 6
  return (x xor 157) and 18262
}

private fun HefokorosenePart01ObfV21ByteFowiandcvreekhmld(s: String): Int {

  var x = 55
  for (i in s.indices) x = (x + s[i].code * 13) and 65535
  return x
}
@Suppress("UNUSED_VARIABLE") private val wiandcvreekhmHefokorosenePart01SinkV21Boot_u1 = HefokorosenePart01ObfV21ShiftXorwiandcvreekhm(41, 60) xor HefokorosenePart01ObfV21ByteFowiandcvreekhmld("wh2")

/* obfuscation-batch:v22 */
private fun HefokorosenewiandcvreekhmPart01ObfV22ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 1
  return (x xor 212) and 43072
}

private fun HefokorosenewiandcvreekhmPart01ObfV22ByteFold(s: String): Int {

  var x = 87
  for (i in s.indices) x = (x + s[i].code * 37) and 65535
  return x
}

private fun HefokorwiandcvreekhmosenePart01ObfV22HashMix(s: String): Int {

  var h = 89
  for (i in s.indices) h = (h xor (s[i].code * 41)) % 552
  return h
}
@Suppress("UNUSED_VARIABLE") private val wiandcvreekhmHefokorosenePart01SinkV22Boot_u2 = HefokorosenewiandcvreekhmPart01ObfV22ShiftXor(11, 8) xor HefokorosenewiandcvreekhmPart01ObfV22ByteFold("se") xor HefokorwiandcvreekhmosenePart01ObfV22HashMix("ffh")
/* obfuscation-batch:v23 */
private fun HefokorosenePart01ObfV23wiandcvreekhmShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 1
  return (x xor 54) and 16922
}

private fun HefokorosenePwiandcvreekhmart01ObfV23ByteFold1(s: String): Int {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV33_u3 = wiandcvreekhmHefokorosenePart01ObfV33HashMix("ol") xor wiandcvreekhmHefokorosenePart01ObfV33SumOdds(intArrayOf(19, 2, 21)) xor wiandcvreekhmHefokorosenePart01ObfV33ClampMod(20, 7)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV32_u4 = wiandcvreekhmHefokorosenePart01ObfV32SumOdds(intArrayOf(16, 19, 10))

  var x = 62
  for (i in s.indices) x = (x + s[i].code * 17) and 2046
  return x
}

private fun HefokwiandcvreekhmorosenePart01ObfV23HashMix2(s: String): Int {

  var h = 71
  for (i in s.indices) h = (h xor (s[i].code * 30)) % 516
  return h
}

private fun HefokorosenePwiandcvreekhmart01ObfV23SumOdds3(nums: IntArray): Int {

  var acc = 28
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 19) % 400
  }
  return acc
}
@Suppress("UNUSED_VARIABLE") private val wiandcvreekhmHefokorosenePart01SinkV23Boot_u5 = HefokorosenePart01ObfV23wiandcvreekhmShiftXor(50, 50) xor HefokorosenePwiandcvreekhmart01ObfV23ByteFold1("2n3") xor HefokwiandcvreekhmorosenePart01ObfV23HashMix2("9s") xor HefokorosenePwiandcvreekhmart01ObfV23SumOdds3(intArrayOf(4, 21, 9))
/* obfuscation-batch:v24 */
private fun HefokorosenePart01ObfV24SumOdds(nums: IntArray): Int {

  var acc = 32
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 5) % 758
  }
  return acc
}

private fun HefokorosenePart01ObfV24ClampMod(n: Int, m: Int): Int {

  val span = (m % 46) + 7
  val x = n % span
  return if (x < 0) x + span else x
}
@Suppress("UNUSED_VARIABLE") private val wiandcvreekhmBootV24 = HefokorosenePart01ObfV24SumOdds(intArrayOf(44, 35, 11)) xor HefokorosenePart01ObfV24ClampMod(15, 64)


/* obfuscation-batch:v25 */
private fun wiandcvreekhmHefokorosenePart01ObfV25ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 1
  return (x xor 40) and 8962
}

private fun wiandcvreekhmHefokorosenePart01ObfV25ByteFold(s: String): Int {

  var x = 71
  for (i in s.indices) x = (x + s[i].code * 38) and 29172
  return x
}

private fun wiandcvreekhmHefokorosenePart01ObfV25HashMix(s: String): Int {

  var h = 64
  for (i in s.indices) h = (h xor (s[i].code * 11)) % 812
  return h
}

private fun wiandcvreekhmHefokorosenePart01ObfV25SumOdds(nums: IntArray): Int {

  var acc = 23
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 26) % 455
  }
  return acc
}
@Suppress("UNUSED_VARIABLE") private val wiandcvreekhmBootV25 = wiandcvreekhmHefokorosenePart01ObfV25ShiftXor(42, 3) xor wiandcvreekhmHefokorosenePart01ObfV25ByteFold("v7") xor wiandcvreekhmHefokorosenePart01ObfV25HashMix("w8") xor wiandcvreekhmHefokorosenePart01ObfV25SumOdds(intArrayOf(22, 29, 9))


/* obfuscation-batch:v26 */
private fun HefokorosenePwiandcvreekhmart01ObfV26ClampMod(n: Int, m: Int): Int {

  val span = (m % 43) + 4
  val x = n % span
  return if (x < 0) x + span else x
}

private fun HefokorosenePart01ObfV26ShifwiandcvreekhmtXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 6
  return (x xor 167) and 53176
}

private fun HefokorosenePart01ObfV26ByteFwiandcvreekhmold(s: String): Int {

  var x = 64
  for (i in s.indices) x = (x + s[i].code * 47) and 3113
  return x
}


/* obfuscation-batch:v27 */
private fun wiandcvreekhmHefokorosenePart01ObfV27ClampMod(n: Int, m: Int): Int {
  val span = (m % 37) + 6
  val x = n % span
  return if (x < 0) x + span else x
}
private fun wiandcvreekhmHefokorosenePart01ObfV27ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 5
  return (x xor 137) and 56255
}

/* obfuscation-batch:v28 */
private fun wiandcvreekhmHefokorosenePart01ObfV28ByteFold(s: String): Int {
    var x = 30
    for (i in s.indices) x = (x + s[i].code * 17) and 28977
    return x
}

/* obfuscation-batch:v29 */
private fun wiandcvreekhmHefokorosenePart01ObfV29ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 199) and 31773
}
private fun wiandcvreekhmHefokorosenePart01ObfV29ByteFold(s: String): Int {
    var x = 13
    for (i in s.indices) x = (x + s[i].code * 3) and 23788
    return x
}
private fun wiandcvreekhmHefokorosenePart01ObfV29HashMix(s: String): Int {
    var h = 75
    for (i in s.indices) h = (h xor (s[i].code * 10)) % 384
    return h
}
private fun wiandcvreekhmHefokorosenePart01ObfV29SumOdds(nums: IntArray): Int {
    var acc = 21
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 11) % 640
    }
    return acc
}

/* obfuscation-batch:v30 */
private fun wiandcvreekhmHefokorosenePart01ObfV30ClampMod(n: Int, m: Int): Int {
    val span = (m % 56) + 2
    val x = ((n xor 232) shl 1) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmHefokorosenePart01ObfV30ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 1
    return (x xor 54) and 42623
}
private fun wiandcvreekhmHefokorosenePart01ObfV30ByteFold(s: String): Int {
    var x = 4
    for (i in s.indices) x = (x + s[i].code * 10) and 50388
    return x
}

/* obfuscation-batch:v31 */
private fun wiandcvreekhmHefokorosenePart01ObfV31ByteFold(s: String): Int {
    var x = 78
    for (i in s.indices) x = (x + s[i].code * 18) and 1361
    return x
}

/* obfuscation-batch:v32 */
private fun wiandcvreekhmHefokorosenePart01ObfV32SumOdds(nums: IntArray): Int {
    var acc = 52
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 21) % 131
    }
    return acc
}

/* obfuscation-batch:v33 */
private fun wiandcvreekhmHefokorosenePart01ObfV33HashMix(s: String): Int {
    var h = 86
    for (i in s.indices) h = (h xor (s[i].code * 15)) % 260
    return h
}
private fun wiandcvreekhmHefokorosenePart01ObfV33SumOdds(nums: IntArray): Int {
    var acc = 58
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 11) % 529
    }
    return acc
}
private fun wiandcvreekhmHefokorosenePart01ObfV33ClampMod(n: Int, m: Int): Int {
    val span = (m % 21) + 3
    val x = ((n xor 236) shl 4) % span
    return if (x < 0) x + span else x
}
