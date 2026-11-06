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

object SoxojujotifoqPart01 {
    fun gevezumekemur(body: String): String {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV6_u1 = wiandcvreekhmSoxojujotifoqPart0ObfV6HashMix("1ap61") xor wiandcvreekhmSoxojujotifoqPart0ObfV6SumOdds(intArrayOf(33, 24, 19)) xor wiandcvreekhmSoxojujotifoqPart0ObfV6ClampMod(74, 37) xor wiandcvreekhmSoxojujotifoqPart0ObfV6ShiftXor(44, 79)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV5_u2 = wiandcvreekhmSoxojujotifoqPart0ObfV5ShiftXor(41, 40) xor wiandcvreekhmSoxojujotifoqPart0ObfV5ByteFold("5kbi36")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV4_u3 = wiandcvreekhmSoxojujotifoqPart0ObfV4ByteFold("7idc") xor wiandcvreekhmSoxojujotifoqPart0ObfV4HashMix("27o7c")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV3_u4 = wiandcvreekhmSoxojujotifoqPart0ObfV3ShiftXor(27, 18) xor wiandcvreekhmSoxojujotifoqPart0ObfV3ByteFold("3c1") xor wiandcvreekhmSoxojujotifoqPart0ObfV3HashMix("haj69") xor wiandcvreekhmSoxojujotifoqPart0ObfV3SumOdds(intArrayOf(7, 38, 33))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV2_u5 = wiandcvreekhmSoxojujotifoqPart0ObfV2ClampMod(29, 28) xor wiandcvreekhmSoxojujotifoqPart0ObfV2ShiftXor(71, 62)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV1_u6 = wiandcvreekhmSoxojujotifoqPart0ObfV1ClampMod(32, 67)
    val element = JsonParser.parseString(body)
    return element.toString().length.toString()
}
}

/* obfuscation-batch:v1 */
private fun wiandcvreekhmSoxojujotifoqPart0ObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 25) + 5
    val x = ((n xor 58) shl 1) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v2 */
private fun wiandcvreekhmSoxojujotifoqPart0ObfV2ClampMod(n: Int, m: Int): Int {
    val span = (m % 30) + 10
    val x = ((n xor 57) shl 4) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmSoxojujotifoqPart0ObfV2ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 2
    return (x xor 191) and 43670
}

/* obfuscation-batch:v3 */
private fun wiandcvreekhmSoxojujotifoqPart0ObfV3ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 4
    return (x xor 233) and 15791
}
private fun wiandcvreekhmSoxojujotifoqPart0ObfV3ByteFold(s: String): Int {
    var x = 3
    for (i in s.indices) x = (x + s[i].code * 21) and 27132
    return x
}
private fun wiandcvreekhmSoxojujotifoqPart0ObfV3HashMix(s: String): Int {
    var h = 88
    for (i in s.indices) h = (h xor (s[i].code * 33)) % 733
    return h
}
private fun wiandcvreekhmSoxojujotifoqPart0ObfV3SumOdds(nums: IntArray): Int {
    var acc = 17
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 30) % 320
    }
    return acc
}

/* obfuscation-batch:v4 */
private fun wiandcvreekhmSoxojujotifoqPart0ObfV4ByteFold(s: String): Int {
    var x = 42
    for (i in s.indices) x = (x + s[i].code * 12) and 35660
    return x
}
private fun wiandcvreekhmSoxojujotifoqPart0ObfV4HashMix(s: String): Int {
    var h = 21
    for (i in s.indices) h = (h xor (s[i].code * 18)) % 669
    return h
}

/* obfuscation-batch:v5 */
private fun wiandcvreekhmSoxojujotifoqPart0ObfV5ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 5
    return (x xor 199) and 29562
}
private fun wiandcvreekhmSoxojujotifoqPart0ObfV5ByteFold(s: String): Int {
    var x = 18
    for (i in s.indices) x = (x + s[i].code * 30) and 58183
    return x
}

/* obfuscation-batch:v6 */
private fun wiandcvreekhmSoxojujotifoqPart0ObfV6HashMix(s: String): Int {
    var h = 46
    for (i in s.indices) h = (h xor (s[i].code * 21)) % 397
    return h
}
private fun wiandcvreekhmSoxojujotifoqPart0ObfV6SumOdds(nums: IntArray): Int {
    var acc = 42
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 23) % 865
    }
    return acc
}
private fun wiandcvreekhmSoxojujotifoqPart0ObfV6ClampMod(n: Int, m: Int): Int {
    val span = (m % 56) + 10
    val x = ((n xor 40) shl 3) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmSoxojujotifoqPart0ObfV6ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 1
    return (x xor 58) and 28426
}
