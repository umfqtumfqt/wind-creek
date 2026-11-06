/* autosetup-decoy:v1 */
package com.windcrelek42vfk9e6

object DwiandcvreekhmDrift03 {
  fun tap(seed: Int): Int {
    var x = seed
    x = x xor 54818
    x = (x ushr 3) xor 570
    x = (x * 75) and 0xffff
    return x
  }
}
