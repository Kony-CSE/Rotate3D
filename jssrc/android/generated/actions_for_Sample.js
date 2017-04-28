//actions.js file 
function AS_Button_f724de63746649b19028f6b807af2f3d(eventobject) {
    function ROTATE_ACTION_3D____5717f9b8082043d6a3e74c72dfb795bf_Callback() {}
    var trans100 = kony.ui.makeAffineTransform();
    trans100.rotate3D(90, 1, 0, 0);
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
        "iterationCount": "1",
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.5,
        "direction": kony.anim.DIRECTION_NONE
    }, {
        "animationEnd": ROTATE_ACTION_3D____5717f9b8082043d6a3e74c72dfb795bf_Callback
    });
}

function AS_Form_54d79bdcb0ce421789ee147444465bd6(eventobject) {
    return getWatchPosition.call(this);
}