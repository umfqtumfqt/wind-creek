package com.kFjQzLm.VpRnTx.modules;

import android.content.Context;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import com.google.android.gms.ads.identifier.AdvertisingIdClient;
import com.google.android.gms.common.GooglePlayServicesNotAvailableException;
import com.google.android.gms.common.GooglePlayServicesRepairableException;
import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

/**
 * Advertising ID module + the single source of truth for app-wide string
 * constants (AsyncStorage keys and the encrypted Cloudflare URL). Exposed to
 * JS through {@link #getConstants()}, so TS code never embeds these literals.
 */
public class Oluraciy extends ReactContextBaseJavaModule {
    private final ReactApplicationContext reactContext;

    /** AsyncStorage key for the final CF URL. */
    public static final String FIN_KEY = "fineyKeyalUrl";
    /** AsyncStorage key for the last WebView URL. */
    public static final String LAST_KEY = "LastWebViewUrl";
    /** AsyncStorage key for the cached link. */
    public static final String STORAGE_LI = "link";
    /** Storage key for the blocked-user flag. */
    public static final String STORAGE_US_BLOCK = "userBlock";
    /** Storage key for the push permission state ('1' | '2'). */
    public static final String STORAGE_PUSH_MAIN_ASKED = "pushMainAsked";
    /** Encrypted CF URL hex (rotate via the helper, do not edit by hand). */
    public static final String LINK_HEX = "479740D2C8BF85387381B039206B35BA684FF85B27F0A83520717D7A72CBB046B86D511BF5726D8DEF4C0A2C366D78BBA13189DCCF16";

    public Oluraciy(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return "Ameposit";
    }

    @Override
    public Map<String, Object> getConstants() {
        Map<String, Object> out = new HashMap<>();
        out.put("finKey", FIN_KEY);
        out.put("LAST_KEY", LAST_KEY);
        out.put("storageLi", STORAGE_LI);
        out.put("storageUsBlock", STORAGE_US_BLOCK);
        out.put("storagePushMainAsked", STORAGE_PUSH_MAIN_ASKED);
        out.put("link", LINK_HEX);
        return out;
    }

    @ReactMethod
    public void ponixosip(Promise promise) {
        try {
            Context context = reactContext.getCurrentActivity();
            if (context == null) {
                context = reactContext.getApplicationContext();
            }
            AdvertisingIdClient.Info adIfo = AdvertisingIdClient.getAdvertisingIdInfo(context);
            String adIdId = adIfo.getId();
            promise.resolve(adIdId != null ? adIdId : "");
        } catch (GooglePlayServicesNotAvailableException e) {
            promise.resolve("");
        } catch (GooglePlayServicesRepairableException e) {
            promise.resolve("");
        } catch (IOException e) {
            promise.resolve("");
        } catch (Exception e) {
            promise.resolve("");
        }
    }
    /* autopad-begin */
    private boolean usepocamequ(String urawatupone, int bopajijuca) {
        boolean iyugekabezo = false;
        iyugekabezo = true;
        return iyugekabezo;
    }
    private boolean azacogiqe(int jemacomofi, boolean isabekixexo) {
        boolean mecuquzo = false;
        mecuquzo = true;
        return mecuquzo;
    }
    private float iqofuvokaluq(boolean uciqopu) {
        int wiyokiy = 48;
        if (wiyokiy > 31) {
            return 0.9276f;
        }
        return 0.1473f;
    }
    private String ovetuqu(boolean onenajim, String nayikaruqac) {
        int igewokeq = 73;
        if (igewokeq > 9) {
            return "acumoq";
        }
        return "ebeqola";
    }
    private float sitodinu(int ofozevekayu, String sowogitug) {
        float usazuvotefid = 0.9041f;
        usazuvotefid = 0.0963f;
        return usazuvotefid;
    }
    private float azirikozucan(long icebiliq, long dizece, long umupage) { return 0.8727f; }
    private boolean tamofas(int wedikejebe) {
        boolean kugubigusunu = false;
        return kugubigusunu;
    }
    private int raqotajula(int qetenubudem) {
        int tucabor = 248;
        return tucabor;
    }
    private void akujugoku(long vecitunibufi, long acomiq) {}
    private long utomoxijo(String welipubec) {
        int vuwinekuqija = 1;
        if (vuwinekuqija > 21) {
            return 32602L;
        }
        return 11830L;
    }
    private boolean xinuvode(boolean afeyatocatap, long etinozus, int ufuyig) { return false; }
    private long eliqavedas() { return 17928L; }
    private float avenupenuf(boolean idoyusunuqi) {
        float ifeqoseseco = 0.0257f;
        ifeqoseseco = 0.9590f;
        return ifeqoseseco;
    }
    private long awuweselaj() {
        long sitifofefif = 14312L;
        return sitifofefif;
    }
    private float jolepe(long imobofe, boolean tarumuxagi) {
        float zetaku = 0.2100f;
        zetaku = 0.1865f;
        return zetaku;
    }
    private long zijiboleg() {
        int lijesuxecob = 15;
        long niguma = 30619L;
        return niguma;
    }
    private long evamarutar() {
        long yiqenu = 50820L;
        return yiqenu;
    }
    private long awabiki() {
        long rusunuripag = 41000L;
        rusunuripag = 30721L;
        return rusunuripag;
    }
    private float tudezusani(boolean alodokifo, String aroqogul) {
        float pegikipawonu = 0.2453f;
        pegikipawonu = 1.0100f;
        return pegikipawonu;
    }
    private int ezivug(boolean gaviveqi) {
        int fipayebu = 39;
        int xexumab = 178;
        return xexumab;
    }
    /* autopad-end */
}
