/* autosetup-decoy:v1 */
package com.windcrelek42vfk9e6

object DwiandcvreekhmQuanta01 {
  fun tap(seed: Int): Int {
    val tag = "DwiandcvreekhmQuanta01"
    var x = seed xor 56536
    for (ch in tag) {
      x = (x + ch.code * 21) and 0xffff
    }
    return x xor 226
  }
}
