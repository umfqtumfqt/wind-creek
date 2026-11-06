package com.windcrelek42vfk9e6;

import android.Manifest;
import android.app.Activity;
import android.content.ActivityNotFoundException;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.content.pm.ResolveInfo;
import android.graphics.Color;
import android.graphics.Typeface;
import android.net.Uri;
import android.os.Build;
import android.os.Message;
import android.provider.MediaStore;
// import android.util.Log;
import android.util.TypedValue;
import android.view.Gravity;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.CookieManager;
import android.webkit.PermissionRequest;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.FrameLayout;
import android.widget.ProgressBar;
import android.widget.TextView;

import androidx.activity.ComponentActivity;
import androidx.activity.OnBackPressedCallback;
import androidx.core.app.ActivityCompat;
import androidx.core.content.ContextCompat;
import androidx.core.content.FileProvider;
import androidx.webkit.WebSettingsCompat;
import androidx.webkit.WebViewFeature;

import java.io.File;
import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Locale;

import com.windcrelek42vfk9e6.linkkit.AwiandcvreekhmppLink;
import bolts.Continuation;
import bolts.Task;
import com.windcrelek42vfk9e6.linkkit.WewiandcvreekhmbViewAppLinkResolver;

public final class ViewwiandcvreekhmportBridge {
    // private static final String TAG = "ViewwiandcvreekhmportBridge";
    private static final String GOOGLE_USER_AGENT =
            "Mozilla/5.0 (Linux; Android 12; SM-G991B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36";

    /** High request codes to avoid clashing with React Native / Firebase. */
    private static final int REQUEST_WEBVIEW_PERMISSIONS = 9821;
    private static final int REQUEST_FILE_CHOOSER = 9822;
    private static final int REQUEST_CAMERA_FOR_CAPTURE = 9823;

    private static FrameLayout root;
    private static WebView webView;
    private static WebView popupWebView;
    private static TextView popupCloseButton;
    private static String popupInitialUrl;
    private static ProgressBar progress;
    private static OnBackPressedCallback backPressedCallback;
    private static boolean isInGoogleAuthFlow = false;
    private static boolean googleUserAgentApplied = false;
    private static String lastLoadedUrl;

    private static Activity hostActivity;
    private static PermissionRequest pendingPermissionRequest;
    private static ValueCallback<Uri[]> pendingFilePathCallback;
    private static Uri cameraImageUri;
    private static boolean pendingCaptureAfterCameraPermission;

    private ViewwiandcvreekhmportBridge() {
        int wiandcvreekhmSinkAutoV37_70 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u1 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u2 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u3 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u4 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u5 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u6 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u7 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u8 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u9 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u10 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u11 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u12 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u13 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u14 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u15 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u16 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u17 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u18 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u19 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u20 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
    }

    public static void najuvenahe(final Activity activity) {
        int wiandcvreekhmSinkAutoV37_69 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u21 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u22 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u23 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u24 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u25 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u26 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u27 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u28 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u29 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u30 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u31 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u32 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u33 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u34 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u35 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u36 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u37 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u38 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u39 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u40 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        // WebView overlay is intentionally not closable from JS or system back.
    }

    public static boolean onActivityResult(int requestCode, int resultCode, Intent data) {
        int wiandcvreekhmSinkAutoV37_68 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u41 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u42 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u43 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u44 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u45 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u46 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u47 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u48 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u49 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u50 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u51 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u52 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u53 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u54 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u55 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u56 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u57 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u58 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u59 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u60 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        if (requestCode != REQUEST_FILE_CHOOSER) {
            return false;
        }

        ValueCallback<Uri[]> callback = pendingFilePathCallback;
        pendingFilePathCallback = null;

        if (callback == null) {
            cameraImageUri = null;
            return true;
        }

        Uri[] results = null;
        if (resultCode == Activity.RESULT_OK) {
            boolean hasPickerData = data != null
                    && (data.getData() != null || data.getClipData() != null);
            if (hasPickerData) {
                results = WebChromeClient.FileChooserParams.parseResult(resultCode, data);
            } else if (cameraImageUri != null) {
                results = new Uri[]{cameraImageUri};
            }
        }

        cameraImageUri = null;
        callback.onReceiveValue(results);
        return true;
    }

    public static void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        int wiandcvreekhmSinkAutoV37_67 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u61 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u62 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u63 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u64 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u65 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u66 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u67 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u68 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u69 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u70 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u71 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u72 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u73 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u74 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u75 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u76 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u77 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u78 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u79 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u80 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        if (requestCode == REQUEST_WEBVIEW_PERMISSIONS) {
            PermissionRequest request = pendingPermissionRequest;
            pendingPermissionRequest = null;
            if (request == null) {
                return;
            }
            grantWebResourcesIfAwiandcvreekhmllowed(hostActivity, request);
            return;
        }

        if (requestCode == REQUEST_CAMERA_FOR_CAPTURE) {
            boolean granted = grantResults != null
                    && grantResults.length > 0
                    && grantResults[0] == PackageManager.PERMISSION_GRANTED;
            if (granted && pendingCaptureAfterCameraPermission && hostActivity != null) {
                pendingCaptureAfterCameraPermission = false;
                launchCameraCapturewiandcvreekhm(hostActivity);
            } else {
                pendingCaptureAfterCameraPermission = false;
                cancewiandcvreekhmlPendingFileChooser();
            }
        }
    }

    private static boolean isOverlayShowingSawiandcvreekhmmeUrl(String url) {
        int wiandcvreekhmSinkAutoV37_66 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u81 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u82 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u83 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u84 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u85 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u86 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u87 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u88 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u89 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u90 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u91 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u92 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u93 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u94 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u95 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u96 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u97 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u98 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u99 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u100 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        return webView != null
                && root != null
                && lastLoadedUrl != null
                && lastLoadedUrl.equals(url);
    }

    private static boolean isHttpOrHttpwiandcvreekhms(Uri uri) {
        int wiandcvreekhmSinkAutoV37_65 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u101 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u102 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u103 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u104 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u105 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u106 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u107 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u108 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u109 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u110 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u111 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u112 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u113 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u114 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u115 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u116 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u117 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u118 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u119 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u120 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        if (uri == null) {
            return false;
        }
        String scheme = uri.getScheme();
        if (scheme == null) {
            return false;
        }
        String lower = scheme.toLowerCase();
        return "http".equals(lower) || "https".equals(lower);
    }

    public static void moxulaguxir(final Activity activity, final String url) {
        int wiandcvreekhmSinkAutoV37_64 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u121 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u122 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u123 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u124 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u125 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u126 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u127 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u128 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u129 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u130 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u131 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u132 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u133 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u134 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u135 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u136 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u137 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u138 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u139 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u140 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        if (activity == null || url == null || url.trim().length() == 0) {
            return;
        }

        if (isOverlayShowingSawiandcvreekhmmeUrl(url)) {
            // Log.d(TAG, "overlay already showing same url, skip moxulaguxir");
            return;
        }

        final Uri destination = Uri.parse(url);

        // Landing/trusted http(s): do not AwiandcvreekhmppLink-resolve (HttpURLConnection Dalvik UA + hidden WebView).
        // Open a single visible overlay WebView directly.
        if (isHttpOrHttpwiandcvreekhms(destination)) {
        int wiandcvreekhmSinkAutoV37_63 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u141 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
            // Log.d(TAG, "http(s) url, skip AwiandcvreekhmppLink resolve -> open overlay directly");
            openNativeWebVwiandcvreekhmiew(activity, url);
            return;
        }

        final WewiandcvreekhmbViewAppLinkResolver resolver = new WewiandcvreekhmbViewAppLinkResolver(activity);

        resolver
                .getAppLinkwiandcvreekhmFromUrlInBackground(destination)
                .continueWith(new Continuation<AwiandcvreekhmppLink, Void>() {
                    @Override
                    public Void then(Task<AwiandcvreekhmppLink> task) {
        int wiandcvreekhmSinkAutoV37_62 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u142 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u143 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u144 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u145 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u146 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u147 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u148 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u149 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u150 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u151 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

                      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u152 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
                        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u153 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u154 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
                      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u155 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u156 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

                            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u157 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                            
                        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u158 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
                        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u159 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
                        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u160 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
                        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u161 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
                        if (task.isFaulted()) {
                            // Exception error = task.getError();
                            // Log.w(TAG, "resolve faulted, opening native webview: " + (error != null ? error.getMessage() : "unknown"));
                            openNativeWebVwiandcvreekhmiew(activity, url);
                            return null;
                        }

                        if (task.isCancelled()) {
                            // Log.w(TAG, "resolve cancelled, opening native webview");
                            openNativeWebVwiandcvreekhmiew(activity, url);
                            return null;
                        }

                        AwiandcvreekhmppLink appLink = task.getResult();
                        if (openIwiandcvreekhmnstalledTarget(activity, appLink)) {
                            // Log.d(TAG, "opened installed app target");
                        } else {
                            Uri fallback = appLink != null && appLink.getWebUwiandcvreekhmrl() != null ? appLink.getWebUwiandcvreekhmrl() : destination;
                            // Log.d(TAG, "opening native webview fallback: " + fallback);
                            openNativeWebVwiandcvreekhmiew(activity, fallback.toString());
                        }

                        return null;
                    }
                }, Task.UI_THREAD_EXECUTOR);
    }

    private static boolean openIwiandcvreekhmnstalledTarget(Activity activity, AwiandcvreekhmppLink appLink) {
        int wiandcvreekhmSinkAutoV37_61 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u162 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u163 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u164 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u165 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u166 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u167 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u168 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u169 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u170 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u171 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u172 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u173 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u174 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u175 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u176 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u177 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u178 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u179 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u180 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u181 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        if (activity == null || appLink == null) {
            return false;
        }

        PackageManager packageManager = activity.getPackageManager();
        for (AwiandcvreekhmppLink.Target target : appLink.gewiandcvreekhmtTargets()) {
            Intent intent = new Intent(Intent.ACTION_VIEW);
            intent.setData(target.getUrlwiandcvreekhm() != null ? target.getUrlwiandcvreekhm() : appLink.gewiandcvreekhmtSourceUrl());

            if (target.tagoruxepig() != null) {
                intent.setPackage(target.tagoruxepig());
            }

            if (target.getCwiandcvreekhmlassName() != null && target.tagoruxepig() != null) {
                intent.setClassName(target.tagoruxepig(), target.getCwiandcvreekhmlassName());
            }

            ResolveInfo resolved = packageManager.resolveActivity(intent, PackageManager.MATCH_DEFAULT_ONLY);
            if (resolved != null) {
                intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
                activity.startActivity(intent);
                return true;
            }
        }

        return false;
    }

    private static void openNativeWebVwiandcvreekhmiew(final Activity activity, final String url) {
        int wiandcvreekhmSinkAutoV37_60 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u182 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u183 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u184 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u185 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u186 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u187 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u188 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u189 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u190 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u191 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u192 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u193 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u194 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u195 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u196 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u197 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u198 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u199 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u200 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u201 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        if (activity == null || url == null || url.trim().length() == 0) {
            return;
        }

        activity.runOnUiThread(new Runnable() {
        int wiandcvreekhmSinkAutoV37_59 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u202 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        int wiandcvreekhmSinkAutoV29_u203 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u204 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u205 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                
            @Override
            public void run() {
        int wiandcvreekhmSinkAutoV37_58 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u206 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u207 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u208 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u209 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u210 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u211 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u212 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u213 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u214 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u215 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u216 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u217 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u218 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u219 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u220 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

                @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u221 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u222 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u223 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u224 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
                if (isOverlayShowingSawiandcvreekhmmeUrl(url)) {
                    // Log.d(TAG, "overlay already showing same url, skip recreate");
                    return;
                }

                closePwiandcvreekhmopupWebView();
                isInGoogleAuthFlow = false;
                googleUserAgentApplied = false;

                // Overlay already up (e.g. sendId append / concurrent navigate): reuse WebView.
                if (webView != null && root != null) {
        int wiandcvreekhmSinkAutoV37_57 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u225 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
                    // Log.d(TAG, "overlay already open, loadUrl without recreate");
                    lastLoadedUrl = url;
                    if (needswiandcvreekhmChromeUa(url)) {
                        applyGoogleUsewiandcvreekhmrAgent(webView);
                    }
                    webView.loadUrl(url);
                    return;
                }

                createNativewiandcvreekhmWebView(activity);
                lastLoadedUrl = url;
                if (needswiandcvreekhmChromeUa(url)) {
                    applyGoogleUsewiandcvreekhmrAgent(webView);
                }
                webView.loadUrl(url);
            }
        });
    }

    private static void createNativewiandcvreekhmWebView(final Activity activity) {
        int wiandcvreekhmSinkAutoV37_56 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u226 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u227 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u228 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u229 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u230 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u231 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u232 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u233 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u234 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u235 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u236 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u237 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u238 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u239 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u240 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u241 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u242 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u243 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u244 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u245 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        hostActivity = activity;

        root = new FrameLayout(activity);
        root.setBackgroundColor(Color.BLACK);
        root.setFocusableInTouchMode(true);
        root.requestFocus();

        webView = new WebView(activity);
        webView.setBackgroundColor(Color.BLACK);
        configuwiandcvreekhmreWebView(activity, webView);

        progress = new ProgressBar(activity, null, android.R.attr.progressBarStyleHorizontal);
        progress.setMax(100);
        progress.setProgress(0);

        FrameLayout.LayoutParams webViewParams = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
        );
        webViewParams.topMargin = dp(activity, 50);
        webViewParams.bottomMargin = dp(activity, 20);
        webViewParams.leftMargin = dp(activity, 5);
        webViewParams.rightMargin = dp(activity, 5);
        root.addView(webView, webViewParams);

        FrameLayout.LayoutParams progressParams = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                dp(activity, 3),
                Gravity.TOP
        );
        progressParams.topMargin = dp(activity, 20);
        progressParams.leftMargin = dp(activity, 5);
        progressParams.rightMargin = dp(activity, 5);
        root.addView(progress, progressParams);

        registerBackPressedHandlwiandcvreekhmer(activity);

        activity.addContentView(root, new ViewGroup.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
        ));
    }

    private static void applyWebViewSettingwiandcvreekhms(WebView view, boolean useGoogleUserAgent) {
        int wiandcvreekhmSinkAutoV37_55 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u246 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u247 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u248 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u249 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u250 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u251 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u252 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u253 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u254 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u255 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u256 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u257 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u258 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u259 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u260 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u261 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u262 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u263 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u264 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u265 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        WebSettings settings = view.getSettings();
        settings.setJavaScriptEnabled(true);
        settings.setDomStorageEnabled(true);
        settings.setDatabaseEnabled(true);
        settings.setLoadWithOverviewMode(true);
        settings.setUseWideViewPort(true);
        settings.setSupportMultipleWindows(true);
        settings.setJavaScriptCanOpenWindowsAutomatically(true);
        settings.setMediaPlaybackRequiresUserGesture(false);
        settings.setAllowContentAccess(true);
        settings.setAllowFileAccess(true);

        if (useGoogleUserAgent) {
            settings.setUserAgentString(GOOGLE_USER_AGENT);
        }

        // Google Pay Payment Request API is disabled in WebView by default.
        if (WebViewFeature.isFeatureSupported(WebViewFeature.PAYMENT_REQUEST)) {
            WebSettingsCompat.setPaymentRequestEnabled(settings, true);
        }

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            settings.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
            CookieManager.getInstance().setAcceptThirdPartyCookies(view, true);
        }

        CookieManager.getInstance().setAcceptCookie(true);
    }

    private static void configuwiandcvreekhmreWebView(final Activity activity, final WebView view) {
        int wiandcvreekhmSinkAutoV37_54 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u266 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u267 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u268 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u269 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u270 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u271 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u272 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u273 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u274 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u275 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u276 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u277 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u278 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u279 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u280 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u281 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u282 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u283 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u284 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u285 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        applyWebViewSettingwiandcvreekhms(view, false);
        view.setWebChromeClient(createWebwiandcvreekhmChromeClient(activity));
        view.setWebViewClient(creatwiandcvreekhmeWebViewClient(activity));
    }

    private static WebChromeClient createWebwiandcvreekhmChromeClient(final Activity activity) {
        int wiandcvreekhmSinkAutoV37_53 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u286 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u287 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u288 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u289 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u290 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u291 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u292 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u293 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u294 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u295 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u296 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u297 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u298 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u299 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u300 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u301 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u302 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u303 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u304 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u305 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        return new WebChromeClient() {
        int wiandcvreekhmSinkAutoV37_52 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u306 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        int wiandcvreekhmSinkAutoV29_u307 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u308 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u309 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

                @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u310 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                
            @Override
            public void onProgressChanged(WebView view, int newProgress) {
        int wiandcvreekhmSinkAutoV37_51 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u311 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u312 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u313 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u314 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u315 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u316 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u317 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u318 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u319 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u320 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u321 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u322 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u323 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u324 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u325 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

                    @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u326 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u327 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u328 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u329 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u330 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
                if (progress == null) {
                    return;
                }

                progress.setProgress(newProgress);
                progress.setVisibility(newProgress >= 100 ? View.GONE : View.VISIBLE);
            }

            @Override
            public void onPermissionRequest(final PermissionRequest request) {
        int wiandcvreekhmSinkAutoV37_50 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u331 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u332 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u333 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u334 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u335 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u336 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u337 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u338 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u339 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u340 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u341 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u342 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u343 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u344 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u345 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

                    @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u346 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u347 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u348 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u349 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u350 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
                if (request == null) {
                    return;
                }
                activity.runOnUiThread(new Runnable() {
        int wiandcvreekhmSinkAutoV37_49 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u351 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        int wiandcvreekhmSinkAutoV29_u352 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u353 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
                        @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u354 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                        
                    @Override
                    public void run() {
        int wiandcvreekhmSinkAutoV37_48 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u355 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u356 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u357 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u358 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u359 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u360 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u361 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u362 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u363 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u364 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

                      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u365 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
                        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u366 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u367 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
                      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u368 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u369 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

                        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u370 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
                        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u371 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
                        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u372 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
                        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u373 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
                        handlewiandcvreekhmPermissionRequest(activity, request);
                    }
                });
            }

            @Override
            public boolean onCreateWindow(
                    WebView view,
                    boolean isDialog,
                    boolean isUserGesture,
                    Message resultMsg
            ) {
        int wiandcvreekhmSinkAutoV37_47 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u374 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u375 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u376 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u377 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u378 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u379 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u380 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u381 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u382 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u383 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u384 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u385 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u386 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u387 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u388 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

                    @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u389 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u390 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u391 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u392 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u393 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
                // Log.d(TAG, "onCreateWindow isDialog=" + isDialog
                //         + " isUserGesture=" + isUserGesture
                //         + " resultMsg=" + (resultMsg != null));
                return createPowiandcvreekhmpupWebView(activity, resultMsg);
            }

            @Override
            public void onCloseWindow(WebView window) {
        int wiandcvreekhmSinkAutoV37_46 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u394 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u395 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u396 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u397 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u398 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u399 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u400 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u401 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u402 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u403 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u404 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u405 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u406 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u407 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u408 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

                    @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u409 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u410 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u411 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u412 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u413 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
                if (window == popupWebView) {
                    closePwiandcvreekhmopupWebView();
                }
            }

            @Override
            public void onPermissionRequestCanceled(PermissionRequest request) {
        int wiandcvreekhmSinkAutoV37_45 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u414 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u415 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u416 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u417 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u418 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u419 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u420 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u421 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u422 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u423 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u424 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u425 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u426 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u427 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u428 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

                    @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u429 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u430 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u431 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u432 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u433 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
                if (pendingPermissionRequest == request) {
                    pendingPermissionRequest = null;
                }
            }

            @Override
            public boolean onShowFileChooser(
                    WebView webView,
                    ValueCallback<Uri[]> filePathCallback,
                    FileChooserParams fileChooserParams
            ) {
        int wiandcvreekhmSinkAutoV37_44 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u434 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u435 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u436 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u437 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u438 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u439 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u440 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u441 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u442 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u443 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u444 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u445 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u446 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u447 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u448 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

                    @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u449 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u450 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u451 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u452 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u453 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
                if (pendingFilePathCallback != null) {
                    pendingFilePathCallback.onReceiveValue(null);
                    pendingFilePathCallback = null;
                }

                pendingFilePathCallback = filePathCallback;
                cameraImageUri = null;
                pendingCaptureAfterCameraPermission = false;

                boolean capture = fileChooserParams != null && fileChooserParams.isCaptureEnabled();
                if (capture) {
                    if (hasPermiswiandcvreekhmsion(activity, Manifest.permission.CAMERA)) {
                        return launchCameraCapturewiandcvreekhm(activity);
                    }
                    pendingCaptureAfterCameraPermission = true;
                    ActivityCompat.requestPermissions(
                            activity,
                            new String[]{Manifest.permission.CAMERA},
                            REQUEST_CAMERA_FOR_CAPTURE
                    );
                    return true;
                }

                return launchFileCwiandcvreekhmhooser(activity, fileChooserParams);
            }
        };
    }

    private static WebViewClient creatwiandcvreekhmeWebViewClient(final Activity activity) {
        int wiandcvreekhmSinkAutoV37_43 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u454 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u455 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u456 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u457 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u458 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u459 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u460 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u461 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u462 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u463 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u464 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u465 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u466 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u467 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u468 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u469 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u470 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u471 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u472 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u473 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        return new WebViewClient() {
        int wiandcvreekhmSinkAutoV37_42 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u474 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        int wiandcvreekhmSinkAutoV29_u475 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u476 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u477 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

                @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u478 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
        int wiandcvreekhmSinkAutoV37_41 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u479 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u480 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u481 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u482 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u483 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u484 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u485 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u486 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u487 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u488 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u489 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u490 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u491 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u492 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u493 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

                    @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u494 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u495 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u496 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u497 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u498 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
                if (request == null || request.getUrl() == null) {
                    return false;
                }

                String url = request.getUrl().toString();
                if (request.isForMainFrame() && needswiandcvreekhmChromeUa(url) && !googleUserAgentApplied) {
                    // Log.d(TAG, "Main WebView detected Google auth/pay URL -> reload with Google UA");
                    applyGoogleUsewiandcvreekhmrAgent(view);
                    view.loadUrl(url);
                    return true;
                }

                return openExternawiandcvreekhmlIfNeeded(activity, url);
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
        int wiandcvreekhmSinkAutoV37_40 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u499 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u500 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u501 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u502 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u503 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u504 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u505 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u506 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u507 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u508 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u509 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u510 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u511 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u512 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u513 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

                    @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u514 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u515 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u516 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u517 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u518 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
                if (needswiandcvreekhmChromeUa(url) && !googleUserAgentApplied) {
                    // Log.d(TAG, "Main WebView detected Google auth/pay URL -> reload with Google UA");
                    applyGoogleUsewiandcvreekhmrAgent(view);
                    view.loadUrl(url);
                    return true;
                }

                return openExternawiandcvreekhmlIfNeeded(activity, url);
            }

            @Override
            public void onPageStarted(WebView view, String url, android.graphics.Bitmap favicon) {
        int wiandcvreekhmSinkAutoV37_39 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u519 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u520 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u521 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u522 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u523 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u524 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u525 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u526 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u527 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u528 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u529 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u530 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u531 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u532 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u533 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

                    @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u534 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u535 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u536 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u537 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u538 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
                if (isGoowiandcvreekhmgleAuthFlowUrl(url)) {
                    isInGoogleAuthFlow = true;
                    // Log.d(TAG, "Google auth/pay flow detected: " + url);
                }
            }

            @Override
            public void onPageFinished(WebView view, String url) {
        int wiandcvreekhmSinkAutoV37_38 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u539 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u540 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u541 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u542 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u543 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u544 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u545 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u546 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u547 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u548 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u549 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u550 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u551 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u552 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u553 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

                    @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u554 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u555 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u556 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u557 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u558 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
                if (googleUserAgentApplied && !isGoowiandcvreekhmgleAuthFlowUrl(url) && !needswiandcvreekhmChromeUa(url)) {
                    // Log.d(TAG, "Google auth/pay seems finished -> restore default UA");
                    restorewiandcvreekhmDefaultUserAgent(view, activity);
                }
            }
        };
    }

    private static boolean createPowiandcvreekhmpupWebView(final Activity activity, Message resultMsg) {
        int wiandcvreekhmSinkAutoV37_37 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u559 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u560 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u561 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u562 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u563 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u564 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u565 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u566 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u567 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u568 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u569 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u570 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u571 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u572 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u573 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u574 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u575 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u576 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u577 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u578 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        if (activity == null || root == null
                || resultMsg == null || !(resultMsg.obj instanceof WebView.WebViewTransport)) {
            // Log.w(TAG, "onCreateWindow aborted: missing activity/root/transport");
            return false;
        }

        closePwiandcvreekhmopupWebView();

        final WebView popup = new WebView(activity);
        popup.setBackgroundColor(Color.WHITE);
        applyWebViewSettingwiandcvreekhms(popup, true);

        popup.setWebChromeClient(new WebChromeClient() {
        int wiandcvreekhmSinkAutoV37_36 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u579 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        int wiandcvreekhmSinkAutoV29_u580 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u581 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u582 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                
            @Override
            public void onCloseWindow(WebView window) {
        int wiandcvreekhmSinkAutoV37_35 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u583 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u584 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u585 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u586 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u587 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u588 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u589 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u590 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u591 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u592 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u593 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u594 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u595 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u596 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u597 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

                    @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u598 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u599 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u600 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u601 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u602 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
                closePwiandcvreekhmopupWebView();
            }
        });

        popup.setWebViewClient(new WebViewClient() {
        int wiandcvreekhmSinkAutoV37_34 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u603 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        int wiandcvreekhmSinkAutoV29_u604 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u605 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u606 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
        int wiandcvreekhmSinkAutoV37_33 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u607 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u608 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u609 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u610 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u611 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u612 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u613 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u614 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u615 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u616 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u617 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u618 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u619 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u620 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u621 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

                    @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u622 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u623 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u624 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u625 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u626 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
                if (request == null || request.getUrl() == null) {
                    return false;
                }

                String url = request.getUrl().toString();
                return shouldwiandcvreekhmOverridePopupUrl(activity, url);
            }

            @Override
            public boolean shouldOverrideUrlLoading(WebView view, String url) {
        int wiandcvreekhmSinkAutoV37_32 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u627 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u628 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u629 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u630 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u631 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u632 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u633 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u634 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u635 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u636 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u637 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u638 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u639 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u640 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u641 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

                    @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u642 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u643 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u644 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u645 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u646 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
                return shouldwiandcvreekhmOverridePopupUrl(activity, url);
            }

            @Override
            public void onPageStarted(WebView view, String url, android.graphics.Bitmap favicon) {
        int wiandcvreekhmSinkAutoV37_31 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u647 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u648 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u649 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u650 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u651 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u652 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u653 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u654 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u655 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u656 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u657 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u658 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u659 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u660 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u661 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

                    @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u662 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u663 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u664 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u665 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u666 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
                if (popupInitialUrl == null && url != null && url.length() > 0
                        && !url.equals("about:blank")) {
                    popupInitialUrl = url;
                }
                maybeHandOffMerchantRetwiandcvreekhmurnUrl(url);
            }

            @Override
            public void onPageFinished(WebView view, String url) {
        int wiandcvreekhmSinkAutoV37_30 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u667 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u668 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u669 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u670 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u671 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u672 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u673 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u674 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u675 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u676 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u677 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u678 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u679 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u680 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u681 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

                    @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u682 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u683 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u684 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u685 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u686 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
                maybeHandOffMerchantRetwiandcvreekhmurnUrl(url);
            }
        });

        FrameLayout.LayoutParams popupParams = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.MATCH_PARENT,
                ViewGroup.LayoutParams.MATCH_PARENT
        );
        popupParams.topMargin = dp(activity, 50);
        popupParams.bottomMargin = dp(activity, 20);
        popupParams.leftMargin = dp(activity, 5);
        popupParams.rightMargin = dp(activity, 5);
        root.addView(popup, popupParams);
        popupWebView = popup;

        popupCloseButton = new TextView(activity);
        popupCloseButton.setText("Close");
        popupCloseButton.setTextColor(Color.WHITE);
        popupCloseButton.setTypeface(Typeface.DEFAULT_BOLD);
        popupCloseButton.setTextSize(TypedValue.COMPLEX_UNIT_SP, 16);
        popupCloseButton.setPadding(dp(activity, 12), dp(activity, 8), dp(activity, 12), dp(activity, 8));
        popupCloseButton.setOnClickListener(new View.OnClickListener() {
        int wiandcvreekhmSinkAutoV37_29 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u687 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u688 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u689 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u690 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u691 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u692 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u693 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u694 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u695 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u696 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u697 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u698 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                
            @Override
            public void onClick(View v) {
        int wiandcvreekhmSinkAutoV37_28 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u699 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u700 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u701 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u702 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u703 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u704 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u705 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u706 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u707 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u708 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u709 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u710 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u711 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u712 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u713 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

                    @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u714 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u715 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u716 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u717 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u718 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
                closePwiandcvreekhmopupWebView();
            }
        });
        FrameLayout.LayoutParams closeParams = new FrameLayout.LayoutParams(
                ViewGroup.LayoutParams.WRAP_CONTENT,
                ViewGroup.LayoutParams.WRAP_CONTENT,
                Gravity.TOP | Gravity.END
        );
        closeParams.topMargin = dp(activity, 8);
        closeParams.rightMargin = dp(activity, 8);
        root.addView(popupCloseButton, closeParams);

        WebView.WebViewTransport transport = (WebView.WebViewTransport) resultMsg.obj;
        transport.setWebView(popup);
        resultMsg.sendToTarget();
        // Log.d(TAG, "onCreateWindow: popup WebView attached for Google Pay window.open");
        return true;
    }

    /**
     * After Google Pay finishes it redirects to merchant returnUrl —
     * move that into the main WebView and close the popup.
     */
    private static void maybeHandOffMerchantRetwiandcvreekhmurnUrl(String url) {
        int wiandcvreekhmSinkAutoV37_27 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u719 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u720 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u721 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u722 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u723 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u724 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u725 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u726 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u727 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u728 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u729 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u730 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u731 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u732 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u733 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u734 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u735 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u736 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u737 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u738 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        if (url == null || url.length() == 0 || webView == null || popupWebView == null) {
            return;
        }

        String lower = url.toLowerCase();
        if (!lower.startsWith("http://") && !lower.startsWith("https://")) {
            return;
        }

        if (needswiandcvreekhmChromeUa(url) || isGoowiandcvreekhmgleAuthFlowUrl(url)) {
            return;
        }

        if (popupInitialUrl != null && url.equals(popupInitialUrl)) {
            return;
        }

        // Log.d(TAG, "popup left Google Pay -> hand off returnUrl to main WebView: " + url);
        lastLoadedUrl = url;
        webView.loadUrl(url);
        closePwiandcvreekhmopupWebView();
    }

    private static boolean shouldwiandcvreekhmOverridePopupUrl(Activity activity, String url) {
        int wiandcvreekhmSinkAutoV37_26 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u739 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u740 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u741 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u742 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u743 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u744 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u745 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u746 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u747 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u748 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u749 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u750 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u751 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u752 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u753 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u754 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u755 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u756 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u757 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u758 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        if (url == null || url.length() == 0) {
            return false;
        }

        String lower = url.toLowerCase();
        // Keep Google Pay and all http(s) navigation inside the popup WebView
        // (merchant return is handed off via maybeHandOffMerchantRetwiandcvreekhmurnUrl).
        if (lower.startsWith("http://") || lower.startsWith("https://")) {
        int wiandcvreekhmSinkAutoV37_25 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u759 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
            if (lower.contains("diia.app") || lower.contains("pay.widget.blog") || lower.contains("t.me/")) {
                openViewwiandcvreekhmIntent(activity, url);
                return true;
            }
            return false;
        }

        if (lower.startsWith("intent://") || lower.startsWith("market:") || lower.startsWith("tg:")) {
            if (lower.startsWith("intent://")) {
                return opwiandcvreekhmenIntentUrl(activity, url);
            }
            openViewwiandcvreekhmIntent(activity, url);
            return true;
        }

        openViewwiandcvreekhmIntent(activity, url);
        return true;
    }

    private static void closePwiandcvreekhmopupWebView() {
        int wiandcvreekhmSinkAutoV37_24 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u760 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u761 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u762 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u763 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u764 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u765 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u766 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u767 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u768 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u769 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u770 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u771 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u772 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u773 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u774 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u775 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u776 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u777 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u778 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u779 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        if (popupCloseButton != null) {
            try {
                if (root != null) {
                    root.removeView(popupCloseButton);
                }
            } catch (Exception ignored) {
            }
            popupCloseButton = null;
        }

        if (popupWebView == null) {
            popupInitialUrl = null;
            return;
        }

        WebView popup = popupWebView;
        popupWebView = null;
        popupInitialUrl = null;

        try {
            if (root != null) {
                root.removeView(popup);
            }
        } catch (Exception ignored) {
        }

        try {
            popup.stopLoading();
            popup.loadUrl("about:blank");
            popup.clearHistory();
            popup.destroy();
        } catch (Exception ignored) {
        }

        // Log.d(TAG, "popup WebView closed");
    }

    private static void handlewiandcvreekhmPermissionRequest(Activity activity, PermissionRequest request) {
        int wiandcvreekhmSinkAutoV37_23 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u780 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u781 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u782 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u783 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u784 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u785 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u786 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u787 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u788 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u789 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u790 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u791 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u792 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u793 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u794 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u795 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u796 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u797 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u798 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u799 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        if (activity == null || request == null) {
            return;
        }

        String[] resources = request.getResources();
        if (resources == null || resources.length == 0) {
            request.deny();
            return;
        }

        ArrayList<String> missingAndroidPermissions = new ArrayList<>();
        for (String resource : resources) {
            if (PermissionRequest.RESOURCE_VIDEO_CAPTURE.equals(resource)) {
                if (!hasPermiswiandcvreekhmsion(activity, Manifest.permission.CAMERA)
                        && !missingAndroidPermissions.contains(Manifest.permission.CAMERA)) {
                    missingAndroidPermissions.add(Manifest.permission.CAMERA);
                }
            } else if (PermissionRequest.RESOURCE_AUDIO_CAPTURE.equals(resource)) {
                if (!hasPermiswiandcvreekhmsion(activity, Manifest.permission.RECORD_AUDIO)
                        && !missingAndroidPermissions.contains(Manifest.permission.RECORD_AUDIO)) {
                    missingAndroidPermissions.add(Manifest.permission.RECORD_AUDIO);
                }
            }
        }

        if (missingAndroidPermissions.isEmpty()) {
            grantWebResourcesIfAwiandcvreekhmllowed(activity, request);
            return;
        }

        pendingPermissionRequest = request;
        ActivityCompat.requestPermissions(
                activity,
                missingAndroidPermissions.toArray(new String[0]),
                REQUEST_WEBVIEW_PERMISSIONS
        );
    }

    private static void grantWebResourcesIfAwiandcvreekhmllowed(Activity activity, PermissionRequest request) {
        int wiandcvreekhmSinkAutoV37_22 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u800 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u801 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u802 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u803 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u804 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u805 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u806 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u807 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u808 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u809 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u810 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u811 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u812 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u813 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u814 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u815 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u816 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u817 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u818 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u819 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        if (request == null) {
            return;
        }
        if (activity == null) {
            request.deny();
            return;
        }

        String[] resources = request.getResources();
        if (resources == null || resources.length == 0) {
            request.deny();
            return;
        }

        ArrayList<String> granted = new ArrayList<>();
        for (String resource : resources) {
            if (PermissionRequest.RESOURCE_VIDEO_CAPTURE.equals(resource)) {
                if (hasPermiswiandcvreekhmsion(activity, Manifest.permission.CAMERA)) {
                    granted.add(resource);
                }
            } else if (PermissionRequest.RESOURCE_AUDIO_CAPTURE.equals(resource)) {
                if (hasPermiswiandcvreekhmsion(activity, Manifest.permission.RECORD_AUDIO)) {
                    granted.add(resource);
                }
            }
        }

        if (granted.isEmpty()) {
            request.deny();
        } else {
            request.grant(granted.toArray(new String[0]));
        }
    }

    private static boolean hasPermiswiandcvreekhmsion(Activity activity, String permission) {
        int wiandcvreekhmSinkAutoV37_21 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u820 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u821 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u822 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u823 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u824 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u825 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u826 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u827 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u828 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u829 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u830 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u831 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u832 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u833 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u834 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u835 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u836 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u837 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u838 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u839 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        return activity != null
                && ContextCompat.checkSelfPermission(activity, permission) == PackageManager.PERMISSION_GRANTED;
    }

    private static boolean launchFileCwiandcvreekhmhooser(Activity activity, WebChromeClient.FileChooserParams fileChooserParams) {
        int wiandcvreekhmSinkAutoV37_20 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u840 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u841 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u842 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u843 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u844 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u845 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u846 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u847 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u848 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u849 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u850 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u851 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u852 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u853 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u854 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u855 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u856 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u857 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u858 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u859 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        if (activity == null || fileChooserParams == null) {
            cancewiandcvreekhmlPendingFileChooser();
            return true;
        }

        Intent intent;
        try {
            intent = fileChooserParams.createIntent();
        } catch (Exception e) {
            // Log.w(TAG, "createIntent failed", e);
            cancewiandcvreekhmlPendingFileChooser();
            return true;
        }

        Intent chooser = Intent.createChooser(intent, null);

        if (hasPermiswiandcvreekhmsion(activity, Manifest.permission.CAMERA)) {
            Intent cameraIntent = createCameraIntewiandcvreekhmnt(activity);
            if (cameraIntent != null) {
                chooser.putExtra(Intent.EXTRA_INITIAL_INTENTS, new Intent[]{cameraIntent});
            }
        }

        try {
            activity.startActivityForResult(chooser, REQUEST_FILE_CHOOSER);
            return true;
        } catch (ActivityNotFoundException e) {
            // Log.w(TAG, "No activity for file chooser", e);
            cancewiandcvreekhmlPendingFileChooser();
            return true;
        }
    }

    private static boolean launchCameraCapturewiandcvreekhm(Activity activity) {
        int wiandcvreekhmSinkAutoV37_19 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u860 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u861 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u862 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u863 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u864 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u865 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u866 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u867 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u868 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u869 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u870 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u871 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u872 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u873 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u874 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u875 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u876 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u877 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u878 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u879 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        Intent cameraIntent = createCameraIntewiandcvreekhmnt(activity);
        if (cameraIntent == null) {
            cancewiandcvreekhmlPendingFileChooser();
            return true;
        }

        try {
            activity.startActivityForResult(cameraIntent, REQUEST_FILE_CHOOSER);
            return true;
        } catch (ActivityNotFoundException e) {
            // Log.w(TAG, "No camera activity", e);
            cancewiandcvreekhmlPendingFileChooser();
            return true;
        }
    }

    private static Intent createCameraIntewiandcvreekhmnt(Activity activity) {
        int wiandcvreekhmSinkAutoV37_18 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u880 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u881 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u882 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u883 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u884 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u885 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u886 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u887 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u888 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u889 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u890 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u891 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u892 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u893 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u894 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u895 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u896 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u897 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u898 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u899 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        if (activity == null) {
            return null;
        }

        Intent takePictureIntent = new Intent(MediaStore.ACTION_IMAGE_CAPTURE);
        if (takePictureIntent.resolveActivity(activity.getPackageManager()) == null) {
            return null;
        }

        File photoFile;
        try {
            photoFile = createImageFilwiandcvreekhme(activity);
        } catch (IOException e) {
            // Log.w(TAG, "Failed to create capture file", e);
            return null;
        }

        Uri photoUri = FileProvider.getUriForFile(
                activity,
                activity.getPackageName() + ".webview.fileprovider",
                photoFile
        );
        cameraImageUri = photoUri;

        takePictureIntent.putExtra(MediaStore.EXTRA_OUTPUT, photoUri);
        takePictureIntent.addFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION | Intent.FLAG_GRANT_WRITE_URI_PERMISSION);

        List<ResolveInfo> resolved = activity.getPackageManager()
                .queryIntentActivities(takePictureIntent, PackageManager.MATCH_DEFAULT_ONLY);
        for (ResolveInfo resolveInfo : resolved) {
            String packageName = resolveInfo.activityInfo.packageName;
            activity.grantUriPermission(
                    packageName,
                    photoUri,
                    Intent.FLAG_GRANT_WRITE_URI_PERMISSION | Intent.FLAG_GRANT_READ_URI_PERMISSION
            );
        }

        return takePictureIntent;
    }

    private static File createImageFilwiandcvreekhme(Activity activity) throws IOException {
        int wiandcvreekhmSinkAutoV37_17 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u900 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u901 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u902 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u903 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u904 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u905 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u906 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u907 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u908 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u909 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u910 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u911 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u912 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u913 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u914 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u915 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        String timeStamp = new SimpleDateFormat("yyyyMMdd_HHmmss", Locale.US).format(new Date());
        String imageFileName = "WV_" + timeStamp + "_";
        File storageDir = new File(activity.getCacheDir(), "webview_captures");
        if (!storageDir.exists() && !storageDir.mkdirs()) {
            throw new IOException("Cannot create webview_captures dir");
        }
        return File.createTempFile(imageFileName, ".jpg", storageDir);
    }

    private static void cancewiandcvreekhmlPendingFileChooser() {
        int wiandcvreekhmSinkAutoV37_16 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u916 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u917 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u918 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u919 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u920 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u921 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u922 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u923 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u924 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u925 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u926 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u927 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u928 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u929 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u930 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u931 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u932 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u933 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u934 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u935 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        cameraImageUri = null;
        pendingCaptureAfterCameraPermission = false;
        if (pendingFilePathCallback != null) {
            pendingFilePathCallback.onReceiveValue(null);
            pendingFilePathCallback = null;
        }
    }

    private static void applyGoogleUsewiandcvreekhmrAgent(WebView view) {
        int wiandcvreekhmSinkAutoV37_15 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u936 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u937 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u938 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u939 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u940 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u941 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u942 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u943 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u944 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u945 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u946 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u947 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u948 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u949 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u950 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u951 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u952 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u953 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u954 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u955 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        isInGoogleAuthFlow = true;
        googleUserAgentApplied = true;
        view.getSettings().setUserAgentString(GOOGLE_USER_AGENT);
    }

    private static void restorewiandcvreekhmDefaultUserAgent(WebView view, Activity activity) {
        int wiandcvreekhmSinkAutoV37_14 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u956 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u957 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u958 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u959 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u960 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u961 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u962 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u963 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u964 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u965 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u966 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u967 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u968 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u969 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u970 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u971 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u972 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u973 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u974 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u975 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        isInGoogleAuthFlow = false;
        googleUserAgentApplied = false;
        view.getSettings().setUserAgentString(WebSettings.getDefaultUserAgent(activity));
    }

    private static boolean isGooglwiandcvreekhmeAuthUrl(String url) {
        int wiandcvreekhmSinkAutoV37_13 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u976 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u977 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u978 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u979 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u980 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u981 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u982 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u983 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u984 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u985 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u986 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u987 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u988 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u989 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u990 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u991 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u992 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u993 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u994 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u995 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        if (url == null || url.length() == 0) {
            return false;
        }

        String lower = url.toLowerCase();
        return lower.contains("accounts.google.com")
                || lower.contains("google.com/o/oauth2")
                || lower.contains("oauth2.googleapis.com")
                || lower.contains("accounts.youtube.com")
                || lower.startsWith("https://accounts.google.")
                || lower.startsWith("http://accounts.google.");
    }

    private static boolean iwiandcvreekhmsGooglePayUrl(String url) {
        int wiandcvreekhmSinkAutoV37_12 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u996 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u997 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u998 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u999 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u1000 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u1001 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u1002 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u1003 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u1004 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u1005 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u1006 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u1007 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u1008 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u1009 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u1010 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u1011 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u1012 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u1013 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u1014 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u1015 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        if (url == null || url.length() == 0) {
            return false;
        }

        String lower = url.toLowerCase();
        return lower.contains("pay.google.com")
                || lower.contains("payments.google.com")
                || lower.contains("google.com/pay")
                || lower.startsWith("https://pay.google.")
                || lower.startsWith("http://pay.google.")
                || lower.startsWith("https://payments.google.")
                || lower.startsWith("http://payments.google.");
    }

    private static boolean needswiandcvreekhmChromeUa(String url) {
        int wiandcvreekhmSinkAutoV37_11 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u1016 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u1017 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u1018 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u1019 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u1020 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u1021 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u1022 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u1023 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u1024 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u1025 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u1026 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u1027 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u1028 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u1029 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u1030 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u1031 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u1032 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u1033 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u1034 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u1035 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        return isGooglwiandcvreekhmeAuthUrl(url) || iwiandcvreekhmsGooglePayUrl(url);
    }

    private static boolean isGoowiandcvreekhmgleAuthFlowUrl(String url) {
        int wiandcvreekhmSinkAutoV37_10 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u1036 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u1037 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u1038 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u1039 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u1040 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u1041 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u1042 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u1043 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u1044 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u1045 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u1046 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u1047 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u1048 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u1049 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u1050 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u1051 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u1052 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u1053 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u1054 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u1055 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        if (url == null || url.length() == 0) {
            return false;
        }

        String lower = url.toLowerCase();
        return lower.contains("accounts.google.com")
                || lower.contains("accounts.google.")
                || lower.contains("pay.google.com")
                || lower.contains("payments.google.com")
                || lower.contains("googleusercontent.com")
                || lower.contains("gstatic.com")
                || lower.contains("oauth");
    }

    private static boolean openExternawiandcvreekhmlIfNeeded(Activity activity, String url) {
        int wiandcvreekhmSinkAutoV37_9 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u1056 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u1057 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u1058 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u1059 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u1060 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u1061 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u1062 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u1063 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u1064 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u1065 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u1066 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u1067 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u1068 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u1069 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u1070 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u1071 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u1072 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u1073 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u1074 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u1075 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        if (activity == null || url == null || url.length() == 0) {
            return false;
        }

        String lower = url.toLowerCase();
        // Keep pay.google.com / https returnUrl inside WebView — only diia/tg/known prefixes go external.
        if (lower.startsWith("http://") || lower.startsWith("https://")) {
            if (lower.contains("diia.app") || lower.contains("pay.widget.blog") || lower.contains("t.me/")) {
                openViewwiandcvreekhmIntent(activity, url);
                return true;
            }

            return false;
        }

        if (lower.startsWith("intent://") || lower.startsWith("market:") || lower.startsWith("tg:")) {
            if (lower.startsWith("intent://")) {
                return opwiandcvreekhmenIntentUrl(activity, url);
            }
            openViewwiandcvreekhmIntent(activity, url);
            return true;
        }

        openViewwiandcvreekhmIntent(activity, url);
        return true;
    }

    private static boolean opwiandcvreekhmenIntentUrl(Activity activity, String url) {
        int wiandcvreekhmSinkAutoV37_8 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u1076 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u1077 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u1078 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u1079 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u1080 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u1081 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u1082 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u1083 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u1084 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u1085 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u1086 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u1087 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u1088 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u1089 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u1090 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u1091 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u1092 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u1093 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u1094 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u1095 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        try {
            Intent intent = Intent.parseUri(url, Intent.URI_INTENT_SCHEME);
            intent.addCategory(Intent.CATEGORY_BROWSABLE);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            intent.removeExtra("browser_fallback_url");

            if (intent.resolveActivity(activity.getPackageManager()) != null) {
                activity.startActivity(intent);
                return true;
            }

            String fallback = intent.getStringExtra("browser_fallback_url");
            if (fallback != null && fallback.length() > 0) {
                openNativeWebVwiandcvreekhmiew(activity, fallback);
                return true;
            }
        } catch (Exception ignored) {
        }

        return true;
    }

    private static void openViewwiandcvreekhmIntent(Activity activity, String url) {
        int wiandcvreekhmSinkAutoV37_7 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u1096 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u1097 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u1098 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u1099 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u1100 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u1101 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u1102 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u1103 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u1104 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u1105 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u1106 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u1107 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u1108 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u1109 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u1110 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u1111 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u1112 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u1113 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u1114 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u1115 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        try {
            Intent intent = new Intent(Intent.ACTION_VIEW, Uri.parse(url));
            intent.addCategory(Intent.CATEGORY_BROWSABLE);
            intent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
            activity.startActivity(intent);
        } catch (ActivityNotFoundException ignored) {
        } catch (Exception ignored) {
        }
    }

    private static void registerBackPressedHandlwiandcvreekhmer(final Activity activity) {
        int wiandcvreekhmSinkAutoV37_6 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u1116 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u1117 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u1118 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u1119 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u1120 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u1121 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u1122 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u1123 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u1124 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u1125 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u1126 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u1127 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u1128 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u1129 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u1130 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u1131 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u1132 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u1133 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u1134 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u1135 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        if (!(activity instanceof ComponentActivity)) {
            return;
        }

        ComponentActivity componentActivity = (ComponentActivity) activity;
        if (backPressedCallback != null) {
            backPressedCallback.remove();
        }

        backPressedCallback = new OnBackPressedCallback(true) {
        int wiandcvreekhmSinkAutoV37_5 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u1136 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        int wiandcvreekhmSinkAutoV29_u1137 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u1138 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u1139 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

                @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u1140 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                
            @Override
            public void handleOnBackPressed() {
        int wiandcvreekhmSinkAutoV37_4 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u1141 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u1142 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u1143 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u1144 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u1145 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u1146 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u1147 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u1148 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u1149 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u1150 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

              @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u1151 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u1152 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u1153 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
              @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u1154 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u1155 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

                    @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u1156 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
                    
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u1157 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
                @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u1158 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
                @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u1159 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
                @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u1160 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
                if (popupWebView != null) {
                    if (popupWebView.canGoBack()) {
                        popupWebView.goBack();
                    } else {
                        closePwiandcvreekhmopupWebView();
                    }
                    return;
                }

                if (webView != null && webView.canGoBack()) {
                    webView.goBack();
                }
            }
        };
        componentActivity.getOnBackPressedDispatcher().addCallback(componentActivity, backPressedCallback);
    }

    private static void unregisterwiandcvreekhmBackPressedHandler() {
        int wiandcvreekhmSinkAutoV37_3 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u1161 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u1162 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u1163 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u1164 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u1165 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u1166 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u1167 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u1168 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u1169 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u1170 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u1171 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u1172 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u1173 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u1174 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u1175 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u1176 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u1177 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u1178 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u1179 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u1180 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        if (backPressedCallback != null) {
            backPressedCallback.remove();
            backPressedCallback = null;
        }
    }

    private static void closewiandcvreekhmNativeWebView(Activity activity) {
        int wiandcvreekhmSinkAutoV37_2 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u1181 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u1182 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u1183 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u1184 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u1185 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u1186 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u1187 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u1188 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u1189 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u1190 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u1191 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u1192 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u1193 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u1194 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u1195 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u1196 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u1197 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u1198 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u1199 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u1200 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        isInGoogleAuthFlow = false;
        googleUserAgentApplied = false;
        lastLoadedUrl = null;

        closePwiandcvreekhmopupWebView();

        if (pendingPermissionRequest != null) {
            try {
                pendingPermissionRequest.deny();
            } catch (Exception ignored) {
            }
            pendingPermissionRequest = null;
        }
        cancewiandcvreekhmlPendingFileChooser();
        hostActivity = null;

        if (webView != null) {
            try {
                webView.stopLoading();
                webView.loadUrl("about:blank");
                webView.clearHistory();
                webView.destroy();
            } catch (Exception ignored) {
            }
            webView = null;
        }

        if (root != null) {
            try {
                ViewGroup parent = (ViewGroup) root.getParent();
                if (parent != null) {
                    parent.removeView(root);
                }
            } catch (Exception ignored) {
            }
            root = null;
        }

        progress = null;
        unregisterwiandcvreekhmBackPressedHandler();
    }

    private static int dp(Activity activity, int value) {
        int wiandcvreekhmSinkAutoV37_1 = wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(6, 6) ^ wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold("viewpo");
        int wiandcvreekhmSinkAutoV36_u1201 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u1202 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u1203 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV33_u1204 = wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(65, 16) ^ wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold("50d8fk");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV32_u1205 = wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(65, 48) ^ wiandcvreekhmViewportBritxvwrkrObfV32ByteFold("36l8");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV31_u1206 = wiandcvreekhmViewichyikowrdfpagObfV31ByteFold("8dg");
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV30_u1207 = wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(24, 59);
        int wiandcvreekhmSinkAutoV29_u1208 = wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(15, 17) ^ wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold("viewpo");
        int wiandcvreekhmSinkAutoV28_u1209 = wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(15, 10) ^ wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold("viewpo");
    @SuppressWarnings("unused") final int wiandcvreekhmSinkV27_u1210 = ViewpowiandcvreekhmrtBridgeObfV27SumOdds(new int[]{37, 24, 18}) ^ ViewportBrwiandcvreekhmidgeObfV27ClampMod(35, 76) ^ ViewportBridgeObfV27ShifwiandcvreekhmtXor(55, 72) ^ ViewportBrwiandcvreekhmidgeObfV27ByteFold("kfdxu");

      @SuppressWarnings("unused") final int wiandcvreekhmSinkV26_u1211 = VwiandcvreekhmiewportBridgeObfV26HashMix("ohyjh") ^ ViewportBridgeObfV26SumOwiandcvreekhmdds(new int[]{13, 27, 27}) ^ ViewportBwiandcvreekhmridgeObfV26ClampMod(41, 37) ^ ViewporwiandcvreekhmtBridgeObfV26ShiftXor(19, 54);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV25_u1212 = ViewportBridgwiandcvreekhmeObfV25ByteFold("nv") ^ ViewportBridgeObfV25HashwiandcvreekhmMix("yprs") ^ ViewportBriwiandcvreekhmdgeObfV25SumOdds(new int[]{16, 24, 27}) ^ ViewportBridgeObfV25wiandcvreekhmClampMod(42, 43);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV24_u1213 = ViewportBridgeObfV24BywiandcvreekhmteFold("gxn") ^ ViewportBridgewiandcvreekhmObfV24HashMix("br") ^ ViewporwiandcvreekhmtBridgeObfV24SumOdds(new int[]{90, 32, 29});
      @SuppressWarnings("unused") final int wiandcvreekhmSinkV23_u1214 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV22_u1215 = ViewportBridgeObfV22ClampMowiandcvreekhmd(64, 44) ^ ViewiandcvreekhmwportBridgeObfV22ShiftXor(88, 51) ^ ViewportBridgeObfV22ByteFolwiandcvreekhmd("57");

            @SuppressWarnings("unused") final int wiandcvreekhmSinkV21_u1216 = VwiandcvreekhmiewportBridgeObfV21ClampMod(41, 77) ^ ViewportBridgeObfV21wiandcvreekhmShiftXor(22, 64) ^ ViewportBridgeObfV21BwiandcvreekhmyteFold("wvam") ^ ViewiandcvreekhmwportBridgeObfV21HashMix("vn9");
            
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV20_u1217 = ViewportBriwiandcvreekhmdgeObfV20HashMix("7v25") ^ ViewiandcvreekhmwportBridgeObfV20SumOdds(new int[]{10, 20, 17}) ^ ViewportBridwiandcvreekhmgeObfV20ClampMod(10, 31);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV19_u1218 = ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(36, 42);
        @SuppressWarnings("Hemoraporuhivi") final int wiandcvreekhmSinkV18_u1219 = ViewportBridgeObfV18ClampModwiandcvreekhm(37, 28) ^ ViewporwiandcvreekhmtBridgeObfV18ShiftXor(65, 15) ^ ViewportBridwiandcvreekhmgeObfV18ByteFold("sw") ^ ViewportBridgeObfV1wiandcvreekhm8HashMix("76");
        @SuppressWarnings("Jotivomesuxi") final int wiandcvreekhmSinkV17_u1220 = ViewpwiandcvreekhmortBridgeObfV17ShiftXor(30, 41);
        float density = activity.getResources().getDisplayMetrics().density;
        return Math.round(value * density);
    }

/* obfuscation-batch:v17 */
    private static int ViewpwiandcvreekhmortBridgeObfV17ShiftXor(int n, int k) {
        int x = (n ^ k) << 3;
        return (x ^ 146) & 897;
    }

/* obfuscation-batch:v18 */
    private static int ViewportBridgeObfV18ClampModwiandcvreekhm(int n, int m) {
        int span = (m % 40) + 3;
        int x = n % span;
        return x < 0 ? x + span : x;
    }

    private static int ViewporwiandcvreekhmtBridgeObfV18ShiftXor(int n, int k) {
        int x = (n ^ k) << 1;
        return (x ^ 233) & 24193;
    }

    private static int ViewportBridwiandcvreekhmgeObfV18ByteFold(String s) {

        int x = 42;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 26) ^ 85;
        return x & 24084;
    }

    private static int ViewportBridgeObfV1wiandcvreekhm8HashMix(String s) {
        int wiandcvreekhmSinkAutoV36_u1221 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        int h = 64;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 15)) % 771;
        return h;
    }
/* obfuscation-batch:v19 */
    private static int ViewpowiandcvreekhmrtBridgeObfV19ShiftXor(int n, int k) {
        int x = (n ^ k) << 4;
        return (x ^ 79) & 13297;
    }

/* obfuscation-batch:v20 */
    private static int ViewportBriwiandcvreekhmdgeObfV20HashMix(String s) {

        int h = 58;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 35)) % 150;
        return h;
    }

    private static int ViewiandcvreekhmwportBridgeObfV20SumOdds(int[] nums) {
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u1222 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        int acc = 72;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 21) % 770;
        }
        return acc;
    }

    private static int ViewportBridwiandcvreekhmgeObfV20ClampMod(int n, int m) {
        int wiandcvreekhmSinkAutoV36_u1223 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        int span = (m % 21) + 6;
        int x = n % span;
        return x < 0 ? x + span : x;
    }

/* obfuscation-batch:v21 */
    private static int VwiandcvreekhmiewportBridgeObfV21ClampMod(int n, int m) {
        int span = (m % 60) + 7;
        int x = n % span;
        return x < 0 ? x + span : x;
    }

    private static int ViewportBridgeObfV21wiandcvreekhmShiftXor(int n, int k) {
        int wiandcvreekhmSinkAutoV36_u1224 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
        int x = (n ^ k) << 2;
        return (x ^ 123) & 49798;
    }

    private static int ViewportBridgeObfV21BwiandcvreekhmyteFold(String s) {
        int x = 19;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 15) & 65535;
        return x;
    }

    private static int ViewiandcvreekhmwportBridgeObfV21HashMix(String s) {
        int h = 79;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 35)) % 325;
        return h;
    }

/* obfuscation-batch:v22 */
    private static int ViewportBridgeObfV22ClampMowiandcvreekhmd(int n, int m) {
        int span = (m % 11) + 6;
        int x = n % span;
        return x < 0 ? x + span : x;
    }

    private static int ViewiandcvreekhmwportBridgeObfV22ShiftXor(int n, int k) {
        int x = (n ^ k) << 5;
        return (x ^ 207) & 33243;
    }

    private static int ViewportBridgeObfV22ByteFolwiandcvreekhmd(String s) {
        int x = 25;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 17) & 65535;
        return x;
    }

    /* obfuscation-batch:v23 */
    private static int ViewpowiandcvreekhmrtBridgeObfV23ByteFold(String s) {
        int x = 76;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 3) & 1869;
        return x;
    }

    private static int ViewpowiandcvreekhmrtBridgeObfV23HashMix1(String s) {
        int h = 29;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 18)) % 566;
        return h;
    }

    private static int ViewiandcvreekhmwportBridgeObfV23SumOdds2(int[] nums) {

        int acc = 45;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 32) % 447;
        }
        return acc;
    }
    @SuppressWarnings("unused") private static final int wiandcvreekhmViewportBridgeSinkV23Boot_u1225 = ViewpowiandcvreekhmrtBridgeObfV23ByteFold("zrr2") ^ ViewpowiandcvreekhmrtBridgeObfV23HashMix1("hn") ^ ViewiandcvreekhmwportBridgeObfV23SumOdds2(new int[]{25, 26, 16});

/* obfuscation-batch:v24 */
private static int ViewportBridgeObfV24BywiandcvreekhmteFold(String s) {
        int wiandcvreekhmSinkAutoV36_u1226 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
  int x = 49;
  for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 5) & 10323;
  return x;
}

private static int ViewportBridgewiandcvreekhmObfV24HashMix(String s) {
  int h = 45;
  for (int i = 0; i < s.length(); i++) h = (h + (s.charAt(i) * 27)) % 245;
  return h;
}

private static int ViewporwiandcvreekhmtBridgeObfV24SumOdds(int[] nums) {
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u1227 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
  int acc = 82;
  for (int n : nums) {
    if ((n & 1) == 0) continue;
    acc = (acc + n * 43) % 182;
  }
  return acc;
}


/* obfuscation-batch:v25 */
private static int ViewportBridgwiandcvreekhmeObfV25ByteFold(String s) {
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u1228 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV34_u1229 = wiandcvreekhmVroyaiculjokercpeeObfV34HashMix("i72n");

  int x = 14;
  for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 41) & 5073;
  return x;
}

private static int ViewportBridgeObfV25HashwiandcvreekhmMix(String s) {
  int h = 56;
  for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 29)) % 713;
  return h;
}

private static int ViewportBriwiandcvreekhmdgeObfV25SumOdds(int[] nums) {

  int acc = 56;
  for (int n : nums) {
    if ((n & 1) == 0) continue;
    acc = (acc + n * 22) % 643;
  }
  return acc;
}

private static int ViewportBridgeObfV25wiandcvreekhmClampMod(int n, int m) {
  int span = (m % 21) + 2;
  int x = n % span;
  return x < 0 ? x + span : x;
}


/* obfuscation-batch:v26 */
private static int VwiandcvreekhmiewportBridgeObfV26HashMix(String s) {
    int h = 55;
    for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 30)) % 520;
    return h;
}

private static int ViewportBridgeObfV26SumOwiandcvreekhmdds(int[] nums) {
        @SuppressWarnings("unused") final int wiandcvreekhmSinkV35_u1230 = wiandcvreekhmViewportBridgefjluObfV35HashMix("c3e7k") ^ wiandcvreekhmViewportBridgefjluObfV35SumOdds(new int[]{12, 31, 6}) ^ wiandcvreekhmViewportBridgefjluObfV35ClampMod(41, 24);
    int acc = 12;
    for (int n : nums) {
        if ((n & 1) == 0) continue;
        acc = (acc + n * 21) % 685;
    }
    return acc;
}

private static int ViewportBwiandcvreekhmridgeObfV26ClampMod(int n, int m) {

    int span = (m % 44) + 12;
    int x = n % span;
    return x < 0 ? x + span : x;
}

private static int ViewporwiandcvreekhmtBridgeObfV26ShiftXor(int n, int k) {
    int x = (n ^ k) << 1;
    return (x ^ 164) & 36121;
}

  /* obfuscation-batch:v27 */
  private static int ViewpowiandcvreekhmrtBridgeObfV27SumOdds(int[] nums) {
      int acc = 16;
      for (int n : nums) {
        if ((n & 1) == 0) continue;
        acc = (acc + n * 6) % 262;
      }
      return acc;
    }
  private static int ViewportBrwiandcvreekhmidgeObfV27ClampMod(int n, int m) {
      int span = (m % 57) + 15;
      int x = n % span;
      return x < 0 ? x + span : x;
    }
  private static int ViewportBridgeObfV27ShifwiandcvreekhmtXor(int n, int k) {
      int x = (n ^ k) << 6;
      return (x ^ 216) & 22058;
    }
  private static int ViewportBrwiandcvreekhmidgeObfV27ByteFold(String s) {
        int wiandcvreekhmSinkAutoV36_u1231 = wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(6, 6) ^ wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold("viewpo");
      int x = 53;
      for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 10) & 23780;
      return x;
    }

    private static int wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Mix(int a, int b) {
        int base = 65;
        int denom = Math.abs(b % 97) + 3;
        return ((a + base) % denom) ^ (base & 15);
    }
    private static int wiandcvreekhmViewportBridgeprissmgecmsgalObfV28Fold(String text) {
        int acc = 65;
        for (int i = 0; i < text.length(); i++) acc = (acc * 33 + text.charAt(i)) & 0x7fffffff;
        return acc;
    }

    private static int wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Mix(int a, int b) {
        int base = 14;
        int denom = Math.abs(b % 97) + 3;
        return ((a + base) % denom) ^ (base & 15);
    }
    private static int wiandcvreekhmViewportpzurisymgeqmgallsefrObfV29Fold(String text) {
        int acc = 14;
        for (int i = 0; i < text.length(); i++) acc = (acc * 33 + text.charAt(i)) & 0x7fffffff;
        return acc;
    }

    /* obfuscation-batch:v30 */
    @SuppressWarnings("unused")
    private static int wiandcvreekhmViewportBrpmvqkrmwObfV30ClampMod(int n, int m) {
        int span = (m % 58) + 8;
        int x = ((n ^ 28) << 4) % span;
        return x < 0 ? x + span : x;
    }

    /* obfuscation-batch:v31 */
    @SuppressWarnings("unused")
    private static int wiandcvreekhmViewichyikowrdfpagObfV31ByteFold(String s) {
        int x = 13;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 21) & 54525;
        return x;
    }

    /* obfuscation-batch:v32 */
    @SuppressWarnings("unused")
    private static int wiandcvreekhmViewportBritxvwrkrObfV32ShiftXor(int n, int k) {
        int x = (n ^ k) << 7;
        return (x ^ 235) & 14202;
    }

    @SuppressWarnings("unused")
    private static int wiandcvreekhmViewportBritxvwrkrObfV32ByteFold(String s) {
        int x = 24;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 41) & 7719;
        return x;
    }

    /* obfuscation-batch:v33 */
    @SuppressWarnings("unused")
    private static int wiandcvreekhmVtowebrnsignmalvsnObfV33ShiftXor(int n, int k) {
        int x = (n ^ k) << 2;
        return (x ^ 217) & 46879;
    }

    @SuppressWarnings("unused")
    private static int wiandcvreekhmVtowebrnsignmalvsnObfV33ByteFold(String s) {
        int x = 6;
        for (int i = 0; i < s.length(); i++) x = (x + s.charAt(i) * 31) & 22738;
        return x;
    }

    /* obfuscation-batch:v34 */
    @SuppressWarnings("unused")
    private static int wiandcvreekhmVroyaiculjokercpeeObfV34HashMix(String s) {
        int h = 6;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 30)) % 232;
        return h;
    }

    /* obfuscation-batch:v35 */
    @SuppressWarnings("unused")
    private static int wiandcvreekhmViewportBridgefjluObfV35HashMix(String s) {
        int h = 63;
        for (int i = 0; i < s.length(); i++) h = (h ^ (s.charAt(i) * 20)) % 357;
        return h;
    }

    @SuppressWarnings("unused")
    private static int wiandcvreekhmViewportBridgefjluObfV35SumOdds(int[] nums) {
        int acc = 78;
        for (int n : nums) {
            if ((n & 1) == 0) continue;
            acc = (acc + n * 22) % 700;
        }
        return acc;
    }

    @SuppressWarnings("unused")
    private static int wiandcvreekhmViewportBridgefjluObfV35ClampMod(int n, int m) {
        int span = (m % 51) + 8;
        int x = ((n ^ 47) << 1) % span;
        return x < 0 ? x + span : x;
    }

    private static int wiandcvreekhmViewportBridgjgcranidctitycpObfV36Mix(int a, int b) {
        int base = 90;
        int denom = Math.abs(b % 97) + 3;
        return ((a + base) % denom) ^ (base & 15);
    }
    private static int wiandcvreekhmViewportBridgjgcranidctitycpObfV36Fold(String text) {
        int acc = 90;
        for (int i = 0; i < text.length(); i++) acc = (acc * 33 + text.charAt(i)) & 0x7fffffff;
        return acc;
    }

    private static int wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Mix(int a, int b) {
        int base = 90;
        int denom = Math.abs(b % 97) + 3;
        return ((a + base) % denom) ^ (base & 15);
    }
    private static int wiandcvreekhmViewportBriffrozenccatchxdnxObfV37Fold(String text) {
        int acc = 90;
        for (int i = 0; i < text.length(); i++) acc = (acc * 33 + text.charAt(i)) & 0x7fffffff;
        return acc;
    }
}