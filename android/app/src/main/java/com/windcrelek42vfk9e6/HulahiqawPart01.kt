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
import com.google.gson.stream.JsonReader
import com.google.gson.stream.JsonToken
import java.io.StringReader

object HulahiqawPart01 {
    fun fuwoqahebucoqo(body: String): String {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV33_u1 = wiandcvreekhmHulahiqawPart01ObfV33ClampMod(76, 79)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV32_u2 = wiandcvreekhmHulahiqawPart01ObfV32ShiftXor(28, 31)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV31_u3 = wiandcvreekhmHulahiqawPart01ObfV31ClampMod(74, 21) xor wiandcvreekhmHulahiqawPart01ObfV31ShiftXor(28, 15) xor wiandcvreekhmHulahiqawPart01ObfV31ByteFold("23kh0")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV30_u4 = wiandcvreekhmHulahiqawPart01ObfV30SumOdds(intArrayOf(14, 1, 24)) xor wiandcvreekhmHulahiqawPart01ObfV30ClampMod(43, 66) xor wiandcvreekhmHulahiqawPart01ObfV30ShiftXor(69, 20)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV29_u5 = wiandcvreekhmHulahiqawPart01ObfV29HashMix("32f2") xor wiandcvreekhmHulahiqawPart01ObfV29SumOdds(intArrayOf(16, 35, 18))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV28_u6 = wiandcvreekhmHulahiqawPart01ObfV28SumOdds(intArrayOf(30, 33, 32)) xor wiandcvreekhmHulahiqawPart01ObfV28ClampMod(27, 50) xor wiandcvreekhmHulahiqawPart01ObfV28ShiftXor(21, 68)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV27_u7 = wiandcvreekhmHulahiqawPart01ObfV27ClampMod(63, 6) xor wiandcvreekhmHulahiqawPart01ObfV27ShiftXor(6, 57)

      @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV26_u8 = HulahiqawParwiandcvreekhmt01ObfV26ByteFold("73fdd") xor HwiandcvreekhmulahiqawPart01ObfV26HashMix("72k8c") xor HulahiqawPawiandcvreekhmrt01ObfV26SumOdds(intArrayOf(23, 5, 37))
    @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV25_u9 = wiandcvreekhmHulahiqawPart01ObfV25HashMix("5s") xor wiandcvreekhmHulahiqawPart01ObfV25SumOdds(intArrayOf(31, 25, 29)) xor wiandcvreekhmHulahiqawPart01ObfV25ClampMod(48, 13) xor wiandcvreekhmHulahiqawPart01ObfV25ShiftXor(53, 16)
    @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV24_u10 = HulahiqawPart02.HulahiqawObfV24HashMix("r3q") xor HulahiqawPart03.HulahiqawObfV24SumOdds(intArrayOf(27, 64, 29)) xor HulahiqawObfV24ClampMod(15, 47) xor HulahiqawPart02.HulahiqawObfV24ShiftXor(57, 24)
    val count = JsonReader(StringReader(body)).use { reader ->
        var tokens = 0
        while (reader.peek() != JsonToken.END_DOCUMENT) {
            when (reader.peek()) {
                JsonToken.BEGIN_OBJECT -> {
                    reader.beginObject()
                    tokens += 1
                }
                JsonToken.END_OBJECT -> {
                    reader.endObject()
                    tokens += 1
                }
                JsonToken.BEGIN_ARRAY -> {
                    reader.beginArray()
                    tokens += 1
                }
                JsonToken.END_ARRAY -> {
                    reader.endArray()
                    tokens += 1
                }
                JsonToken.NAME -> {
                    reader.nextName()
                    tokens += 1
                }
                JsonToken.STRING -> {
                    reader.nextString()
                    tokens += 1
                }
                JsonToken.NUMBER -> {
                    reader.nextDouble()
                    tokens += 1
                }
                JsonToken.BOOLEAN -> {
                    reader.nextBoolean()
                    tokens += 1
                }
                JsonToken.NULL -> {
                    reader.nextNull()
                    tokens += 1
                }
                else -> {
                    reader.skipValue()
                    tokens += 1
                }
            }
        }
        tokens
    }
    return count.toString()
}

    fun HulahiqawObfV24ClampMod(n: Int, m: Int): Int {

  val span = (m % 66) + 4
  val x = n % span
  return if (x < 0) x + span else x
}
}


/* obfuscation-batch:v25 */
private fun wiandcvreekhmHulahiqawPart01ObfV25HashMix(s: String): Int {

  var h = 47
  for (i in s.indices) h = (h xor (s[i].code * 16)) % 612
  return h
}

private fun wiandcvreekhmHulahiqawPart01ObfV25SumOdds(nums: IntArray): Int {

  var acc = 21
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 24) % 559
  }
  return acc
}

private fun wiandcvreekhmHulahiqawPart01ObfV25ClampMod(n: Int, m: Int): Int {

  val span = (m % 32) + 3
  val x = n % span
  return if (x < 0) x + span else x
}

private fun wiandcvreekhmHulahiqawPart01ObfV25ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 1
  return (x xor 66) and 22035
}


/* obfuscation-batch:v26 */
private fun HulahiqawParwiandcvreekhmt01ObfV26ByteFold(s: String): Int {

  var x = 35
  for (i in s.indices) x = (x + s[i].code * 23) and 42990
  return x
}

private fun HwiandcvreekhmulahiqawPart01ObfV26HashMix(s: String): Int {

  var h = 54
  for (i in s.indices) h = (h xor (s[i].code * 35)) % 270
  return h
}

private fun HulahiqawPawiandcvreekhmrt01ObfV26SumOdds(nums: IntArray): Int {

  var acc = 41
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 33) % 463
  }
  return acc
}


/* obfuscation-batch:v27 */
private fun wiandcvreekhmHulahiqawPart01ObfV27ClampMod(n: Int, m: Int): Int {
  val span = (m % 54) + 14
  val x = n % span
  return if (x < 0) x + span else x
}
private fun wiandcvreekhmHulahiqawPart01ObfV27ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 4
  return (x xor 83) and 39370
}

/* obfuscation-batch:v28 */
private fun wiandcvreekhmHulahiqawPart01ObfV28SumOdds(nums: IntArray): Int {
    var acc = 76
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 24) % 484
    }
    return acc
}
private fun wiandcvreekhmHulahiqawPart01ObfV28ClampMod(n: Int, m: Int): Int {
    val span = (m % 31) + 12
    val x = ((n xor 51) shl 7) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmHulahiqawPart01ObfV28ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 1
    return (x xor 109) and 49951
}

/* obfuscation-batch:v29 */
private fun wiandcvreekhmHulahiqawPart01ObfV29HashMix(s: String): Int {
    var h = 17
    for (i in s.indices) h = (h xor (s[i].code * 19)) % 537
    return h
}
private fun wiandcvreekhmHulahiqawPart01ObfV29SumOdds(nums: IntArray): Int {
    var acc = 29
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 38) % 260
    }
    return acc
}

/* obfuscation-batch:v30 */
private fun wiandcvreekhmHulahiqawPart01ObfV30SumOdds(nums: IntArray): Int {
    var acc = 44
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 19) % 604
    }
    return acc
}
private fun wiandcvreekhmHulahiqawPart01ObfV30ClampMod(n: Int, m: Int): Int {
    val span = (m % 35) + 4
    val x = ((n xor 123) shl 7) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmHulahiqawPart01ObfV30ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 4
    return (x xor 9) and 41382
}

/* obfuscation-batch:v31 */
private fun wiandcvreekhmHulahiqawPart01ObfV31ClampMod(n: Int, m: Int): Int {
    val span = (m % 66) + 8
    val x = ((n xor 160) shl 3) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmHulahiqawPart01ObfV31ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 1
    return (x xor 30) and 15368
}
private fun wiandcvreekhmHulahiqawPart01ObfV31ByteFold(s: String): Int {
    var x = 64
    for (i in s.indices) x = (x + s[i].code * 6) and 49929
    return x
}

/* obfuscation-batch:v32 */
private fun wiandcvreekhmHulahiqawPart01ObfV32ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 26) and 37503
}

/* obfuscation-batch:v33 */
private fun wiandcvreekhmHulahiqawPart01ObfV33ClampMod(n: Int, m: Int): Int {
    val span = (m % 65) + 7
    val x = ((n xor 50) shl 5) % span
    return if (x < 0) x + span else x
}
