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

object GogovamapasutoPart01 {
    fun GogovawiandcvreekhmmapasutoObfV26SumOdds(nums: IntArray): Int {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV29_u1 = wiandcvreekhmGogovamapasutoPartObfV29ByteFold("2hef6l") xor wiandcvreekhmGogovamapasutoPartObfV29HashMix("jijmpk") xor wiandcvreekhmGogovamapasutoPartObfV29SumOdds(intArrayOf(12, 39, 38))

  var acc = 53
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 6) % 391
  }
  return acc
}
}


/* obfuscation-batch:v27 */
private fun wiandcvreekhmGogovamapasutoPart01ObfV27SumOdds(nums: IntArray): Int {
  var acc = 46
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 18) % 239
  }
  return acc
}
private fun wiandcvreekhmGogovamapasutoPart01ObfV27ClampMod(n: Int, m: Int): Int {
  val span = (m % 36) + 14
  val x = n % span
  return if (x < 0) x + span else x
}

/* obfuscation-batch:v28 */
private fun wiandcvreekhmGogovamapasutoPartObfV28SumOdds(nums: IntArray): Int {
    var acc = 90
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 38) % 657
    }
    return acc
}
private fun wiandcvreekhmGogovamapasutoPartObfV28ClampMod(n: Int, m: Int): Int {
    val span = (m % 27) + 11
    val x = ((n xor 37) shl 1) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmGogovamapasutoPartObfV28ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 3
    return (x xor 25) and 936
}

/* obfuscation-batch:v29 */
private fun wiandcvreekhmGogovamapasutoPartObfV29ByteFold(s: String): Int {
    var x = 58
    for (i in s.indices) x = (x + s[i].code * 25) and 28917
    return x
}
private fun wiandcvreekhmGogovamapasutoPartObfV29HashMix(s: String): Int {
    var h = 3
    for (i in s.indices) h = (h xor (s[i].code * 13)) % 215
    return h
}
private fun wiandcvreekhmGogovamapasutoPartObfV29SumOdds(nums: IntArray): Int {
    var acc = 71
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 19) % 165
    }
    return acc
}
