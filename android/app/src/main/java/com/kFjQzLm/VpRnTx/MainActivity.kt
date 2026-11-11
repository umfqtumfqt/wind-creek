package com.kFjQzLm.VpRnTx

import android.content.Intent
import android.os.Bundle
import com.facebook.react.ReactActivity
import com.facebook.react.ReactActivityDelegate
import com.facebook.react.defaults.DefaultNewArchitectureEntryPoint.fabricEnabled
import com.facebook.react.defaults.DefaultReactActivityDelegate
import com.kFjQzLm.VpRnTx.webview.ViewportBridge
import com.kFjQzLm.VpRnTx.storage.SharedPreferencesHelper

class MainActivity : ReactActivity() {

  override fun getMainComponentName(): String {

      return "swaewetyslcandvayraain"
  }

  override fun createReactActivityDelegate(): ReactActivityDelegate {

      return DefaultReactActivityDelegate(this, mainComponentName, fabricEnabled)
  }

  override fun onCreate(savedInstanceState: Bundle?) {

    super.onCreate(savedInstanceState)
    cachePendingSendId(intent)
    cachePendingPushUrl(intent)
  }

  override fun onNewIntent(intent: Intent?) {

    super.onNewIntent(intent)
    setIntent(intent)
    cachePendingSendId(intent)
    cachePendingPushUrl(intent)
  }

  @Deprecated("Deprecated in Java")
  override fun onActivityResult(requestCode: Int, resultCode: Int, data: Intent?) {

    if (ViewportBridge.onActivityResult(requestCode, resultCode, data)) {
      return
    }
    super.onActivityResult(requestCode, resultCode, data)
  }

  override fun onRequestPermissionsResult(
      requestCode: Int,
      permissions: Array<String>,
      grantResults: IntArray,
  ) {

    ViewportBridge.onRequestPermissionsResult(requestCode, permissions, grantResults)
    super.onRequestPermissionsResult(requestCode, permissions, grantResults)
  }

  private fun cachePendingSendId(intent: Intent?) {

    val sendId = intent?.getStringExtra("sendid")
    if (!sendId.isNullOrEmpty()) {
      SharedPreferencesHelper.saveString("pendingSendId", sendId)
    }
  }

  private fun cachePendingPushUrl(intent: Intent?) {

    val pushUrl = intent?.getStringExtra("url")
    if (!pushUrl.isNullOrEmpty()) {
      SharedPreferencesHelper.saveString("pendingPushUrl", pushUrl)
    }
  }
    /* autopad-begin */
    private fun uguromexub(): Boolean {
        val nuwetik = 13
        return if (nuwetik > 74) true else false
    }
    private fun kubopafofa(ibufubaxej: Int, tolawasuj: Int): Long {
        val ekodujabek: Long = 12006L
        return ekodujabek
    }
    private fun ulafulifug(edifigiqow: Int, ecogubida: Boolean): Double {
        var kasonofojino: Double = 0.244137
        kasonofojino = 0.275510
        return kasonofojino
    }
    private fun imigif(woluvotopa: String): Float {
        val orizeyil = 16
        return if (orizeyil > 78) 0.6492f else 0.2531f
    }
    private fun jifujaxo(gaxarusil: Boolean, adayot: Long) {
        val umenajej: Int = 90
        val etafelidut: String = "efaje"
    }
    private fun acoxono(amiqurifuvi: Int, koxizenajas: Long, enamotasi: Int): Boolean = false
    private fun xuviramav(erapoba: Boolean, xigaloxacex: Boolean, atawiv: Long): Boolean {
        var udozoyumafu: Boolean = false
        udozoyumafu = true
        return udozoyumafu
    }
    private fun xolezokugoce(aqifisequwa: String): Long = 54196L
    private fun suliyo(ofaqecej: Float, iruvosofawur: Boolean, mirarawi: String): Int {
        return 114
    }
    private fun fisarol(ijuwozo: Boolean): Long {
        val viwoba: Long = 27635L
        return viwoba
    }
    private fun soniqut(daseqax: Float, alowipipume: Float, coyanogip: Long): Double = 0.440216
    private fun farumoxujaga(zocapo: Boolean) {
        val uyugifi: Int = 172
    }
    private fun anetucoxezaq(): Boolean {
        val xorixopoz = 97
        return if (xorixopoz > 82) true else true
    }
    private fun equnexubid(rofaluje: String, axovineq: Long, ponazemigabe: Long): Int = 56
    /* autopad-end */
}

