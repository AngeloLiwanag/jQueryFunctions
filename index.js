$('#click').click(function(){
    $('#p_click').click('p');
});

$('#hide').click(function(){
    $('#p_hide').hide('p');
});

$('#p_show').hide();
$('#show').click(function(){
    $('#p_show').show('p');
});

$('#toggle').click(function(){
    $('#p_toggle').toggle('p');
})

$('#p_slide_down').hide('p');
$('#slide_down').click(function(){
    if($('#p_slide_down').is( ":hidden")){
        $('#p_slide_down').slideDown("slow");
    }else{ 
        $('#p_slide_down').hide();
    }
});

$('#p_slide_up').show('p');
$('#slide_up').click(function(){
    if($('#p_slide_up').is( ":hidden")){
        $('#p_slide_up').show("slow");
    }else{ 
        $('#p_slide_up').slideUp();
    }
});

$('#slide_toggle').click(function(){
   $('#p_slide_toggle').slideToggle('slow', function(){});
});

$('#fade_out').click(function(){
    $('#p_fade_out').fadeOut('slow');
});

$('#add_class').click(function(){
    $('#p_add_class').addClass("YESSIR");
});

$('#before').click(function(){
    $('#p_before').before("<p>Angelo</p>");
});

$('#after').click(function(){
    $('#p_after').after("<p>Angelo</p>");
});

$('#append').click(function(){
    $('#p_append').append("<p>Angelo</p>");
});

$('#html').click(function(){
    $('#p_html').html("<p>hello this is new html</p>");
});

$('#attr').click(function(){
    console.log($('#p_attr').attr());
});

$('#val').click(function(){
    $('#p_val').val('text');
});

$('#text').click(function(){
    $('#p_text').text('This is new text');
});


