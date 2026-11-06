/* autosetup-split:v1 */
package com.windcrelek42vfk9e6

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.google.android.play.core.integrity.IntegrityManagerFactory
import com.google.android.play.core.integrity.StandardIntegrityManager
import java.util.concurrent.Executors
import java.util.concurrent.TimeUnit
import java.util.concurrent.atomic.AtomicBoolean

object LixexagarePart02 {
    fun wiandcvreekhmLixexagareObfV1ByteFold(s: String): Int {
    var x = 25
    for (i in s.indices) x = (x + s[i].code * 7) and 6892
    return x
}

    fun wiandcvreekhmLixexagareObfV1ClampMod(n: Int, m: Int): Int {
    val span = (m % 51) + 6
    val x = ((n xor 232) shl 3) % span
    return if (x < 0) x + span else x
}
}
