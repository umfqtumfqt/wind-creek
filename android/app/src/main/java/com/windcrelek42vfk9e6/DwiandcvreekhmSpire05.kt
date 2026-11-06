/* autosetup-decoy:v1 */
package com.windcrelek42vfk9e6

object DwiandcvreekhmSpire05 {
  fun tap(seed: Int): Int {
    var x = seed + 33987
    x = x shl 1
    x = x xor 2384
    return x and 0xffff
  }
}
