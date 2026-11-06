/* autosetup-split:v1 */
package com.windcrelek42vfk9e6

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.android.volley.DefaultRetryPolicy
import com.android.volley.ExecutorDelivery
import com.android.volley.Request as VolleyRequest
import com.android.volley.RequestQueue
import com.android.volley.toolbox.BasicNetwork
import com.android.volley.toolbox.HurlStack
import com.android.volley.toolbox.NoCache
import com.android.volley.toolbox.StringRequest
import java.util.concurrent.CountDownLatch
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import com.google.gson.JsonParser

object BorucamucaqPart01 {
    fun pujesapusu(body: String): String {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV33_u1 = wiandcvreekhmBorucamucaqPart01ObfV33ClampMod(51, 26) xor wiandcvreekhmBorucamucaqPart01ObfV33ShiftXor(13, 28) xor wiandcvreekhmBorucamucaqPart01ObfV33ByteFold("dkn") xor wiandcvreekhmBorucamucaqPart01ObfV33HashMix("5opc")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV32_u2 = wiandcvreekhmBorucamucaqPart01ObfV32ClampMod(47, 70) xor wiandcvreekhmBorucamucaqPart01ObfV32ShiftXor(9, 24) xor wiandcvreekhmBorucamucaqPart01ObfV32ByteFold("din4p0") xor wiandcvreekhmBorucamucaqPart01ObfV32HashMix("cn")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV31_u3 = wiandcvreekhmBorucamucaqPart01ObfV31ByteFold("n4") xor wiandcvreekhmBorucamucaqPart01ObfV31HashMix("0j4")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV30_u4 = wiandcvreekhmBorucamucaqPart01ObfV30ByteFold("30") xor wiandcvreekhmBorucamucaqPart01ObfV30HashMix("ofgna")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV29_u5 = wiandcvreekhmBorucamucaqPart01ObfV29ByteFold("0jgf63") xor wiandcvreekhmBorucamucaqPart01ObfV29HashMix("1cfip4") xor wiandcvreekhmBorucamucaqPart01ObfV29SumOdds(intArrayOf(24, 3, 26))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV28_u6 = wiandcvreekhmBorucamucaqPart01ObfV28HashMix("pab8") xor wiandcvreekhmBorucamucaqPart01ObfV28SumOdds(intArrayOf(4, 7, 30))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV27_u7 = wiandcvreekhmBorucamucaqPart01ObfV27ClampMod(58, 51) xor wiandcvreekhmBorucamucaqPart01ObfV27ShiftXor(53, 3) xor wiandcvreekhmBorucamucaqPart01ObfV27ByteFold("uk")

      @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV26_u8 = BorucamuwiandcvreekhmcaqPart01ObfV26ByteFold("wcwah") xor BoruwiandcvreekhmcamucaqPart01ObfV26HashMix("9909") xor BorucawiandcvreekhmmucaqPart01ObfV26SumOdds(intArrayOf(7, 19, 15))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV25_u9 = wiandcvreekhmBorucamucaqPart01ObfV25ByteFold("9b4") xor wiandcvreekhmBorucamucaqPart01ObfV25HashMix("4qx")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV24_u10 = BorucamucaqPart01ObfV24ShiftXor(47, 79) xor BorucamucaqPart01ObfV24ByteFold("hft") xor BorucamucaqPart01ObfV24HashMix("x28dh")
      @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV23_u11 = BorucamucaqParwiandcvreekhmt01ObfV23HashMix("0lmb") xor BorucamucaqPawiandcvreekhmrt01ObfV23SumOdds1(intArrayOf(14, 16, 20))

    @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV22_u12 = BorucamucaqPart01ObfV2wiandcvreekhm2HashMix("fhv") xor BorucamuwiandcvreekhmcaqPart01ObfV22ShiftXor(12, 29)

        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV20_u13 = wiandcvreekhmBorucamucaqPart01ObfV20HashMix("67") xor wiandcvreekhmBorucamucaqPart01ObfV20SumOdds(intArrayOf(27, 25, 25)) xor wiandcvreekhmBorucamucaqPart01ObfV20ClampMod(75, 57)
    @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV19_u14 = BorucamucaqPart02.BorucwiandcvreekhmamucaqObfV19ByteFold("w7y") xor BorucamucaqPart03.BorucamucaqObfV19HashMiwiandcvreekhmx("tw")
    val element = JsonParser.parseString(body)
    return element.toString().length.toString()
}
}
/* obfuscation-batch:v20 */
private fun wiandcvreekhmBorucamucaqPart01ObfV20HashMix(s: String): Int {

  var h = 28
  for (i in s.indices) h = (h xor (s[i].code * 41)) % 539
  return h
}

private fun wiandcvreekhmBorucamucaqPart01ObfV20SumOdds(nums: IntArray): Int {

  var acc = 67
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 28) % 162
  }
  return acc
}

private fun wiandcvreekhmBorucamucaqPart01ObfV20ClampMod(n: Int, m: Int): Int {

  val span = (m % 60) + 3
  val x = n % span
  return if (x < 0) x + span else x
}

/* obfuscation-batch:v21 */
private fun BorucamucaqPart01ObfV21ShwiandcvreekhmiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 1
  return (x xor 116) and 17594
}

private fun BowiandcvreekhmrucamucaqPart01ObfV21ByteFold(s: String): Int {

  var x = 62
  for (i in s.indices) x = (x + s[i].code * 24) and 65535
  return x
}

private fun BorucamucaqPart01ObfV21HawiandcvreekhmshMix(s: String): Int {

  var h = 69
  for (i in s.indices) h = (h xor (s[i].code * 14)) % 180
  return h
}
@Suppress("UNUSED_VARIABLE") private val wiandcvreekhmBorucamucaqPart01SinkV21Boot_u15 = BorucamucaqPart01ObfV21ShwiandcvreekhmiftXor(16, 27) xor BowiandcvreekhmrucamucaqPart01ObfV21ByteFold("h2z") xor BorucamucaqPart01ObfV21HawiandcvreekhmshMix("72")

/* obfuscation-batch:v22 */
private fun BorucamucaqPart01ObfV2wiandcvreekhm2HashMix(s: String): Int {



  var h = 13
  for (i in s.indices) h = (h xor (s[i].code * 25)) % 484
  return h
}

private fun BorucamuwiandcvreekhmcaqPart01ObfV22ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 3
  return (x xor 113) and 56533
}
@Suppress("UNUSED_VARIABLE") private val wiandcvreekhmBorucamucaqPart01SinkV22Boot_u16 = BorucamucaqPart01ObfV2wiandcvreekhm2HashMix("fhv") xor BorucamuwiandcvreekhmcaqPart01ObfV22ShiftXor(12, 29)
/* obfuscation-batch:v23 */
private fun BorucamucaqParwiandcvreekhmt01ObfV23HashMix(s: String): Int {

  var h = 74
  for (i in s.indices) h = (h xor (s[i].code * 15)) % 691
  return h
}

private fun BorucamucaqPawiandcvreekhmrt01ObfV23SumOdds1(nums: IntArray): Int {

  var acc = 78
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 21) % 474
  }
  return acc
}
@Suppress("UNUSED_VARIABLE") private val wiandcvreekhmBorucamucaqPart01SinkV23Boot_u17 = BorucamucaqParwiandcvreekhmt01ObfV23HashMix("0lmb") xor BorucamucaqPawiandcvreekhmrt01ObfV23SumOdds1(intArrayOf(14, 16, 20))
/* obfuscation-batch:v24 */
private fun BorucamucaqPart01ObfV24ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 1
  return (x xor 97) and 25188
}

private fun BorucamucaqPart01ObfV24ByteFold(s: String): Int {

  var x = 84
  for (i in s.indices) x = (x + s[i].code * 14) and 15634
  return x
}

private fun BorucamucaqPart01ObfV24HashMix(s: String): Int {

  var h = 75
  for (i in s.indices) h = (h + (s[i].code * 10)) % 378
  return h
}


/* obfuscation-batch:v25 */
private fun wiandcvreekhmBorucamucaqPart01ObfV25ByteFold(s: String): Int {

  var x = 81
  for (i in s.indices) x = (x + s[i].code * 14) and 22534
  return x
}

private fun wiandcvreekhmBorucamucaqPart01ObfV25HashMix(s: String): Int {

  var h = 79
  for (i in s.indices) h = (h xor (s[i].code * 24)) % 511
  return h
}


/* obfuscation-batch:v26 */
private fun BorucamuwiandcvreekhmcaqPart01ObfV26ByteFold(s: String): Int {

  var x = 46
  for (i in s.indices) x = (x + s[i].code * 28) and 57185
  return x
}

private fun BoruwiandcvreekhmcamucaqPart01ObfV26HashMix(s: String): Int {

  var h = 14
  for (i in s.indices) h = (h xor (s[i].code * 17)) % 351
  return h
}

private fun BorucawiandcvreekhmmucaqPart01ObfV26SumOdds(nums: IntArray): Int {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV33_u18 = wiandcvreekhmBorucamucaqPart01ObfV33ClampMod(51, 26) xor wiandcvreekhmBorucamucaqPart01ObfV33ShiftXor(13, 28) xor wiandcvreekhmBorucamucaqPart01ObfV33ByteFold("dkn") xor wiandcvreekhmBorucamucaqPart01ObfV33HashMix("5opc")

  var acc = 84
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 7) % 345
  }
  return acc
}


/* obfuscation-batch:v27 */
private fun wiandcvreekhmBorucamucaqPart01ObfV27ClampMod(n: Int, m: Int): Int {
  val span = (m % 50) + 15
  val x = n % span
  return if (x < 0) x + span else x
}
private fun wiandcvreekhmBorucamucaqPart01ObfV27ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 5
  return (x xor 203) and 17401
}
private fun wiandcvreekhmBorucamucaqPart01ObfV27ByteFold(s: String): Int {
  var x = 51
  for (i in s.indices) x = (x + s[i].code * 13) and 45749
  return x
}

/* obfuscation-batch:v28 */
private fun wiandcvreekhmBorucamucaqPart01ObfV28HashMix(s: String): Int {
    var h = 31
    for (i in s.indices) h = (h xor (s[i].code * 7)) % 797
    return h
}
private fun wiandcvreekhmBorucamucaqPart01ObfV28SumOdds(nums: IntArray): Int {
    var acc = 11
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 16) % 403
    }
    return acc
}

/* obfuscation-batch:v29 */
private fun wiandcvreekhmBorucamucaqPart01ObfV29ByteFold(s: String): Int {
    var x = 4
    for (i in s.indices) x = (x + s[i].code * 18) and 31323
    return x
}
private fun wiandcvreekhmBorucamucaqPart01ObfV29HashMix(s: String): Int {
    var h = 64
    for (i in s.indices) h = (h xor (s[i].code * 16)) % 881
    return h
}
private fun wiandcvreekhmBorucamucaqPart01ObfV29SumOdds(nums: IntArray): Int {
    var acc = 67
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 30) % 534
    }
    return acc
}

/* obfuscation-batch:v30 */
private fun wiandcvreekhmBorucamucaqPart01ObfV30ByteFold(s: String): Int {
    var x = 74
    for (i in s.indices) x = (x + s[i].code * 9) and 12285
    return x
}
private fun wiandcvreekhmBorucamucaqPart01ObfV30HashMix(s: String): Int {
    var h = 2
    for (i in s.indices) h = (h xor (s[i].code * 25)) % 87
    return h
}

/* obfuscation-batch:v31 */
private fun wiandcvreekhmBorucamucaqPart01ObfV31ByteFold(s: String): Int {
    var x = 29
    for (i in s.indices) x = (x + s[i].code * 13) and 36324
    return x
}
private fun wiandcvreekhmBorucamucaqPart01ObfV31HashMix(s: String): Int {
    var h = 74
    for (i in s.indices) h = (h xor (s[i].code * 25)) % 556
    return h
}

/* obfuscation-batch:v32 */
private fun wiandcvreekhmBorucamucaqPart01ObfV32ClampMod(n: Int, m: Int): Int {
    val span = (m % 41) + 5
    val x = ((n xor 157) shl 7) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmBorucamucaqPart01ObfV32ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 2
    return (x xor 173) and 40569
}
private fun wiandcvreekhmBorucamucaqPart01ObfV32ByteFold(s: String): Int {
    var x = 4
    for (i in s.indices) x = (x + s[i].code * 27) and 26828
    return x
}
private fun wiandcvreekhmBorucamucaqPart01ObfV32HashMix(s: String): Int {
    var h = 41
    for (i in s.indices) h = (h xor (s[i].code * 3)) % 745
    return h
}

/* obfuscation-batch:v33 */
private fun wiandcvreekhmBorucamucaqPart01ObfV33ClampMod(n: Int, m: Int): Int {
    val span = (m % 40) + 10
    val x = ((n xor 15) shl 4) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmBorucamucaqPart01ObfV33ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 121) and 51761
}
private fun wiandcvreekhmBorucamucaqPart01ObfV33ByteFold(s: String): Int {
    var x = 77
    for (i in s.indices) x = (x + s[i].code * 36) and 55976
    return x
}
private fun wiandcvreekhmBorucamucaqPart01ObfV33HashMix(s: String): Int {
    var h = 31
    for (i in s.indices) h = (h xor (s[i].code * 21)) % 119
    return h
}
