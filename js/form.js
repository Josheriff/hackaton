$(document).ready(function() {
    var max_fields      = 69; //maximum input boxes allowed
    var wrapper         = $(".input_fields_wrap"); //Fields wrapper
    var add_button      = $(".add_field_button"); //Add button ID
   
    var x = 1; //initlal text box count
    $(add_button).click(function(e){ //on add input button click
        e.preventDefault();
        if(x < max_fields){ //max input box allowed
            x++; //text box increment
            $(wrapper).append('<div> Texto: <input type="text" class="input-text" /> Data Containing: <select class="input-data"> <option>user_name</option> <option>user_address</option> <option></option> <option></option> </select> Type: <select class="input-type"> <option>text</option> <option>check</option> <option>textarea</option></select> </div> '); //add input box
        }
    });
       
    var valuetext=[];
    var valuetextsup=[];
    var valuedata=[];
    var valuedatasup=[];
    var valuetype=[];
    var valuetypesup=[];
    var arrayfields=[];

     $("#submit").click(function(){
                 
         valuetext = $(".input-text");
         valuedata = $(".input-data");
         valuetype = $(".input-type");


         for(var i=0;i<valuetext.length;i++){ //valuetext.length must be==valuedata.lenght ==valuetype.lenght
         	
         	valuetextsup.push(valuetext[i].value);
         	valuedatasup.push(valuedata[i].value);
         	valuetypesup.push(valuetype[i].value);
         	arrayfields[i]={ text:valuetextsup[i],
         		             field:valuedatasup[i],
         		             type:valuetypesup[i]
            };             
         }
         
        
        
        
        //añadir valuetext, para input-data, input type

        
        var correspondencies = {
        	text: $('#areaquestion').val(),
        	arrayfields
        };
      
 $.post('http://192.168.39.162:3456/screen', correspondencies, function() {
     alert('Los datos han sido enviados'); 

     });  
});
                
});