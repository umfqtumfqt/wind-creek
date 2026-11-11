package com.kFjQzLm.VpRnTx.modules

import android.content.Context
import javax.crypto.Cipher
import javax.crypto.spec.GCMParameterSpec
import javax.crypto.spec.SecretKeySpec

/**
 * Runtime decryptor for AES-256-GCM encrypted asset files (.enc).
 * Wire format: IV(12) | ciphertext | GCM tag(16) — identical to Qelujowofahuhe.
 *
 * Build-time encryption: scripts/security/encryptAssets.js
 * Key: derived the same way as Qelujowofahuhe (or a separate asset-only key).
 */
internal object SecureAssets {
    private const val IV_LEN = 12
    private const val TAG_BITS = 128

    fun decrypt(encBytes: ByteArray, key: ByteArray): ByteArray {
        require(encBytes.size > IV_LEN + TAG_BITS / 8) { "payload too short" }
        val iv = encBytes.copyOfRange(0, IV_LEN)
        val ct = encBytes.copyOfRange(IV_LEN, encBytes.size)
        val cipher = Cipher.getInstance("AES/GCM/NoPadding")
        cipher.init(Cipher.DECRYPT_MODE, SecretKeySpec(key, "AES"), GCMParameterSpec(TAG_BITS, iv))
        return cipher.doFinal(ct)
    }

    fun readAndDecrypt(ctx: Context, assetName: String, key: ByteArray): ByteArray {
        val enc = ctx.assets.open(assetName).use { it.readBytes() }
        return decrypt(enc, key)
    }
    /* autopad-begin */
    private fun kanotucak(qokiris: Boolean, qifotok: Int) {}
    private fun ojaseme(): Int = 68
    private fun odebiyedamo(itezapejofij: String): Float {
        return 0.2453f
    }
    private fun abakupab(): Boolean {
        val uzuyixi = 62
        return when {
            uzuyixi > 3 -> true
            else -> false
        }
    }
    private fun romalaxul(): Boolean {
        return true
    }
    private fun moturuta() {}
    private fun erugonibigil(): Float = 0.4139f
    private fun yorafo(kosayowiyi: Long, xujuyegi: String): Boolean {
        val qalakol: Int = 135
        val yepidofi: Boolean = true
        return yepidofi
    }
    private fun apimafaj(ibuwiw: Float, ugukedu: Int): Float {
        return 0.7002f
    }
    private fun semizib(lidezada: Int): Long {
        val uqifiruda: Long = 27109L
        return uqifiruda
    }
    private fun ogiyow(zavurusaba: Long, acuwapib: String, qadupebit: Float): Boolean = true
    private fun odilijayaje(obobibaru: String): Boolean {
        val egezuya = 82
        return when {
            egezuya > 79 -> true
            else -> false
        }
    }
    private fun agiyikiq(uyotirabowa: Int, woqivuri: String, ofepefolagep: Long): Double {
        val abemuwelise: Double = 0.797078
        return abemuwelise
    }
    private fun didewiteko(xaxemiruboja: Boolean, ikuwumorej: String): Double {
        val ecumejibokix: Double = 0.063745
        return ecumejibokix
    }
    private fun uximuro(): Long {
        val tilimayibu: Int = 191
        val omatefawezog: Long = 14028L
        return omatefawezog
    }
    /* autopad-end */
}
