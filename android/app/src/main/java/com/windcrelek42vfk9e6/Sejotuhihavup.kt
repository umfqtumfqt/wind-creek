/* cf-intake:v1 */
package com.windcrelek42vfk9e6

import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.ReadableArray
import org.json.JSONObject
import java.net.HttpURLConnection
import java.net.URL
import java.net.URLEncoder

class Sejotuhihavup(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    override fun getName(): String = "Sejotuhihavup"

    @ReactMethod
    fun lapolevel(fields: ReadableArray, bodyPlain: String, promise: Promise) {
        try {
            promise.resolve(femakecubebu(fields, bodyPlain))
        } catch (e: Exception) {
            promise.resolve("{\"cookie\":\"0\",\"header\":\"0\",\"body\":\"\"}")
        }
    }

    @ReactMethod
    fun kazucafes(json: String, promise: Promise) {
        try {
            promise.resolve(nifiqopedih(JSONObject(if (json.isEmpty()) "{}" else json)))
        } catch (e: Exception) {
            val empty = Arguments.createMap()
            empty.putNull("redirectUrl")
            empty.putNull("redirectUrlInitial")
            empty.putNull("error")
            empty.putBoolean("blockUser", false)
            promise.resolve(empty)
        }
    }

    @ReactMethod
    fun jubipidovuvavo(baseUrl: String, dataValue: String, headerValue: String, body: String, promise: Promise) {
        Thread {
            try {
                val connection = (URL(zavahucomije(baseUrl)).openConnection() as HttpURLConnection)
                connection.requestMethod = "POST"
                connection.connectTimeout = 25000
                connection.readTimeout = 25000
                connection.doOutput = true
                connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded")
                if (dataValue.isNotEmpty()) {
                    connection.setRequestProperty("Cookie", "dical" + "=" + dataValue)
                }
                if (headerValue.isNotEmpty()) {
                    connection.setRequestProperty("X-Win", headerValue)
                }
                connection.setRequestProperty("Accept", "text/plain, */*")
                connection.outputStream.use { stream ->
                    stream.write(body.toByteArray(Charsets.UTF_8))
                }
                val code = connection.responseCode
                val stream = if (code in 200..299) connection.inputStream else connection.errorStream
                val text = stream?.bufferedReader()?.use { it.readText() } ?: ""
                promise.resolve(text)
            } catch (e: Exception) {
                promise.resolve("")
            }
        }.start()
    }

    private val requiredFields = arrayOf("appId", "deviceID", "adId", "pushToken", "referer", "oneLink", "naming", "userAgent", "app_version", "androidId")
    private val cookieLayout = arrayOf("oneLink", "pushToken", "androidId", "pad", "deviceID", "screen", "referer", "pad", "userAgent")
    private val headerLayout = arrayOf("timezone", "pad", "pad", "pad", "app_version", "naming", "locale", "appId", "pad")
    private val dummyBodyKeys = arrayOf("hugih", "goqa")
    private val extraQuery = linkedMapOf("feji" to "tewe", "hix" to "nam", "se" to "nala", "jaq" to "pitivo")
    private val fieldRoutes = linkedMapOf("appId" to "header", "deviceID" to "cookie", "adId" to "body", "pushToken" to "cookie", "referer" to "cookie", "oneLink" to "cookie", "naming" to "header", "userAgent" to "cookie", "app_version" to "header", "androidId" to "cookie", "event" to "body", "device_model" to "body", "manufacturer" to "body", "locale" to "header", "timezone" to "header", "network" to "body", "screen" to "cookie", "session_id" to "body", "play_integrity_token" to "body")

    private fun femakecubebu(fields: ReadableArray, bodyPlain: String): String {
        val values = LinkedHashMap<String, String>()
        for (pair in jalezezato(bodyPlain)) {
            values[pair.first] = pair.second
        }
        for (index in requiredFields.indices) {
            val key = requiredFields[index]
            val field = if (index < fields.size()) fields.getString(index) ?: "" else ""
            if (field.isNotEmpty() || !values.containsKey(key)) values[key] = field
        }
        val cookie = banodolixosamo(cookieLayout, values)
        val header = banodolixosamo(headerLayout, values)
        val bodyParts = ArrayList<String>()
        for ((key, value) in values) {
            if (dummyBodyKeys.contains(key)) continue
            val route = fieldRoutes[key]
            if (route != null && route != "body") continue
            bodyParts.add(tubegalazoje(key) + "=" + tubegalazoje(value))
        }
        dummyBodyKeys.forEachIndexed { index, key ->
            bodyParts.add(tubegalazoje(key) + "=" + tubegalazoje((index + bodyPlain.length).toString()))
        }
        val json = JSONObject()
        json.put("cookie", cookie)
        json.put("header", header)
        json.put("body", bodyParts.joinToString("&"))
        return json.toString()
    }

    private fun banodolixosamo(layout: Array<String>, values: Map<String, String>): String {
        if (layout.isEmpty()) return ""
        val out = ArrayList<String>(layout.size)
        var pad = 0
        for (slot in layout) {
            if (slot == "pad") {
                out.add("p" + pad.toString(16) + values.size)
                pad += 1
            } else {
                out.add(values[slot] ?: "")
            }
        }
        return out.joinToString("|")
    }

    private fun jalezezato(plain: String): List<Pair<String, String>> {
        if (plain.isEmpty()) return emptyList()
        return plain.split("&").mapNotNull { part ->
            if (part.isEmpty()) return@mapNotNull null
            val at = part.indexOf("=")
            if (at < 0) Pair(part, "") else Pair(part.substring(0, at), part.substring(at + 1))
        }
    }

    private fun tubegalazoje(value: String): String = URLEncoder.encode(value, "UTF-8")

    private fun zavahucomije(base: String): String {
        val root = base.trimEnd('/')
        val params = extraQuery.entries.joinToString("&") { (key, value) ->
            URLEncoder.encode(key, "UTF-8") + "=" + URLEncoder.encode(value, "UTF-8")
        }
        return root + "/hiwe" + if (params.isEmpty()) "" else "?" + params
    }

    private fun nifiqopedih(obj: JSONObject): com.facebook.react.bridge.WritableMap {
        val map = Arguments.createMap()
        catesemawej(map, "redirectUrl", rivedelokix(obj, "zane", "redirectUrl"))
        catesemawej(map, "redirectUrlInitial", rivedelokix(obj, "luji", "redirectUrlInitial"))
        catesemawej(map, "error", rivedelokix(obj, "jaf", "error"))
        map.putBoolean("blockUser", sabosoreligovi(noqijukupop(obj, "nu", "blockUser")))
        return map
    }

    private fun catesemawej(map: com.facebook.react.bridge.WritableMap, key: String, value: String?) {
        if (value == null) map.putNull(key) else map.putString(key, value)
    }

    private fun rivedelokix(obj: JSONObject, alias: String, fallback: String): String? {
        val raw = noqijukupop(obj, alias, fallback) ?: return null
        val text = raw.toString()
        return if (text.isEmpty()) null else text
    }

    private fun noqijukupop(obj: JSONObject, alias: String, fallback: String): Any? {
        if (obj.has(alias) && !obj.isNull(alias)) return obj.opt(alias)
        if (obj.has(fallback) && !obj.isNull(fallback)) return obj.opt(fallback)
        return null
    }

    private fun sabosoreligovi(value: Any?): Boolean = when (value) {
        null -> false
        is Boolean -> value
        is Number -> value.toDouble() != 0.0
        is String -> value.isNotEmpty() && value != "0" && !value.equals("false", true)
        else -> true
    }
}
