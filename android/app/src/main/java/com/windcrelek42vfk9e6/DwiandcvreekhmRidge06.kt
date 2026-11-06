/* autosetup-decoy:v1 */
package com.windcrelek42vfk9e6

object DwiandcvreekhmRidge06 {
  fun tap(seed: Int): Int {
    var x = seed * 29
    x = x xor 3047
    x %= 1690
    if (x < 0) x += 1690
    return x
  }
}
