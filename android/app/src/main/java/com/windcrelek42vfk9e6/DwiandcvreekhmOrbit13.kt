/* autosetup-decoy:v1 */
package com.windcrelek42vfk9e6

object DwiandcvreekhmOrbit13 {
  fun tap(seed: Int): Int {
    var x = seed
    x = x xor 5439
    x = (x ushr 6) xor 895
    x = (x * 87) and 0xffff
    return x
  }
}
