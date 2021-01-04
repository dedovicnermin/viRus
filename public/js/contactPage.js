$(document).ready( () => {
    $(document).on('change' ,() => {
        var state = $("#state").val();
        if (state == '---') {
            $("#stateLink").hide();
            return;
        }
        $.get(`/healthlink/${state}`, (data, textStatus, jqXHR) => {
            if (!data) {
                return false;
            }
            $("#stateLink").attr("href", data);
            $("#stateLink").text(state + " Health Department Website");
            $("#stateLink").show();

        });
        
    });

    
});