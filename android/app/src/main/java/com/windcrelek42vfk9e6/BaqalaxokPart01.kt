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

object BaqalaxokPart01 {
    fun BaqalaxokObfV23wiandcvreekhmShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 1
  return (x xor 106) and 20192
}
}
/* obfuscation-batch:v24 */
private fun BaqalaxokPart01ObfV24ClampMod(n: Int, m: Int): Int {

  val span = (m % 56) + 6
  val x = n % span
  return if (x < 0) x + span else x
}

private fun BaqalaxokPart01ObfV24ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 4
  return (x xor 123) and 17397
}
@Suppress("UNUSED_VARIABLE") private val wiandcvreekhmBootV24 = BaqalaxokPart01ObfV24ClampMod(22, 49) xor BaqalaxokPart01ObfV24ShiftXor(16, 54)


/* obfuscation-batch:v25 */
private fun wiandcvreekhmBaqalaxokPart01ObfV25HashMix(s: String): Int {

  var h = 32
  for (i in s.indices) h = (h xor (s[i].code * 15)) % 747
  return h
}

private fun wiandcvreekhmBaqalaxokPart01ObfV25SumOdds(nums: IntArray): Int {

  var acc = 40
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 21) % 293
  }
  return acc
}

private fun wiandcvreekhmBaqalaxokPart01ObfV25ClampMod(n: Int, m: Int): Int {

  val span = (m % 44) + 7
  val x = n % span
  return if (x < 0) x + span else x
}

private fun wiandcvreekhmBaqalaxokPart01ObfV25ShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 3
  return (x xor 167) and 27423
}
@Suppress("UNUSED_VARIABLE") private val wiandcvreekhmBootV25 = wiandcvreekhmBaqalaxokPart01ObfV25HashMix("m3") xor wiandcvreekhmBaqalaxokPart01ObfV25SumOdds(intArrayOf(32, 27, 14)) xor wiandcvreekhmBaqalaxokPart01ObfV25ClampMod(8, 20) xor wiandcvreekhmBaqalaxokPart01ObfV25ShiftXor(4, 26)


/* obfuscation-batch:v26 */
private fun BaqalaxokPart01ObfV26wiandcvreekhmShiftXor(n: Int, k: Int): Int {

  val x = (n xor k) shl 6
  return (x xor 55) and 53713
}

private fun BaqalaxowiandcvreekhmkPart01ObfV26ByteFold(s: String): Int {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV29_u1 = wiandcvreekhmBaqalaxokPart01ObfV29SumOdds(intArrayOf(31, 14, 25)) xor wiandcvreekhmBaqalaxokPart01ObfV29ClampMod(24, 11) xor wiandcvreekhmBaqalaxokPart01ObfV29ShiftXor(58, 5) xor wiandcvreekhmBaqalaxokPart01ObfV29ByteFold("encd69")

  var x = 79
  for (i in s.indices) x = (x + s[i].code * 23) and 51659
  return x
}
@Suppress("UNUSED_VARIABLE")
private val wiandcvreekhmBootV26 = BaqalaxokPart01ObfV26wiandcvreekhmShiftXor(22, 73) xor BaqalaxowiandcvreekhmkPart01ObfV26ByteFold("e3e85")


/* obfuscation-batch:v27 */
private fun wiandcvreekhmBaqalaxokPart01ObfV27ByteFold(s: String): Int {
  var x = 42
  for (i in s.indices) x = (x + s[i].code * 24) and 53909
  return x
}
private fun wiandcvreekhmBaqalaxokPart01ObfV27HashMix(s: String): Int {
  var h = 79
  for (i in s.indices) h = (h xor (s[i].code * 17)) % 303
  return h
}
private fun wiandcvreekhmBaqalaxokPart01ObfV27SumOdds(nums: IntArray): Int {
  var acc = 3
  for (n in nums) {
    if ((n and 1) == 0) continue
    acc = (acc + n * 6) % 213
  }
  return acc
}
private fun wiandcvreekhmBaqalaxokPart01ObfV27ClampMod(n: Int, m: Int): Int {
  val span = (m % 51) + 6
  val x = n % span
  return if (x < 0) x + span else x
}

/* obfuscation-batch:v28 */
private fun wiandcvreekhmBaqalaxokPart01ObfV28ByteFold(s: String): Int {
    var x = 63
    for (i in s.indices) x = (x + s[i].code * 22) and 48014
    return x
}
private fun wiandcvreekhmBaqalaxokPart01ObfV28HashMix(s: String): Int {
    var h = 18
    for (i in s.indices) h = (h xor (s[i].code * 24)) % 144
    return h
}
private fun wiandcvreekhmBaqalaxokPart01ObfV28SumOdds(nums: IntArray): Int {
    var acc = 32
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 16) % 493
    }
    return acc
}
private fun wiandcvreekhmBaqalaxokPart01ObfV28ClampMod(n: Int, m: Int): Int {
    val span = (m % 23) + 8
    val x = ((n xor 83) shl 1) % span
    return if (x < 0) x + span else x
}

/* obfuscation-batch:v29 */
private fun wiandcvreekhmBaqalaxokPart01ObfV29SumOdds(nums: IntArray): Int {
    var acc = 32
    for (n in nums) {
        if ((n and 1) == 0) continue
        acc = (acc + n * 41) % 447
    }
    return acc
}
private fun wiandcvreekhmBaqalaxokPart01ObfV29ClampMod(n: Int, m: Int): Int {
    val span = (m % 57) + 2
    val x = ((n xor 122) shl 5) % span
    return if (x < 0) x + span else x
}
private fun wiandcvreekhmBaqalaxokPart01ObfV29ShiftXor(n: Int, k: Int): Int {
    val x = (n xor k) shl 6
    return (x xor 60) and 59209
}
private fun wiandcvreekhmBaqalaxokPart01ObfV29ByteFold(s: String): Int {
    var x = 7
    for (i in s.indices) x = (x + s[i].code * 12) and 41049
    return x
}
