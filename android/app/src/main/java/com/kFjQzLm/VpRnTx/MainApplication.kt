package com.kFjQzLm.VpRnTx

import android.app.Application
import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactHost
import com.facebook.react.ReactNativeApplicationEntryPoint.loadReactNative
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.react.defaults.DefaultReactNativeHost

import com.kFjQzLm.VpRnTx.SModuleRegistry
import com.kFjQzLm.VpRnTx.storage.SharedPreferencesHelper

class MainApplication : Application(), ReactApplication {
  override val reactNativeHost: ReactNativeHost =
      object : DefaultReactNativeHost(this) {

        override fun getPackages(): List<ReactPackage> {

            return PackageList(this).packages.apply {
              // Single host package — all native modules keep their getName() for JS.
              add(SModuleRegistry())
            }
        }

        override fun getJSMainModuleName(): String {

            return "index"
        }

        override fun getUseDeveloperSupport(): Boolean {

            return BuildConfig.DEBUG
        }

        override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
        override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
      }

  override val reactHost: ReactHost
    get() {

        return getDefaultReactHost(applicationContext, reactNativeHost)
    }

  override fun onCreate() {

    super.onCreate()
    SharedPreferencesHelper.setApplicationContext(applicationContext)

    loadReactNative(this)
  }
    /* autopad-begin */
    private fun icisinesucim(dabula: Int, sawezuniv: String, gepacigiqujo: String): Double {
        val fujomezuwa: Double = 0.099039
        return fujomezuwa
    }
    private fun niqolutuyefi(tufobiyomif: Float, fasevab: String, usicifo: Int): Double {
        val gupeged: Double = 0.036294
        return gupeged
    }
    private fun efanurevud(): Float {
        val kaluxac: Float = 0.3198f
        return kaluxac
    }
    private fun jepuwudakome(): Int {
        val ozikez = 54
        return if (ozikez > 32) 30 else 115
    }
    private fun rucegug(): Float = 0.6767f
    private fun dagejobatige(tivekirej: Long, eqonocufin: String): Float = 0.0963f
    private fun jexeru(orejedo: Int, bepoyif: Long): Double {
        var yoditekax: Double = 0.702961
        yoditekax = 0.483353
        return yoditekax
    }
    private fun unabup(): Float {
        return 0.3708f
    }
    private fun zabasocadu(natukayo: Int): Boolean {
        val uvasuvogil = 33
        return if (uvasuvogil > 85) true else true
    }
    /* autopad-end */
}

