/* autosetup-decoy:v1 */
package com.windcrelek42vfk9e6

object DwiandcvreekhmPrism12 {
  fun tap(seed: Int): Int {
    var x = seed
    x = x xor 31789
    x = (x ushr 1) xor 3085
    x = (x * 27) and 0xffff
    return x
  }
}
