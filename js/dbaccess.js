function sendDataTo(reciever,data, func_responceHandle){
    var url = reciever;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", url);
    
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    if (Isset(func_responceHandle)|| func_responceHandle === false){
        xhr.onreadystatechange = func_responceHandle;

    }

    xhr.send(data);

    return true;
}
function Isset(x){
return (typeof x !== "undefined") 
}

function redirectToChecked(e,s, func_responceHandle){
    var url = "./checked.php/";
    var data = JSON.stringify({
        Entry:e,
        State:s
    });
    return sendDataTo(url,data, func_responceHandle);
}

function redirectToCreateToDo(text, category, func_responceHandle){
    var url = "./create.php/";
    var data = JSON.stringify({
        Text:text,
        Category:category
    });
    return sendDataTo(url,data, func_responceHandle);
}

function redirectToCreateSubEntry(text, todo, subentry, func_responceHandle){
    var url = "./create_subentry.php/";
    var data = JSON.stringify({
        ToDo:todo,
        Text:text,
        SubEntry:subentry
    });
    return sendDataTo(url,data, func_responceHandle);
}

function redirectToCreateEntry(text, todo, func_responceHandle){
    var url = "./create_entry.php/";
    var data = JSON.stringify({
        ToDo:todo,
        Text:text
    });
    return sendDataTo(url,data, func_responceHandle);
}

function redirectToUpdateEntry(text, entry, func_responceHandle){
    var url = "./update_entry.php/";
    var data = JSON.stringify({
        Text:text,
        Id:entry
    });
    return sendDataTo(url,data);
}

function redirectToDeleteToDo(todo, func_responceHandle){
    var url = "./delete_todo.php/";
    var data = JSON.stringify({
        ToDo:todo
    });
    return sendDataTo(url,data);
}

function redirectToDeleteEntry(entry, func_responceHandle){
    var url = "./delete_entry.php/";
    var data = JSON.stringify({
        Entry:entry
    });
    return sendDataTo(url,data);
}

function reloadPage(){
    window.location.reload(false);
}

function moveToPage(dir){
    window.location.href = dir;
}
