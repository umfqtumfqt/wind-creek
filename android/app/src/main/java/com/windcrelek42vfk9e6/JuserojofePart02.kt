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

object JuserojofePart02 {
    fun wiandcvreekhmHozaminajaObfV29ByteFold(s: String): Int {
    var x = 19
    for (i in s.indices) x = (x + s[i].code * 11) and 65535
    return x
}

    fun wiandcvreekhmHozaminajaObfV29SumOdds(nums: IntArray): Int {
    var acc = 11
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 5) % 251
    }
    return acc
}
}
