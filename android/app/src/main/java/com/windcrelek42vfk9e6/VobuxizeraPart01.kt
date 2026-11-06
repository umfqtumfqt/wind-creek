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

object VobuxizeraPart01 {
    fun wiandcvreekhmVobuxizeraObfV31HashMix(s: String): Int {
    var h = 27
    for (i in s.indices) h = (h xor (s[i].code * 33)) % 540
    return h
}
}
