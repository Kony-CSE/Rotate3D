function addWidgetsForm0231cd7611d6249() {
    Form0231cd7611d6249.setDefaultUnit(kony.flex.DP);
    var FlexContainer01edf449c8f6b4c = new kony.ui.FlexContainer({
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "220dp",
        "id": "FlexContainer01edf449c8f6b4c",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "13dp",
        "skin": "CopyslFbox07d2fbe26e8244c",
        "top": "123dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    FlexContainer01edf449c8f6b4c.setDefaultUnit(kony.flex.DP);
    var FlexContainer032f96129ab7d41 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "110dp",
        "id": "FlexContainer032f96129ab7d41",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0f1794adb2b0247",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    FlexContainer032f96129ab7d41.setDefaultUnit(kony.flex.DP);
    FlexContainer032f96129ab7d41.add();
    var CopyFlexContainer0e90176081a3544 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "110dp",
        "id": "CopyFlexContainer0e90176081a3544",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0a345b1f08fd646",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0e90176081a3544.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer0e90176081a3544.add();
    FlexContainer01edf449c8f6b4c.add(FlexContainer032f96129ab7d41, CopyFlexContainer0e90176081a3544);
    var CopyFlexContainer0e1e6f7338e8543 = new kony.ui.FlexContainer({
        "centerX": "50%",
        "centerY": "50%",
        "clipBounds": true,
        "height": "220dp",
        "id": "CopyFlexContainer0e1e6f7338e8543",
        "isVisible": true,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "left": "13dp",
        "skin": "CopyslFbox07d2fbe26e8244c",
        "top": "123dp",
        "width": "80%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer0e1e6f7338e8543.setDefaultUnit(kony.flex.DP);
    var CopyFlexContainer07f91d974bfa84d = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "110dp",
        "id": "CopyFlexContainer07f91d974bfa84d",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0c3ff72bc72094a",
        "top": "0dp",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer07f91d974bfa84d.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer07f91d974bfa84d.add();
    var CopyFlexContainer03f3745d7f2df41 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "110dp",
        "id": "CopyFlexContainer03f3745d7f2df41",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "skin": "CopyslFbox0a345b1f08fd646",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    CopyFlexContainer03f3745d7f2df41.setDefaultUnit(kony.flex.DP);
    CopyFlexContainer03f3745d7f2df41.add();
    CopyFlexContainer0e1e6f7338e8543.add(CopyFlexContainer07f91d974bfa84d, CopyFlexContainer03f3745d7f2df41);
    var Button09c58b4eb8ddb43 = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "50dp",
        "id": "Button09c58b4eb8ddb43",
        "isVisible": true,
        "left": "52dp",
        "onClick": AS_Button_f724de63746649b19028f6b807af2f3d,
        "skin": "slButtonGlossBlue",
        "text": "Button",
        "top": "455dp",
        "width": "260dp",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    Form0231cd7611d6249.add(FlexContainer01edf449c8f6b4c, CopyFlexContainer0e1e6f7338e8543, Button09c58b4eb8ddb43);
};

function Form0231cd7611d6249Globals() {
    Form0231cd7611d6249 = new kony.ui.Form2({
        "addWidgets": addWidgetsForm0231cd7611d6249,
        "enabledForIdleTimeout": false,
        "id": "Form0231cd7611d6249",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
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
    Form0231cd7611d6249.info = {
        "kuid": "13729ff767ff4c78a6a0ddc5aff71a56"
    };
};