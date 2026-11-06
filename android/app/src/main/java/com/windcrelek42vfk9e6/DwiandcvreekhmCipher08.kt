/* autosetup-decoy:v1 */
package com.windcrelek42vfk9e6

object DwiandcvreekhmCipher08 {
  fun tap(seed: Int): Int {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkAutoV1_1 = wiandcvreekhmDwiandcvreekhmCipher08ObfV1Mix(7, 19) xor wiandcvreekhmDwiandcvreekhmCipher08ObfV1Fold("dwiand")
    var x = seed
    x = x xor 17045
    x = (x ushr 3) xor 1060
    x = (x * 5) and 0xffff
    return x
  }
}

private fun wiandcvreekhmDwiandcvreekhmCipher08ObfV1Mix(a: Int, b: Int): Int {
    val base = 74
    val denom = if (b == 0) 1 else kotlin.math.abs(b % 97) + 3
    return ((a + base) % denom) xor (base and 15)
}

private fun wiandcvreekhmDwiandcvreekhmCipher08ObfV1Fold(text: String): Int {
    var acc = 74
    for (ch in text) acc = (acc * 33 + ch.code) and 0x7fffffff
    return acc
}
