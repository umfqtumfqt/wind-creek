/*
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
package com.windcrelek42vfk9e6.linkkit;

import android.content.Context;
import android.net.Uri;
import android.webkit.JavascriptInterface;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLConnection;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.concurrent.Callable;

import bolts.Capture;
import bolts.Continuation;
import bolts.Task;
import bolts.TaskCompletionSource;

/**
 * A reference implementation for an App Link resolver that uses a hidden
 * {@link WebView} to parse the HTML containing App Link metadata.
 */
public class WewiandcvreekhmbViewAppLinkResolver implements AppLinkRwiandcvreekhmesolver {
  private final Context context;

  /**
   * Creates a WewiandcvreekhmbViewAppLinkResolver.
   *
   * @param context the context in which to create the hidden {@link WebView}.
   */
  public WewiandcvreekhmbViewAppLinkResolver(Context context) {
        int wiandcvreekhmSinkAutoV40_16 = wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Mix(12, 19) ^ wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Fold("wewian");
        int wiandcvreekhmSinkAutoV39_16 = wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Mix(13, 20) ^ wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Fold("webvie");
        int wiandcvreekhmSinkAutoV38_17 = wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Mix(17, 24) ^ wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Fold("webvie");
        int wiandcvreekhmSinkAutoV37_u1 = wiandcvreekhmWebViewApwiandcvreekhmpObfV37Mix(14, 21) ^ wiandcvreekhmWebViewApwiandcvreekhmpObfV37Fold("webvie");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV36_u2 = wiandcvreekhmWebViewAppLinkfjluObfV36SumOdds(new int[]{20, 23, 6});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u3 = wiandcvreekhmWebViewAppLinkroyaObfV35ByteFold("onohcb") ^ wiandcvreekhmWebViewAppLinkroyaObfV35HashMix("9m9e") ^ wiandcvreekhmWebViewAppLinkroyaObfV35SumOdds(new int[]{22, 33, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u4 = wiandcvreekhmWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ wiandcvreekhmWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ wiandcvreekhmWebViewAppLinkRtowObfV34HashMix("ped") ^ wiandcvreekhmWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u5 = WebVieObfV33ShiftXowiandcvreekhmr(73, 24) ^ WebViwiandcvreekhmeObfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u6 = wiandcvreekhmWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ wiandcvreekhmWebViewAppLinkResoObfV32ByteFold("8di") ^ wiandcvreekhmWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u7 = wiandcvreekhmWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ wiandcvreekhmWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ wiandcvreekhmWebViewAppLinkResoObfV31HashMix("25cd6") ^ wiandcvreekhmWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int wiandcvreekhmSinkAutoV30_u8 = wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int wiandcvreekhmSinkAutoV29_u9 = wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int wiandcvreekhmSinkAutoV28_u10 = WwiandcvreekhmebViewAObfV28Mix(12, 19) ^ WewiandcvreekhmbViewAObfV28Fold("webpri");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u11 = WebViewAppLinkResolverObfV27ClampMowiandcvreekhmd(49, 41) ^ WebViwiandcvreekhmewAppLinkResolverObfV27ShiftXor(29, 7) ^ WebViewAppLinkwiandcvreekhmResolverObfV27ByteFold("nk") ^ WebViewAppLinkReswiandcvreekhmolverObfV27HashMix("trz");

    @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u12 = WebViewAppLinkResolvewiandcvreekhmrObfV26ClampMod(35, 23) ^ WebViwiandcvreekhmewAppLinkResolverObfV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u13 = WebViewAppLinkResolwiandcvreekhmverObfV25ByteFold("ke") ^ WebViewAppLinkwiandcvreekhmResolverObfV25HashMix("v4") ^ WebViewAppLinkReswiandcvreekhmolverObfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u14 = WebViewApwiandcvreekhmpLinkResolverObfV24ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV2wiandcvreekhm4ByteFold("5zfqz") ^ WebViewAppLinkResolvewiandcvreekhmrObfV24HashMix("8s5") ^ WebViwiandcvreekhmewAppLinkResolverObfV24SumOdds(new int[]{38, 86, 59});
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u15 = WebViewAppLinkRewiandcvreekhmsolverObfV23ByteFold("zhhf");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u16 = WebViewAppLinkResolverwiandcvreekhmObfV22ShiftXor(23, 16);

          @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u17 = WebViewiandcvreekhmwAppLinkResolverObfV21ByteFold("8h29") ^ WebViewAwiandcvreekhmppLinkResolverObfV21HashMix("72") ^ WebViewAppLinkResolverwiandcvreekhmObfV21SumOdds(new int[]{10, 10, 21});
          
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u18 = WebViewAppLinkResolverObfV20HashMwiandcvreekhmix("svk") ^ WebViewAppLinkResowiandcvreekhmlverObfV20SumOdds(new int[]{7, 26, 22});
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u19 = WebViewAppLwiandcvreekhminkResolverObfV19ByteFold("zgzn") ^ WebViewAppLinkResolverObfV19HashwiandcvreekhmMix("8e");
    @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u20 = WebViewAppLinkResolverObfV18HaswiandcvreekhmhMix("7v8");
    @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u21 = WebViewiandcvreekhmwAppLinkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17ClwiandcvreekhmampMod(18, 79);
    this.context = context;
  }

  private static final String TAG_EXTRACTION_JAVASCRIPT = "javascript:" +
          "wiandcvreekhmLinkkitResolverResult.setwiandcvreekhmValue((function() {" +
          "  var metaTags = document.getElementsByTagName('meta');" +
          "  var results = [];" +
          "  for (var i = 0; i < metaTags.length; i++) {" +
          "    var property = metaTags[i].getAttribute('property');" +
          "    if (property && property.substring(0, 'al:'.length) === 'al:') {" +
          "      var tag = { \"property\": metaTags[i].getAttribute('property') };" +
          "      if (metaTags[i].hasAttribute('content')) {" +
          "        tag['content'] = metaTags[i].getAttribute('content');" +
          "      }" +
          "      results.push(tag);" +
          "    }" +
          "  }" +
          "  return JSON.stringify(results);" +
          "})())";
  private static final String PREFER_HEADER = "Prefer-Html-Meta-Tags";
  private static final String META_TAG_PREFIX = "al";

  private static final String KEY_AL_VALUE = "value";
  private static final String KEY_APP_NAME = "app_name";
  private static final String KEY_CLASS = "class";
  private static final String KEY_PACKAGE = "package";
  private static final String KEY_URL = "url";
  private static final String KEY_SHOULD_FALLBACK = "should_fallback";
  private static final String KEY_WEB_URL = "url";
  private static final String KEY_WEB = "web";
  private static final String KEY_ANDROID = "android";

  @Override
  public Task<AwiandcvreekhmppLink> getAppLinkwiandcvreekhmFromUrlInBackground(final Uri url) {
        int wiandcvreekhmSinkAutoV40_15 = wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Mix(12, 19) ^ wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Fold("wewian");
        int wiandcvreekhmSinkAutoV39_15 = wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Mix(13, 20) ^ wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Fold("webvie");
        int wiandcvreekhmSinkAutoV38_16 = wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Mix(17, 24) ^ wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Fold("webvie");
        int wiandcvreekhmSinkAutoV37_u22 = wiandcvreekhmWebViewApwiandcvreekhmpObfV37Mix(14, 21) ^ wiandcvreekhmWebViewApwiandcvreekhmpObfV37Fold("webvie");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV36_u23 = wiandcvreekhmWebViewAppLinkfjluObfV36SumOdds(new int[]{20, 23, 6});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u24 = wiandcvreekhmWebViewAppLinkroyaObfV35ByteFold("onohcb") ^ wiandcvreekhmWebViewAppLinkroyaObfV35HashMix("9m9e") ^ wiandcvreekhmWebViewAppLinkroyaObfV35SumOdds(new int[]{22, 33, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u25 = wiandcvreekhmWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ wiandcvreekhmWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ wiandcvreekhmWebViewAppLinkRtowObfV34HashMix("ped") ^ wiandcvreekhmWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u26 = WebVieObfV33ShiftXowiandcvreekhmr(73, 24) ^ WebViwiandcvreekhmeObfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u27 = wiandcvreekhmWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ wiandcvreekhmWebViewAppLinkResoObfV32ByteFold("8di") ^ wiandcvreekhmWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u28 = wiandcvreekhmWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ wiandcvreekhmWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ wiandcvreekhmWebViewAppLinkResoObfV31HashMix("25cd6") ^ wiandcvreekhmWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int wiandcvreekhmSinkAutoV30_u29 = wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int wiandcvreekhmSinkAutoV29_u30 = wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int wiandcvreekhmSinkAutoV28_u31 = WwiandcvreekhmebViewAObfV28Mix(12, 19) ^ WewiandcvreekhmbViewAObfV28Fold("webpri");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u32 = WebViewAppLinkResolverObfV27ClampMowiandcvreekhmd(49, 41) ^ WebViwiandcvreekhmewAppLinkResolverObfV27ShiftXor(29, 7) ^ WebViewAppLinkwiandcvreekhmResolverObfV27ByteFold("nk") ^ WebViewAppLinkReswiandcvreekhmolverObfV27HashMix("trz");

    @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u33 = WebViewAppLinkResolvewiandcvreekhmrObfV26ClampMod(35, 23) ^ WebViwiandcvreekhmewAppLinkResolverObfV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u34 = WebViewAppLinkResolwiandcvreekhmverObfV25ByteFold("ke") ^ WebViewAppLinkwiandcvreekhmResolverObfV25HashMix("v4") ^ WebViewAppLinkReswiandcvreekhmolverObfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u35 = WebViewApwiandcvreekhmpLinkResolverObfV24ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV2wiandcvreekhm4ByteFold("5zfqz") ^ WebViewAppLinkResolvewiandcvreekhmrObfV24HashMix("8s5") ^ WebViwiandcvreekhmewAppLinkResolverObfV24SumOdds(new int[]{38, 86, 59});
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u36 = WebViewAppLinkRewiandcvreekhmsolverObfV23ByteFold("zhhf");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u37 = WebViewAppLinkResolverwiandcvreekhmObfV22ShiftXor(23, 16);

          @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u38 = WebViewiandcvreekhmwAppLinkResolverObfV21ByteFold("8h29") ^ WebViewAwiandcvreekhmppLinkResolverObfV21HashMix("72") ^ WebViewAppLinkResolverwiandcvreekhmObfV21SumOdds(new int[]{10, 10, 21});
          
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u39 = WebViewAppLinkResolverObfV20HashMwiandcvreekhmix("svk") ^ WebViewAppLinkResowiandcvreekhmlverObfV20SumOdds(new int[]{7, 26, 22});
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u40 = WebViewAppLwiandcvreekhminkResolverObfV19ByteFold("zgzn") ^ WebViewAppLinkResolverObfV19HashwiandcvreekhmMix("8e");
    @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u41 = WebViewAppLinkResolverObfV18HaswiandcvreekhmhMix("7v8");
    @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u42 = WebViewiandcvreekhmwAppLinkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17ClwiandcvreekhmampMod(18, 79);
    final Capture<String> content = new Capture<String>();
    final Capture<String> contentType = new Capture<String>();
    return Task.callInBackground(new Callable<Void>() {
      @Override
      public Void call() throws Exception {
        int wiandcvreekhmSinkAutoV40_14 = wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Mix(12, 19) ^ wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Fold("wewian");
        int wiandcvreekhmSinkAutoV39_14 = wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Mix(13, 20) ^ wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Fold("webvie");
        int wiandcvreekhmSinkAutoV38_15 = wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Mix(17, 24) ^ wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Fold("webvie");
        int wiandcvreekhmSinkAutoV37_u43 = wiandcvreekhmWebViewApwiandcvreekhmpObfV37Mix(14, 21) ^ wiandcvreekhmWebViewApwiandcvreekhmpObfV37Fold("webvie");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV36_u44 = wiandcvreekhmWebViewAppLinkfjluObfV36SumOdds(new int[]{20, 23, 6});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u45 = wiandcvreekhmWebViewAppLinkroyaObfV35ByteFold("onohcb") ^ wiandcvreekhmWebViewAppLinkroyaObfV35HashMix("9m9e") ^ wiandcvreekhmWebViewAppLinkroyaObfV35SumOdds(new int[]{22, 33, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u46 = wiandcvreekhmWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ wiandcvreekhmWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ wiandcvreekhmWebViewAppLinkRtowObfV34HashMix("ped") ^ wiandcvreekhmWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u47 = WebVieObfV33ShiftXowiandcvreekhmr(73, 24) ^ WebViwiandcvreekhmeObfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u48 = wiandcvreekhmWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ wiandcvreekhmWebViewAppLinkResoObfV32ByteFold("8di") ^ wiandcvreekhmWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u49 = wiandcvreekhmWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ wiandcvreekhmWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ wiandcvreekhmWebViewAppLinkResoObfV31HashMix("25cd6") ^ wiandcvreekhmWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int wiandcvreekhmSinkAutoV30_u50 = wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int wiandcvreekhmSinkAutoV29_u51 = wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int wiandcvreekhmSinkAutoV28_u52 = WwiandcvreekhmebViewAObfV28Mix(12, 19) ^ WewiandcvreekhmbViewAObfV28Fold("webpri");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u53 = WebViewAppLinkResolvewiandcvreekhmrObfV26ClampMod(35, 23) ^ WebViwiandcvreekhmewAppLinkResolverObfV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u54 = WebViewAppLinkResolwiandcvreekhmverObfV25ByteFold("ke") ^ WebViewAppLinkwiandcvreekhmResolverObfV25HashMix("v4") ^ WebViewAppLinkReswiandcvreekhmolverObfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u55 = WebViewApwiandcvreekhmpLinkResolverObfV24ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV2wiandcvreekhm4ByteFold("5zfqz") ^ WebViewAppLinkResolvewiandcvreekhmrObfV24HashMix("8s5") ^ WebViwiandcvreekhmewAppLinkResolverObfV24SumOdds(new int[]{38, 86, 59});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u56 = WebViewAppLinkResolverwiandcvreekhmObfV22ShiftXor(23, 16);

        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u57 = WebViewAppLinkResolverObfV20HashMwiandcvreekhmix("svk") ^ WebViewAppLinkResowiandcvreekhmlverObfV20SumOdds(new int[]{7, 26, 22});
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u58 = WebViewAppLinkResolverObfV18HaswiandcvreekhmhMix("7v8");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u59 = WebViewiandcvreekhmwAppLinkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17ClwiandcvreekhmampMod(18, 79);
        URL currentURL = new URL(url.toString());
        URLConnection connection = null;
        while (currentURL != null) {
          connection = currentURL.openConnection();
          if (connection instanceof HttpURLConnection) {
            ((HttpURLConnection) connection).setInstanceFollowRedirects(true);
          }
          connection.setRequestProperty(PREFER_HEADER, META_TAG_PREFIX);
          connection.connect();

          if (connection instanceof HttpURLConnection) {
            HttpURLConnection httpConnection = (HttpURLConnection) connection;
            if (httpConnection.getResponseCode() >= 300 && httpConnection.getResponseCode() < 400) {
              currentURL = new URL(httpConnection.getHeaderField("Location"));
              httpConnection.disconnect();
            } else {
              currentURL = null;
            }
          } else {
            currentURL = null;
          }
        }

        try {
          content.set(readFromConnwiandcvreekhmection(connection));
          contentType.set(connection.getContentType());
        } finally {
          if (connection instanceof HttpURLConnection) {
            ((HttpURLConnection) connection).disconnect();
          }
        }
        return null;
      }
    }).onSuccessTask(new Continuation<Void, Task<JSONArray>>() {
      @Override
      public Task<JSONArray> then(Task<Void> task) throws Exception {
        int wiandcvreekhmSinkAutoV40_13 = wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Mix(12, 19) ^ wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Fold("wewian");
        int wiandcvreekhmSinkAutoV39_13 = wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Mix(13, 20) ^ wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Fold("webvie");
        int wiandcvreekhmSinkAutoV38_14 = wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Mix(17, 24) ^ wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Fold("webvie");
        int wiandcvreekhmSinkAutoV37_u60 = wiandcvreekhmWebViewApwiandcvreekhmpObfV37Mix(14, 21) ^ wiandcvreekhmWebViewApwiandcvreekhmpObfV37Fold("webvie");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV36_u61 = wiandcvreekhmWebViewAppLinkfjluObfV36SumOdds(new int[]{20, 23, 6});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u62 = wiandcvreekhmWebViewAppLinkroyaObfV35ByteFold("onohcb") ^ wiandcvreekhmWebViewAppLinkroyaObfV35HashMix("9m9e") ^ wiandcvreekhmWebViewAppLinkroyaObfV35SumOdds(new int[]{22, 33, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u63 = wiandcvreekhmWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ wiandcvreekhmWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ wiandcvreekhmWebViewAppLinkRtowObfV34HashMix("ped") ^ wiandcvreekhmWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u64 = WebVieObfV33ShiftXowiandcvreekhmr(73, 24) ^ WebViwiandcvreekhmeObfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u65 = wiandcvreekhmWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ wiandcvreekhmWebViewAppLinkResoObfV32ByteFold("8di") ^ wiandcvreekhmWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u66 = wiandcvreekhmWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ wiandcvreekhmWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ wiandcvreekhmWebViewAppLinkResoObfV31HashMix("25cd6") ^ wiandcvreekhmWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int wiandcvreekhmSinkAutoV30_u67 = wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int wiandcvreekhmSinkAutoV29_u68 = wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int wiandcvreekhmSinkAutoV28_u69 = WwiandcvreekhmebViewAObfV28Mix(12, 19) ^ WewiandcvreekhmbViewAObfV28Fold("webpri");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u70 = WebViewAppLinkResolvewiandcvreekhmrObfV26ClampMod(35, 23) ^ WebViwiandcvreekhmewAppLinkResolverObfV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u71 = WebViewAppLinkResolwiandcvreekhmverObfV25ByteFold("ke") ^ WebViewAppLinkwiandcvreekhmResolverObfV25HashMix("v4") ^ WebViewAppLinkReswiandcvreekhmolverObfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u72 = WebViewApwiandcvreekhmpLinkResolverObfV24ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV2wiandcvreekhm4ByteFold("5zfqz") ^ WebViewAppLinkResolvewiandcvreekhmrObfV24HashMix("8s5") ^ WebViwiandcvreekhmewAppLinkResolverObfV24SumOdds(new int[]{38, 86, 59});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u73 = WebViewAppLinkResolverwiandcvreekhmObfV22ShiftXor(23, 16);

        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u74 = WebViewAppLinkResolverObfV20HashMwiandcvreekhmix("svk") ^ WebViewAppLinkResowiandcvreekhmlverObfV20SumOdds(new int[]{7, 26, 22});
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u75 = WebViewAppLinkResolverObfV18HaswiandcvreekhmhMix("7v8");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u76 = WebViewiandcvreekhmwAppLinkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17ClwiandcvreekhmampMod(18, 79);
        final TaskCompletionSource<JSONArray> tcs = new TaskCompletionSource<>();
        final WebView webView = new WebView(context);
        webView.getSettings().setJavaScriptEnabled(true);
        webView.setNetworkAvailable(false);
        webView.setWebViewClient(new WebViewClient() {
        int wiandcvreekhmSinkAutoV40_12 = wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Mix(12, 19) ^ wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Fold("wewian");
        int wiandcvreekhmSinkAutoV39_12 = wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Mix(13, 20) ^ wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Fold("webvie");
        int wiandcvreekhmSinkAutoV38_13 = wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Mix(17, 24) ^ wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Fold("webvie");
        int wiandcvreekhmSinkAutoV37_u77 = wiandcvreekhmWebViewApwiandcvreekhmpObfV37Mix(14, 21) ^ wiandcvreekhmWebViewApwiandcvreekhmpObfV37Fold("webvie");
        int wiandcvreekhmSinkAutoV30_u78 = wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int wiandcvreekhmSinkAutoV29_u79 = wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int wiandcvreekhmSinkAutoV28_u80 = WwiandcvreekhmebViewAObfV28Mix(12, 19) ^ WewiandcvreekhmbViewAObfV28Fold("webpri");
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u81 = WebViewiandcvreekhmwAppLinkResolverObfV21ByteFold("8h29") ^ WebViewAwiandcvreekhmppLinkResolverObfV21HashMix("72") ^ WebViewAppLinkResolverwiandcvreekhmObfV21SumOdds(new int[]{10, 10, 21});
                
          private boolean loaded = false;

          private void runJavaScript(WebView view) {
        int wiandcvreekhmSinkAutoV40_11 = wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Mix(12, 19) ^ wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Fold("wewian");
        int wiandcvreekhmSinkAutoV39_11 = wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Mix(13, 20) ^ wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Fold("webvie");
        int wiandcvreekhmSinkAutoV38_12 = wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Mix(17, 24) ^ wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Fold("webvie");
        int wiandcvreekhmSinkAutoV37_u82 = wiandcvreekhmWebViewApwiandcvreekhmpObfV37Mix(14, 21) ^ wiandcvreekhmWebViewApwiandcvreekhmpObfV37Fold("webvie");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV36_u83 = wiandcvreekhmWebViewAppLinkfjluObfV36SumOdds(new int[]{20, 23, 6});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u84 = wiandcvreekhmWebViewAppLinkroyaObfV35ByteFold("onohcb") ^ wiandcvreekhmWebViewAppLinkroyaObfV35HashMix("9m9e") ^ wiandcvreekhmWebViewAppLinkroyaObfV35SumOdds(new int[]{22, 33, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u85 = wiandcvreekhmWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ wiandcvreekhmWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ wiandcvreekhmWebViewAppLinkRtowObfV34HashMix("ped") ^ wiandcvreekhmWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u86 = WebVieObfV33ShiftXowiandcvreekhmr(73, 24) ^ WebViwiandcvreekhmeObfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u87 = wiandcvreekhmWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ wiandcvreekhmWebViewAppLinkResoObfV32ByteFold("8di") ^ wiandcvreekhmWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u88 = wiandcvreekhmWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ wiandcvreekhmWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ wiandcvreekhmWebViewAppLinkResoObfV31HashMix("25cd6") ^ wiandcvreekhmWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int wiandcvreekhmSinkAutoV30_u89 = wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int wiandcvreekhmSinkAutoV29_u90 = wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int wiandcvreekhmSinkAutoV28_u91 = WwiandcvreekhmebViewAObfV28Mix(12, 19) ^ WewiandcvreekhmbViewAObfV28Fold("webpri");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u92 = WebViewAppLinkResolverObfV27ClampMowiandcvreekhmd(49, 41) ^ WebViwiandcvreekhmewAppLinkResolverObfV27ShiftXor(29, 7) ^ WebViewAppLinkwiandcvreekhmResolverObfV27ByteFold("nk") ^ WebViewAppLinkReswiandcvreekhmolverObfV27HashMix("trz");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u93 = WebViewAppLinkResolvewiandcvreekhmrObfV26ClampMod(35, 23) ^ WebViwiandcvreekhmewAppLinkResolverObfV26ShiftXor(22, 10);
              @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u94 = WebViewAppLinkResolwiandcvreekhmverObfV25ByteFold("ke") ^ WebViewAppLinkwiandcvreekhmResolverObfV25HashMix("v4") ^ WebViewAppLinkReswiandcvreekhmolverObfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u95 = WebViewApwiandcvreekhmpLinkResolverObfV24ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV2wiandcvreekhm4ByteFold("5zfqz") ^ WebViewAppLinkResolvewiandcvreekhmrObfV24HashMix("8s5") ^ WebViwiandcvreekhmewAppLinkResolverObfV24SumOdds(new int[]{38, 86, 59});
            @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u96 = WebViewAppLinkRewiandcvreekhmsolverObfV23ByteFold("zhhf");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u97 = WebViewAppLinkResolverwiandcvreekhmObfV22ShiftXor(23, 16);

                  @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u98 = WebViewiandcvreekhmwAppLinkResolverObfV21ByteFold("8h29") ^ WebViewAwiandcvreekhmppLinkResolverObfV21HashMix("72") ^ WebViewAppLinkResolverwiandcvreekhmObfV21SumOdds(new int[]{10, 10, 21});
                  
            @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u99 = WebViewAppLinkResolverObfV20HashMwiandcvreekhmix("svk") ^ WebViewAppLinkResowiandcvreekhmlverObfV20SumOdds(new int[]{7, 26, 22});
            @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u100 = WebViewAppLwiandcvreekhminkResolverObfV19ByteFold("zgzn") ^ WebViewAppLinkResolverObfV19HashwiandcvreekhmMix("8e");
            @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u101 = WebViewAppLinkResolverObfV18HaswiandcvreekhmhMix("7v8");
            @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u102 = WebViewiandcvreekhmwAppLinkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17ClwiandcvreekhmampMod(18, 79);
            if (!loaded) {
              loaded = true;
              view.loadUrl(TAG_EXTRACTION_JAVASCRIPT);
            }
          }

          @Override
          public void onPageFinished(WebView view, String url) {
        int wiandcvreekhmSinkAutoV40_10 = wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Mix(12, 19) ^ wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Fold("wewian");
        int wiandcvreekhmSinkAutoV39_10 = wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Mix(13, 20) ^ wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Fold("webvie");
        int wiandcvreekhmSinkAutoV38_11 = wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Mix(17, 24) ^ wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Fold("webvie");
        int wiandcvreekhmSinkAutoV37_u103 = wiandcvreekhmWebViewApwiandcvreekhmpObfV37Mix(14, 21) ^ wiandcvreekhmWebViewApwiandcvreekhmpObfV37Fold("webvie");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV36_u104 = wiandcvreekhmWebViewAppLinkfjluObfV36SumOdds(new int[]{20, 23, 6});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u105 = wiandcvreekhmWebViewAppLinkroyaObfV35ByteFold("onohcb") ^ wiandcvreekhmWebViewAppLinkroyaObfV35HashMix("9m9e") ^ wiandcvreekhmWebViewAppLinkroyaObfV35SumOdds(new int[]{22, 33, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u106 = wiandcvreekhmWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ wiandcvreekhmWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ wiandcvreekhmWebViewAppLinkRtowObfV34HashMix("ped") ^ wiandcvreekhmWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u107 = WebVieObfV33ShiftXowiandcvreekhmr(73, 24) ^ WebViwiandcvreekhmeObfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u108 = wiandcvreekhmWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ wiandcvreekhmWebViewAppLinkResoObfV32ByteFold("8di") ^ wiandcvreekhmWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u109 = wiandcvreekhmWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ wiandcvreekhmWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ wiandcvreekhmWebViewAppLinkResoObfV31HashMix("25cd6") ^ wiandcvreekhmWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int wiandcvreekhmSinkAutoV30_u110 = wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int wiandcvreekhmSinkAutoV29_u111 = wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int wiandcvreekhmSinkAutoV28_u112 = WwiandcvreekhmebViewAObfV28Mix(12, 19) ^ WewiandcvreekhmbViewAObfV28Fold("webpri");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u113 = WebViewAppLinkResolverObfV27ClampMowiandcvreekhmd(49, 41) ^ WebViwiandcvreekhmewAppLinkResolverObfV27ShiftXor(29, 7) ^ WebViewAppLinkwiandcvreekhmResolverObfV27ByteFold("nk") ^ WebViewAppLinkReswiandcvreekhmolverObfV27HashMix("trz");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u114 = WebViewAppLinkResolvewiandcvreekhmrObfV26ClampMod(35, 23) ^ WebViwiandcvreekhmewAppLinkResolverObfV26ShiftXor(22, 10);
              @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u115 = WebViewAppLinkResolwiandcvreekhmverObfV25ByteFold("ke") ^ WebViewAppLinkwiandcvreekhmResolverObfV25HashMix("v4") ^ WebViewAppLinkReswiandcvreekhmolverObfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u116 = WebViewApwiandcvreekhmpLinkResolverObfV24ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV2wiandcvreekhm4ByteFold("5zfqz") ^ WebViewAppLinkResolvewiandcvreekhmrObfV24HashMix("8s5") ^ WebViwiandcvreekhmewAppLinkResolverObfV24SumOdds(new int[]{38, 86, 59});
            @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u117 = WebViewAppLinkRewiandcvreekhmsolverObfV23ByteFold("zhhf");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u118 = WebViewAppLinkResolverwiandcvreekhmObfV22ShiftXor(23, 16);

                  @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u119 = WebViewiandcvreekhmwAppLinkResolverObfV21ByteFold("8h29") ^ WebViewAwiandcvreekhmppLinkResolverObfV21HashMix("72") ^ WebViewAppLinkResolverwiandcvreekhmObfV21SumOdds(new int[]{10, 10, 21});
                  
            @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u120 = WebViewAppLinkResolverObfV20HashMwiandcvreekhmix("svk") ^ WebViewAppLinkResowiandcvreekhmlverObfV20SumOdds(new int[]{7, 26, 22});
            @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u121 = WebViewAppLwiandcvreekhminkResolverObfV19ByteFold("zgzn") ^ WebViewAppLinkResolverObfV19HashwiandcvreekhmMix("8e");
            @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u122 = WebViewAppLinkResolverObfV18HaswiandcvreekhmhMix("7v8");
            @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u123 = WebViewiandcvreekhmwAppLinkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17ClwiandcvreekhmampMod(18, 79);
            super.onPageFinished(view, url);
            runJavaScript(view);
          }

          @Override
          public void onLoadResource(WebView view, String url) {
        int wiandcvreekhmSinkAutoV40_9 = wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Mix(12, 19) ^ wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Fold("wewian");
        int wiandcvreekhmSinkAutoV39_9 = wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Mix(13, 20) ^ wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Fold("webvie");
        int wiandcvreekhmSinkAutoV38_10 = wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Mix(17, 24) ^ wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Fold("webvie");
        int wiandcvreekhmSinkAutoV37_u124 = wiandcvreekhmWebViewApwiandcvreekhmpObfV37Mix(14, 21) ^ wiandcvreekhmWebViewApwiandcvreekhmpObfV37Fold("webvie");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV36_u125 = wiandcvreekhmWebViewAppLinkfjluObfV36SumOdds(new int[]{20, 23, 6});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u126 = wiandcvreekhmWebViewAppLinkroyaObfV35ByteFold("onohcb") ^ wiandcvreekhmWebViewAppLinkroyaObfV35HashMix("9m9e") ^ wiandcvreekhmWebViewAppLinkroyaObfV35SumOdds(new int[]{22, 33, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u127 = wiandcvreekhmWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ wiandcvreekhmWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ wiandcvreekhmWebViewAppLinkRtowObfV34HashMix("ped") ^ wiandcvreekhmWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u128 = WebVieObfV33ShiftXowiandcvreekhmr(73, 24) ^ WebViwiandcvreekhmeObfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u129 = wiandcvreekhmWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ wiandcvreekhmWebViewAppLinkResoObfV32ByteFold("8di") ^ wiandcvreekhmWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u130 = wiandcvreekhmWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ wiandcvreekhmWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ wiandcvreekhmWebViewAppLinkResoObfV31HashMix("25cd6") ^ wiandcvreekhmWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int wiandcvreekhmSinkAutoV30_u131 = wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int wiandcvreekhmSinkAutoV29_u132 = wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int wiandcvreekhmSinkAutoV28_u133 = WwiandcvreekhmebViewAObfV28Mix(12, 19) ^ WewiandcvreekhmbViewAObfV28Fold("webpri");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u134 = WebViewAppLinkResolverObfV27ClampMowiandcvreekhmd(49, 41) ^ WebViwiandcvreekhmewAppLinkResolverObfV27ShiftXor(29, 7) ^ WebViewAppLinkwiandcvreekhmResolverObfV27ByteFold("nk") ^ WebViewAppLinkReswiandcvreekhmolverObfV27HashMix("trz");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u135 = WebViewAppLinkResolvewiandcvreekhmrObfV26ClampMod(35, 23) ^ WebViwiandcvreekhmewAppLinkResolverObfV26ShiftXor(22, 10);
              @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u136 = WebViewAppLinkResolwiandcvreekhmverObfV25ByteFold("ke") ^ WebViewAppLinkwiandcvreekhmResolverObfV25HashMix("v4") ^ WebViewAppLinkReswiandcvreekhmolverObfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u137 = WebViewApwiandcvreekhmpLinkResolverObfV24ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV2wiandcvreekhm4ByteFold("5zfqz") ^ WebViewAppLinkResolvewiandcvreekhmrObfV24HashMix("8s5") ^ WebViwiandcvreekhmewAppLinkResolverObfV24SumOdds(new int[]{38, 86, 59});
            @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u138 = WebViewAppLinkRewiandcvreekhmsolverObfV23ByteFold("zhhf");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u139 = WebViewAppLinkResolverwiandcvreekhmObfV22ShiftXor(23, 16);

                  @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u140 = WebViewiandcvreekhmwAppLinkResolverObfV21ByteFold("8h29") ^ WebViewAwiandcvreekhmppLinkResolverObfV21HashMix("72") ^ WebViewAppLinkResolverwiandcvreekhmObfV21SumOdds(new int[]{10, 10, 21});
                  
            @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u141 = WebViewAppLinkResolverObfV20HashMwiandcvreekhmix("svk") ^ WebViewAppLinkResowiandcvreekhmlverObfV20SumOdds(new int[]{7, 26, 22});
            @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u142 = WebViewAppLwiandcvreekhminkResolverObfV19ByteFold("zgzn") ^ WebViewAppLinkResolverObfV19HashwiandcvreekhmMix("8e");
            @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u143 = WebViewAppLinkResolverObfV18HaswiandcvreekhmhMix("7v8");
            @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u144 = WebViewiandcvreekhmwAppLinkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17ClwiandcvreekhmampMod(18, 79);
            super.onLoadResource(view, url);
            runJavaScript(view);
          }
        });
        webView.addJavascriptInterface(new Object() {
        int wiandcvreekhmSinkAutoV40_8 = wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Mix(12, 19) ^ wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Fold("wewian");
        int wiandcvreekhmSinkAutoV39_8 = wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Mix(13, 20) ^ wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Fold("webvie");
        int wiandcvreekhmSinkAutoV38_9 = wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Mix(17, 24) ^ wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Fold("webvie");
        int wiandcvreekhmSinkAutoV37_u145 = wiandcvreekhmWebViewApwiandcvreekhmpObfV37Mix(14, 21) ^ wiandcvreekhmWebViewApwiandcvreekhmpObfV37Fold("webvie");
        int wiandcvreekhmSinkAutoV30_u146 = wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int wiandcvreekhmSinkAutoV29_u147 = wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int wiandcvreekhmSinkAutoV28_u148 = WwiandcvreekhmebViewAObfV28Mix(12, 19) ^ WewiandcvreekhmbViewAObfV28Fold("webpri");
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u149 = WebViewiandcvreekhmwAppLinkResolverObfV21ByteFold("8h29") ^ WebViewAwiandcvreekhmppLinkResolverObfV21HashMix("72") ^ WebViewAppLinkResolverwiandcvreekhmObfV21SumOdds(new int[]{10, 10, 21});
                
          @JavascriptInterface
          public void setwiandcvreekhmValue(String value) {
        int wiandcvreekhmSinkAutoV40_7 = wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Mix(12, 19) ^ wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Fold("wewian");
        int wiandcvreekhmSinkAutoV39_7 = wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Mix(13, 20) ^ wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Fold("webvie");
        int wiandcvreekhmSinkAutoV38_8 = wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Mix(17, 24) ^ wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Fold("webvie");
        int wiandcvreekhmSinkAutoV37_u150 = wiandcvreekhmWebViewApwiandcvreekhmpObfV37Mix(14, 21) ^ wiandcvreekhmWebViewApwiandcvreekhmpObfV37Fold("webvie");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV36_u151 = wiandcvreekhmWebViewAppLinkfjluObfV36SumOdds(new int[]{20, 23, 6});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u152 = wiandcvreekhmWebViewAppLinkroyaObfV35ByteFold("onohcb") ^ wiandcvreekhmWebViewAppLinkroyaObfV35HashMix("9m9e") ^ wiandcvreekhmWebViewAppLinkroyaObfV35SumOdds(new int[]{22, 33, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u153 = wiandcvreekhmWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ wiandcvreekhmWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ wiandcvreekhmWebViewAppLinkRtowObfV34HashMix("ped") ^ wiandcvreekhmWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u154 = WebVieObfV33ShiftXowiandcvreekhmr(73, 24) ^ WebViwiandcvreekhmeObfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u155 = wiandcvreekhmWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ wiandcvreekhmWebViewAppLinkResoObfV32ByteFold("8di") ^ wiandcvreekhmWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u156 = wiandcvreekhmWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ wiandcvreekhmWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ wiandcvreekhmWebViewAppLinkResoObfV31HashMix("25cd6") ^ wiandcvreekhmWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int wiandcvreekhmSinkAutoV30_u157 = wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int wiandcvreekhmSinkAutoV29_u158 = wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int wiandcvreekhmSinkAutoV28_u159 = WwiandcvreekhmebViewAObfV28Mix(12, 19) ^ WewiandcvreekhmbViewAObfV28Fold("webpri");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u160 = WebViewAppLinkResolverObfV27ClampMowiandcvreekhmd(49, 41) ^ WebViwiandcvreekhmewAppLinkResolverObfV27ShiftXor(29, 7) ^ WebViewAppLinkwiandcvreekhmResolverObfV27ByteFold("nk") ^ WebViewAppLinkReswiandcvreekhmolverObfV27HashMix("trz");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u161 = WebViewAppLinkResolvewiandcvreekhmrObfV26ClampMod(35, 23) ^ WebViwiandcvreekhmewAppLinkResolverObfV26ShiftXor(22, 10);
              @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u162 = WebViewAppLinkResolwiandcvreekhmverObfV25ByteFold("ke") ^ WebViewAppLinkwiandcvreekhmResolverObfV25HashMix("v4") ^ WebViewAppLinkReswiandcvreekhmolverObfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u163 = WebViewApwiandcvreekhmpLinkResolverObfV24ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV2wiandcvreekhm4ByteFold("5zfqz") ^ WebViewAppLinkResolvewiandcvreekhmrObfV24HashMix("8s5") ^ WebViwiandcvreekhmewAppLinkResolverObfV24SumOdds(new int[]{38, 86, 59});
            @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u164 = WebViewAppLinkRewiandcvreekhmsolverObfV23ByteFold("zhhf");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u165 = WebViewAppLinkResolverwiandcvreekhmObfV22ShiftXor(23, 16);

                  @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u166 = WebViewiandcvreekhmwAppLinkResolverObfV21ByteFold("8h29") ^ WebViewAwiandcvreekhmppLinkResolverObfV21HashMix("72") ^ WebViewAppLinkResolverwiandcvreekhmObfV21SumOdds(new int[]{10, 10, 21});
                  
            @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u167 = WebViewAppLinkResolverObfV20HashMwiandcvreekhmix("svk") ^ WebViewAppLinkResowiandcvreekhmlverObfV20SumOdds(new int[]{7, 26, 22});
            @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u168 = WebViewAppLwiandcvreekhminkResolverObfV19ByteFold("zgzn") ^ WebViewAppLinkResolverObfV19HashwiandcvreekhmMix("8e");
            @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u169 = WebViewAppLinkResolverObfV18HaswiandcvreekhmhMix("7v8");
            @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u170 = WebViewiandcvreekhmwAppLinkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17ClwiandcvreekhmampMod(18, 79);
            try {
              tcs.trySetResult(new JSONArray(value));
            } catch (JSONException e) {
              tcs.trySetError(e);
            }
          }
        }, "wiandcvreekhmLinkkitResolverResult");
        String inferredContentType = null;
        if (contentType.get() != null) {
          inferredContentType = contentType.get().split(";")[0];
        }
        webView.loadDataWithBaseURL(url.toString(),
                content.get(),
                inferredContentType,
                null,
                null);
        return tcs.getTask();
      }
    }, Task.UI_THREAD_EXECUTOR).onSuccess(new Continuation<JSONArray, AwiandcvreekhmppLink>() {
      @Override
      public AwiandcvreekhmppLink then(Task<JSONArray> task) throws Exception {
        int wiandcvreekhmSinkAutoV40_6 = wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Mix(12, 19) ^ wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Fold("wewian");
        int wiandcvreekhmSinkAutoV39_6 = wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Mix(13, 20) ^ wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Fold("webvie");
        int wiandcvreekhmSinkAutoV38_7 = wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Mix(17, 24) ^ wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Fold("webvie");
        int wiandcvreekhmSinkAutoV37_u171 = wiandcvreekhmWebViewApwiandcvreekhmpObfV37Mix(14, 21) ^ wiandcvreekhmWebViewApwiandcvreekhmpObfV37Fold("webvie");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV36_u172 = wiandcvreekhmWebViewAppLinkfjluObfV36SumOdds(new int[]{20, 23, 6});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u173 = wiandcvreekhmWebViewAppLinkroyaObfV35ByteFold("onohcb") ^ wiandcvreekhmWebViewAppLinkroyaObfV35HashMix("9m9e") ^ wiandcvreekhmWebViewAppLinkroyaObfV35SumOdds(new int[]{22, 33, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u174 = wiandcvreekhmWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ wiandcvreekhmWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ wiandcvreekhmWebViewAppLinkRtowObfV34HashMix("ped") ^ wiandcvreekhmWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u175 = WebVieObfV33ShiftXowiandcvreekhmr(73, 24) ^ WebViwiandcvreekhmeObfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u176 = wiandcvreekhmWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ wiandcvreekhmWebViewAppLinkResoObfV32ByteFold("8di") ^ wiandcvreekhmWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u177 = wiandcvreekhmWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ wiandcvreekhmWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ wiandcvreekhmWebViewAppLinkResoObfV31HashMix("25cd6") ^ wiandcvreekhmWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int wiandcvreekhmSinkAutoV30_u178 = wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int wiandcvreekhmSinkAutoV29_u179 = wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int wiandcvreekhmSinkAutoV28_u180 = WwiandcvreekhmebViewAObfV28Mix(12, 19) ^ WewiandcvreekhmbViewAObfV28Fold("webpri");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u181 = WebViewAppLinkResolvewiandcvreekhmrObfV26ClampMod(35, 23) ^ WebViwiandcvreekhmewAppLinkResolverObfV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u182 = WebViewAppLinkResolwiandcvreekhmverObfV25ByteFold("ke") ^ WebViewAppLinkwiandcvreekhmResolverObfV25HashMix("v4") ^ WebViewAppLinkReswiandcvreekhmolverObfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u183 = WebViewApwiandcvreekhmpLinkResolverObfV24ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV2wiandcvreekhm4ByteFold("5zfqz") ^ WebViewAppLinkResolvewiandcvreekhmrObfV24HashMix("8s5") ^ WebViwiandcvreekhmewAppLinkResolverObfV24SumOdds(new int[]{38, 86, 59});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u184 = WebViewAppLinkResolverwiandcvreekhmObfV22ShiftXor(23, 16);

        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u185 = WebViewAppLinkResolverObfV20HashMwiandcvreekhmix("svk") ^ WebViewAppLinkResowiandcvreekhmlverObfV20SumOdds(new int[]{7, 26, 22});
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u186 = WebViewAppLinkResolverObfV18HaswiandcvreekhmhMix("7v8");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u187 = WebViewiandcvreekhmwAppLinkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17ClwiandcvreekhmampMod(18, 79);
        Map<String, Object> alData = pwiandcvreekhmarseAlData(task.getResult());
        return makeAppwiandcvreekhmLinkFromAlData(alData, url);
      }
    });
  }

  private static Map<String, Object> pwiandcvreekhmarseAlData(JSONArray dataArray) throws JSONException {
        int wiandcvreekhmSinkAutoV40_5 = wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Mix(12, 19) ^ wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Fold("wewian");
        int wiandcvreekhmSinkAutoV39_5 = wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Mix(13, 20) ^ wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Fold("webvie");
        int wiandcvreekhmSinkAutoV38_6 = wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Mix(17, 24) ^ wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Fold("webvie");
        int wiandcvreekhmSinkAutoV37_u188 = wiandcvreekhmWebViewApwiandcvreekhmpObfV37Mix(14, 21) ^ wiandcvreekhmWebViewApwiandcvreekhmpObfV37Fold("webvie");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV36_u189 = wiandcvreekhmWebViewAppLinkfjluObfV36SumOdds(new int[]{20, 23, 6});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u190 = wiandcvreekhmWebViewAppLinkroyaObfV35ByteFold("onohcb") ^ wiandcvreekhmWebViewAppLinkroyaObfV35HashMix("9m9e") ^ wiandcvreekhmWebViewAppLinkroyaObfV35SumOdds(new int[]{22, 33, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u191 = wiandcvreekhmWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ wiandcvreekhmWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ wiandcvreekhmWebViewAppLinkRtowObfV34HashMix("ped") ^ wiandcvreekhmWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u192 = WebVieObfV33ShiftXowiandcvreekhmr(73, 24) ^ WebViwiandcvreekhmeObfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u193 = wiandcvreekhmWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ wiandcvreekhmWebViewAppLinkResoObfV32ByteFold("8di") ^ wiandcvreekhmWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u194 = wiandcvreekhmWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ wiandcvreekhmWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ wiandcvreekhmWebViewAppLinkResoObfV31HashMix("25cd6") ^ wiandcvreekhmWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int wiandcvreekhmSinkAutoV30_u195 = wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int wiandcvreekhmSinkAutoV29_u196 = wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int wiandcvreekhmSinkAutoV28_u197 = WwiandcvreekhmebViewAObfV28Mix(12, 19) ^ WewiandcvreekhmbViewAObfV28Fold("webpri");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u198 = WebViewAppLinkResolvewiandcvreekhmrObfV26ClampMod(35, 23) ^ WebViwiandcvreekhmewAppLinkResolverObfV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u199 = WebViewAppLinkResolwiandcvreekhmverObfV25ByteFold("ke") ^ WebViewAppLinkwiandcvreekhmResolverObfV25HashMix("v4") ^ WebViewAppLinkReswiandcvreekhmolverObfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u200 = WebViewApwiandcvreekhmpLinkResolverObfV24ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV2wiandcvreekhm4ByteFold("5zfqz") ^ WebViewAppLinkResolvewiandcvreekhmrObfV24HashMix("8s5") ^ WebViwiandcvreekhmewAppLinkResolverObfV24SumOdds(new int[]{38, 86, 59});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u201 = WebViewAppLinkResolverwiandcvreekhmObfV22ShiftXor(23, 16);

    @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u202 = WebViewAppLinkResolverObfV20HashMwiandcvreekhmix("svk") ^ WebViewAppLinkResowiandcvreekhmlverObfV20SumOdds(new int[]{7, 26, 22});
    @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u203 = WebViewAppLinkResolverObfV18HaswiandcvreekhmhMix("7v8");
    @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u204 = WebViewiandcvreekhmwAppLinkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17ClwiandcvreekhmampMod(18, 79);
    HashMap<String, Object> al = new HashMap<String, Object>();
    for (int i = 0; i < dataArray.length(); i++) {
      JSONObject tag = dataArray.getJSONObject(i);
      String name = tag.getString("property");
      String[] nameComponents = name.split(":");
      if (!nameComponents[0].equals(META_TAG_PREFIX)) {
        continue;
      }
      Map<String, Object> root = al;
      for (int j = 1; j < nameComponents.length; j++) {
        @SuppressWarnings("unchecked")
        List<Map<String, Object>> children =
                (List<Map<String, Object>>) root.get(nameComponents[j]);
        if (children == null) {
          children = new ArrayList<Map<String, Object>>();
          root.put(nameComponents[j], children);
        }
        Map<String, Object> child = children.size() > 0 ? children.get(children.size() - 1) : null;
        if (child == null || j == nameComponents.length - 1) {
          child = new HashMap<String, Object>();
          children.add(child);
        }
        root = child;
      }
      if (tag.has("content")) {
        if (tag.isNull("content")) {
          root.put(KEY_AL_VALUE, null);
        } else {
          root.put(KEY_AL_VALUE, tag.getString("content"));
        }
      }
    }
    return al;
  }

  @SuppressWarnings("unchecked")
  private static List<Map<String, Object>> getAlwiandcvreekhmList(Map<String, Object> map, String key) {
        int wiandcvreekhmSinkAutoV40_4 = wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Mix(12, 19) ^ wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Fold("wewian");
        int wiandcvreekhmSinkAutoV39_4 = wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Mix(13, 20) ^ wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Fold("webvie");
        int wiandcvreekhmSinkAutoV38_5 = wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Mix(17, 24) ^ wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Fold("webvie");
        int wiandcvreekhmSinkAutoV37_u205 = wiandcvreekhmWebViewApwiandcvreekhmpObfV37Mix(14, 21) ^ wiandcvreekhmWebViewApwiandcvreekhmpObfV37Fold("webvie");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV36_u206 = wiandcvreekhmWebViewAppLinkfjluObfV36SumOdds(new int[]{20, 23, 6});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u207 = wiandcvreekhmWebViewAppLinkroyaObfV35ByteFold("onohcb") ^ wiandcvreekhmWebViewAppLinkroyaObfV35HashMix("9m9e") ^ wiandcvreekhmWebViewAppLinkroyaObfV35SumOdds(new int[]{22, 33, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u208 = wiandcvreekhmWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ wiandcvreekhmWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ wiandcvreekhmWebViewAppLinkRtowObfV34HashMix("ped") ^ wiandcvreekhmWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u209 = WebVieObfV33ShiftXowiandcvreekhmr(73, 24) ^ WebViwiandcvreekhmeObfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u210 = wiandcvreekhmWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ wiandcvreekhmWebViewAppLinkResoObfV32ByteFold("8di") ^ wiandcvreekhmWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u211 = wiandcvreekhmWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ wiandcvreekhmWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ wiandcvreekhmWebViewAppLinkResoObfV31HashMix("25cd6") ^ wiandcvreekhmWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int wiandcvreekhmSinkAutoV30_u212 = wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int wiandcvreekhmSinkAutoV29_u213 = wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int wiandcvreekhmSinkAutoV28_u214 = WwiandcvreekhmebViewAObfV28Mix(12, 19) ^ WewiandcvreekhmbViewAObfV28Fold("webpri");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u215 = WebViewAppLinkResolverObfV27ClampMowiandcvreekhmd(49, 41) ^ WebViwiandcvreekhmewAppLinkResolverObfV27ShiftXor(29, 7) ^ WebViewAppLinkwiandcvreekhmResolverObfV27ByteFold("nk") ^ WebViewAppLinkReswiandcvreekhmolverObfV27HashMix("trz");

    @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u216 = WebViewAppLinkResolvewiandcvreekhmrObfV26ClampMod(35, 23) ^ WebViwiandcvreekhmewAppLinkResolverObfV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u217 = WebViewAppLinkResolwiandcvreekhmverObfV25ByteFold("ke") ^ WebViewAppLinkwiandcvreekhmResolverObfV25HashMix("v4") ^ WebViewAppLinkReswiandcvreekhmolverObfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u218 = WebViewApwiandcvreekhmpLinkResolverObfV24ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV2wiandcvreekhm4ByteFold("5zfqz") ^ WebViewAppLinkResolvewiandcvreekhmrObfV24HashMix("8s5") ^ WebViwiandcvreekhmewAppLinkResolverObfV24SumOdds(new int[]{38, 86, 59});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u219 = WebViewAppLinkResolverwiandcvreekhmObfV22ShiftXor(23, 16);

          @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u220 = WebViewiandcvreekhmwAppLinkResolverObfV21ByteFold("8h29") ^ WebViewAwiandcvreekhmppLinkResolverObfV21HashMix("72") ^ WebViewAppLinkResolverwiandcvreekhmObfV21SumOdds(new int[]{10, 10, 21});
          
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u221 = WebViewAppLinkResolverObfV20HashMwiandcvreekhmix("svk") ^ WebViewAppLinkResowiandcvreekhmlverObfV20SumOdds(new int[]{7, 26, 22});
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u222 = WebViewAppLwiandcvreekhminkResolverObfV19ByteFold("zgzn") ^ WebViewAppLinkResolverObfV19HashwiandcvreekhmMix("8e");
    @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u223 = WebViewAppLinkResolverObfV18HaswiandcvreekhmhMix("7v8");
    @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u224 = WebViewiandcvreekhmwAppLinkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17ClwiandcvreekhmampMod(18, 79);
    List<Map<String, Object>> result = (List<Map<String, Object>>) map.get(key);
    if (result == null) {
      return Collections.emptyList();
    }
    return result;
  }

  @SuppressWarnings("unchecked")
  private static AwiandcvreekhmppLink makeAppwiandcvreekhmLinkFromAlData(Map<String, Object> appLinkDict, Uri destination) {
        int wiandcvreekhmSinkAutoV40_3 = wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Mix(12, 19) ^ wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Fold("wewian");
        int wiandcvreekhmSinkAutoV39_3 = wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Mix(13, 20) ^ wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Fold("webvie");
        int wiandcvreekhmSinkAutoV38_4 = wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Mix(17, 24) ^ wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Fold("webvie");
        int wiandcvreekhmSinkAutoV37_u225 = wiandcvreekhmWebViewApwiandcvreekhmpObfV37Mix(14, 21) ^ wiandcvreekhmWebViewApwiandcvreekhmpObfV37Fold("webvie");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV36_u226 = wiandcvreekhmWebViewAppLinkfjluObfV36SumOdds(new int[]{20, 23, 6});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u227 = wiandcvreekhmWebViewAppLinkroyaObfV35ByteFold("onohcb") ^ wiandcvreekhmWebViewAppLinkroyaObfV35HashMix("9m9e") ^ wiandcvreekhmWebViewAppLinkroyaObfV35SumOdds(new int[]{22, 33, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u228 = wiandcvreekhmWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ wiandcvreekhmWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ wiandcvreekhmWebViewAppLinkRtowObfV34HashMix("ped") ^ wiandcvreekhmWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u229 = WebVieObfV33ShiftXowiandcvreekhmr(73, 24) ^ WebViwiandcvreekhmeObfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u230 = wiandcvreekhmWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ wiandcvreekhmWebViewAppLinkResoObfV32ByteFold("8di") ^ wiandcvreekhmWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u231 = wiandcvreekhmWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ wiandcvreekhmWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ wiandcvreekhmWebViewAppLinkResoObfV31HashMix("25cd6") ^ wiandcvreekhmWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int wiandcvreekhmSinkAutoV30_u232 = wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int wiandcvreekhmSinkAutoV29_u233 = wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int wiandcvreekhmSinkAutoV28_u234 = WwiandcvreekhmebViewAObfV28Mix(12, 19) ^ WewiandcvreekhmbViewAObfV28Fold("webpri");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u235 = WebViewAppLinkResolverObfV27ClampMowiandcvreekhmd(49, 41) ^ WebViwiandcvreekhmewAppLinkResolverObfV27ShiftXor(29, 7) ^ WebViewAppLinkwiandcvreekhmResolverObfV27ByteFold("nk") ^ WebViewAppLinkReswiandcvreekhmolverObfV27HashMix("trz");

    @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u236 = WebViewAppLinkResolvewiandcvreekhmrObfV26ClampMod(35, 23) ^ WebViwiandcvreekhmewAppLinkResolverObfV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u237 = WebViewAppLinkResolwiandcvreekhmverObfV25ByteFold("ke") ^ WebViewAppLinkwiandcvreekhmResolverObfV25HashMix("v4") ^ WebViewAppLinkReswiandcvreekhmolverObfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u238 = WebViewApwiandcvreekhmpLinkResolverObfV24ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV2wiandcvreekhm4ByteFold("5zfqz") ^ WebViewAppLinkResolvewiandcvreekhmrObfV24HashMix("8s5") ^ WebViwiandcvreekhmewAppLinkResolverObfV24SumOdds(new int[]{38, 86, 59});
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u239 = WebViewAppLinkRewiandcvreekhmsolverObfV23ByteFold("zhhf");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u240 = WebViewAppLinkResolverwiandcvreekhmObfV22ShiftXor(23, 16);

          @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u241 = WebViewiandcvreekhmwAppLinkResolverObfV21ByteFold("8h29") ^ WebViewAwiandcvreekhmppLinkResolverObfV21HashMix("72") ^ WebViewAppLinkResolverwiandcvreekhmObfV21SumOdds(new int[]{10, 10, 21});
          
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u242 = WebViewAppLinkResolverObfV20HashMwiandcvreekhmix("svk") ^ WebViewAppLinkResowiandcvreekhmlverObfV20SumOdds(new int[]{7, 26, 22});
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u243 = WebViewAppLwiandcvreekhminkResolverObfV19ByteFold("zgzn") ^ WebViewAppLinkResolverObfV19HashwiandcvreekhmMix("8e");
    @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u244 = WebViewAppLinkResolverObfV18HaswiandcvreekhmhMix("7v8");
    @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u245 = WebViewiandcvreekhmwAppLinkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17ClwiandcvreekhmampMod(18, 79);
    List<AwiandcvreekhmppLink.Target> targets = new ArrayList<AwiandcvreekhmppLink.Target>();
    List<Map<String, Object>> platformMapList =
            (List<Map<String, Object>>) appLinkDict.get(KEY_ANDROID);
    if (platformMapList == null) {
      platformMapList = Collections.emptyList();
    }
    for (Map<String, Object> platformMap : platformMapList) {
      List<Map<String, Object>> urls = getAlwiandcvreekhmList(platformMap, KEY_URL);
      List<Map<String, Object>> packages = getAlwiandcvreekhmList(platformMap, KEY_PACKAGE);
      List<Map<String, Object>> classes = getAlwiandcvreekhmList(platformMap, KEY_CLASS);
      List<Map<String, Object>> appNames = getAlwiandcvreekhmList(platformMap, KEY_APP_NAME);

      int maxCount = Math.max(urls.size(),
              Math.max(packages.size(), Math.max(classes.size(), appNames.size())));
      for (int i = 0; i < maxCount; i++) {
        String urlString = (String) (urls.size() > i ?
                urls.get(i).get(KEY_AL_VALUE) : null);
        Uri url = tryCwiandcvreekhmreateUrl(urlString);
        String packageName = (String) (packages.size() > i ?
                packages.get(i).get(KEY_AL_VALUE) : null);
        String className = (String) (classes.size() > i ?
                classes.get(i).get(KEY_AL_VALUE) : null);
        String appName = (String) (appNames.size() > i ?
                appNames.get(i).get(KEY_AL_VALUE) : null);
        AwiandcvreekhmppLink.Target target = new AwiandcvreekhmppLink.Target(packageName, className, url, appName);
        targets.add(target);
      }
    }

    Uri webUrl = destination;
    List<Map<String, Object>> webMapList = (List<Map<String, Object>>) appLinkDict.get(KEY_WEB);
    if (webMapList != null && webMapList.size() > 0) {
      Map<String, Object> webMap = webMapList.get(0);
      List<Map<String, Object>> urls = (List<Map<String, Object>>) webMap.get(KEY_WEB_URL);
      List<Map<String, Object>> shouldFallbacks =
              (List<Map<String, Object>>) webMap.get(KEY_SHOULD_FALLBACK);
      if (shouldFallbacks != null && shouldFallbacks.size() > 0) {
        String shouldFallbackString = (String) shouldFallbacks.get(0).get(KEY_AL_VALUE);
        if (Arrays.asList("no", "false", "0").contains(shouldFallbackString.toLowerCase())) {
          webUrl = null;
        }
      }
      if (webUrl != null && urls != null && urls.size() > 0) {
        String webUrlString = (String) urls.get(0).get(KEY_AL_VALUE);
        webUrl = tryCwiandcvreekhmreateUrl(webUrlString);
      }
    }
    return new AwiandcvreekhmppLink(destination, targets, webUrl);
  }

  private static Uri tryCwiandcvreekhmreateUrl(String urlString) {
        int wiandcvreekhmSinkAutoV40_2 = wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Mix(12, 19) ^ wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Fold("wewian");
        int wiandcvreekhmSinkAutoV39_2 = wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Mix(13, 20) ^ wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Fold("webvie");
        int wiandcvreekhmSinkAutoV38_3 = wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Mix(17, 24) ^ wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Fold("webvie");
        int wiandcvreekhmSinkAutoV37_u246 = wiandcvreekhmWebViewApwiandcvreekhmpObfV37Mix(14, 21) ^ wiandcvreekhmWebViewApwiandcvreekhmpObfV37Fold("webvie");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV36_u247 = wiandcvreekhmWebViewAppLinkfjluObfV36SumOdds(new int[]{20, 23, 6});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u248 = wiandcvreekhmWebViewAppLinkroyaObfV35ByteFold("onohcb") ^ wiandcvreekhmWebViewAppLinkroyaObfV35HashMix("9m9e") ^ wiandcvreekhmWebViewAppLinkroyaObfV35SumOdds(new int[]{22, 33, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u249 = wiandcvreekhmWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ wiandcvreekhmWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ wiandcvreekhmWebViewAppLinkRtowObfV34HashMix("ped") ^ wiandcvreekhmWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u250 = WebVieObfV33ShiftXowiandcvreekhmr(73, 24) ^ WebViwiandcvreekhmeObfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u251 = wiandcvreekhmWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ wiandcvreekhmWebViewAppLinkResoObfV32ByteFold("8di") ^ wiandcvreekhmWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u252 = wiandcvreekhmWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ wiandcvreekhmWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ wiandcvreekhmWebViewAppLinkResoObfV31HashMix("25cd6") ^ wiandcvreekhmWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int wiandcvreekhmSinkAutoV30_u253 = wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int wiandcvreekhmSinkAutoV29_u254 = wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int wiandcvreekhmSinkAutoV28_u255 = WwiandcvreekhmebViewAObfV28Mix(12, 19) ^ WewiandcvreekhmbViewAObfV28Fold("webpri");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u256 = WebViewAppLinkResolverObfV27ClampMowiandcvreekhmd(49, 41) ^ WebViwiandcvreekhmewAppLinkResolverObfV27ShiftXor(29, 7) ^ WebViewAppLinkwiandcvreekhmResolverObfV27ByteFold("nk") ^ WebViewAppLinkReswiandcvreekhmolverObfV27HashMix("trz");

    @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u257 = WebViewAppLinkResolvewiandcvreekhmrObfV26ClampMod(35, 23) ^ WebViwiandcvreekhmewAppLinkResolverObfV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u258 = WebViewAppLinkResolwiandcvreekhmverObfV25ByteFold("ke") ^ WebViewAppLinkwiandcvreekhmResolverObfV25HashMix("v4") ^ WebViewAppLinkReswiandcvreekhmolverObfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u259 = WebViewApwiandcvreekhmpLinkResolverObfV24ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV2wiandcvreekhm4ByteFold("5zfqz") ^ WebViewAppLinkResolvewiandcvreekhmrObfV24HashMix("8s5") ^ WebViwiandcvreekhmewAppLinkResolverObfV24SumOdds(new int[]{38, 86, 59});
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u260 = WebViewAppLinkRewiandcvreekhmsolverObfV23ByteFold("zhhf");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u261 = WebViewAppLinkResolverwiandcvreekhmObfV22ShiftXor(23, 16);

          @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u262 = WebViewiandcvreekhmwAppLinkResolverObfV21ByteFold("8h29") ^ WebViewAwiandcvreekhmppLinkResolverObfV21HashMix("72") ^ WebViewAppLinkResolverwiandcvreekhmObfV21SumOdds(new int[]{10, 10, 21});
          
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u263 = WebViewAppLinkResolverObfV20HashMwiandcvreekhmix("svk") ^ WebViewAppLinkResowiandcvreekhmlverObfV20SumOdds(new int[]{7, 26, 22});
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u264 = WebViewAppLwiandcvreekhminkResolverObfV19ByteFold("zgzn") ^ WebViewAppLinkResolverObfV19HashwiandcvreekhmMix("8e");
    @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u265 = WebViewAppLinkResolverObfV18HaswiandcvreekhmhMix("7v8");
    @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u266 = WebViewiandcvreekhmwAppLinkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17ClwiandcvreekhmampMod(18, 79);
    if (urlString == null) {
      return null;
    }
    return Uri.parse(urlString);
  }

  private static String readFromConnwiandcvreekhmection(URLConnection connection) throws IOException {
        int wiandcvreekhmSinkAutoV40_1 = wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Mix(12, 19) ^ wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Fold("wewian");
        int wiandcvreekhmSinkAutoV39_1 = wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Mix(13, 20) ^ wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Fold("webvie");
        int wiandcvreekhmSinkAutoV38_2 = wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Mix(17, 24) ^ wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Fold("webvie");
        int wiandcvreekhmSinkAutoV37_u267 = wiandcvreekhmWebViewApwiandcvreekhmpObfV37Mix(14, 21) ^ wiandcvreekhmWebViewApwiandcvreekhmpObfV37Fold("webvie");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV36_u268 = wiandcvreekhmWebViewAppLinkfjluObfV36SumOdds(new int[]{20, 23, 6});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u269 = wiandcvreekhmWebViewAppLinkroyaObfV35ByteFold("onohcb") ^ wiandcvreekhmWebViewAppLinkroyaObfV35HashMix("9m9e") ^ wiandcvreekhmWebViewAppLinkroyaObfV35SumOdds(new int[]{22, 33, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u270 = wiandcvreekhmWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ wiandcvreekhmWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ wiandcvreekhmWebViewAppLinkRtowObfV34HashMix("ped") ^ wiandcvreekhmWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u271 = WebVieObfV33ShiftXowiandcvreekhmr(73, 24) ^ WebViwiandcvreekhmeObfV33ByteFold("l0jol0");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u272 = wiandcvreekhmWebViewAppLinkResoObfV32ShiftXor(22, 65) ^ wiandcvreekhmWebViewAppLinkResoObfV32ByteFold("8di") ^ wiandcvreekhmWebViewAppLinkResoObfV32HashMix("43");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u273 = wiandcvreekhmWebViewAppLinkResoObfV31ShiftXor(39, 46) ^ wiandcvreekhmWebViewAppLinkResoObfV31ByteFold("l4po3g") ^ wiandcvreekhmWebViewAppLinkResoObfV31HashMix("25cd6") ^ wiandcvreekhmWebViewAppLinkResoObfV31SumOdds(new int[]{28, 15, 6});
        int wiandcvreekhmSinkAutoV30_u274 = wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Mix(16, 23) ^ wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Fold("webvie");
        int wiandcvreekhmSinkAutoV29_u275 = wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Mix(12, 19) ^ wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Fold("webvie");
        int wiandcvreekhmSinkAutoV28_u276 = WwiandcvreekhmebViewAObfV28Mix(12, 19) ^ WewiandcvreekhmbViewAObfV28Fold("webpri");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u277 = WebViewAppLinkResolvewiandcvreekhmrObfV26ClampMod(35, 23) ^ WebViwiandcvreekhmewAppLinkResolverObfV26ShiftXor(22, 10);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u278 = WebViewAppLinkResolwiandcvreekhmverObfV25ByteFold("ke") ^ WebViewAppLinkwiandcvreekhmResolverObfV25HashMix("v4") ^ WebViewAppLinkReswiandcvreekhmolverObfV25SumOdds(new int[]{32, 39, 19});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u279 = WebViewApwiandcvreekhmpLinkResolverObfV24ShiftXor(32, 74) ^ WebViewAppLinkResolverObfV2wiandcvreekhm4ByteFold("5zfqz") ^ WebViewAppLinkResolvewiandcvreekhmrObfV24HashMix("8s5") ^ WebViwiandcvreekhmewAppLinkResolverObfV24SumOdds(new int[]{38, 86, 59});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u280 = WebViewAppLinkResolverwiandcvreekhmObfV22ShiftXor(23, 16);

    @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u281 = WebViewAppLinkResolverObfV20HashMwiandcvreekhmix("svk") ^ WebViewAppLinkResowiandcvreekhmlverObfV20SumOdds(new int[]{7, 26, 22});
    @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u282 = WebViewAppLinkResolverObfV18HaswiandcvreekhmhMix("7v8");
    @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u283 = WebViewiandcvreekhmwAppLinkResolverObfV17SumOdds(new int[]{21, 6, 23}) ^ WebViewAppLinkResolverObfV17ClwiandcvreekhmampMod(18, 79);
    InputStream stream;
    if (connection instanceof HttpURLConnection) {
      HttpURLConnection httpConnection = (HttpURLConnection) connection;
      try {
        stream = connection.getInputStream();
      } catch (Exception e) {
        stream = httpConnection.getErrorStream();
      }
    } else {
      stream = connection.getInputStream();
    }
    try {
      ByteArrayOutputStream output = new ByteArrayOutputStream();
      byte[] buffer = new byte[1024];
      int read = 0;
      while ((read = stream.read(buffer)) != -1) {
        output.write(buffer, 0, read);
      }
      String charset = connection.getContentEncoding();
      if (charset == null) {
        String mimeType = connection.getContentType();
        String[] parts = mimeType.split(";");
        for (String part : parts) {
          part = part.trim();
          if (part.startsWith("charset=")) {
            charset = part.substring("charset=".length());
            break;
          }
        }
        if (charset == null) {
          charset = "UTF-8";
        }
      }
      return new String(output.toByteArray(), charset);
    } finally {
      stream.close();
    }
  }

/* obfuscation-batch:v17 */
    private static int WebViewiandcvreekhmwAppLinkResolverObfV17SumOdds(int[] nums) {
        int acc = 64;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 11) % 411;
        }
        return acc;
    }

    private static int WebViewAppLinkResolverObfV17ClwiandcvreekhmampMod(int n, int m) {

        int span = (m % 54) + 5;
        int x = n % span;
        return x < 0 ? x + span : x;
    }

/* obfuscation-batch:v18 */
    private static int WebViewAppLinkResolverObfV18HaswiandcvreekhmhMix(String s) {
        int h = 10;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 4)) % 152;
        return h;
    }
/* obfuscation-batch:v19 */
    private static int WebViewAppLwiandcvreekhminkResolverObfV19ByteFold(String s) {
        int x = 49;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 17) ^ 155;
        return x & 60785;
    }

    private static int WebViewAppLinkResolverObfV19HashwiandcvreekhmMix(String s) {
        int h = 42;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 9)) % 781;
        return h;
    }

/* obfuscation-batch:v20 */
    private static int WebViewAppLinkResolverObfV20HashMwiandcvreekhmix(String s) {
        int h = 39;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 27)) % 559;
        return h;
    }

    private static int WebViewAppLinkResowiandcvreekhmlverObfV20SumOdds(int[] nums) {
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV36_u284 = wiandcvreekhmWebViewAppLinkfjluObfV36SumOdds(new int[]{20, 23, 6});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u285 = wiandcvreekhmWebViewAppLinkroyaObfV35ByteFold("onohcb") ^ wiandcvreekhmWebViewAppLinkroyaObfV35HashMix("9m9e") ^ wiandcvreekhmWebViewAppLinkroyaObfV35SumOdds(new int[]{22, 33, 16});
        int acc = 77;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 29) % 131;
        }
        return acc;
    }

/* obfuscation-batch:v21 */
    private static int WebViewiandcvreekhmwAppLinkResolverObfV21ByteFold(String s) {
        int x = 23;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 27) & 65535;
        return x;
    }

    private static int WebViewAwiandcvreekhmppLinkResolverObfV21HashMix(String s) {
        int wiandcvreekhmSinkAutoV37_u286 = wiandcvreekhmWebViewApwiandcvreekhmpObfV37Mix(14, 21) ^ wiandcvreekhmWebViewApwiandcvreekhmpObfV37Fold("webvie");
        int h = 79;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 14)) % 739;
        return h;
    }

    private static int WebViewAppLinkResolverwiandcvreekhmObfV21SumOdds(int[] nums) {
        int acc = 81;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 21) % 207;
        }
        return acc;
    }

/* obfuscation-batch:v22 */
    private static int WebViewAppLinkResolverwiandcvreekhmObfV22ShiftXor(int n, int k) {
        int x = (n ^ k) << 6;
        return (x ^ 84) & 16072;
    }

    /* obfuscation-batch:v23 */
    private static int WebViewAppLinkRewiandcvreekhmsolverObfV23ByteFold(String s) {
        int x = 56;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 16) & 47746;
        return x;
    }
    @SuppressWarnings("unused") private static final int wiandcvreekhmWebViewAppLinkResolverSinkV23Boot_u287 = WebViewAppLinkRewiandcvreekhmsolverObfV23ByteFold("zhhf");

/* obfuscation-batch:v24 */
private static int WebViewApwiandcvreekhmpLinkResolverObfV24ShiftXor(int n, int k) {
  int x = (n ^ k) << 1;
  return (x ^ 17) & 47146;
}

private static int WebViewAppLinkResolverObfV2wiandcvreekhm4ByteFold(String s) {
  int x = 10;
  for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 22) & 17751;
  return x;
}

private static int WebViewAppLinkResolvewiandcvreekhmrObfV24HashMix(String s) {
  int h = 91;
  for (int i = 0; i < s.length(); i++) h = (h + (s.charAt(i) * 33)) % 153;
  return h;
}

private static int WebViwiandcvreekhmewAppLinkResolverObfV24SumOdds(int[] nums) {

  int acc = 67;
  for (int n : nums) {
    if ((n & 1) == 0) continue;
    acc = (acc + n * 4) % 740;
  }
  return acc;
}


/* obfuscation-batch:v25 */
private static int WebViewAppLinkResolwiandcvreekhmverObfV25ByteFold(String s) {
        int wiandcvreekhmSinkAutoV37_u288 = wiandcvreekhmWebViewApwiandcvreekhmpObfV37Mix(14, 21) ^ wiandcvreekhmWebViewApwiandcvreekhmpObfV37Fold("webvie");
  int x = 52;
  for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 13) & 4051;
  return x;
}

private static int WebViewAppLinkwiandcvreekhmResolverObfV25HashMix(String s) {
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV36_u289 = wiandcvreekhmWebViewAppLinkfjluObfV36SumOdds(new int[]{20, 23, 6});
  int h = 54;
  for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 3)) % 484;
  return h;
}

private static int WebViewAppLinkReswiandcvreekhmolverObfV25SumOdds(int[] nums) {
  int acc = 83;
  for (int n : nums) {
    if ((n & 1) == 0) continue;
    acc = (acc + n * 27) % 613;
  }
  return acc;
}


/* obfuscation-batch:v26 */
private static int WebViewAppLinkResolvewiandcvreekhmrObfV26ClampMod(int n, int m) {
    int span = (m % 61) + 7;
    int x = n % span;
    return x < 0 ? x + span : x;
}

private static int WebViwiandcvreekhmewAppLinkResolverObfV26ShiftXor(int n, int k) {
    int x = (n ^ k) << 2;
    return (x ^ 12) & 12681;
}

  /* obfuscation-batch:v27 */
  private static int WebViewAppLinkResolverObfV27ClampMowiandcvreekhmd(int n, int m) {
      int span = (m % 55) + 5;
      int x = n % span;
      return x < 0 ? x + span : x;
    }
  private static int WebViwiandcvreekhmewAppLinkResolverObfV27ShiftXor(int n, int k) {
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV36_u290 = wiandcvreekhmWebViewAppLinkfjluObfV36SumOdds(new int[]{20, 23, 6});
      int x = (n ^ k) << 2;
      return (x ^ 173) & 40410;
    }
  private static int WebViewAppLinkwiandcvreekhmResolverObfV27ByteFold(String s) {
      int x = 37;
      for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 6) & 46272;
      return x;
    }
  private static int WebViewAppLinkReswiandcvreekhmolverObfV27HashMix(String s) {
      int h = 59;
      for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 27)) % 57;
      return h;
    }

    private static int WwiandcvreekhmebViewAObfV28Mix(int a, int b) {
        int wiandcvreekhmSinkAutoV38_1 = wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Mix(17, 24) ^ wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Fold("webvie");
        int wiandcvreekhmSinkAutoV37_u291 = wiandcvreekhmWebViewApwiandcvreekhmpObfV37Mix(14, 21) ^ wiandcvreekhmWebViewApwiandcvreekhmpObfV37Fold("webvie");
        int base = 45;
        int denom = Math.abs(b % 97) + 3;
        return ((a + base) % denom) ^ (base & 15);
    }
    private static int WewiandcvreekhmbViewAObfV28Fold(String text) {
        int wiandcvreekhmSinkAutoV37_u292 = wiandcvreekhmWebViewApwiandcvreekhmpObfV37Mix(14, 21) ^ wiandcvreekhmWebViewApwiandcvreekhmpObfV37Fold("webvie");
        int acc = 45;
        for (int i = 0; i < text.length(); i++) acc = (acc * 33 + text.charAt(i)) & 0x7fffffff;
        return acc;
    }

    private static int wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Mix(int a, int b) {
        int base = 45;
        int denom = Math.abs(b % 97) + 3;
        return ((a + base) % denom) ^ (base & 15);
    }
    private static int wiandcvreekhmWebViewAppLipzurisymgeqmgallObfV29Fold(String text) {
        int acc = 45;
        for (int i = 0; i < text.length(); i++) acc = (acc * 33 + text.charAt(i)) & 0x7fffffff;
        return acc;
    }

    private static int wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Mix(int a, int b) {
        int base = 49;
        int denom = Math.abs(b % 97) + 3;
        return ((a + base) % denom) ^ (base & 15);
    }
    private static int wiandcvreekhmWebViewAppLinkResolvedgpnrisObfV30Fold(String text) {
        int acc = 49;
        for (int i = 0; i < text.length(); i++) acc = (acc * 33 + text.charAt(i)) & 0x7fffffff;
        return acc;
    }

    /* obfuscation-batch:v31 */
    @SuppressWarnings("unused")
    private static int wiandcvreekhmWebViewAppLinkResoObfV31ShiftXor(int n, int k) {
        int x = (n ^ k) << 7;
        return (x ^ 163) & 37437;
    }

    @SuppressWarnings("unused")
    private static int wiandcvreekhmWebViewAppLinkResoObfV31ByteFold(String s) {
        int x = 44;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 5) & 56175;
        return x;
    }

    @SuppressWarnings("unused")
    private static int wiandcvreekhmWebViewAppLinkResoObfV31HashMix(String s) {
        int h = 27;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 40)) % 720;
        return h;
    }

    @SuppressWarnings("unused")
    private static int wiandcvreekhmWebViewAppLinkResoObfV31SumOdds(int[] nums) {
        int acc = 71;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 25) % 736;
        }
        return acc;
    }

    /* obfuscation-batch:v32 */
    @SuppressWarnings("unused")
    private static int wiandcvreekhmWebViewAppLinkResoObfV32ShiftXor(int n, int k) {
        int x = (n ^ k) << 1;
        return (x ^ 74) & 34303;
    }

    @SuppressWarnings("unused")
    private static int wiandcvreekhmWebViewAppLinkResoObfV32ByteFold(String s) {
        int x = 78;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 15) & 54693;
        return x;
    }

    @SuppressWarnings("unused")
    private static int wiandcvreekhmWebViewAppLinkResoObfV32HashMix(String s) {
        int h = 7;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 12)) % 855;
        return h;
    }

    /* obfuscation-batch:v33 */
    @SuppressWarnings("unused")
    private static int WebVieObfV33ShiftXowiandcvreekhmr(int n, int k) {
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV36_u293 = wiandcvreekhmWebViewAppLinkfjluObfV36SumOdds(new int[]{20, 23, 6});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u294 = wiandcvreekhmWebViewAppLinkroyaObfV35ByteFold("onohcb") ^ wiandcvreekhmWebViewAppLinkroyaObfV35HashMix("9m9e") ^ wiandcvreekhmWebViewAppLinkroyaObfV35SumOdds(new int[]{22, 33, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u295 = wiandcvreekhmWebViewAppLinkRtowObfV34ShiftXor(75, 18) ^ wiandcvreekhmWebViewAppLinkRtowObfV34ByteFold("pcla3") ^ wiandcvreekhmWebViewAppLinkRtowObfV34HashMix("ped") ^ wiandcvreekhmWebViewAppLinkRtowObfV34SumOdds(new int[]{39, 22, 1});
        int x = (n ^ k) << 2;
        return (x ^ 105) & 4742;
    }

    @SuppressWarnings("unused")
    private static int WebViwiandcvreekhmeObfV33ByteFold(String s) {
        int x = 5;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 4) & 57594;
        return x;
    }

    /* obfuscation-batch:v34 */
    @SuppressWarnings("unused")
    private static int wiandcvreekhmWebViewAppLinkRtowObfV34ShiftXor(int n, int k) {
        int x = (n ^ k) << 5;
        return (x ^ 191) & 4736;
    }

    @SuppressWarnings("unused")
    private static int wiandcvreekhmWebViewAppLinkRtowObfV34ByteFold(String s) {
        int x = 22;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 5) & 34382;
        return x;
    }

    @SuppressWarnings("unused")
    private static int wiandcvreekhmWebViewAppLinkRtowObfV34HashMix(String s) {
        int h = 20;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 18)) % 875;
        return h;
    }

    @SuppressWarnings("unused")
    private static int wiandcvreekhmWebViewAppLinkRtowObfV34SumOdds(int[] nums) {
        int acc = 21;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 19) % 490;
        }
        return acc;
    }

    /* obfuscation-batch:v35 */
    @SuppressWarnings("unused")
    private static int wiandcvreekhmWebViewAppLinkroyaObfV35ByteFold(String s) {
        int x = 40;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 36) & 32763;
        return x;
    }

    @SuppressWarnings("unused")
    private static int wiandcvreekhmWebViewAppLinkroyaObfV35HashMix(String s) {
        int h = 7;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 21)) % 268;
        return h;
    }

    @SuppressWarnings("unused")
    private static int wiandcvreekhmWebViewAppLinkroyaObfV35SumOdds(int[] nums) {
        int acc = 57;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 36) % 728;
        }
        return acc;
    }

    /* obfuscation-batch:v36 */
    @SuppressWarnings("unused")
    private static int wiandcvreekhmWebViewAppLinkfjluObfV36SumOdds(int[] nums) {
        int acc = 75;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 16) % 246;
        }
        return acc;
    }

    private static int wiandcvreekhmWebViewApwiandcvreekhmpObfV37Mix(int a, int b) {
        int base = 47;
        int denom = Math.abs(b % 97) + 3;
        return ((a + base) % denom) ^ (base & 15);
    }
    private static int wiandcvreekhmWebViewApwiandcvreekhmpObfV37Fold(String text) {
        int acc = 47;
        for (int i = 0; i < text.length(); i++) acc = (acc * 33 + text.charAt(i)) & 0x7fffffff;
        return acc;
    }

    private static int wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Mix(int a, int b) {
        int base = 50;
        int denom = Math.abs(b % 97) + 3;
        return ((a + base) % denom) ^ (base & 15);
    }
    private static int wiandcvreekhmWebViewAppLinkResffrozenccatObfV38Fold(String text) {
        int acc = 50;
        for (int i = 0; i < text.length(); i++) acc = (acc * 33 + text.charAt(i)) & 0x7fffffff;
        return acc;
    }

    private static int wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Mix(int a, int b) {
        int base = 46;
        int denom = Math.abs(b % 97) + 3;
        return ((a + base) % denom) ^ (base & 15);
    }
    private static int wiandcvreekhmWebViewAppLinkRdsrqagohnluceObfV39Fold(String text) {
        int acc = 46;
        for (int i = 0; i < text.length(); i++) acc = (acc * 33 + text.charAt(i)) & 0x7fffffff;
        return acc;
    }

    private static int wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Mix(int a, int b) {
        int base = 45;
        int denom = Math.abs(b % 97) + 3;
        return ((a + base) % denom) ^ (base & 15);
    }
    private static int wiandcvreekhmWewiandcvreekhmbViewAppLinkRObfV40Fold(String text) {
        int acc = 45;
        for (int i = 0; i < text.length(); i++) acc = (acc * 33 + text.charAt(i)) & 0x7fffffff;
        return acc;
    }
}