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

object SacunonidPart02 {
    fun wiandcvreekhmSacunonidObfV25HashMix(s: String): Int {

  var h = 82
  for (i in s.indices) h = (h xor (s[i].code * 37)) % 776
  return h
}

    fun VofovimafogObfV24SumOdds(nums: IntArray): Int {

  var acc = 13
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 7) % 443
  }
  return acc
}
}


/* obfuscation-batch:v26 */
private fun SacunonidPart02wiandcvreekhmObfV26SumOdds(nums: IntArray): Int {

  var acc = 68
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 35) % 463
  }
  return acc
}

private fun SacunonidPart02ObfV26wiandcvreekhmClampMod(n: Int, m: Int): Int {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV30_u1 = wiandcvreekhmSacunonidPart02ObfV30ByteFold("c5gl") xor wiandcvreekhmSacunonidPart02ObfV30HashMix("5o9a") xor wiandcvreekhmSacunonidPart02ObfV30SumOdds(intArrayOf(12, 39, 30))

  val span = (m % 31) + 12
  val x = n % span
  return if (x < 0) x + span else x
}

private fun SacuwiandcvreekhmnonidPart02ObfV26ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 1
  return (x xor 44) and 11965
}
@Suppress("UNUSED_VARIABLE")
private val wiandcvreekhmBootV26 = SacunonidPart02wiandcvreekhmObfV26SumOdds(intArrayOf(17, 30, 37)) xor SacunonidPart02ObfV26wiandcvreekhmClampMod(88, 42) xor SacuwiandcvreekhmnonidPart02ObfV26ShiftXor(10, 47)


/* obfuscation-batch:v27 */
private fun wiandcvreekhmSacunonidPart02ObfV27ClampMod(n: Int, m: Int): Int {
  val span = (m % 40) + 5
  val x = n % span
  return if (x < 0) x + span else x
}
private fun wiandcvreekhmSacunonidPart02ObfV27ShiftXor(n: Int, k: Int): Int {
  val x = (n xor k) shl 6
  return (x xor 125) and 9598
}

/* obfuscation-batch:v28 */
private fun wiandcvreekhmSacunonidPart02ObfV28HashMix(s: String): Int {
    var h = 68
    for (i in s.indices) h = (h xor (s[i].code * 24)) % 766
    return h
}
private fun wiandcvreekhmSacunonidPart02ObfV28SumOdds(nums: IntArray): Int {
    var acc = 68
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 20) % 142
    }
    return acc
}

/* obfuscation-batch:v29 */
private fun wiandcvreekhmSacunonidPart02ObfV29SumOdds(nums: IntArray): Int {
    var acc = 76
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 19) % 768
    }
    return acc
}
private fun wiandcvreekhmSacunonidPart02ObfV29ClampMod(n: Int, m: Int): Int {
    val span = (m % 23) + 2
    val x = ((n xor 194) shl 1) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmSacunonidPart02ObfV29ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 7
    return (x xor 66) and 18362
}
private fun wiandcvreekhmSacunonidPart02ObfV29ByteFold(s: String): Int {
    var x = 25
    for (i in s.indices) x = (x + s[i].code * 25) and 33459
    return x
}

/* obfuscation-batch:v30 */
private fun wiandcvreekhmSacunonidPart02ObfV30ByteFold(s: String): Int {
    var x = 33
    for (i in s.indices) x = (x + s[i].code * 36) and 45840
    return x
}
private fun wiandcvreekhmSacunonidPart02ObfV30HashMix(s: String): Int {
    var h = 50
    for (i in s.indices) h = (h xor (s[i].code * 33)) % 100
    return h
}
private fun wiandcvreekhmSacunonidPart02ObfV30SumOdds(nums: IntArray): Int {
    var acc = 89
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 39) % 90
    }
    return acc
}
