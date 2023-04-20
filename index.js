var $virtualKeyboard = $('.virtual-keyboard'),
    $key = $virtualKeyboard.find("input"),
    $key_delete = $('.delete'),
    $key_shift = $('.shift'),
    $outputField = $('.output input'),
    $currentValue = $outputField.val(),
    actionKeys = $(".delete,.shift")
    activeShiftClass = "shift-activated"

// Keystrokes
function handleKeystrokes(keyCase){
    $key.not(actionKeys).on('click', function(e){
        e.preventDefault();

        // Shift handler
        if($key_shift.hasClass(activeShiftClass)){
            keyCase = 'upper';
        }
        else{
            keyCase = 'lower';
        }

        // Changing font types
        if(keyCase == 'upper'){
            var keyValue = $(this).val().toUpperCase();
        }
        else{
            var keyValue = $(this).val().toLowerCase();
        }

        // Output
        var output = $('.output input').val();
        $outputField.val(output + keyValue);
        getCurrentVal();
        focusOutputField();
    });
}

// Delete
$key_delete.on('click', function(e){
    e.preventDefault();
    $outputField.val($currentValue.substr(0, $currentValue.length - 1));
    getCurrentVal();
    focusOutputField();
});

// Shift
$key_shift.on('click', function(e){
    e.preventDefault();
    $(this).toggleClass(activeShiftClass);
});

function getCurrentVal(){
    $currentValue = $outputField.val();
}

function focusOutputField(){
    $outputField.focus();
}

handleKeystrokes("lower");