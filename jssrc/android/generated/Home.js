function addWidgetsHome() {
    Home.setDefaultUnit(kony.flex.DP);
    var FlexContainer04abb180e74d140 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "200dp",
        "id": "FlexContainer04abb180e74d140",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "13dp",
        "skin": "slFbox",
        "top": "126dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer04abb180e74d140.setDefaultUnit(kony.flex.DP);
    var FlexContainer0230f648c81084e = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "50dp",
        "id": "FlexContainer0230f648c81084e",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer0230f648c81084e.setDefaultUnit(kony.flex.DP);
    var Label0dc44352e40bb4b = new kony.ui.Label({
        "centerY": "50%",
        "id": "Label0dc44352e40bb4b",
        "isVisible": true,
        "left": "10dp",
        "skin": "CopyslLabel07f2851e5d3684a",
        "text": "  Latitude :  ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblLat = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblLat",
        "isVisible": true,
        "left": "10dp",
        "skin": "CopyslLabel07f2851e5d3684a",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    FlexContainer0230f648c81084e.add(Label0dc44352e40bb4b, lblLat);
    var CopyFlexContainer00231c1cc1fb24c = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "50dp",
        "id": "CopyFlexContainer00231c1cc1fb24c",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer00231c1cc1fb24c.setDefaultUnit(kony.flex.DP);
    var CopyLabel0b32a047dc00643 = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel0b32a047dc00643",
        "isVisible": true,
        "left": "10dp",
        "skin": "CopyslLabel07f2851e5d3684a",
        "text": "  Longitude :  ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblLong = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblLong",
        "isVisible": true,
        "left": "10dp",
        "skin": "CopyslLabel07f2851e5d3684a",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer00231c1cc1fb24c.add(CopyLabel0b32a047dc00643, lblLong);
    var CopyFlexContainer045d4a07243884f = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "50dp",
        "id": "CopyFlexContainer045d4a07243884f",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer045d4a07243884f.setDefaultUnit(kony.flex.DP);
    var CopyLabel0f53c6405557749 = new kony.ui.Label({
        "centerY": "50%",
        "id": "CopyLabel0f53c6405557749",
        "isVisible": true,
        "left": "10dp",
        "skin": "CopyslLabel07f2851e5d3684a",
        "text": "  WatchId :  ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var lblWatchId = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblWatchId",
        "isVisible": true,
        "left": "10dp",
        "skin": "CopyslLabel07f2851e5d3684a",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer045d4a07243884f.add(CopyLabel0f53c6405557749, lblWatchId);
    var CopyFlexContainer04140b30e3bff4b = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "50dp",
        "id": "CopyFlexContainer04140b30e3bff4b",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "skin": "slFbox",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer04140b30e3bff4b.setDefaultUnit(kony.flex.DP);
    var networkType = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "id": "networkType",
        "isVisible": true,
        "left": "10dp",
        "skin": "CopyslLabel07f2851e5d3684a",
        "text": "Connected to ",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE,
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    CopyFlexContainer04140b30e3bff4b.add(networkType);
    FlexContainer04abb180e74d140.add(FlexContainer0230f648c81084e, CopyFlexContainer00231c1cc1fb24c, CopyFlexContainer045d4a07243884f, CopyFlexContainer04140b30e3bff4b);
    Home.add(FlexContainer04abb180e74d140);
};

function HomeGlobals() {
    Home = new kony.ui.Form2({
        "addWidgets": addWidgetsHome,
        "enabledForIdleTimeout": false,
        "id": "Home",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": false,
        "postShow": AS_Form_54d79bdcb0ce421789ee147444465bd6,
        "skin": "CopyslForm08377f2c062b547"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_PAN
    });
    Home.info = {
        "kuid": "98e1ac3165ee4f9bbcde39ca3c35a6f3"
    };
};