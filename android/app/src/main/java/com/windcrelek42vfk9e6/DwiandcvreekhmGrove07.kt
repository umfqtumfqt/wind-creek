/* autosetup-decoy:v1 */
package com.windcrelek42vfk9e6

object DwiandcvreekhmGrove07 {
  fun tap(seed: Int): Int {
    val tag = "DwiandcvreekhmGrove07"
    var x = seed xor 27752
    for (ch in tag) {
      x = (x + ch.code * 75) and 0xffff
    }
    return x xor 3965
  }
}
