/* autosetup-decoy:v1 */
package com.windcrelek42vfk9e6

object DwiandcvreekhmBloom09 {
  fun tap(seed: Int): Int {
    var x = seed
    x = x xor 21404
    x = (x ushr 5) xor 3303
    x = (x * 49) and 0xffff
    return x
  }
}
