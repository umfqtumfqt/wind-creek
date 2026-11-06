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

object HulahiqawPart02 {
    fun HulahiqawObfV24HashMix(s: String): Int {

  var h = 26
  for (i in s.indices) h = (h xor (s[i].code * 4)) % 666
  return h
}

    fun HulahiqawObfV24ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 2
  return (x xor 26) and 16219
}
}


/* obfuscation-batch:v25 */
private fun wiandcvreekhmHulahiqawPart02ObfV25HashMix(s: String): Int {

  var h = 25
  for (i in s.indices) h = (h xor (s[i].code * 8)) % 761
  return h
}

private fun wiandcvreekhmHulahiqawPart02ObfV25SumOdds(nums: IntArray): Int {

  var acc = 59
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 30) % 88
  }
  return acc
}
@Suppress("UNUSED_VARIABLE") private val wiandcvreekhmBootV25 = wiandcvreekhmHulahiqawPart02ObfV25HashMix("d4") xor wiandcvreekhmHulahiqawPart02ObfV25SumOdds(intArrayOf(25, 30, 16))


/* obfuscation-batch:v26 */
private fun HulahiqawPart02ObfV26HashwiandcvreekhmMix(s: String): Int {

  var h = 100
  for (i in s.indices) h = (h xor (s[i].code * 42)) % 861
  return h
}

private fun HulawiandcvreekhmhiqawPart02ObfV26SumOdds(nums: IntArray): Int {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV30_u1 = wiandcvreekhmHulahiqawPart02ObfV30SumOdds(intArrayOf(38, 25, 8)) xor wiandcvreekhmHulahiqawPart02ObfV30ClampMod(51, 10) xor wiandcvreekhmHulahiqawPart02ObfV30ShiftXor(13, 28)

  var acc = 31
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 35) % 481
  }
  return acc
}
@Suppress("UNUSED_VARIABLE")
private val wiandcvreekhmBootV26 = HulahiqawPart02ObfV26HashwiandcvreekhmMix("fk") xor HulawiandcvreekhmhiqawPart02ObfV26SumOdds(intArrayOf(35, 38, 7))


/* obfuscation-batch:v27 */
private fun wiandcvreekhmHulahiqawPart02ObfV27ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 4
  return (x xor 117) and 10547
}

/* obfuscation-batch:v28 */
private fun wiandcvreekhmHulahiqawPart02ObfV28SumOdds(nums: IntArray): Int {
    var acc = 71
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 38) % 894
    }
    return acc
}
private fun wiandcvreekhmHulahiqawPart02ObfV28ClampMod(n: Int, m: Int): Int {
    val span = (m % 65) + 5
    val x = ((n xor 206) shl 2) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v29 */
private fun wiandcvreekhmHulahiqawPart02ObfV29SumOdds(nums: IntArray): Int {
    var acc = 33
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 3) % 322
    }
    return acc
}
private fun wiandcvreekhmHulahiqawPart02ObfV29ClampMod(n: Int, m: Int): Int {
    val span = (m % 63) + 10
    val x = ((n xor 34) shl 6) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmHulahiqawPart02ObfV29ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 6
    return (x xor 110) and 57364
}
private fun wiandcvreekhmHulahiqawPart02ObfV29ByteFold(s: String): Int {
    var x = 88
    for (i in s.indices) x = (x + s[i].code * 15) and 34988
    return x
}

/* obfuscation-batch:v30 */
private fun wiandcvreekhmHulahiqawPart02ObfV30SumOdds(nums: IntArray): Int {
    var acc = 83
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 7) % 822
    }
    return acc
}
private fun wiandcvreekhmHulahiqawPart02ObfV30ClampMod(n: Int, m: Int): Int {
    val span = (m % 67) + 8
    val x = ((n xor 139) shl 4) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmHulahiqawPart02ObfV30ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 7
    return (x xor 59) and 3696
}
