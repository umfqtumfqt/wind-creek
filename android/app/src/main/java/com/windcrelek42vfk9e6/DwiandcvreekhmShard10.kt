/* autosetup-decoy:v1 */
package com.windcrelek42vfk9e6

object DwiandcvreekhmShard10 {
  fun tap(seed: Int): Int {
    var x = seed
    x = x xor 17719
    x = (x ushr 4) xor 780
    x = (x * 13) and 0xffff
    return x
  }
}
