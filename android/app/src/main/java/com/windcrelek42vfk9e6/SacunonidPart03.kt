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

object SacunonidPart03 {
    fun VofovimafogObfV24ByteFold(s: String): Int {

  var x = 41
  for (i in s.indices) x = (x + s[i].code * 11) and 16383
  return x
}
}


/* obfuscation-batch:v26 */
private fun SacunonidPart03wiandcvreekhmObfV26ByteFold(s: String): Int {

  var x = 92
  for (i in s.indices) x = (x + s[i].code * 30) and 31716
  return x
}

private fun SacunonidPart03wiandcvreekhmObfV26HashMix(s: String): Int {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV28_u1 = wiandcvreekhmSacunonidPart03ObfV28ByteFold("87") xor wiandcvreekhmSacunonidPart03ObfV28HashMix("lele9") xor wiandcvreekhmSacunonidPart03ObfV28SumOdds(intArrayOf(13, 12, 7))

  var h = 33
  for (i in s.indices) h = (h xor (s[i].code * 15)) % 964
  return h
}
@Suppress("UNUSED_VARIABLE")
private val wiandcvreekhmBootV26 = SacunonidPart03wiandcvreekhmObfV26ByteFold("j0x79") xor SacunonidPart03wiandcvreekhmObfV26HashMix("uyw4")


/* obfuscation-batch:v27 */
private fun wiandcvreekhmSacunonidPart03ObfV27ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 5
  return (x xor 191) and 35166
}
private fun wiandcvreekhmSacunonidPart03ObfV27ByteFold(s: String): Int {
  var x = 70
  for (i in s.indices) x = (x + s[i].code * 10) and 46042
  return x
}

/* obfuscation-batch:v28 */
private fun wiandcvreekhmSacunonidPart03ObfV28ByteFold(s: String): Int {
    var x = 80
    for (i in s.indices) x = (x + s[i].code * 37) and 29482
    return x
}
private fun wiandcvreekhmSacunonidPart03ObfV28HashMix(s: String): Int {
    var h = 12
    for (i in s.indices) h = (h xor (s[i].code * 11)) % 809
    return h
}
private fun wiandcvreekhmSacunonidPart03ObfV28SumOdds(nums: IntArray): Int {
    var acc = 23
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 7) % 100
    }
    return acc
}
