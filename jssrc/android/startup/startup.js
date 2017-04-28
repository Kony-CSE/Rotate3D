//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "Sample",
    appName: "Sample",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.10.12.125",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: true,
    middlewareContext: "Sample",
    isMFApp: false,
    eventTypes: [],
    url: "http://southwestbuild.kithyd.com:8080/Sample/MWServlet",
    secureurl: "http://southwestbuild.kithyd.com:8080/Sample/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    Form0231cd7611d6249Globals();
    HomeGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 7000
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            Form0231cd7611d6249.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();
// If you wish to debug Application Initialization events, now is the time to
// place breakpoints.
debugger;