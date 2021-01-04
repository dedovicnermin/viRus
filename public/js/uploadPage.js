$(document).ready( () => {
    $('body').on('click', '#btnSubmit', function(event) {
        event.preventDefault();
        if (!$("#uploadfile").val() || !$("#fileDesc").val()) {
            alert("Please enter a file or information about the file.")
            return false;
        }
        var form = $('#fileUploadForm')[0];
        var data = new FormData(form);
        console.log(form);
        console.log(Object.entries(form));
        // var data = new FormData(form);
        
        $('#uploadfile').val("");
        $('#fileDesc').val("");
        // let data = {uploadfile: f, desc: d};

        console.log(data);
        
        

        
       
        $.ajax({
            type: "POST",
            enctype: 'multipart/form-data',
            url: "/uploads",
            data: data,
            async: false,
            processData: false, 
            contentType: false,
            cache: false,
            success: (data) => {
                console.log(data);
                const c = "uploadPage__container--row";
                const h = "http://localhost:3000/api/files/download/";
                const full = h + data.file_name;
                $('#listfiles').prepend('<div class=' + c + '><div class="fileDescription"><p>' + data.desc + '</p></div><a href=' + full + '>' + data.file_name + '</a></div>');
                $("#addFile").removeClass("active");
                $("#overlay").removeClass("active");
            },
            error: (e) => {
                console.log(e);
                console.log(e.responseText);
                
            }
        });
    });
} )