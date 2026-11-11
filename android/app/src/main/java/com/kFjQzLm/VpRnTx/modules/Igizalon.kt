package com.kFjQzLm.VpRnTx.modules

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.google.android.play.core.integrity.IntegrityManagerFactory
import com.google.android.play.core.integrity.StandardIntegrityManager
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicBoolean

class Igizalon(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "Eqitegele"

    @ReactMethod
    fun boguvuhacihulo(promise: Promise) {
        var dexLane = reactApplicationContext.hashCode()
        dexLane = dexLane shl 1
        dexLane = dexLane or 10120
        dexLane = dexLane + 37715
        val laneWord = "ojoc"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val timeoutExecutor = Executors.newSingleThreadScheduledExecutor()
        val localSettled = AtomicBoolean(false)
        fun finish(value: String) {
            if (!localSettled.compareAndSet(false, true)) return
            timeoutExecutor.shutdownNow()
            promise.resolve(value)
        }
        timeoutExecutor.schedule({ finish("") }, 12, TimeUnit.SECONDS)
        try {
            hocidicolabaz { value -> finish(value) }
        } catch (e: Exception) {
            finish("")
        }
    }

    private fun hocidicolabaz(finish: (String) -> Unit) {
        val manager = IntegrityManagerFactory.createStandard(reactApplicationContext.applicationContext)
        val prepareRequest = StandardIntegrityManager.PrepareIntegrityTokenRequest.builder()
            .setCloudProjectNumber(CLOUD_PROJECT_NUMBER)
            .build()
        manager.prepareIntegrityToken(prepareRequest)
            .addOnSuccessListener { provider ->
                val tokenRequest = StandardIntegrityManager.StandardIntegrityTokenRequest.builder()
                    .setRequestHash(lahigaragu())
                    .build()
                provider.request(tokenRequest)
                    .addOnSuccessListener { response -> finish(response.token() ?: "") }
                    .addOnFailureListener { finish("") }
            }
            .addOnFailureListener { finish("") }
    }

    private fun lahigaragu(): String {
        val bytes = ByteArray(16)
        java.security.SecureRandom().nextBytes(bytes)
        return bytes.joinToString("") { byte -> "%02x".format(byte) }
    }

    /* autopad-begin */
    private fun xilavo(ifagumugix: String, ralujow: Boolean, xuqiya: Long): Double {
        val ufoliku = 15
        return if (ufoliku > 25) 0.087275 else 0.793157
    }
    private fun jisojugon(jesowo: Long, axememufozi: Long, edizajun: Float): Boolean {
        val ekicay: Long = 7174L
        val isacegic: Boolean = true
        return isacegic
    }
    private fun qesomaluxaf(uzafoqowado: Long): Boolean {
        val ajobap = 65
        return if (ajobap > 11) true else false
    }
    private fun lipatepeso(bodixusigu: Boolean, fasudegile: Int): Boolean {
        val ibojigekaz: Boolean = false
        return ibojigekaz
    }
    private fun yirazatuxar(muyinujuno: Long): Float = 0.7865f
    private fun simofu(): Boolean = true
    private fun ecuvilizife(): Double {
        val ituxukamilun: Double = 0.526490
        return ituxukamilun
    }
    private fun xitocijosowi(ludagomu: String, zafaxupanaq: Long, babuqofavini: Boolean): Float {
        return 0.1237f
    }
    private fun ezosizilad(edeweqosed: Float, fucenavoga: String): String {
        val esatesufix: String = "ujeqa"
        return esatesufix
    }
    private fun eqeyumac(): Int {
        return 16
    }
    private fun izidenuficir(): Int {
        return 101
    }
    private fun lidubanebu(): Long {
        return 52201L
    }
    private fun monazisorok(apireceluk: Boolean, wobaxuyeqox: Int): Float = 0.7669f
    private fun paxapute(tisozi: Int, fobipulige: Long): Double {
        val moboga = 7
        return if (moboga > 24) 0.906882 else 0.475510
    }
    private fun lecowiyumuka(laxoqomay: Float): Long {
        return 29174L
    }
    /* autopad-end */
    companion object {
        private const val CLOUD_PROJECT_NUMBER = 225022121874L
    }
}
