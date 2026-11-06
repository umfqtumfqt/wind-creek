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

object DuporeredaxPart01 {
    fun pozilewup(body: String): String {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV2_u1 = wiandcvreekhmDuporeredaxPart01ObfV2SumOdds(intArrayOf(21, 36, 31)) xor wiandcvreekhmDuporeredaxPart01ObfV2ClampMod(62, 41)
    @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV1_u2 = wiandcvreekhmDuporeredaxObfV1ByteFold("pgn0") xor wiandcvreekhmDuporeredaxObfV1HashMix("85ed") xor wiandcvreekhmDuporeredaxObfV1SumOdds(intArrayOf(21, 12, 31)) xor wiandcvreekhmDuporeredaxObfV1ClampMod(78, 9)
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

    fun wiandcvreekhmDuporeredaxObfV1ByteFold(s: String): Int {
    var x = 16
    for (i in s.indices) x = (x + s[i].code * 37) and 43328
    return x
}

    fun wiandcvreekhmDuporeredaxObfV1HashMix(s: String): Int {
    var h = 79
    for (i in s.indices) h = (h xor (s[i].code * 6)) % 248
    return h
}

    fun wiandcvreekhmDuporeredaxObfV1SumOdds(nums: IntArray): Int {
    var acc = 73
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 3) % 605
    }
    return acc
}

    fun wiandcvreekhmDuporeredaxObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 38) + 12
    val x = ((n xor 82) shl 7) % span
    return if (x < 0) x + span else x
}
}

/* obfuscation-batch:v2 */
private fun wiandcvreekhmDuporeredaxPart01ObfV2SumOdds(nums: IntArray): Int {
    var acc = 83
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 41) % 324
    }
    return acc
}
private fun wiandcvreekhmDuporeredaxPart01ObfV2ClampMod(n: Int, m: Int): Int {
    val span = (m % 45) + 10
    val x = ((n xor 180) shl 3) % span
    return if (x < 0) x + span else x
}
