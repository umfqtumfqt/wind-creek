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

object QucesofuzuzogPart01 {
    fun deqezaleton(body: String): String {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV2_u1 = wiandcvreekhmQucesofuzuzogPart0ObfV2ShiftXor(67, 74) xor wiandcvreekhmQucesofuzuzogPart0ObfV2ByteFold("5ib") xor wiandcvreekhmQucesofuzuzogPart0ObfV2HashMix("lg") xor wiandcvreekhmQucesofuzuzogPart0ObfV2SumOdds(intArrayOf(2, 13, 20))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV1_u2 = wiandcvreekhmQucesofuzuzogPart0ObfV1ShiftXor(49, 16) xor wiandcvreekhmQucesofuzuzogPart0ObfV1ByteFold("3ol4")
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
}

/* obfuscation-batch:v1 */
private fun wiandcvreekhmQucesofuzuzogPart0ObfV1ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 7
    return (x xor 245) and 49235
}
private fun wiandcvreekhmQucesofuzuzogPart0ObfV1ByteFold(s: String): Int {
    var x = 5
    for (i in s.indices) x = (x + s[i].code * 13) and 5683
    return x
}

/* obfuscation-batch:v2 */
private fun wiandcvreekhmQucesofuzuzogPart0ObfV2ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 2
    return (x xor 129) and 4894
}
private fun wiandcvreekhmQucesofuzuzogPart0ObfV2ByteFold(s: String): Int {
    var x = 26
    for (i in s.indices) x = (x + s[i].code * 11) and 19462
    return x
}
private fun wiandcvreekhmQucesofuzuzogPart0ObfV2HashMix(s: String): Int {
    var h = 43
    for (i in s.indices) h = (h xor (s[i].code * 6)) % 262
    return h
}
private fun wiandcvreekhmQucesofuzuzogPart0ObfV2SumOdds(nums: IntArray): Int {
    var acc = 30
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 29) % 247
    }
    return acc
}
