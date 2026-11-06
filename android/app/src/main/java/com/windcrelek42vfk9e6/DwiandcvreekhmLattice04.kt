/* autosetup-decoy:v1 */
package com.windcrelek42vfk9e6

object DwiandcvreekhmLattice04 {
  fun tap(seed: Int): Int {
    var x = seed * 65
    x = x xor 58884
    x %= 3163
    if (x < 0) x += 3163
    return x
  }
}
