window.onload = function() {
    (function(d) {
        var ce = function(e,n) {
            var a = document.createEvent("CustomEvent");
            a.initCustomEvent(n, true, true, e.target);
            e.target.dispatchEvent(a);
            a = null;
            return false;
        },
        sp = {x:0, y:0},
        ep = {x:0, y:0},
        touch;
        
        touch = {
            touchstart: function(e) {
                sp = {
                    x: e.touches[0].pageX, 
                    y: e.touches[0].pageY
                };
            },
            touchmove: function(e) {
                ep = {
                    x: e.touches[0].pageX,
                    y: e.touches[0].pageY
                };
                if (Math.abs(ep.x - sp.x) > 10 && Math.abs(ep.y - sp.y) < 20) {
                    e.preventDefault();
                }
            },
            touchend: function(e) {
                var x = ep.x-sp.x,
                    xr = Math.abs(x),
                    y = ep.y-sp.y,
                    yr = Math.abs(y);
                if (Math.max(xr,yr) > 20) {
                    ce(e, (xr > yr ? (x < 0?'swl' : 'swr') : (y < 0 ? 'swu' : 'swd')));
                }
            }
        }
        
        for(var a in touch) {
            document.addEventListener(a, touch[a], false);
        }
    })(document);
};