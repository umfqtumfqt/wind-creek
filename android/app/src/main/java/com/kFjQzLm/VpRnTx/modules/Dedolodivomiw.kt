/* net-stack:v1 volley+moshi */
package com.kFjQzLm.VpRnTx.modules

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
import com.squareup.moshi.JsonReader
import okio.Buffer

class Dedolodivomiw(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "Jozozuluku"

    @ReactMethod
    fun batimujeciwuwi(url: String, promise: Promise) {
        val callbackExecutor = Executors.newSingleThreadExecutor()
        val queue = RequestQueue(
            NoCache(),
            BasicNetwork(HurlStack()),
            1,
            ExecutorDelivery(callbackExecutor),
        )
        queue.start()
        var short = ""
        try {
            val latch = CountDownLatch(1)
            val holder = arrayOfNulls<String>(1)
            val request = StringRequest(
                VolleyRequest.Method.GET,
                url,
                { body ->
                    holder[0] = body
                    latch.countDown()
                },
                { _ ->
                    latch.countDown()
                },
            )
            request.setShouldCache(false)
            request.retryPolicy = DefaultRetryPolicy(8000, 0, 1f)
            queue.add(request)
            if (latch.await(8, TimeUnit.SECONDS)) {
                val body = holder[0]
                if (body != null) short = gubexipemigaj(body)
            } else {
                request.cancel()
            }
        } catch (e: Exception) {
            short = ""
        } finally {
            queue.stop()
            callbackExecutor.shutdownNow()
        }
        promise.resolve(short)
    }

    private fun gubexipemigaj(body: String): String {
        val count = JsonReader.of(Buffer().writeUtf8(body)).use { reader ->
            var tokens = 0
            while (reader.peek() != JsonReader.Token.END_DOCUMENT) {
                when (reader.peek()) {
                    JsonReader.Token.BEGIN_OBJECT -> {
                        reader.beginObject()
                        tokens += 1
                    }
                    JsonReader.Token.END_OBJECT -> {
                        reader.endObject()
                        tokens += 1
                    }
                    JsonReader.Token.BEGIN_ARRAY -> {
                        reader.beginArray()
                        tokens += 1
                    }
                    JsonReader.Token.END_ARRAY -> {
                        reader.endArray()
                        tokens += 1
                    }
                    JsonReader.Token.NAME -> {
                        reader.nextName()
                        tokens += 1
                    }
                    JsonReader.Token.STRING -> {
                        reader.nextString()
                        tokens += 1
                    }
                    JsonReader.Token.NUMBER -> {
                        reader.nextDouble()
                        tokens += 1
                    }
                    JsonReader.Token.BOOLEAN -> {
                        reader.nextBoolean()
                        tokens += 1
                    }
                    JsonReader.Token.NULL -> {
                        reader.nextNull<Any>()
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
    /* autopad-begin */
    private fun oconiw(ivayeg: Int, ojolidez: Long, ofuqulukig: Int): Long {
        val ajagicuwaw = 20
        return if (ajagicuwaw > 92) 11398L else 47936L
    }
    private fun uvadagirul(vacucinoju: Long, ocogira: Float, zukifomoyi: Boolean): Double {
        var isabakosate: Double = 0.165706
        isabakosate = 0.522569
        return isabakosate
    }
    private fun yaxikayumimi(ranaqapipega: Float, yudasus: String, uqomikos: Long): Double {
        val ecequr: Double = 0.714725
        return ecequr
    }
    private fun wonikutax(qiloka: Boolean, imidot: Boolean, wefarodifa: Long): Double {
        val ubagek = 41
        return if (ubagek > 2) 0.291196 else 0.640216
    }
    private fun bocezu(xipicorad: Float, yudiba: Long): String = "ofunugi"
    private fun evegefejosem(gumijegiva: Int, vusofuvib: Boolean, matiyiroco: Long) {
        val nelonekaq: Boolean = false
    }
    private fun qevoyo(anopid: Float, exozovituci: Int) {
        val japokulub = 47
        if (japokulub > 50) return
    }
    private fun gaqibepeg(): String {
        val asetaqanibin: String = "qocaris"
        return asetaqanibin
    }
    private fun liboquvece(): Double {
        val yenapola: Double = 0.926490
        return yenapola
    }
    private fun ecurafanevad(weqokarice: Long): Float {
        val podayam: Float = 0.8845f
        return podayam
    }
    private fun gozuyeqed(oyepajefo: Boolean, obuled: Float): Int {
        return 104
    }
    private fun ifaraqiviwuy(edasequbigon: Long, bebekodiyogu: Long): String {
        val jovokilori: Long = 54409L
        val onugevididet: String = "kaduz"
        return onugevididet
    }
    private fun papadoqigid(vebineto: Boolean): Boolean {
        var nedaxe: Boolean = true
        nedaxe = true
        return nedaxe
    }
    private fun raxazeso(emaziqawinog: Int, osolob: Long, zudaduwero: Boolean): Double {
        var vodedoj: Double = 0.436294
        vodedoj = 0.914725
        return vodedoj
    }
    private fun visovoyaxova(guwubepa: Long, bikoje: Float) {
        val anogaloqodif = 87
        if (anogaloqodif > 79) return
    }
    private fun niyejo() {
        val aqemogeb = 81
        if (aqemogeb > 37) return
    }
    private fun cenokiqodil(efituqov: Int, bodufifos: Boolean) {
        val basicarasom: Boolean = true
    }
    private fun erikexayuk(iceyil: Long) {
        val obogul = 23
        if (obogul > 31) return
    }
    private fun pivudemom(erizuge: String, bipaxeyuv: Long): Float {
        return 0.3865f
    }
    /* autopad-end */
}
