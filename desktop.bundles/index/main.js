/**
 * Created by julia on 19.07.2016.
 */
function equation() {
    var a=1;
    var b=1;
    var c=-6;
    
    var discriminant  = b*b - 4*a*c;

    if (discriminant < 0){
        return "не имеет корней";
    } else if (discriminant > 0){
        var x1, x2;
        x1 = (-b +  Math.sqrt(discriminant))/(a*2);
        x2 = (-b -  Math.sqrt(discriminant))/(a*2);
        return "два корня:" + x1 + "," + x2;
    } else if (discriminant == 0){
        var x = -b/(a*2);
        return "один корень:" + x;
    }
}

$(function() {
    $(".js-message").each(function () {
        var $element = $(this);
        var $popup = $("." + $element.data("content"));
        this.popup = $popup;

        $popup.find(".js-close").click(function(event) {
            $popup.hide();
            event.stopPropagation();
        });

        // show element
        $element.click(function() {
            var el = this;
            if(!el.popup.is(':visible')) {
                el.popup.show();
            }
        });
    });
});
