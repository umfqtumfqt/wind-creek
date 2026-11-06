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

object VobuxizeraPart02 {
    fun wiandcvreekhmVobuxizeraObfV31SumOdds(nums: IntArray): Int {
    var acc = 89
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 8) % 354
    }
    return acc
}
}
