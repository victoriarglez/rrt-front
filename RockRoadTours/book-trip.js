function ColumnOne(_id) {
    let label = $("<label></label>");
    let input = $("<input>");
    let container = $("<div></div>");

    label.prop("for","passengersName" + _id);
    label.addClass("form-label");
    label.html("Nombre Completo");

    input.prop("type","text");
    input.prop("id","passengersName" + _id);
    input.prop("placeholder","Fulano Hernández");
    input.addClass("form-control");

    container.addClass("col-4");
    container.append(label);
    container.append(input);
    
    return container;
}

function ColumnTwo(_id) {
    let label = $("<label></label>");
    let input = $("<input>");
    let container = $("<div></div>");

    label.prop("for","passengersPhone" + _id);
    label.addClass("form-label");
    label.html("Número telefónico");

    input.prop("type","tel");
    input.prop("id","passengersPhone" + _id);
    input.prop("placeholder","555555555");
    input.addClass("form-control");

    container.addClass("col-4");
    container.append(label);
    container.append(input);
    
    return container;
}

function ColumnThree(_id) {
    let label = $("<label></label>");
    let input = $("<input>");
    let legend = $("<div></div>");
    let container = $("<div></div>");

    label.prop("for","passengersEmergency" + _id);
    label.addClass("form-label");
    label.html("Contacto de Emergencia");

    input.prop("type","text");
    input.prop("id","passengersEmergency" + _id);
    input.prop("placeholder","Fulano 555 5555 5555");
    input.addClass("form-control");

    legend.addClass("form-text");
    legend.html("Nombre y número telefónico.");

    container.addClass("col-4");
    container.append(label);
    container.append(input);
    container.append(legend);
    
    return container;
}

$(document).ready(function() {
    let holder = $("#passengersdata");
    let number = $("#passengersNumber").val();

    holder.html("");

    for(let i = 0; i < number; i++) {
        console.log(i);
        let container = $("<div></div>");
        
        container.addClass("row");
        container.addClass("border");
        container.addClass("border-1");
        container.addClass("rounded");
        container.addClass("my-2");
        container.addClass("p-2");
        
        container.append(ColumnOne(i));
        container.append(ColumnTwo(i));
        container.append(ColumnThree(i));

        holder.append(container);
    }
});

$("#passengersNumber").keyup(function() {
    let holder = $("#passengersdata");
    let number = $(this).val();

    holder.html("");

    for(let i = 0; i < number; i++) {
        console.log(i);
        let container = $("<div></div>");
        
        container.addClass("row");
        container.addClass("border");
        container.addClass("border-1");
        container.addClass("rounded");
        container.addClass("my-2");
        container.addClass("p-2");
        
        container.append(ColumnOne(i));
        container.append(ColumnTwo(i));
        container.append(ColumnThree(i));

        holder.append(container);
    }
});