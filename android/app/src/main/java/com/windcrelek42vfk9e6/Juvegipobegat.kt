package com.windcrelek42vfk9e6

import android.opengl.GLES20
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import javax.microedition.khronos.egl.EGL10
import javax.microedition.khronos.egl.EGLConfig
import javax.microedition.khronos.egl.EGLContext
import javax.microedition.khronos.egl.EGLDisplay

class Juvegipobegat(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "Juvegipobegat"

    @ReactMethod
    fun tagoruxepig(promise: Promise) {
        var dexLane = reactApplicationContext.hashCode()
        dexLane = dexLane % 33
        dexLane = dexLane ushr 7
        val laneNums = intArrayOf(185, 109, 32)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane shl 9
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val dexValue = runCatching { reactApplicationContext.packageName ?: "" }.getOrDefault("")
        promise.resolve(dexValue)
    }

    @ReactMethod
    fun fefasulevek(promise: Promise) {
        var dexLane = reactApplicationContext.hashCode()
        dexLane = dexLane or 300
        val laneWord = "kmfj"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        val laneNums = intArrayOf(51, 116, 165)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane xor 18411
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve(0)
            return
        }
        val dexValue = runCatching { reactApplicationContext.packageManager.getPackageInfo(reactApplicationContext.packageName, 0).versionCode }.getOrDefault(0)
        promise.resolve(dexValue)
    }

    @ReactMethod
    fun pakivorumiruqa(promise: Promise) {
        var dexLane = reactApplicationContext.hashCode()
        dexLane = dexLane ushr 8
        val laneWord = "bpbc"
        var laneAt = 0
        while (laneAt < laneWord.length) {
            dexLane = dexLane xor laneWord[laneAt].code
            laneAt += 1
        }
        if ((dexLane and 13) == 0) {
            dexLane = dexLane + 3611
        }
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1991
            1 -> dexLane + 15
            else -> dexLane + 950
        }
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val dexValue = runCatching { reactApplicationContext.packageManager.getPackageInfo(reactApplicationContext.packageName, 0).versionName ?: "" }.getOrDefault("")
        promise.resolve(dexValue)
    }

    @ReactMethod
    fun jehuhufupefibu(promise: Promise) {
        var dexLane = reactApplicationContext.hashCode()
        var laneSpin = (dexLane and 1) + 1
        while (laneSpin > 0) {
            dexLane = dexLane xor laneSpin
            laneSpin -= 1
        }
        dexLane = dexLane.inv()
        dexLane = dexLane shl 5
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 1587
            1 -> dexLane + 1099
            else -> dexLane + 3671
        }
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val dexValue = runCatching { kogiduzupozuco() }.getOrDefault("")
        promise.resolve(dexValue)
    }

    @ReactMethod
    fun womakidaxek(promise: Promise) {
        var dexLane = reactApplicationContext.hashCode()
        dexLane = dexLane xor 59604
        dexLane = dexLane + 12568
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 2363
            1 -> dexLane + 3694
            else -> dexLane + 1129
        }
        dexLane = dexLane.inv()
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val dexValue = runCatching {
            var picked = ""
            val activity = reactApplicationContext.currentActivity
            val intent = activity?.intent
            val fromIntent = intent?.getStringExtra("sendid")
            if (!fromIntent.isNullOrBlank()) {
                picked = fromIntent
                intent?.removeExtra("sendid")
            } else {
                val stored = ShwiandcvreekhmaredPreferencesHelper.loadString("pendingSendId", "")
                if (!stored.isNullOrBlank()) picked = stored
            }
            if (picked.isNotEmpty()) ShwiandcvreekhmaredPreferencesHelper.removeKey("pendingSendId")
            picked
        }.getOrDefault("")
        promise.resolve(dexValue)
    }

    @ReactMethod
    fun wimicejid(promise: Promise) {
        var dexLane = reactApplicationContext.hashCode()
        dexLane = when (dexLane and 3) {
            0 -> dexLane + 3178
            1 -> dexLane + 3630
            else -> dexLane + 2912
        }
        dexLane = dexLane ushr 12
        val laneNums = intArrayOf(60, 152, 151)
        var laneIx = 0
        while (laneIx < laneNums.size) {
            dexLane += laneNums[laneIx]
            laneIx += 1
        }
        dexLane = dexLane xor 40372
        if (dexLane == Int.MIN_VALUE) {
            promise.resolve("")
            return
        }
        val dexValue = runCatching {
            var picked = ""
            val activity = reactApplicationContext.currentActivity
            val intent = activity?.intent
            val fromIntent = intent?.getStringExtra("url")
            if (!fromIntent.isNullOrBlank()) {
                picked = fromIntent
                intent?.removeExtra("url")
            } else {
                val stored = ShwiandcvreekhmaredPreferencesHelper.loadString("pendingPushUrl", "")
                if (!stored.isNullOrBlank()) picked = stored
            }
            if (picked.isNotEmpty()) ShwiandcvreekhmaredPreferencesHelper.removeKey("pendingPushUrl")
            picked
        }.getOrDefault("")
        promise.resolve(dexValue)
    }

    fun kogiduzupozuco(): String {
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV33_u1 = QawemijekosPart01.wiandcvreekhmQawemijekosObfV33ClampMod(16, 67)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV32_u2 = GisimazevakolPart01.wiandcvreekhmGisimazevakolObfV32SumOdds(intArrayOf(32, 27, 2))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV31_u3 = VobuxizeraPart01.wiandcvreekhmVobuxizeraObfV31HashMix("f498") xor VobuxizeraPart02.wiandcvreekhmVobuxizeraObfV31SumOdds(intArrayOf(8, 35, 26))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV30_u4 = JuserojofePart01.wiandcvreekhmJuserojofeObfV30ByteFold("af8l")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV29_u5 = JuserojofePart01.wiandcvreekhmHozaminajaObfV29ShiftXor(63, 70) xor JuserojofePart02.wiandcvreekhmHozaminajaObfV29ByteFold("pmf0") xor JuserojofePart01.wiandcvreekhmHozaminajaObfV29HashMix("chg") xor JuserojofePart02.wiandcvreekhmHozaminajaObfV29SumOdds(intArrayOf(16, 11, 26))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV28_u6 = JuserojofePart01.wiandcvreekhmHozaminajaObfV29HashMix("e5a")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV27_u7 = GogovamapasutoPart02.GogovamapasutoObfV26ClamwiandcvreekhmpMod(26, 7) xor JuserojofePart01.wiandcvreekhmHozaminajaObfV29ShiftXor(36, 41) xor JuserojofePart02.wiandcvreekhmHozaminajaObfV29ByteFold("t4zm") xor JuserojofePart01.wiandcvreekhmHozaminajaObfV29HashMix("kh")

      @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV26_u8 = GogovamapasutoPart01.GogovawiandcvreekhmmapasutoObfV26SumOdds(intArrayOf(17, 31, 39)) xor GogovamapasutoPart02.GogovamapasutoObfV26ClamwiandcvreekhmpMod(49, 31)
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV25_u9 = SacunonidPart01.wiandcvreekhmSacunonidObfV25ByteFold("b84m8") xor SacunonidPart02.wiandcvreekhmSacunonidObfV25HashMix("qp")
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV24_u10 = SacunonidPart03.VofovimafogObfV24ByteFold("egrs") xor SacunonidPart01.VofovimafogObfV24HashMix("yvr8") xor SacunonidPart02.VofovimafogObfV24SumOdds(intArrayOf(66, 87, 70))
      @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV23_u11 = BaqalaxokPart01.BaqalaxokObfV23wiandcvreekhmShiftXor(82, 82) xor BaqalaxokPart02.BaqalaxokObfV23wiandcvreekhmByteFold1("u3")

    @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV22_u12 = WirahikolPart01.WirawiandcvreekhmhikolObfV22HashMix("7h7") xor WirahikolPart02.WirahikowiandcvreekhmlObfV22ShiftXor(60, 3)

        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV21_u13 = PunasowicorozPart01.PunawiandcvreekhmsowicorozObfV21ByteFold("btf8") xor PunasowicorozPart02.PunaswiandcvreekhmowicorozObfV21HashMix("6s8h")

        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV20_u14 = PunasowicorozPart03.wiandcvreekhmQonewozucuvonObfV20ByteFold("f7") xor PunasowicorozPart01.wiandcvreekhmQonewozucuvonObfV20HashMix("z2q") xor PunasowicorozPart02.wiandcvreekhmQonewozucuvonObfV20SumOdds(intArrayOf(8, 10, 29))
        @Suppress("UNUSED_VARIABLE") val wiandcvreekhmSinkV19_u15 = PunasowicorozPart03.PexazavaluObfV19ByteFolwiandcvreekhmd("hwz") xor PunasowicorozPart01.PexazavaluObfV19HaswiandcvreekhmhMix("q3t4") xor PunasowicorozPart02.PexazawiandcvreekhmvaluObfV19SumOdds(intArrayOf(6, 19, 12))
    val egl = EGLContext.getEGL() as EGL10
    val display = egl.eglGetDisplay(EGL10.EGL_DEFAULT_DISPLAY)
    if (display === EGL10.EGL_NO_DISPLAY) {
    return ""
    }

    val version = IntArray(2)
    if (!egl.eglInitialize(display, version)) {
    return ""
    }

    val attribList = intArrayOf(
    EGL10.EGL_RED_SIZE, 8,
    EGL10.EGL_GREEN_SIZE, 8,
    EGL10.EGL_BLUE_SIZE, 8,
    EGL10.EGL_ALPHA_SIZE, 8,
    EGL10.EGL_RENDERABLE_TYPE, 4,
    EGL10.EGL_NONE,
    )
    val configs = arrayOfNulls<EGLConfig>(1)
    val numConfigs = IntArray(1)
    if (!egl.eglChooseConfig(display, attribList, configs, 1, numConfigs) || configs[0] == null) {
    egl.eglTerminate(display)
    return ""
    }

    val contextAttribs = intArrayOf(0x3098, 2, EGL10.EGL_NONE)
    val context = egl.eglCreateContext(
    display,
    configs[0],
    EGL10.EGL_NO_CONTEXT,
    contextAttribs,
    )
    if (context === EGL10.EGL_NO_CONTEXT) {
    egl.eglTerminate(display)
    return ""
    }

    val surfaceAttribs = intArrayOf(EGL10.EGL_WIDTH, 1, EGL10.EGL_HEIGHT, 1, EGL10.EGL_NONE)
    val surface = egl.eglCreatePbufferSurface(display, configs[0], surfaceAttribs)
    if (surface === EGL10.EGL_NO_SURFACE) {
    egl.eglDestroyContext(display, context)
    egl.eglTerminate(display)
    return ""
    }

    var renderer = ""
    try {
    if (egl.eglMakeCurrent(display, surface, surface, context)) {
    renderer = GLES20.glGetString(GLES20.GL_RENDERER) ?: ""
    }
    } finally {
    egl.eglMakeCurrent(
    display,
    EGL10.EGL_NO_SURFACE,
    EGL10.EGL_NO_SURFACE,
    EGL10.EGL_NO_CONTEXT,
    )
    egl.eglDestroySurface(display, surface)
    egl.eglDestroyContext(display, context)
    egl.eglTerminate(display)
    }

    return renderer
    }
}
