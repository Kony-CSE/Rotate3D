function AS_Button_dbae2947ba564df49f69bae0d6111682(eventobject) {
    function ___ide_onClick_d9951152d59f41b286dcedce5c672a40_Callback() {}
    //#ifdef winphone8
    //Rotate 3D not supported for windows devices
    //#else
    var trans100 = kony.ui.makeAffineTransform();
    trans100.rotate3D(90, 1, 0, 0);
    trans100.setPerspective(375)
    Form0231cd7611d6249.CopyFlexContainer0e1e6f7338e8543.animate(kony.ui.createAnimation({
        "100": {
            "anchorPoint": {
                "x": 0.5,
                "y": 0.5
            },
            "stepConfig": {
                "timingFunction": kony.anim.EASE
            },
            "transform": trans100
        }
    }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.5
    }, {
        "animationEnd": ___ide_onClick_d9951152d59f41b286dcedce5c672a40_Callback
    });
    //#endif
}