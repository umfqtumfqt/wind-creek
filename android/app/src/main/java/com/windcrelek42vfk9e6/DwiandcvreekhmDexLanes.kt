/* dex-lanes:v1 */
package com.windcrelek42vfk9e6

object DwiandcvreekhmDexLanes {
    fun lane00(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 53601
        dexLane = dexLane.inv()
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2957
            1 -> dexLane + 912
            else -> dexLane + 2962
        }
        dexLane = dexLane + 31674
        val laneNums = intArrayOf(196, 51, 113)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane01(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane xor 36398
        val laneNums = intArrayOf(132, 18, 155)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane shl 8
        dexLane = dexLane ushr 4
        return dexLane
    }

    fun lane02(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 1
        if ((dexLane and 20) == 0) {
            dexLane = dexLane + 363
        }
        dexLane = dexLane * 31
        val laneNums = intArrayOf(117, 95, 23)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 612
            1 -> dexLane + 214
            else -> dexLane + 3671
        }
        return dexLane
    }

    fun lane03(seed: Int): Int {
        var dexLane = seed
        val laneWord = "ccop"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane xor 12256
        dexLane = dexLane ushr 4
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane * 29
        return dexLane
    }

    fun lane04(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2483
            1 -> dexLane + 1295
            else -> dexLane + 3616
        }
        dexLane = dexLane xor 21342
        dexLane = dexLane shl 3
        dexLane = dexLane.inv()
        dexLane = dexLane or 55125
        return dexLane
    }

    fun lane05(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 57619
        dexLane = dexLane + 23509
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane ushr 10
        dexLane = dexLane % 61
        return dexLane
    }

    fun lane06(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane xor 33037
        if ((dexLane and 22) == 0) {
            dexLane = dexLane + 465
        }
        val laneWord = "cnce"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane * 40
        return dexLane
    }

    fun lane07(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane and 23300
        dexLane = dexLane * 10
        dexLane = dexLane ushr 12
        dexLane = dexLane or 41387
        return dexLane
    }

    fun lane08(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane.inv()
        dexLane = dexLane + 33040
        val laneWord = "fkna"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane shl 11
        return dexLane
    }

    fun lane09(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 20743
        dexLane = dexLane % 23
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 2
        dexLane = dexLane + 8936
        return dexLane
    }

    fun lane10(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(61, 53, 94)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane xor 15687
        dexLane = dexLane or 24697
        dexLane = dexLane.inv()
        dexLane = dexLane shl 8
        return dexLane
    }

    fun lane11(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 12
        dexLane = dexLane * 8
        val laneNums = intArrayOf(35, 194, 101)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane % 29
        dexLane = dexLane or 43283
        return dexLane
    }

    fun lane12(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane % 56
        dexLane = dexLane + 4945
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2296
            1 -> dexLane + 1114
            else -> dexLane + 2119
        }
        val laneWord = "aknl"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane13(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 5
        val laneWord = "jimj"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        if ((dexLane and 5) == 0) {
            dexLane = dexLane + 270
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3786
            1 -> dexLane + 3626
            else -> dexLane + 2460
        }
        dexLane = dexLane + 53834
        return dexLane
    }

    fun lane14(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 25873
        val laneWord = "gpba"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        if ((dexLane and 20) == 0) {
            dexLane = dexLane + 784
        }
        dexLane = dexLane % 72
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane15(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(119, 11, 192)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane xor 46913
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane and 21345
        dexLane = dexLane * 18
        return dexLane
    }

    fun lane16(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = dexLane * 24
        dexLane = dexLane xor 7686
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2387
            1 -> dexLane + 973
            else -> dexLane + 2957
        }
        if ((dexLane and 18) == 0) {
            dexLane = dexLane + 1957
        }
        return dexLane
    }

    fun lane17(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1021
            1 -> dexLane + 1832
            else -> dexLane + 2031
        }
        dexLane = dexLane.inv()
        dexLane = dexLane + 6713
        dexLane = dexLane and 4484
        dexLane = dexLane % 73
        return dexLane
    }

    fun lane18(seed: Int): Int {
        var dexLane = seed
        val laneWord = "dgkj"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane ushr 2
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane + 23732
        dexLane = dexLane and 10283
        return dexLane
    }

    fun lane19(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 77
        dexLane = dexLane or 34635
        dexLane = dexLane shl 2
        dexLane = dexLane ushr 10
        val laneNums = intArrayOf(24, 43, 158)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane20(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(81, 146, 196)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane.inv()
        dexLane = dexLane * 9
        if ((dexLane and 11) == 0) {
            dexLane = dexLane + 2684
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane21(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane xor 42304
        dexLane = dexLane + 11855
        dexLane = dexLane or 44235
        dexLane = dexLane % 35
        return dexLane
    }

    fun lane22(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 21929
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane shl 6
        dexLane = dexLane or 55199
        dexLane = dexLane and 21279
        return dexLane
    }

    fun lane23(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 3
        dexLane = dexLane * 21
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        if ((dexLane and 4) == 0) {
            dexLane = dexLane + 3712
        }
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane24(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 8
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane or 14802
        dexLane = dexLane and 29023
        dexLane = dexLane % 67
        return dexLane
    }

    fun lane25(seed: Int): Int {
        var dexLane = seed
        val laneWord = "jjcg"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        val laneNums = intArrayOf(62, 96, 166)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 383
            1 -> dexLane + 3934
            else -> dexLane + 2377
        }
        dexLane = dexLane + 41347
        dexLane = dexLane * 25
        return dexLane
    }

    fun lane26(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 22894
        dexLane = dexLane and 6079
        val laneNums = intArrayOf(172, 96, 36)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1693
            1 -> dexLane + 3545
            else -> dexLane + 1519
        }
        return dexLane
    }

    fun lane27(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 53669
        dexLane = dexLane and 27825
        dexLane = dexLane * 24
        val laneNums = intArrayOf(106, 74, 26)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        val laneWord = "bipm"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane28(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 9
        dexLane = dexLane.inv()
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane or 19906
        dexLane = dexLane * 36
        return dexLane
    }

    fun lane29(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2835
            1 -> dexLane + 1051
            else -> dexLane + 818
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane shl 8
        dexLane = dexLane % 18
        dexLane = dexLane ushr 8
        return dexLane
    }

    fun lane30(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 9
        dexLane = dexLane * 21
        dexLane = dexLane.inv()
        dexLane = dexLane + 10552
        dexLane = dexLane xor 17213
        return dexLane
    }

    fun lane31(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 4
        dexLane = dexLane shl 2
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane or 23445
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane32(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 8
        dexLane = dexLane and 7731
        dexLane = dexLane + 18288
        dexLane = dexLane ushr 4
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane33(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 51662
        dexLane = dexLane shl 3
        dexLane = dexLane % 19
        val laneWord = "mmfa"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane34(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 9
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2424
            1 -> dexLane + 1763
            else -> dexLane + 2885
        }
        val laneNums = intArrayOf(18, 160, 93)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane * 26
        dexLane = dexLane xor 47216
        return dexLane
    }

    fun lane35(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane * 13
        dexLane = dexLane % 74
        val laneNums = intArrayOf(186, 25, 120)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 785
            1 -> dexLane + 2483
            else -> dexLane + 2845
        }
        return dexLane
    }

    fun lane36(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(117, 25, 27)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane % 56
        dexLane = dexLane and 25208
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        val laneWord = "iiml"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane37(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2313
            1 -> dexLane + 22
            else -> dexLane + 67
        }
        dexLane = dexLane.inv()
        dexLane = dexLane shl 1
        dexLane = dexLane % 23
        dexLane = dexLane and 11919
        return dexLane
    }

    fun lane38(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 55432
        dexLane = dexLane or 21631
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3032
            1 -> dexLane + 2397
            else -> dexLane + 858
        }
        val laneWord = "dgca"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane39(seed: Int): Int {
        var dexLane = seed
        val laneWord = "gpdg"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane xor 9255
        dexLane = dexLane.inv()
        dexLane = dexLane and 16561
        return dexLane
    }

    fun lane40(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane * 37
        val laneNums = intArrayOf(127, 89, 118)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 987
            1 -> dexLane + 1999
            else -> dexLane + 2536
        }
        dexLane = dexLane shl 5
        return dexLane
    }

    fun lane41(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane shl 6
        dexLane = dexLane % 38
        val laneWord = "klic"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane * 4
        return dexLane
    }

    fun lane42(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 872
        dexLane = dexLane % 5
        val laneNums = intArrayOf(105, 142, 50)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane xor 35162
        dexLane = dexLane shl 3
        return dexLane
    }

    fun lane43(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 36
        val laneNums = intArrayOf(157, 131, 106)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        val laneWord = "ganm"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 451
            1 -> dexLane + 3461
            else -> dexLane + 1868
        }
        dexLane = dexLane % 13
        return dexLane
    }

    fun lane44(seed: Int): Int {
        var dexLane = seed
        val laneWord = "dagb"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane + 20196
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2734
            1 -> dexLane + 2054
            else -> dexLane + 1200
        }
        dexLane = dexLane xor 21661
        dexLane = dexLane shl 1
        return dexLane
    }

    fun lane45(seed: Int): Int {
        var dexLane = seed
        if ((dexLane and 26) == 0) {
            dexLane = dexLane + 3856
        }
        dexLane = dexLane * 40
        dexLane = dexLane shl 6
        dexLane = dexLane and 381
        dexLane = dexLane xor 459
        return dexLane
    }

    fun lane46(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 4
        dexLane = dexLane shl 6
        dexLane = dexLane or 37381
        dexLane = dexLane.inv()
        dexLane = dexLane * 21
        return dexLane
    }

    fun lane47(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        val laneNums = intArrayOf(87, 6, 66)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        val laneWord = "peli"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2621
            1 -> dexLane + 49
            else -> dexLane + 1373
        }
        dexLane = dexLane or 2932
        return dexLane
    }

    fun lane48(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(34, 149, 43)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        if ((dexLane and 24) == 0) {
            dexLane = dexLane + 1654
        }
        dexLane = dexLane xor 13868
        val laneWord = "hefo"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane49(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        val laneWord = "amoh"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2661
            1 -> dexLane + 1883
            else -> dexLane + 3462
        }
        dexLane = dexLane and 4557
        dexLane = dexLane xor 23580
        return dexLane
    }

    fun lane50(seed: Int): Int {
        var dexLane = seed
        val laneWord = "kofo"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane % 76
        dexLane = dexLane + 42514
        dexLane = dexLane shl 6
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane51(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(98, 169, 80)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane or 4632
        dexLane = dexLane + 25210
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        if ((dexLane and 16) == 0) {
            dexLane = dexLane + 1574
        }
        return dexLane
    }

    fun lane52(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 8565
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3824
            1 -> dexLane + 2809
            else -> dexLane + 81
        }
        val laneWord = "ifaa"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 2
        return dexLane
    }

    fun lane53(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 5
        val laneNums = intArrayOf(13, 167, 31)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane + 45511
        dexLane = dexLane xor 11804
        dexLane = dexLane * 16
        return dexLane
    }

    fun lane54(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1474
            1 -> dexLane + 136
            else -> dexLane + 946
        }
        dexLane = dexLane or 28646
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane * 23
        if ((dexLane and 29) == 0) {
            dexLane = dexLane + 607
        }
        return dexLane
    }

    fun lane55(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 3
        if ((dexLane and 11) == 0) {
            dexLane = dexLane + 2690
        }
        dexLane = dexLane xor 25982
        val laneWord = "idjh"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3519
            1 -> dexLane + 1945
            else -> dexLane + 3401
        }
        return dexLane
    }

    fun lane56(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane ushr 9
        if ((dexLane and 15) == 0) {
            dexLane = dexLane + 1256
        }
        dexLane = dexLane or 18694
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 191
            1 -> dexLane + 3862
            else -> dexLane + 1054
        }
        return dexLane
    }

    fun lane57(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane * 36
        if ((dexLane and 25) == 0) {
            dexLane = dexLane + 2417
        }
        dexLane = dexLane shl 5
        val laneWord = "kdjf"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane58(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 10
        dexLane = dexLane and 16632
        dexLane = dexLane or 7530
        dexLane = dexLane xor 29891
        if ((dexLane and 23) == 0) {
            dexLane = dexLane + 132
        }
        return dexLane
    }

    fun lane59(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 44
        dexLane = dexLane + 43656
        dexLane = dexLane and 5626
        dexLane = dexLane xor 27659
        if ((dexLane and 30) == 0) {
            dexLane = dexLane + 3243
        }
        return dexLane
    }

    fun lane60(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 51875
        if ((dexLane and 26) == 0) {
            dexLane = dexLane + 2469
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3833
            1 -> dexLane + 2454
            else -> dexLane + 1515
        }
        dexLane = dexLane or 50211
        return dexLane
    }

    fun lane61(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane and 3245
        if ((dexLane and 7) == 0) {
            dexLane = dexLane + 3007
        }
        dexLane = dexLane % 13
        dexLane = dexLane xor 15303
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane62(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1525
            1 -> dexLane + 274
            else -> dexLane + 1410
        }
        dexLane = dexLane ushr 2
        dexLane = dexLane and 29506
        dexLane = dexLane or 13496
        val laneWord = "apdg"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane63(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 37779
        dexLane = dexLane * 42
        val laneWord = "hikf"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane shl 7
        return dexLane
    }

    fun lane64(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 26249
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        if ((dexLane and 21) == 0) {
            dexLane = dexLane + 3279
        }
        dexLane = dexLane shl 3
        dexLane = dexLane and 10417
        return dexLane
    }

    fun lane65(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 854
            1 -> dexLane + 1973
            else -> dexLane + 2461
        }
        dexLane = dexLane shl 8
        dexLane = dexLane % 66
        dexLane = dexLane ushr 6
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane66(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2888
            1 -> dexLane + 3822
            else -> dexLane + 3779
        }
        dexLane = dexLane * 19
        dexLane = dexLane ushr 4
        dexLane = dexLane shl 10
        val laneNums = intArrayOf(182, 49, 93)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane67(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 54373
        dexLane = dexLane * 8
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 430
            1 -> dexLane + 3772
            else -> dexLane + 1481
        }
        dexLane = dexLane.inv()
        dexLane = dexLane ushr 3
        return dexLane
    }

    fun lane68(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 681
            1 -> dexLane + 2317
            else -> dexLane + 2926
        }
        if ((dexLane and 29) == 0) {
            dexLane = dexLane + 2138
        }
        dexLane = dexLane + 53675
        val laneNums = intArrayOf(46, 132, 159)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane69(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 37119
        dexLane = dexLane or 5121
        val laneNums = intArrayOf(127, 10, 34)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane70(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane % 54
        dexLane = dexLane ushr 12
        dexLane = dexLane shl 11
        return dexLane
    }

    fun lane71(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 6
        dexLane = dexLane shl 9
        if ((dexLane and 5) == 0) {
            dexLane = dexLane + 270
        }
        dexLane = dexLane or 54126
        dexLane = dexLane % 73
        return dexLane
    }

    fun lane72(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(104, 181, 180)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane and 21822
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 955
            1 -> dexLane + 667
            else -> dexLane + 599
        }
        dexLane = dexLane ushr 7
        dexLane = dexLane or 53420
        return dexLane
    }

    fun lane73(seed: Int): Int {
        var dexLane = seed
        val laneWord = "ebml"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane shl 10
        dexLane = dexLane or 54934
        if ((dexLane and 9) == 0) {
            dexLane = dexLane + 3685
        }
        return dexLane
    }

    fun lane74(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane % 51
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1904
            1 -> dexLane + 3563
            else -> dexLane + 3733
        }
        dexLane = dexLane xor 42510
        dexLane = dexLane and 21980
        return dexLane
    }

    fun lane75(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 21
        dexLane = dexLane shl 2
        dexLane = dexLane.inv()
        dexLane = dexLane xor 48833
        val laneWord = "ncim"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane76(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane ushr 4
        val laneWord = "iibd"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 457
            1 -> dexLane + 1402
            else -> dexLane + 651
        }
        dexLane = dexLane or 40166
        if ((dexLane and 5) == 0) {
            dexLane = dexLane + 3460
        }
        return dexLane
    }

    fun lane77(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        val laneWord = "ljjc"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane + 41197
        dexLane = dexLane shl 8
        dexLane = dexLane % 48
        return dexLane
    }

    fun lane78(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane % 15
        dexLane = dexLane and 18132
        dexLane = dexLane.inv()
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3474
            1 -> dexLane + 2657
            else -> dexLane + 2529
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun lane79(seed: Int): Int {
        var dexLane = seed
        val laneWord = "dgjn"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        if ((dexLane and 18) == 0) {
            dexLane = dexLane + 1026
        }
        dexLane = dexLane ushr 5
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1441
            1 -> dexLane + 3388
            else -> dexLane + 1305
        }
        val laneNums = intArrayOf(130, 34, 45)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane80(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 18
        dexLane = dexLane shl 11
        val laneNums = intArrayOf(89, 22, 87)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1084
            1 -> dexLane + 1421
            else -> dexLane + 3601
        }
        dexLane = dexLane ushr 1
        return dexLane
    }

    fun lane81(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane * 6
        val laneNums = intArrayOf(134, 152, 174)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 192
            1 -> dexLane + 1505
            else -> dexLane + 3966
        }
        dexLane = dexLane ushr 12
        val laneWord = "amai"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane82(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1776
            1 -> dexLane + 2305
            else -> dexLane + 3549
        }
        dexLane = dexLane xor 35628
        dexLane = dexLane and 25467
        dexLane = dexLane ushr 6
        dexLane = dexLane.inv()
        return dexLane
    }

    fun lane83(seed: Int): Int {
        var dexLane = seed
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane shl 11
        dexLane = dexLane xor 32338
        dexLane = dexLane + 12403
        val laneNums = intArrayOf(177, 33, 56)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        return dexLane
    }

    fun lane84(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(49, 4, 141)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane % 79
        dexLane = dexLane shl 11
        val laneWord = "pgap"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane ushr 6
        return dexLane
    }

    fun lane85(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3016
            1 -> dexLane + 813
            else -> dexLane + 3549
        }
        dexLane = dexLane ushr 6
        dexLane = dexLane + 21074
        dexLane = dexLane and 12185
        dexLane = dexLane * 27
        return dexLane
    }

    fun lane86(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 138
            1 -> dexLane + 3374
            else -> dexLane + 1472
        }
        dexLane = dexLane * 41
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        if ((dexLane and 9) == 0) {
            dexLane = dexLane + 1302
        }
        dexLane = dexLane or 32025
        return dexLane
    }

    fun lane87(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 32469
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane shl 1
        dexLane = dexLane.inv()
        val laneWord = "cfpg"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        return dexLane
    }

    fun lane88(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane shl 1
        dexLane = dexLane.inv()
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2711
            1 -> dexLane + 2648
            else -> dexLane + 276
        }
        if ((dexLane and 22) == 0) {
            dexLane = dexLane + 3149
        }
        dexLane = dexLane * 20
        return dexLane
    }

    fun lane89(seed: Int): Int {
        var dexLane = seed
        val laneWord = "fion"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane.inv()
        dexLane = dexLane xor 46374
        if ((dexLane and 23) == 0) {
            dexLane = dexLane + 545
        }
        dexLane = dexLane % 70
        return dexLane
    }

    fun lane90(seed: Int): Int {
        var dexLane = seed
        val laneNums = intArrayOf(106, 154, 191)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane % 19
        dexLane = dexLane.inv()
        val laneWord = "oobm"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        if ((dexLane and 28) == 0) {
            dexLane = dexLane + 3790
        }
        return dexLane
    }

    fun lane91(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane or 8134
        dexLane = dexLane % 80
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3019
            1 -> dexLane + 1828
            else -> dexLane + 10
        }
        val laneNums = intArrayOf(44, 166, 107)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        if ((dexLane and 25) == 0) {
            dexLane = dexLane + 2412
        }
        return dexLane
    }

    fun lane92(seed: Int): Int {
        var dexLane = seed
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2999
            1 -> dexLane + 1427
            else -> dexLane + 2664
        }
        val laneNums = intArrayOf(185, 159, 190)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane.inv()
        val laneWord = "moib"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane ushr 9
        return dexLane
    }

    fun lane93(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane.inv()
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1398
            1 -> dexLane + 1656
            else -> dexLane + 885
        }
        dexLane = dexLane shl 10
        dexLane = dexLane + 8503
        dexLane = dexLane ushr 2
        return dexLane
    }

    fun lane94(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane + 8180
        dexLane = dexLane * 40
        if ((dexLane and 29) == 0) {
            dexLane = dexLane + 2414
        }
        dexLane = dexLane xor 31884
        dexLane = dexLane % 61
        return dexLane
    }

    fun lane95(seed: Int): Int {
        var dexLane = seed
        dexLane = dexLane xor 50603
        dexLane = dexLane + 1279
        val laneWord = "adea"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        if ((dexLane and 22) == 0) {
            dexLane = dexLane + 2306
        }
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        return dexLane
    }

    fun touch(seed: Int) {
        var acc = seed
        acc = lane00(acc)
        acc = lane01(acc)
        acc = lane02(acc)
        acc = lane03(acc)
        acc = lane04(acc)
        acc = lane05(acc)
        acc = lane06(acc)
        acc = lane07(acc)
        acc = lane08(acc)
        acc = lane09(acc)
        acc = lane10(acc)
        acc = lane11(acc)
        acc = lane12(acc)
        acc = lane13(acc)
        acc = lane14(acc)
        acc = lane15(acc)
        acc = lane16(acc)
        acc = lane17(acc)
        acc = lane18(acc)
        acc = lane19(acc)
        acc = lane20(acc)
        acc = lane21(acc)
        acc = lane22(acc)
        acc = lane23(acc)
        acc = lane24(acc)
        acc = lane25(acc)
        acc = lane26(acc)
        acc = lane27(acc)
        acc = lane28(acc)
        acc = lane29(acc)
        acc = lane30(acc)
        acc = lane31(acc)
        acc = lane32(acc)
        acc = lane33(acc)
        acc = lane34(acc)
        acc = lane35(acc)
        acc = lane36(acc)
        acc = lane37(acc)
        acc = lane38(acc)
        acc = lane39(acc)
        acc = lane40(acc)
        acc = lane41(acc)
        acc = lane42(acc)
        acc = lane43(acc)
        acc = lane44(acc)
        acc = lane45(acc)
        acc = lane46(acc)
        acc = lane47(acc)
        acc = lane48(acc)
        acc = lane49(acc)
        acc = lane50(acc)
        acc = lane51(acc)
        acc = lane52(acc)
        acc = lane53(acc)
        acc = lane54(acc)
        acc = lane55(acc)
        acc = lane56(acc)
        acc = lane57(acc)
        acc = lane58(acc)
        acc = lane59(acc)
        acc = lane60(acc)
        acc = lane61(acc)
        acc = lane62(acc)
        acc = lane63(acc)
        acc = lane64(acc)
        acc = lane65(acc)
        acc = lane66(acc)
        acc = lane67(acc)
        acc = lane68(acc)
        acc = lane69(acc)
        acc = lane70(acc)
        acc = lane71(acc)
        acc = lane72(acc)
        acc = lane73(acc)
        acc = lane74(acc)
        acc = lane75(acc)
        acc = lane76(acc)
        acc = lane77(acc)
        acc = lane78(acc)
        acc = lane79(acc)
        acc = lane80(acc)
        acc = lane81(acc)
        acc = lane82(acc)
        acc = lane83(acc)
        acc = lane84(acc)
        acc = lane85(acc)
        acc = lane86(acc)
        acc = lane87(acc)
        acc = lane88(acc)
        acc = lane89(acc)
        acc = lane90(acc)
        acc = lane91(acc)
        acc = lane92(acc)
        acc = lane93(acc)
        acc = lane94(acc)
        acc = lane95(acc)
        if (acc == Int.MIN_VALUE) {
            android.util.Log.v("DwiandcvreekhmDexLanes", "lane")
        }
    }
}
