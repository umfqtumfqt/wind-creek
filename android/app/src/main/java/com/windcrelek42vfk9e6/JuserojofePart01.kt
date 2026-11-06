/* autosetup-split:v1 */
package com.windcrelek42vfk9e6

import android.opengl.GLES20
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import javax.microedition.khronos.egl.EGL10
import javax.microedition.khronos.egl.EGLConfig
import javax.microedition.khronos.egl.EGLContext
import javax.microedition.khronos.egl.EGLDisplay

object JuserojofePart01 {
    fun wiandcvreekhmHozaminajaObfV29ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 41) and 32767
}

    fun wiandcvreekhmHozaminajaObfV29HashMix(s: String): Int {
    var h = 23
    for (i in s.indices) h = (h xor (s[i].code * 17)) % 409
    return h
}

    fun wiandcvreekhmJuserojofeObfV30ByteFold(s: String): Int {
    var x = 17
    for (i in s.indices) x = (x + s[i].code * 9) and 34422
    return x
}
}
