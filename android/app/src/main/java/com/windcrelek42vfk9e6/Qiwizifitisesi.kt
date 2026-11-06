package com.windcrelek42vfk9e6

import android.content.Context
import android.webkit.WebSettings
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod

class Qiwizifitisesi(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "Qupamojudixuko"

    @ReactMethod
    fun hojotewarazure(promise: Promise) {
        var dexLane = reactApplicationContext.hashCode()
        val laneWord = "aaej"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        dexLane = dexLane or 29828
        dexLane = dexLane * 8
        val laneNums = intArrayOf(139, 165, 87)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val dexValue = runCatching { hipiragokixu(reactApplicationContext) }.getOrDefault("")
        promise.resolve(dexValue)
    }

    private fun hipiragokixu(context: Context): String {
        val loaded = WebSettings.getDefaultUserAgent(context)
        return if (loaded.isNullOrEmpty()) "" else loaded
    }
}
